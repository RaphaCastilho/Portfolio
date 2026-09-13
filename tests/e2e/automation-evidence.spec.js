const { test, expect } = require("@playwright/test");

test.describe("Home — automation evidence block", () => {
  test("renders the real Playwright summary inside the Automação section", async ({ page }) => {
    await page.route("**/qa-lab/results/latest.json", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          status: "passed",
          generatedAt: "2026-09-13T12:00:00.000Z",
          summary: { total: 10, passed: 10, failed: 0, skipped: 0, flaky: 0 },
          coverage: ["Mocked coverage line one", "Mocked coverage line two"],
          suites: [
            { file: "a.spec.js", total: 5, passed: 5, failed: 0, skipped: 0, flaky: 0 },
            { file: "b.spec.js", total: 5, passed: 5, failed: 0, skipped: 0, flaky: 0 },
          ],
        }),
      });
    });

    await page.goto("/");

    await expect(page.locator('[data-testid="evidence-status"]')).toHaveText("Passou");
    await expect(page.locator('[data-testid="evidence-total"]')).toHaveText("10/10");
    await expect(page.locator('[data-testid="evidence-suites"]')).toHaveText("2");
    await expect(page.locator('[data-testid="evidence-failed"]')).toHaveText("0");
    await expect(page.locator('[data-testid="evidence-coverage-list"]')).toContainText("Mocked coverage line one");

    await page.locator("#lang-toggle").click();
    await expect(page.locator('[data-testid="evidence-status"]')).toHaveText("Passed");
  });

  test("falls back gracefully when the summary JSON is unavailable", async ({ page }) => {
    await page.route("**/qa-lab/results/latest.json", (route) => route.fulfill({ status: 404, body: "" }));

    await page.goto("/");

    await expect(page.locator('[data-testid="evidence-status"]')).toHaveText("Sem execução");
    await expect(page.locator('[data-testid="evidence-total"]')).toHaveText("0/0");
  });
});
