import { test, expect } from "@playwright/test";

test("Download page URL is correct", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");
  await expect(page).toHaveURL("https://the-internet.herokuapp.com/download");
  await expect(page.getByText("vendor.txt")).toBeVisible();
});
