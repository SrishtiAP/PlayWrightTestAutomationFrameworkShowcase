import {test, expect} from '@playwright/test'

test('RetryTest', async ({ page }) => {
    console.log('Test2 execution started')
    //open google
    await page.goto("https://www.saucedemo.com/");
    //Enter login creds
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    //Login button click
    await page.locator('[data-test="login-button"]').click();
    //Validate title
    await expect(page).toHaveTitle('Swag Labs');
    console.log('Test2 execution completed')
}) 


//  retries: process.env.CI ? 2 : 0,
//So, this particular line will be present already in playwright config.ts. Here ? 2 : 0 means that in CI/CD it will try 2 times but locally
//it will try 0 times. So to try this locally we need to increase from 0 to 1 or how many times you want so that many time it will try and
//report will be generate, where it will show original run and retry times