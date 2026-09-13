const { test, expect } = require("@playwright/test");

const apiChecks = [
  {
    id: "API-MOCK-001",
    title: "Mocked login contract",
    area: "api",
    status: "passed",
    detail: "Returned by Playwright route fulfillment.",
  },
  {
    id: "RESP-MOCK-001",
    title: "Responsive guard",
    area: "responsive",
    status: "risk",
    detail: "Used to validate filters and risk state.",
  },
];

test.describe("QA Sandbox", () => {
  test("logs in using the local demo adapter and filters checks", async ({ page }) => {
    await page.goto("/qa-sandbox.html");

    await page.locator('[data-testid="login-button"]').click();

    await expect(page.locator('[data-testid="workspace"]')).toBeVisible();
    await expect(page.locator('[data-testid="status-message"]')).toContainText("Sessão ativa");
    await expect(page.locator('[data-testid="check-card"]')).toHaveCount(5);

    await page.locator('[data-testid="status-filter"]').selectOption("risk");

    await expect(page.locator('[data-testid="check-card"]')).toHaveCount(1);
    await expect(page.locator('[data-testid="summary-risks"]')).toHaveText("1");

    await page.locator('[data-testid="search-input"]').fill("nao existe");
    await expect(page.locator('[data-testid="empty-state"]')).toBeVisible();
  });

  test("lets the reviewer switch local API scenarios", async ({ page }) => {
    await page.goto("/qa-sandbox.html");

    await page.locator('[data-testid="login-button"]').click();
    await expect(page.locator('[data-testid="workspace"]')).toBeVisible();

    await page.locator('[data-testid="scenario-select"]').selectOption("empty");
    await expect(page.locator('[data-testid="summary-total"]')).toHaveText("0");
    await expect(page.locator('[data-testid="checks-status"]')).toContainText("API respondeu sem checks");
    await expect(page.locator('[data-testid="empty-state"]')).toBeVisible();

    await page.locator('[data-testid="scenario-select"]').selectOption("error");
    await expect(page.locator('[data-testid="checks-status"]')).toContainText("erro 500");
    await expect(page.locator('[data-testid="empty-state"]')).toBeVisible();

    await page.locator('[data-testid="scenario-select"]').selectOption("success");
    await expect(page.locator('[data-testid="check-card"]')).toHaveCount(5);
  });

  test("uses Playwright route mocking for login and checks", async ({ page }) => {
    await page.route("**/api/qa-sandbox/session", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          user: { name: "Mocked QA", role: "QA Analyst" },
          token: "mock-token",
          scope: "portfolio-quality",
        }),
      });
    });
    await page.route("**/api/qa-sandbox/checks", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ checks: apiChecks }),
      });
    });

    await page.goto("/qa-sandbox.html?network=1");
    await page.locator('[data-testid="email-input"]').fill("mock@qa.test");
    await page.locator('[data-testid="password-input"]').fill("any-password");
    await page.locator('[data-testid="login-button"]').click();

    await expect(page.locator('[data-testid="workspace"]')).toBeVisible();
    await expect(page.locator('[data-testid="status-message"]')).toContainText("Mocked QA");
    await expect(page.locator('[data-testid="summary-total"]')).toHaveText("2");
    await expect(page.locator('[data-testid="check-card"]').first()).toContainText("API-MOCK-001");
  });

  test("shows API error feedback when the mocked checks endpoint fails", async ({ page }) => {
    await page.route("**/api/qa-sandbox/session", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          user: { name: "Failure QA", role: "QA Analyst" },
          token: "mock-token",
          scope: "portfolio-quality",
        }),
      });
    });
    await page.route("**/api/qa-sandbox/checks", async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ message: "Checks endpoint offline" }),
      });
    });

    await page.goto("/qa-sandbox.html?network=1");
    await page.locator('[data-testid="login-button"]').click();

    await expect(page.locator('[data-testid="workspace"]')).toBeVisible();
    await expect(page.locator('[data-testid="checks-status"]')).toContainText("Checks endpoint offline");
  });
});
