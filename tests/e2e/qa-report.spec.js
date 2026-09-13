const { test, expect } = require("@playwright/test");

test.describe("Portfolio QA public report", () => {
  test("renders the public Playwright report summary", async ({ page }) => {
    await page.route("**/qa-lab/results/latest.json", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          status: "passed",
          generatedAt: "2026-09-02T14:00:00.000Z",
          summary: { total: 18, passed: 18, failed: 0, skipped: 0, flaky: 0 },
          suites: [
            {
              title: "qa-sandbox.spec.js",
              file: "tests/e2e/qa-sandbox.spec.js",
              total: 4,
              passed: 4,
              failed: 0,
              skipped: 0,
              flaky: 0,
            },
          ],
        }),
      });
    });

    await page.goto("/qa-report.html");

    await expect(page.locator('[data-testid="run-status"]')).toHaveText("passed");
    await expect(page.locator('[data-testid="metric-total"]')).toHaveText("18");
    await expect(page.locator('[data-testid="metric-passed"]')).toHaveText("18");
    await expect(page.locator('[data-testid="suite-card"]')).toHaveCount(1);
    await expect(page.locator('[data-testid="suite-card"]')).toContainText("qa-sandbox.spec.js");
  });
});
