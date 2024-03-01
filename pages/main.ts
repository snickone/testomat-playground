import {Page} from "playwright";
import {test} from "@playwright/test";
import {step} from "../decorators/step-decorator";
//import {FunctionNameLogger} from "../decorators/step-decorator";

export class MainPage {
    constructor(page: Page) {
        this.page = page;
    }
    page: Page;

    @step
    async openSignInPage(): Promise<void>{
            await this.page.click('#signin_button');
    }

    @step
    async enterPassword(password: string): Promise<void>{
        await this.page.fill('#user_password', password);
    }

    @step
    async enterUsername(username: string): Promise<void>{
        await this.page.fill('#user_login', username);
    }
}