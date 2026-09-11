import { test, expect } from '@playwright/test'

test('CaptureScreenshot', async ({ page }) => {

    await page.goto("https://www.youtube.com/@testerstalk")

    //Element Screenshot

    await page.locator('#page-header-banner').screenshot({ path: './screenshot/elementss.png' });
    //Page Screenshot
    await page.screenshot({path : './screenshot/pagess.png'});
    //Ful page
    await page.screenshot({path : './screenshot/fullpagess.png', fullPage:true});


})