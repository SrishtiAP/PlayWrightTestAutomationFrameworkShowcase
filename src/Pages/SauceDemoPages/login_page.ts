import { Locator, Page } from "@playwright/test";


export class loginPage {

    readonly page: Page

    readonly userNameInput: Locator
    readonly userNamePassword: Locator
    readonly loginButton: Locator


    constructor(page: Page) {

        this.page = page // this is where we are initialising all the web elements. the capital P page refernce we are getting from our text file

        this.userNameInput = page.locator('[data-test = "username"]')
        this.userNamePassword = page.locator('[data-test = "password"]')
        this.loginButton = page.locator('[data-test = "login-button"]')

    }

    async goToURL() {
        await this.page.goto(process.env.Base_url!) //This ! mark at the end says that i gurantee this value exists and don't warn me it could be undefined
        //await this.page.goto(`${process.env.Base_url}`)//Can be written this way also
    }

    async enterLoginCreds(username: string, password: string) {
        await this.userNameInput.fill(username)
        await this.userNamePassword.fill(password)
    }

    async clickLogin() {
        await this.loginButton.click()
    }

}