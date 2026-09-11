import { test, expect } from '@playwright/test'

test.describe('Smoke Testing', () => {
    //Write test
    test('groupTest1', async ({ page }) => {
        await page.goto("https://www.google.com/")
    })
})

test.describe('Regression Testing', () => {
    test('groupTest2', async ({ page }) => {   // Will skip this section, if we write test.skip
        await page.goto("https://www.facebook.com/")
    })

    test('groupTest3', async ({ page }) => {   // Will run this section, if we write test.only
        await page.goto("https://www.github.com/")
    })
})

//How to run the same test multiple times, can do that by using the below commands
// npx playwright test/Chapter_2_Practice/02_Grouping_Test.spec.ts --repeat-each=2 
//Launch 3 browser paraller i.e. 3 Chromium browser