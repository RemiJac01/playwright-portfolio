import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
  });

  test("successful login with valid credentials @smoke", async ({ page }) => {
    // create a new loginPage using the blueprint
    const loginPage = new LoginPage(page);
    // call the login action - it handles filling in the form and clicking login
    await loginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
  });

  test("failed login shows error message", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("tomsmith", "Super");
    await expect(page.getByText("Your password is invalid!")).toBeVisible();
  });

  test("Successful login then logout", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("tomsmith", "SuperSecretPassword!");
    await page.getByRole("link", { name: "Logout" }).click();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/login");
  });
}); //end of describe ('Login page')
