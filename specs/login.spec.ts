import { browser, ExpectedConditions as EC, $, $$ } from 'protractor'
import { LoginPage } from '../page_objects/login.page'

describe('Test SendIT web-app', function () {
    const loginPage = new LoginPage()

    beforeEach(async () => {
        await loginPage.open()
    })

    it('should show alert on invalid email submission', async function () {
        await loginPage.loginAs({
            email: 'invalid email',
            password: '123456'
        })
        await expect(await $('[ng-if="vm.error"]').getText()).toEqual('This is not a valid e-mail address. Please fix it and try again.') 
    })

    it('should show alert on non registered email', async function () {
        let epochTime = new Date().getTime();
        await loginPage.loginAs({
            email: `${epochTime}_test@test.com`,
            password: '123456'
            })
        await expect($('[ng-if="vm.error"]')).toAppear()
        await expect(await $('[ng-if="vm.error"]').getText()).toEqual('Wrong e-mail or password. Try again please.')
    })

    it('should get alert on invalid password submission (<6 chars)', async function () {
        await loginPage.loginAs({
            email: 'testemail@gmail.com',
            password: '12345'
            }
        )
        await expect(await $('[ng-if="vm.error"]').getText()).toEqual('This password is invalid. Minimal length is 6 characters.') 
    })

    it('should login correctly with valid credentials', async function () {
        await loginPage.loginAs({
            email: 'simonex@sharklasers.com',
            password: 'sendIT'
            })
        await expect(await browser.getCurrentUrl()).toContain('/app/')
    })

})
