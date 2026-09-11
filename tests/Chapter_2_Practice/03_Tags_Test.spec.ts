import {test, expect} from '@playwright/test'

test ('tagTest1', {tag : ['@SmokeTesting']}, async ({page}) =>{
    await page.goto("https://www.google.com/")
})

test ('tagTest2', {tag : ['@SmokeTesting', '@RegressionTesting']}, async ({page}) =>{   // Will skip this section, if we write test.skip
    await page.goto("https://www.facebook.com/")
})

test ('tagTest3', {tag : ['@RegressionTesting  ']}, async ({page}) =>{   // Will run this section, if we write test.only
    await page.goto("https://www.github.com/")
})


// {} -> this is object
// [] -> this is array
//Tag name can be given based on testing, functionality or the module
//So now to run this specific tags we need to right the command in the terminal like this specifying the tag
//npx playwright test --grep '@SmokeTesting'