// this file represents the login page and everything on it
export class LoginPage {
  //runs automatically when you write new LoginPage(page) in a test
  constructor(page) {
    this.page = page;
    // locators saved here once so test don't need to know about them
    this.usernameField = page.getByLabel("Username");
    this.passwordField = page.getByLabel("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  // a reusable action that fills in the form and submits it
  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
