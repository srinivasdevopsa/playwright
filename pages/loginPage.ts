import{test,expect,type Page,type Locator} from '@playwright/test'
import * as data from '../testData/data.json'
export class LoginPage{
    private page:Page
    readonly inputUserName:Locator
    readonly inputPassWord:Locator
    readonly btnSubmit:Locator
    readonly btnLogout:Locator
    readonly locattor:Locator
    readonly error:Locator
    readonly passwordError:Locator
    constructor( page : Page){
        this.page = page;
        this.inputUserName = page.locator('//input[@id="username"]');
        this.inputPassWord = page.locator('//input[@id="password"]');
        this.btnSubmit = page.locator('//button[@id="submit"]');
        this.btnLogout = page.locator('//a[contains(text(),"Log out")]');
        this.locattor = page.locator('div[class=post-content] strong');
        this.error=page.locator('//div[@id="error"][@class="show"]');
        this.passwordError=page.locator('//div[@id="error"][@class="show"] ');
    }
    async login(page) {

    await this.page.goto('./');
    await this.inputUserName.fill(data.userName);
    await this.inputPassWord.fill(data.passWord);
    await this.btnSubmit.click();
    await this.page.waitForTimeout(2000);
    await expect(this.page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(this.locattor).toHaveText('Congratulations student. You successfully logged in!');
    await this.btnLogout.click();

    }
    async checkInvalidUserName(page){
        await this.inputUserName.fill(data.invaliduserName);
        await this.inputPassWord.fill(data.passWord);
        await this.btnSubmit.click();
        await expect(this.error).toBeVisible();
        await expect(this.error).toHaveText('Your username is invalid!');
    }
    async checkInvalidPassword(page){
        await this.inputUserName.fill(data.userName);
        await this.inputPassWord.fill(data.invalidpassword);
        await this.btnSubmit.click();
        await expect(this.passwordError).toBeVisible();
        await expect(this.passwordError).toHaveText('Your password is invalid!');
    }

    
}
