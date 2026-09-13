const { test, expect } = require("@playwright/test");

test.describe("Portfolio QA Lab dashboard", () => {
  test("renders the latest Playwright summary JSON", async ({ page }) => {
    await page.route("**/qa-lab/results/latest.json", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          target: "Mocked Portfolio Run",
          status: "passed",
          generatedAt: "2026-08-28T22:00:00.000Z",
          summary: { total: 12, passed: 11, failed: 0, skipped: 1, flaky: 0 },
          coverage: ["Portfolio smoke", "QA Sandbox API mocking"],
          suites: [
            {
              title: "portfolio.spec.js",
              file: "tests/e2e/portfolio.spec.js",
              total: 3,
              passed: 3,
              failed: 0,
              skipped: 0,
              flaky: 0,
            },
          ],
        }),
      });
    });

    await page.goto("/qa-lab.html");

    await expect(page.locator('[data-testid="run-status"]')).toHaveText("passed");
    await expect(page.locator("#run-target")).toHaveText("Mocked Portfolio Run");
    await expect(page.locator('[data-testid="metric-total"]')).toHaveText("12");
    await expect(page.locator('[data-testid="metric-passed"]')).toHaveText("11");
    await expect(page.locator('[data-testid="suite-card"]')).toHaveCount(1);
    await expect(page.locator('[data-testid="coverage-list"]')).toContainText("QA Sandbox API mocking");
  });
});
