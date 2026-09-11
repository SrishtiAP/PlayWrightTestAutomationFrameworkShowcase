import { Locator, Page } from "@playwright/test"

export class employeePage {
    readonly page: Page
    readonly PimLeftPannel: Locator
    readonly employeeListNav: Locator
    readonly addEmployeeCta: Locator
    readonly addEmployeeNav: Locator
    readonly employeeFirstName: Locator
    readonly employeeLastName: Locator
    readonly employeeId: Locator
    readonly employeeSaveCta: Locator
    readonly selectdob: Locator
    readonly selectMaritalStatus: Locator
    readonly valueMaritalStatus: Locator
    readonly valueMaritalStatusSave: Locator
    readonly searchcta: Locator
    readonly enterEmployeeName: Locator
    readonly editCta: Locator
    readonly deleteCta: Locator
    readonly confirmDeleteCta: Locator

    constructor(page: Page) {
        this.page = page

        this.PimLeftPannel = page.getByRole('link', { name: 'PIM' })
        this.employeeListNav = page.getByRole('link', { name: 'Employee List' })
        this.addEmployeeCta = page.getByRole('button', { name: ' Add ' })
        this.addEmployeeNav = page.getByRole('link', { name: 'Add Employee' })
        this.employeeFirstName = page.getByPlaceholder('First Name')
        this.employeeLastName = page.getByPlaceholder('Last Name')
        this.employeeId = page.getByRole('textbox').nth(4)
        this.employeeSaveCta = page.getByRole('button', { name: 'Save' })
        this.selectdob = page.getByPlaceholder('yyyy-dd-mm')
        //this.selectMaritalStatus = page.locator('oxd-input-group__label-wrapper', { hasText: 'Marital Status' }).locator('oxd-select-text-input')
        this.selectMaritalStatus = page.getByText('-- Select --').nth(1)
        this.valueMaritalStatus = page.getByRole('option', { name: 'Single' })
        this.valueMaritalStatusSave = page.locator('form').filter({ hasText: 'Employee Full' }).getByRole('button')
        this.searchcta = page.getByRole('button', { name: ' Search ' })
        this.enterEmployeeName = page.getByRole('textbox', { name: 'Type for hints...' }).first()
        this.editCta = page.getByRole('button').filter({ hasText: /^$/ }).nth(3)
        this.deleteCta = page.getByRole('button').filter({ hasText: /^$/ }).nth(4)
        this.confirmDeleteCta = page.getByRole('button', { name: ' Yes, Delete ' })
    }

    async selectPimLeftPannel() {
        await this.PimLeftPannel.click()
    }
    async clickEmployeeListNav() {
        await this.employeeListNav.click()
    }
    async clickAddEmployeeCta() {
        await this.addEmployeeCta.click()
    }
    async enterEmployeeFirstName(firstName: string) {
        await this.employeeFirstName.fill(firstName)
    }
    async enterEmployeeLastName(lastName: string) {
        await this.employeeLastName.fill(lastName)
    }
    async enterEmployeeId(id: string) {
        //await this.page.waitForTimeout(3000)
        await this.employeeId.click()
        //await this.page.waitForTimeout(3000)
        await this.employeeId.clear()
        //await this.page.waitForTimeout(3000)
        await this.employeeId.fill(id)
        //await this.page.waitForTimeout(3000)

    }
    async clickEmployeeSaveCta() {
        //await this.page.waitForTimeout(3000)
        await this.employeeSaveCta.click()
        await this.page.waitForTimeout(3000)

    }
    async searchEmployeeName(fullName: string) {
        //await this.page.waitForTimeout(3000)
        await this.enterEmployeeName.fill(fullName)
        //await this.page.waitForTimeout(3000)
        await this.enterEmployeeName.press('Enter')
    }
    async clickSearchCta() {
        //await this.page.waitForTimeout(3000)
        await this.searchcta.click()
    }
    async clickEditCta() {
        //await this.page.waitForTimeout(3000)
        await this.editCta.click()
        //await this.page.waitForTimeout(3000)
    }
    async selectMaritalStatusDropdown() {
        await this.selectMaritalStatus.click();
        await this.valueMaritalStatus.click()
    }
    async clickValueMaritalStatusSave() {
        //await this.page.waitForTimeout(3000)
        await this.valueMaritalStatusSave.click()
        //await this.page.waitForTimeout(3000)
    }
    async deleteEmployee() {
        //await this.page.waitForTimeout(3000)
        await this.deleteCta.click()
        await this.confirmDeleteCta.click()
        //await this.page.waitForTimeout(3000)
    }

}
