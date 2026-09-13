import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sourcePath = join(root, "qa-lab", "results", "playwright-results.json");
const outputPath = join(root, "qa-lab", "results", "latest.json");
const coverage = [
  "Portfolio home loads and keeps its main sections",
  "GitHub, LinkedIn, and CV links stay accessible",
  "PT-BR/EN-US toggle updates content and the CV file",
  "Local images load correctly while scrolling",
  "Sandbox validates login, filters, empty state, and logout",
  "Playwright mocks session and check APIs, including a 500 error",
  "Evidence summary renders inline, next to what it tests",
  "Layout stays overflow-free on mobile, tablet, and desktop",
];

function emptySummary(status = "not-run") {
  return {
    target: "Rapha.QA Portfólio + QA Sandbox",
    status,
    generatedAt: new Date().toISOString(),
    summary: {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      flaky: 0,
    },
    coverage,
    suites: [],
    links: {
      portfolio: "./index.html",
      sandbox: "./qa-sandbox.html",
    },
  };
}

function walkSuites(suites, byFile = new Map()) {
  for (const suite of suites ?? []) {
    const file = suite.file || suite.title || "unknown";
    if (suite.specs?.length) {
      const current = byFile.get(file) ?? {
        file,
        title: file.replace(/^.*[\\/]/, ""),
        total: 0,
        passed: 0,
        failed: 0,
        skipped: 0,
        flaky: 0,
      };

      for (const spec of suite.specs) {
        for (const test of spec.tests ?? []) {
          current.total += 1;
          if (test.status === "expected" && test.expectedStatus === "passed") current.passed += 1;
          else if (test.status === "skipped" || test.expectedStatus === "skipped") current.skipped += 1;
          else if (test.status === "flaky") current.flaky += 1;
          else current.failed += 1;
        }
      }

      byFile.set(file, current);
    }

    walkSuites(suite.suites, byFile);
  }

  return byFile;
}

function buildSummary(report) {
  const suites = [...walkSuites(report.suites).values()].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const summary = suites.reduce(
    (acc, suite) => {
      acc.total += suite.total;
      acc.passed += suite.passed;
      acc.failed += suite.failed;
      acc.skipped += suite.skipped;
      acc.flaky += suite.flaky;
      return acc;
    },
    { total: 0, passed: 0, failed: 0, skipped: 0, flaky: 0 }
  );

  let status = "passed";
  if (summary.failed > 0) status = "failed";
  else if (summary.total === 0) status = "not-run";
  else if (summary.flaky > 0 || summary.skipped > 0) status = "attention";

  return {
    ...emptySummary(status),
    generatedAt: new Date().toISOString(),
    summary,
    suites,
  };
}

const result = existsSync(sourcePath)
  ? buildSummary(JSON.parse(readFileSync(sourcePath, "utf8")))
  : emptySummary("not-run");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`);

console.log(`QA Lab summary updated: ${outputPath}`);
