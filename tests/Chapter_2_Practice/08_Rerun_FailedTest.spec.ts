import { test, expect } from '@playwright/test'

test('Reruntest1', async ({ page }) => {
    //open google
    await page.goto("https://www.saucedemo.com/");

    //Enter login creds
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')

    //Login button click
    await page.locator('[data-test="login-button"]').click();

    //Validate title
    await expect(page).toHaveTitle('Swag Labs');
})

test('Reruntest2', async ({ page }) => {
    //open google
    await page.goto("https://www.saucedemo.com/");

    //Enter login creds
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')

    //Login button click
    await page.locator('[data-test="login-button"]').click();

    //Validate title
    await expect(page).toHaveTitle('Swag Lab');
})

//how to run just the failed tc
//npx playwright test --last failed

