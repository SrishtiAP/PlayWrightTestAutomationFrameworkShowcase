import { test } from "../../src/Utils/Fixtures/OrangeHrmFixture"
import { OrangeHrmConstants } from "../../src/Utils/Test-Data/testConstants"


import { loginPage } from "../../src/Pages/OrangeHrmPages/loginPage"
import { employeePage } from "../../src/Pages/OrangeHrmPages/employeePage"
import { recruitmentPage } from "../../src/Pages/OrangeHrmPages/recruitmentPage"
import { uniqueName } from "../../src/Utils/NameIdhelper"

test.describe.only('Orange HRM EmployeeRecruitment End-to-End', async() => {

    test.beforeEach(async ({ OrangeHrmLoginPage }) => {
        await OrangeHrmLoginPage.page.setViewportSize({ width: 1440, height: 900 });
        await OrangeHrmLoginPage.gotUrl()
        await OrangeHrmLoginPage.enterLoginCreds(process.env.OrangeHrm_username!, process.env.OrangeHrm_password!)
        await OrangeHrmLoginPage.clickLogin()
        await OrangeHrmLoginPage.verifyLoginPageTitle()
    })

    test('employeeAddition', async ({ OrangeHrmEmployeeAdditionPage }) => {
    const firstName = OrangeHrmConstants.employee.firstName;
    const lastName = uniqueName(OrangeHrmConstants.employee.lastName);
    const employeeId = uniqueName(OrangeHrmConstants.employee.employeeId);

    await OrangeHrmEmployeeAdditionPage.selectPimLeftPannel()
    await OrangeHrmEmployeeAdditionPage.clickAddEmployeeCta()
    await OrangeHrmEmployeeAdditionPage.enterEmployeeFirstName(firstName)
    await OrangeHrmEmployeeAdditionPage.enterEmployeeLastName(lastName)
    await OrangeHrmEmployeeAdditionPage.enterEmployeeId(employeeId)
    await OrangeHrmEmployeeAdditionPage.clickEmployeeSaveCta()
    await OrangeHrmEmployeeAdditionPage.clickEmployeeListNav()
    await OrangeHrmEmployeeAdditionPage.searchEmployeeName(`${firstName} ${lastName}`)
    await OrangeHrmEmployeeAdditionPage.clickSearchCta()
    await OrangeHrmEmployeeAdditionPage.clickEditCta()
    await OrangeHrmEmployeeAdditionPage.selectMaritalStatusDropdown()
    await OrangeHrmEmployeeAdditionPage.clickValueMaritalStatusSave()
    await OrangeHrmEmployeeAdditionPage.clickEmployeeListNav()
    await OrangeHrmEmployeeAdditionPage.searchEmployeeName(`${firstName} ${lastName}`)
    await OrangeHrmEmployeeAdditionPage.clickSearchCta()
    await OrangeHrmEmployeeAdditionPage.deleteEmployee()
})

    
    test ('addJobRecruitment', async ({OrangeHrmLoginPage, OrangeHrmRecruitmentPage }) => {
    const vacancyName = uniqueName(OrangeHrmConstants.recruitment.vacancyName);
    const position = OrangeHrmConstants.recruitment.position;

    await OrangeHrmRecruitmentPage.selectRecruitmentLeftBar()
    await OrangeHrmRecruitmentPage.clickVacanciesTopNav()
    await OrangeHrmRecruitmentPage.clickAddCta()
    await OrangeHrmRecruitmentPage.enterVacancyName(vacancyName)
    await OrangeHrmRecruitmentPage.clickJobTitleDropdown()
    const managerName = await OrangeHrmLoginPage.getUsernameDropdownText()
    await OrangeHrmRecruitmentPage.enterHiringManager(managerName)
    await OrangeHrmRecruitmentPage.clickSaveCta()
    await OrangeHrmRecruitmentPage.clickVacanciesTopNav()
    await OrangeHrmRecruitmentPage.searchJobTitle()
    await OrangeHrmRecruitmentPage.clickSearchCta()
    await OrangeHrmRecruitmentPage.clickEditCta()
    await OrangeHrmRecruitmentPage.enterPosition(position)
    await OrangeHrmRecruitmentPage.clickSaveCta()
    await OrangeHrmRecruitmentPage.clickVacanciesTopNav()
    await OrangeHrmRecruitmentPage.searchJobTitle()
    await OrangeHrmRecruitmentPage.clickSearchCta()
    await OrangeHrmRecruitmentPage.clickDeleteCta()
    await OrangeHrmRecruitmentPage.confirmBoxDeleteCta()

})
})



