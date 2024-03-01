import {test, expect, PlaywrightTestConfig} from "@playwright/test";
import {MainPage} from "../pages/main";

test("simple test", async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button');
    await page.click('text=Sign in');
    const errorMessage = page.locator('.alert-error');
    await expect(errorMessage).toContainText('Login and/or password are wrong');
})

test('working with inputs', async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    const mainPage = new MainPage(page);
    await mainPage.openSignInPage();
    await mainPage.enterUsername('any');
    await mainPage.enterPassword('password');
    await page.click('text=Sign in');
    const errorMessage = page.locator('.alert-error');
    await expect(errorMessage).toContainText('Login and/or password are wrong');
})

test('assertions', async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    const element = page.locator('h5#signin_button');
    await test.step('check if element is visible', () => {
        expect(element).toBeVisible({timeout: 1000});
    })
    await test.step('check if element is enabled', () => {
        expect(element).toBeEnabled({timeout: 1000});
    })
    await test.step('check if element is not visible', () => {
        expect(element).not.toBeVisible({timeout: 1000});
    })
})