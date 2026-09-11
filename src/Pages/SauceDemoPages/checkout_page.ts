import { expect, Locator, Page } from "@playwright/test";

export class checkoutPage {

    readonly page: Page

    readonly CartPage: Locator
    readonly CheckoutPage: Locator
    readonly FirstName: Locator
    readonly LastName: Locator
    readonly PostalCode: Locator
    readonly ContinueCta: Locator
    readonly FinishCta: Locator
    readonly thankYouMessage: Locator
    readonly BackHome: Locator


    constructor(page: Page) {
        this.page = page

        this.CartPage = page.locator('[data-test="shopping-cart-link"]')
        this.CheckoutPage = page.locator('[data-test="checkout"]')
        this.FirstName = page.locator('[data-test="firstName"]')
        this.LastName = page.locator('[data-test="lastName"]')
        this.PostalCode = page.locator('[data-test="postalCode"]')
        this.ContinueCta = page.locator('[data-test="continue"]')
        this.FinishCta = page.locator('[data-test="finish"]')
        this.thankYouMessage = page.locator('[data-test="complete-header"]')
        this.BackHome = page.locator('[data-test="back-to-products"]')
    }

    async clickCartPage() {
        await this.CartPage.click()
    }

    async clickCheckoutPage() {
        await this.CheckoutPage.click()
    }

    async enterCheckoutCreds(firstname: string, lastname: string, postalcode: string) {
        await this.FirstName.fill(firstname)
        await this.LastName.fill(lastname)
        await this.PostalCode.fill(postalcode)
    }

    async checkConfirmOrder() {
        await this.ContinueCta.click()
        await this.FinishCta.click()
    }

    async validateOrderConfirmation() {
        await expect(this.thankYouMessage).toHaveText('Thank you for your order!')
        await this.BackHome
    }
}