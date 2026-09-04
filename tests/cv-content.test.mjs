import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const ptPath = join(root, "src", "cv", "DEV_Rapha_CV_PT.html");
const enPath = join(root, "src", "cv", "DEV_Rapha_CV_EN.html");

function read(path) {
  return readFileSync(path, "utf8");
}

function htmlText(source) {
  const withoutTags = source.replace(/<[^>]+>/g, " ");
  return withoutTags
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&aacute;/g, "á")
    .replace(/&Aacute;/g, "Á")
    .replace(/&atilde;/g, "ã")
    .replace(/&Atilde;/g, "Ã")
    .replace(/&ccedil;/g, "ç")
    .replace(/&Ccedil;/g, "Ç")
    .replace(/&ecirc;/g, "ê")
    .replace(/&Ecirc;/g, "Ê")
    .replace(/&eacute;/g, "é")
    .replace(/&Eacute;/g, "É")
    .replace(/&iacute;/g, "í")
    .replace(/&Iacute;/g, "Í")
    .replace(/&oacute;/g, "ó")
    .replace(/&Oacute;/g, "Ó")
    .replace(/&otilde;/g, "õ")
    .replace(/&Otilde;/g, "Õ")
    .replace(/&uacute;/g, "ú")
    .replace(/&Uacute;/g, "Ú")
    .replace(/&uuml;/g, "ü")
    .replace(/&Uuml;/g, "Ü")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&middot;/g, "·")
    .replace(/&bull;/g, "•")
    .replace(/\s+/g, " ")
    .trim();
}

function visibleTextSegments(source) {
  return [
    ...source
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<!--[\s\S]*?-->/g, "")
      .matchAll(/>([^<>]+)</g)
  ].map((match) => match[1].trim()).filter(Boolean);
}

test("published CV HTML files exist", () => {
  assert.ok(existsSync(ptPath), "missing PT-BR CV HTML");
  assert.ok(existsSync(enPath), "missing EN CV HTML");
});

test("CV files declare the correct document languages", () => {
  assert.match(read(ptPath), /<html lang="pt-BR">/);
  assert.match(read(enPath), /<html lang="en-US">/);
});

test("English CV does not contain Portuguese operational bullet text", () => {
  const enText = htmlText(read(enPath));
  const portugueseFragments = [
    "Análise de processos",
    "Diagnóstico de falhas",
    "Padronização de procedimentos",
    "Investigação de falhas",
    "Validação funcional",
    "Sistemas de Gestão",
    "Diferenciais Técnicos"
  ];

  for (const fragment of portugueseFragments) {
    assert.doesNotMatch(enText, new RegExp(fragment, "i"));
  }
});

test("English CV keeps expected translated section labels and location", () => {
  const enText = htmlText(read(enPath));

  assert.match(enText, /Professional Summary/);
  assert.match(enText, /Technical Skills/);
  assert.match(enText, /Professional Experience/);
  assert.match(enText, /Technical Highlights/);
  assert.match(enText, /Araçatuba, Brazil/);
});

test("CV HTML files are static documents", () => {
  for (const file of [ptPath, enPath]) {
    assert.doesNotMatch(read(file), /\scontenteditable\s*=/i);
  }
});

test("English CV text nodes escape visible ampersands", () => {
  const rawAmpersandText = visibleTextSegments(read(enPath)).filter((text) =>
    /&(?![a-z]+;|#\d+;|#x[\da-f]+;)/i.test(text)
  );

  assert.deepEqual(rawAmpersandText, []);
});

test("CV automation skill rows do not duplicate JavaScript chips", () => {
  for (const file of [ptPath, enPath]) {
    const source = read(file);
    const automationBlock = source.match(/Automation &amp; Engineering[\s\S]*?<\/div>\s*<\/div>/)?.[0] ?? "";
    const javascriptCount = [...automationBlock.matchAll(/>JavaScript</g)].length;
    assert.equal(javascriptCount, 1, `${file} repeats JavaScript in Automation & Engineering`);
  }
});
