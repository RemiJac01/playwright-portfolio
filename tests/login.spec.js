import { test, expect } from "../Fixtures/base.js";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
  });

  // the table of data - each row produces one test run
  const invalidCredentials = [
    {
      username: "wronguser",
      password: "SuperSecretPassword!",
      error: "Your username is invalid!",
    },
    {
      username: "tomsmith",
      password: "wrongpassword",
      error: "Your password is invalid!",
    },
  ];

  test("successful login with valid credentials @smoke", async ({ page }) => {
    // create a new loginPage using the blueprint
    const loginPage = new LoginPage(page);
    // call the login action - it handles filling in the form and clicking login
    await loginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
  });

  for (const data of invalidCredentials) {
    test(`failed login with ${data.username} and ${data.password}`, async ({
      page,
    }) => {
      const loginPage = new LoginPage(page);
      await loginPage.login(data.username, data.password);
      await expect(page.getByText(data.error)).toBeVisible();
    });
  }

  test("Logged in user can logout", async ({ loggedInPage }) => {
    await loggedInPage.getByRole("link", { name: "Logout" }).click();
    await expect(loggedInPage).toHaveURL(
      "https://the-internet.herokuapp.com/login",
    );
  });
}); //end of describe ('Login page')
