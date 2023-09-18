import {test, expect} from '@playwright/test';
import { LoginPage } from '../tests/api/getbookinglds';

test ('test', async({page}) => {

//Login revisor
const Login = new LoginPage(page)
await Login.gotoLoginPage()

await page.waitForTimeout(5000)

})