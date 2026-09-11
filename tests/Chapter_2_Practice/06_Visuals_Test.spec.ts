import {test, expect} from '@playwright/test'

test('Visual Comparison in Playwright', async ({page}) => {
    await page.goto('https://github.com/login')

    await expect(page).toHaveScreenshot('GithubLoginPage.png') // Sample screensot

    await page.locator('#login_field').fill('playwright with typescript')

    await expect(page).toHaveScreenshot('GithubLoginPage.png', {timeout : 5000}) // And this time we are comparing this screenshot with the original screenshot and so it is failing


})

//Any visual test comparison on the first time it fails with error but on the secon time it passes

//Timeout
//We can add a global timeout in the playwright config.ts file
//timeout : 1 * 60 * 1000 (it will wait for 1mins ) global timeout
//or we can do await page.waitForTimeout(60000) ms
//test.setTimeout(1 * 60 * 1000) local timeout i.e. before each test we can use this if required
//local timeout override the global timeout

//Assertion timeout
// expect : {
//     timeout : 10000 ms
// }
//it wait for pagetitle to load or validate 10s and within 10sec if the value didn't mathch then it throws the error

//Action Timeout (inside the locator search or assertion each, wherever it is required)
//await expect(page).toHaveScreenshot('GithubLoginPage.png', {timeout : 5000})
 