import { test as base } from '@playwright/test'

import { loginPage } from '../../Pages/SauceDemoPages/login_page'
import { cartPage } from '../../Pages/SauceDemoPages/cart_page'
import { checkoutPage } from '../../Pages/SauceDemoPages/checkout_page'

// Defining custom fixture types
type Pages = {
    LoginPage: loginPage
    CartPage: cartPage
    CheckoutPage: checkoutPage
}

// Extend Playwright's base test with your page objects
export const test = base.extend<Pages>({
    LoginPage: async ({ page }, use) => {
        await use(new loginPage(page))
    },

    CartPage: async ({ page }, use) => {
        await use(new cartPage(page))
    },

    CheckoutPage: async ({ page }, use) => {
        await use(new checkoutPage(page))
    },
})

export { expect } from '@playwright/test'