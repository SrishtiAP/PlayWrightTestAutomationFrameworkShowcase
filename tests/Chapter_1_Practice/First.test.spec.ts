//Import playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('FirstTestFromWebsite', async ({ page }) => {
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