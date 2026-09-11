import { test, expect } from '@playwright/test'

const titleKeyWord = ['Swag Labs', 'Swag Lab']

for (const keyword of titleKeyWord) {

    test(`PrametriseTest - ${keyword}`, async ({ page }) => {
        //open google
        await page.goto("https://www.saucedemo.com/");

        //Enter login creds
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('secret_sauce')

        //Login button click
        await page.locator('[data-test="login-button"]').click();

        //Validate title
        await expect(page).toHaveTitle(keyword);
    })

}

//So in this case we have created an array with name titlekeyword and now we are using for lopp to call these titleKeyword using variable keyword
//in the last it will pass both the keyword, so with the first o/p it will pass and second output it will fail.
//And in the test we need to mention keyword in the object as playwright doesn't allow two test with the same name in the same file

