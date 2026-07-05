import { test, expect } from "@playwright/test";

const downloadFiles = [
  { name: "upload-sample.txt" },
  { name: "sample-upload.txt" },
];

test("Download page URL is correct", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");
  await expect(page).toHaveURL("https://the-internet.herokuapp.com/download");
});

for (const data of downloadFiles) {
  test(`downloadable file text check ${data.name}`, async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");
    await expect(page.getByRole("link", { name: data.name })).toBeVisible();
  });
}
