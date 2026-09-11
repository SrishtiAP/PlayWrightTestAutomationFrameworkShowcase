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

//Add this in your playwrightconfig.ts file
//Create an array with the name reporter and specify the location where u want to store the file and in which format
// reporter: [
//    ['html'], //html test report, this is default playwright one which comes up after running any test
//    ['json', {outputFile : 'json-test-report.json'}]
//    ['junit', {outputFile : 'junit-test-report.json'}]
//    ['list], //list test report
//    ['dot], //dot test report
// ]