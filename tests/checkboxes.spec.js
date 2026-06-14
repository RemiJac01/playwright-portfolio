import {test, expect} from '@playwright/test'

test('Checkboxes can be checked and unchecked', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const checkbox1 = page.getByRole('checkbox').first();
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    const checkbox2 = page.getByRole('checkbox').last();
    await checkbox2.check();
    await expect(checkbox2).toBeChecked();
    
})