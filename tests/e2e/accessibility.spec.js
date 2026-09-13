const { test, expect } = require("@playwright/test");

const pages = ["/", "/qa-sandbox.html", "/qa-lab.html", "/qa-report.html"];

test.describe("Basic accessibility contract", () => {
  for (const route of pages) {
    test(`${route} has language, one h1 and labelled navigation`, async ({ page }) => {
      await page.goto(route);

      await expect(page.locator("html")).toHaveAttribute("lang", /pt-BR|en-US/);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("nav").first()).toHaveAttribute("aria-label");
    });
  }

  test("QA Sandbox form controls have accessible labels", async ({ page }) => {
    await page.goto("/qa-sandbox.html");

    await expect(page.locator("#email")).toHaveAccessibleName("Email");
    await expect(page.locator("#password")).toHaveAccessibleName("Senha");
    await page.locator('[data-testid="login-button"]').click();
    await expect(page.locator('[data-testid="workspace"]')).toBeVisible();
    await expect(page.locator("#search")).toHaveAccessibleName("Buscar checks");
    await expect(page.locator("#status-filter")).toHaveAccessibleName("Filtrar por status");
    await expect(page.locator("#area-filter")).toHaveAccessibleName("Filtrar por área");
    await expect(page.locator("#scenario")).toHaveAccessibleName("Cenário local da API");
  });
});
