import { expect, Locator, Page } from "@playwright/test";

export class loginPage {

    readonly page: Page
    
    readonly usernameInput: Locator
    readonly usernamePassword: Locator
    readonly login: Locator;
    readonly upgrade: Locator
    readonly logoutDropdown: Locator
    readonly logout: Locator
    readonly usernameDropdown: Locator

    constructor(page: Page) {

        this.page = page;
        
        this.usernameInput = page.getByPlaceholder('Username')
        this.usernamePassword = page.getByPlaceholder('Password')
        this.login = page.getByRole('button', {name: "Login"})
        this.upgrade = page.getByRole('button', {name: " Upgrade"})
        this.logoutDropdown = page.locator('[class = "oxd-userdropdown-img"]')
        this.logout = page.getByRole('menuitem', {name: "Logout"})
        this.usernameDropdown = page.locator('[class = "oxd-userdropdown-name"]')

    }

    async gotUrl() {
        await this.page.goto(process.env.OrangeHrm_url!)
    }
    async enterLoginCreds(username: string, password: string) {
        await this.usernameInput.fill(username)
        await expect(this.usernamePassword).toBeVisible()
        await this.usernamePassword.fill(password)
    }
    async clickLogin() {
        await this.login.click()
    }

    async verifyLoginPageTitle() {
        await expect(this.page).toHaveTitle('OrangeHRM')
        //await expect(this.upgrade).toBeVisible()
    }
    
    async clickLogoutDropdown() {
        await this.logoutDropdown.click()
    }

    async clickLogout() {
        await this.logout.click()
        await expect(this.upgrade).toBeHidden()

    }
    async getUsernameDropdownText() {
        const usernameText = await this.usernameDropdown.textContent()
        console.log(usernameText)
        return usernameText ?? ''
    }
}
