import {test, expect} from '@playwright/test'

test('handling iframes, draganddrop', async ({page}) => {

    await page.goto('https://jqueryui.com/droppable/')

    const iframe = page.frameLocator('[class = "demo-frame"] ')

    //Drag Element  
    const dragElement = iframe.locator('[id = "draggable"]')
    //Drop Element
    const dropElement = iframe .locator('[id = "droppable"]')

    await dragElement.dragTo(dropElement);

})