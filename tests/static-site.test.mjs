import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const html = readFileSync(join(root, "index.html"), "utf8");
const script = readFileSync(join(root, "script.js"), "utf8");

function attributeValue(tag, attribute) {
  const pattern = new RegExp(`\\s${attribute}\\s*=\\s*["']([^"']+)["']`, "i");
  return tag.match(pattern)?.[1];
}

function localPathReference(value) {
  const path = value.split(/[?#]/)[0];

  if (!path) {
    return null;
  }

  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith("//")) {
    return null;
  }

  return path;
}

function localTagReferences(source, tagName, attribute) {
  const tagPattern = new RegExp(`<${tagName}\\b[^>]*>`, "gi");

  return [...source.matchAll(tagPattern)]
    .map((match) => attributeValue(match[0], attribute))
    .map((value) => value && localPathReference(value))
    .filter(Boolean);
}

function hasTagAttribute(source, tagName, attribute, expectedValue) {
  const tagPattern = new RegExp(`<${tagName}\\b[^>]*>`, "gi");

  return [...source.matchAll(tagPattern)]
    .some((match) => attributeValue(match[0], attribute) === expectedValue);
}

function hasRel(tag, expectedRel) {
  return attributeValue(tag, "rel")
    ?.split(/\s+/)
    .some((rel) => rel.toLowerCase() === expectedRel);
}

function localStylesheetReferences(source) {
  const linkPattern = /<link\b[^>]*>/gi;

  return [...source.matchAll(linkPattern)]
    .map((match) => match[0])
    .filter((tag) => hasRel(tag, "stylesheet"))
    .map((tag) => attributeValue(tag, "href"))
    .map((value) => value && localPathReference(value))
    .filter(Boolean);
}

test("portfolio exposes the approved Quality Engineering sections", () => {
  for (const id of ["home", "about", "automation", "ecosystem", "projects", "experience", "contact"]) {
    assert.ok(hasTagAttribute(html, "section", "id", id), `missing section #${id}`);
  }
});

test("portfolio no longer leads with junior front-end positioning", () => {
  const forbidden = [
    /desenvolvedor Frontend em início de carreira/i,
    /front-end beginner/i,
    /landing pages e sites de vendas/i,
    /web designer/i
  ];

  for (const pattern of forbidden) {
    assert.ok(!pattern.test(html), `old positioning still present in index.html: ${pattern}`);
    assert.ok(!pattern.test(script), `old positioning still present in script.js: ${pattern}`);
  }
});

test("published CV assets are referenced by the site script", () => {
  for (const expectedPath of [
    "src/cv/DEV_Rapha_CV_PT.pdf",
    "src/cv/DEV_Rapha_CV_EN.pdf",
    "src/cv/DEV_Rapha_CV_PT.html",
    "src/cv/DEV_Rapha_CV_EN.html"
  ]) {
    assert.ok(script.includes(expectedPath), `missing CV reference: ${expectedPath}`);
  }
});

test("all local image and stylesheet references in index.html exist", () => {
  const refs = [
    ...localTagReferences(html, "img", "src"),
    ...localStylesheetReferences(html)
  ];

  for (const ref of refs) {
    const localPath = normalize(join(root, decodeURIComponent(ref)));
    assert.ok(existsSync(localPath), `missing local asset: ${ref}`);
  }
});

test("published CV PDF files exist and are valid PDFs", () => {
  for (const file of [
    "src/cv/DEV_Rapha_CV_PT.pdf",
    "src/cv/DEV_Rapha_CV_EN.pdf"
  ]) {
    const pdfPath = join(root, file);
    assert.ok(existsSync(pdfPath), `missing ${file}`);

    const bytes = readFileSync(pdfPath);
    assert.equal(
      bytes.subarray(0, 5).toString("latin1"),
      "%PDF-",
      `${file} is not a valid PDF`
    );
    assert.ok(bytes.length > 10 * 1024, `${file} looks too small to be a real CV`);
  }
});
