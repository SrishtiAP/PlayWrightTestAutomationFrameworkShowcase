import { test, expect } from "../../src/Utils/Fixtures/SauceDemoFixture"
import { SauceDemoConstants } from "../../src/Utils/Test-Data/testConstants"

test.describe.only('Sauce Demo End-to-End', () => {

    test.beforeEach(async ({ LoginPage }) => {
        await LoginPage.goToURL()
        await LoginPage.enterLoginCreds(`${process.env.Username}`, process.env.Password!)
        await LoginPage.clickLogin()
        await expect(LoginPage.page).toHaveTitle('Swag Labs')
    })

    test('Complete checkout', async ({ CartPage, CheckoutPage }) => {
        await CartPage.clickAddCartListPage()
        await CartPage.clickAddCartProductPage()
        await CartPage.validateCart()
        await CheckoutPage.clickCartPage()
        await CheckoutPage.clickCheckoutPage()
        await CheckoutPage.enterCheckoutCreds(SauceDemoConstants.checkout.firstName, SauceDemoConstants.checkout.lastName, SauceDemoConstants.checkout.postalCode)
        await CheckoutPage.checkConfirmOrder()
        await CheckoutPage.validateOrderConfirmation()
        await expect(CheckoutPage.page).toHaveTitle('Swag Labs')
    })
})

