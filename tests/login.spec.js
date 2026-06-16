import {test, expect} from '@playwright/test'

test.describe('Login page', () => {

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
});

test('successful login with valid credentials @smoke', async ({page}) => {
    await page.getByLabel("Username").fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login'}).click();
    await expect (page).toHaveURL('https://the-internet.herokuapp.com/secure');

});

test('failed login shows error message', async ({page}) => {
    await page.getByLabel("Username").fill('tomsmith');
    await page.getByLabel("Password").fill('incorrectpassword');
    await page.getByRole('button', { name: 'Login'}).click();
    await expect(page.getByText('Your password is invalid!')).toBeVisible();

});

test('Successful login then logout', async ({page}) => {
    await page.getByLabel("Username").fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login'}).click();
    await page.getByRole('link', { name: 'Logout'}).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');

});

}) //end of describe ('Login page')