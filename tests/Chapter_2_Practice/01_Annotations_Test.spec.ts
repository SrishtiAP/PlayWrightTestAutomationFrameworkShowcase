import {test, expect} from '@playwright/test'

test ('annotationsTest1', async ({page}) =>{
    await page.goto("https://www.google.com/")
})

// test.skip ('annotationsTest2', async ({page}) =>{   // Will skip this section, if we write test.skip
//     await page.goto("https://www.facebook.com/")
// })

// test.only ('annotationsTest3', async ({page}) =>{   // Will run this section, if we write test.only
//     await page.goto("https://www.github.com/")
// })