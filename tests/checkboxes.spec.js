import { test, expect } from "@playwright/test";

test("Checkboxes can be checked and unchecked", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");
  const checkboxes = await page.getByRole("checkbox").all();

  for (const checkbox of checkboxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }
});
