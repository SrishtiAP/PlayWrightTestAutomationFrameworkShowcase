import { test, expect } from '@playwright/test'

test('working with drodown', async ({ page }) => {
    //Navigate to the signup page
    await page.goto("https://www.facebook.com")
    await page.getByRole('link', { name: 'Create new account' }).click()
    //Enter the firstnmae and last name
    await page.getByLabel('First name').fill('Sammi')
    await page.locator('#_R_1kl2p4jikacppb6amH1_').fill('Raj')

    //Select dropdown for date
    await page.getByRole('combobox', { name: 'Select day' }).click();
    await page.getByRole('option', { name: '19' }).click();
    //Select dropdown for month
    await page.getByRole('combobox', { name: 'Select month' }).click();
    await page.getByRole('option', { name: 'November' }).click();
    //Select dropdown for year
    await page.getByRole('combobox', { name: 'Select year' }).click()
    await page.getByRole('option', { name: '1993' }).click();
    //Select gender drodown
    // await page.getByRole('combobox', { name: 'Click for more information about selecting gender' }).click()
    // //await page.getByRole('combobox', { name: /gender/i }).click();
    // //Select gender
    // await page.getByRole('option', { name: 'Female' }).click()
     await page.locator('div').filter({ hasText: /^Select your gender$/ }).nth(1).click();
     await page.locator('div').filter({ hasText: /^Female$/ }).nth(1).click();
    //  await page.getByText('Select your gender', { exact: true }).click();
    //  await page.getByText('Female', { exact: true }).click();
})