import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage';

test.only('open url',async({page})=>{
     let loginPage= new LoginPage(page)

await loginPage.login(page)

    // await page.goto('https://practicetestautomation.com/practice-test-login/');
    // await page.locator('//input[@id="username"]').fill('student');
    // await page.locator('//input[@id="password"]').fill('Password123');
    // await page.locator('//button[@id="submit"]').click();
    // await page.waitForTimeout(2000);
    // await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    // const locattor = page.locator('div[class=post-content] strong');
    // await expect(locattor).toHaveText('Congratulations student. You successfully logged in!');
    // await page.locator('//a[contains(text(),"Log out")]').click();
});

test.only('verify with incorrect username ',async({page}) =>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    let loginPage =new LoginPage(page)

    await loginPage.checkInvalidUserName(page)
   
    // await page.goto('https://practicetestautomation.com/practice-test-login/');
    // await page.locator('//input[@id="username"]').fill('srinivas');
    // await page.locator('//input[@id="password"]').fill('Password123');
    // await page.locator('//button[@id="submit"]').click();
    // await page.waitForTimeout(5000);

});
test.only('verfiy with incorrect password',async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    let loginPage =new LoginPage(page)
    await loginPage.checkInvalidPassword(page)
    // await page.goto('https://practicetestautomation.com/practice-test-login/');
    // await page.locator('//input[@id="username"]').fill('student');
    // await page.locator('//input[@id="password"]').fill('Password@123');
    // await page.locator('//button[@id="submit"]').click();
    // await page.waitForTimeout(5000);
})