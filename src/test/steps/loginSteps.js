import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {
 //   await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Navigated to the application")
    await page.goto("https://restful-booker.herokuapp.com/apidoc/index.html");
    
})