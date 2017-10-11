import { browser, ExpectedConditions as EC, $, $$ } from 'protractor'
import { LoginPage } from '../page_objects/login.page'

declare let expect:any

describe('Test SendIT web-app', function () {
    
    beforeEach(async () => {
        await new LoginPage().open()
    })

    it('should show alert on invalid email submission', async function () {
        let loginPage = new LoginPage()
        await loginPage.open()
        await loginPage.loginAs({
            email: 'invalid email',
            password: '123456'
            })
        await expect($('[ng-if="vm.error"]').getText()).toEqual('This is not a valid e-mail address. Please fix it and try again.') 
    })

    it('should show alert on non registered email', async function () {
        let d = new Date()
        let n = d.getTime();
        let loginPage = new LoginPage()
        await loginPage.open()
        await loginPage.loginAs({
            email: n+'test@test.com',
            password: '123456'
            })
        await expect($('[ng-if="vm.error"]')).toAppear()
        await expect($('[ng-if="vm.error"]').getText()).toEqual('Wrong e-mail or password. Try again please.')
    })

    it('should get alert on invalid password submission (<6 chars)', async function () {
        let loginPage = new LoginPage()
        await loginPage.open()
        await loginPage.loginAs({
            email: 'testemail@gmail.com',
            password: '12345'
            }
        )
        await expect($('[ng-if="vm.error"]').getText()).toEqual('This password is invalid. Minimal length is 6 characters.') 
    })

    it('should login correctly with valid credentials', async function () {
        let loginPage = new LoginPage()
        await loginPage.open()
        await loginPage.loginAs({
            email: 'simonex@sharklasers.com',
            password: 'sendIT'
            })
        await expect(browser.getCurrentUrl()).toContain('/app/')
    })

})