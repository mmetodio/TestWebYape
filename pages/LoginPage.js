import {Given} from "@cucumber/cucumber"
//import { chromium, Page, Browser } from "@playwright/test";


exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page;


       
    }

    async gotoLoginPage(){
        await this.page.goto('https://restful-booker.herokuapp.com/apidoc/index.html');
    }

    async login(username, password){


    }



}