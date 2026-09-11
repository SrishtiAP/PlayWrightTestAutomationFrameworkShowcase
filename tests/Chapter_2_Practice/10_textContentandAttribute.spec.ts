import {test, expect} from '@playwright/test'

test('textcontains', async ({page}) => {

    await page.goto("https://github.com/BakkappaN")

    const name = await page.locator('[itemprop = "name"]').textContent();
    const finalName = name?.trim()
    console.log(`Name is: ${finalName}`) //Check for backquotes here
    expect(finalName).toBe('Testers Talk')

    await page.getByTestId('reposito')

})