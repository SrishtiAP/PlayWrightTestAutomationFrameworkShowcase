import { test, expect } from '@playwright/test'

// test.beforeAll(async () => {
//     console.log('Running before All Test')
// })

test.beforeEach(async () => {
    console.log('Running before Each Test')
})

// test.afterAll(async () => {
//     console.log('Running after all test')
// })

test.afterEach (async () => {
    console.log('Running after Each test')
})

test('Test1', async ({ page }) => {
    console.log('Test1 executions started..');
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('TestPlaywright');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Test123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    console.log('Test1 executions completed..');
});

test('FirstTestFromWebsite', async ({ page }) => {
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