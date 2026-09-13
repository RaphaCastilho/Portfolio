const { test, expect } = require("@playwright/test");

test.describe("Portfolio real target", () => {
  test("loads the portfolio and main QA sections", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Raphael Castilho/i);
    await expect(page.locator("#home")).toBeVisible();
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#automation")).toBeVisible();
    await expect(page.locator("#automation-evidence")).toBeVisible();
    await expect(page.locator("#projects")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
    await expect(page.locator("#hero-title")).toContainText(/Analista de QA/i);
  });

  test("exposes portfolio proof links and CV download", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('a[href*="github.com/RaphaCastilho/Portfolio"]').first()).toBeVisible();
    await expect(page.locator('a[href="./qa-sandbox.html"]').first()).toBeVisible();
    await expect(page.locator('a[href*="linkedin.com/in/raphael-castilho"]').first()).toBeVisible();
    await expect(page.locator("a#cv-download").first()).toHaveAttribute("href", /src\/cv\/DEV_Rapha_CV_PT\.pdf/);
    await expect(page.locator("a#cv-web").first()).toHaveAttribute("href", /src\/cv\/DEV_Rapha_CV_PT\.html/);
  });

  test("loads local images after scrolling the page", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();

    for (let i = 0; i < count; i += 1) {
      await images.nth(i).scrollIntoViewIfNeeded();
      await expect
        .poll(async () => images.nth(i).evaluate((img) => img.complete && img.naturalWidth > 0))
        .toBe(true);
    }

    const brokenImages = await page.locator("img").evaluateAll((images) =>
      images
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.getAttribute("src"))
    );

    expect(brokenImages).toEqual([]);
  });
});
