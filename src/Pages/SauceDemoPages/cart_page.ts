import { expect, Locator, Page } from "@playwright/test";

export class cartPage {

    readonly page: Page

    readonly addToCartListPage: Locator
    readonly openProductPage: Locator
    readonly addToCartProductPage: Locator
    readonly checkCartBadge: Locator

    constructor(page: Page) {

        this.page = page

        this.addToCartListPage = page.locator('[name="add-to-cart-sauce-labs-bolt-t-shirt"]')
        this.openProductPage = page.getByText('Sauce Labs Fleece Jacket')
        this.addToCartProductPage = page.locator('#add-to-cart')
        this.checkCartBadge = page.locator('[data-test="shopping-cart-badge"]')
    }

    async clickAddCartListPage() {
        await this.addToCartListPage.click()
    }

    async clickAddCartProductPage() {
        await this.openProductPage.click()
        await this.addToCartProductPage.click()
    }

    async validateCart() {
        await expect(this.checkCartBadge).toHaveText('2')
    }
}
