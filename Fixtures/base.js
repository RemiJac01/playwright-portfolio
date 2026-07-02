import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    const loginPage = new LoginPage(page);
    await loginPage.login("tomsmith", "SuperSecretPassword!");
    await use(page);
  },
});

export { expect } from "@playwright/test";
