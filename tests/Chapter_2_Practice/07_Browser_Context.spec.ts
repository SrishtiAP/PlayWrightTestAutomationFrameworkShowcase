import { test, expect } from '@playwright/test'

test('PrametriseTest', async ({ page , browser }) => {
    //open google
    await page.goto("https://www.saucedemo.com/");

    //Enter login creds
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')

    //Login button click
    await page.locator('[data-test="login-button"]').click();

    //Validate title
    await expect(page).toHaveTitle('Swag Labs');


const context2 = await browser.newContext()
const page2 = await context2.newPage();
//open google
    await page2.goto("https://www.saucedemo.com/");

    //Enter login creds
    await page2.locator('[data-test="username"]').fill('standard_user')
    await page2.locator('[data-test="password"]').fill('secret_sauce')

    //Login button click
    await page2.locator('[data-test="login-button"]').click();

    //Validate title
    await expect(page2).toHaveTitle('Swag Labs');

//Using this context2 it will help to create multiple browser session, with first page it will run the first time and 
// with the second page it will run the second time


//Create new Tabs
const newTab = await context2.newPage();
await newTab.goto("https://www.saucedemo.com/");

    //Enter login creds
    await newTab.locator('[data-test="username"]').fill('standard_user')
    await newTab.locator('[data-test="password"]').fill('secret_sauce')
})

//Here we are creating the new tab in the scond browser session and performing the above action in the new tab



