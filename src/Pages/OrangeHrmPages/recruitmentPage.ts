import { expect, Locator, Page } from "@playwright/test"

export class recruitmentPage {

    readonly page: Page

    readonly recruitmentLeftBar: Locator
    readonly vacanciesTopNav: Locator
    readonly addCta: Locator
    readonly vacancyName: Locator
    readonly jobTitleDropdown: Locator
    readonly selectjobTitle: Locator
    readonly hiringManager: Locator
    readonly vacancyNameText: Locator
    readonly saveCta: Locator
    readonly searchCta: Locator
    readonly validateJobTitle: Locator
    readonly editCta: Locator
    readonly jobTitle: Locator
    readonly addPosition: Locator
    readonly deleteCta: Locator
    readonly confirmDeleteCta: Locator

    constructor(page: Page) {
        this.page = page

        this.recruitmentLeftBar = page.getByRole('link', { name: "Recruitment" })
        this.vacanciesTopNav = page.getByRole('link', { name: 'Vacancies' })
        this.addCta = page.getByRole('button', { name: " Add " })
        this.vacancyName = page.locator('.oxd-input-group', { hasText: 'Vacancy Name' }).locator('.oxd-input')
        this.jobTitleDropdown = page.getByText('-- Select --');
        this.selectjobTitle = page.getByRole('option', { name: 'Automaton Tester' })
        this.hiringManager = page.getByRole('textbox', { name: 'Type for hints...' })
        //this.optionHiringManager = page.locator('.oxd-autocomplete-option')
        this.saveCta = page.getByRole('button', { name: 'Save' })
        this.vacancyNameText = page.getByText('Vacancy Name')
        this.jobTitle = page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow')
        this.searchCta = page.getByRole('button', { name: ' Search ' })
        this.validateJobTitle = page.getByRole('option', { name: 'Automaton Tester' })
        this.editCta =page.getByRole('button').filter({ hasText: /^$/ }).nth(4)
        this.addPosition = page.getByRole('textbox').nth(4)
        this.deleteCta =page.getByRole('button').filter({ hasText: /^$/ }).nth(3)
        this.confirmDeleteCta = page.getByRole('button', { name: ' Yes, Delete' })
    }

    async selectRecruitmentLeftBar() {
        await this.recruitmentLeftBar.click()
    }
    async clickVacanciesTopNav() {
        await this.vacanciesTopNav.click()
    }
    async clickAddCta() {
        await this.addCta.click()
    }
    async enterVacancyName(vacancyName: string) {
        await this.vacancyName.fill(vacancyName)
    }
    async clickJobTitleDropdown() {
        await this.jobTitleDropdown.click()
        await this.selectjobTitle.isVisible()
        await this.selectjobTitle.click()
    }
    async enterHiringManager(hiringManager: string) {
        await this.hiringManager.click();
        await this.hiringManager.fill(hiringManager);

        const dropdown = this.page.locator('.oxd-autocomplete-dropdown');

        // Wait until the async search finishes (no more "Searching....")
        await expect(dropdown).not.toContainText('Searching....', { timeout: 10000 });

        // Pick whatever the first suggested option is — regardless of exact name match
        const option = dropdown.locator('.oxd-autocomplete-option').first();
        await option.waitFor({ state: 'visible', timeout: 10000 });
        await option.click();
    }
    async clickSaveCta() {
        await expect(this.saveCta).toBeVisible()
        await expect(this.saveCta).toBeEnabled()
        await this.saveCta.click()
        await this.page.waitForTimeout(4000) // Wait for 2 seconds to allow the page to update after saving
        //await expect(this.page.getByText('Successfully Saved')).toBeVisible({ timeout: 10000 });
    }
    // async validateVacancyNamePresent(vacancyName: string) {
    //     await expect(this.page.getByText(vacancyName).first()).toBeVisible({ timeout: 30000 });
    // }
    async searchJobTitle() {
        await this.jobTitle.first().click()
        await this.selectjobTitle.click()
    }
    async clickSearchCta() {
        await this.searchCta.click()
    }
    async validateJobTitlePresent() {
        await this.validateJobTitle.isVisible()
    }
    async clickEditCta() {
        await this.editCta.click()
    }
    async enterPosition(position: string) {
        await this.addPosition.fill(position)
    }
    async clickDeleteCta() {
        await this.deleteCta.click()
    }
    async confirmBoxDeleteCta() {
        await this.confirmDeleteCta.click()
    }
}