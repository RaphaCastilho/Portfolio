const { test, expect } = require("@playwright/test");

test.describe("Portfolio language and CV links", () => {
  test("switches from PT-BR to EN-US and updates the primary CV link", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
    await expect(page.locator("#nav-home")).toHaveText("Início");
    await expect(page.locator("a#cv-download").first()).toHaveAttribute("href", /DEV_Rapha_CV_PT\.pdf/);

    await page.locator("#lang-toggle").click();

    await expect(page.locator("html")).toHaveAttribute("lang", "en-US");
    await expect(page.locator("#nav-home")).toHaveText("Home");
    await expect(page.locator("a#cv-download").first()).toHaveAttribute("href", /DEV_Rapha_CV_EN\.pdf/);
    await expect(page.locator("a#cv-web").first()).toHaveAttribute("href", /DEV_Rapha_CV_EN\.html/);
  });
});
