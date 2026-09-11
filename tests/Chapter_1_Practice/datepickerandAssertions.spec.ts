import {test, expect} from '@playwright/test'

test('selecting date value in Playwright', async ({page}) => {
    await page.goto("https://jqueryui.com/datepicker/");

    //Hardcoded date value
     const iframe = await page.frameLocator('[class = "demo-frame"]')
    // await iframe.locator('[id = "datepicker"]').fill('12/24/2024') 

    //Dynamic Date
    await iframe.locator('[id = "datepicker"]').click();
    await iframe.locator('.ui-datepicker-today').click(); 
     
})

test('Checking assertions', async ({page}) => {

    //Verify editable, enabled, empty
    await page.goto("https://github.com/")
    // await expect (page.getByRole('button', {name : 'Search or jump to…'})).toBeVisible();
    // //await expect (page.getByRole('button', {name : 'Search or jump to…'})).toBeEditable();
    // await expect (page.getByRole('button', {name : 'Search or jump to…'})).toBeEnabled(); 
    // await expect (page.getByRole('button', {name : 'Search or jump to…'})).toBeEmpty; 

    //await expect (page).toHaveURL ("https://github.com/")
    await expect.soft (page).toHaveTitle("GitHub")
    await expect (page).toHaveTitle (/GitHub/) // If we are nt sure abt the entire title then we can write the regex like this /github/ it matches if anything with github is there
    

})