import { test, expect } from '@playwright/test';

test('Page title is correct @smoke',async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com');
    await expect(page).toHaveTitle('The Internet');  
});