import { test, expect } from '@playwright/test';

test('The user can add and complete todo items', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.locator('html').click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Buy groceries');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Walk the dog');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Call mum');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Buy groceries' }).getByLabel('Toggle Todo').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('2 items left')).toBeVisible();
});