import{test as baseTest} from '@playwright/test';

import { loginPage } from '../../Pages/OrangeHrmPages/loginPage';
import { recruitmentPage } from '../../Pages/OrangeHrmPages/recruitmentPage';
import { employeePage } from '../../Pages/OrangeHrmPages/employeePage';

type Pages = {
    OrangeHrmLoginPage: loginPage
    OrangeHrmEmployeeAdditionPage: employeePage
    OrangeHrmRecruitmentPage: recruitmentPage
}

const testPages = baseTest.extend<Pages>({
    
    OrangeHrmLoginPage: async ({ page }, use) => {
    await use(new loginPage(page));
    },
    OrangeHrmEmployeeAdditionPage: async ({ page }, use) => {
    await use(new employeePage(page));
    },
    OrangeHrmRecruitmentPage: async ({ page }, use) => {
    await use(new recruitmentPage(page));
    },
})

export  const test = testPages; 
export const expect = test.expect;
