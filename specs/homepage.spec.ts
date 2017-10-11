import { browser, ExpectedConditions as EC, $, $$ } from 'protractor'
import { SignUpPage } from '../page_objects/signup.page'
import { TermsAndConditionsPage } from '../page_objects/terms.conditions.page'
import { AppPage } from '../page_objects/app.page'

declare let expect:any

describe('Verifying project generation ', function () {
    beforeEach(async () => {
        await new SignUpPage().open()
    })

    it('should get alert on invalid email submission', async function () {
        let signUpPage = new SignUpPage()
        await signUpPage.open()
        await signUpPage.signUpAs({
            fullname: "Some full name",
            email: 'invalid email',
            password: '123456'
            }
        )
        await expect($('[ng-if="vm.error"]').getText()).toEqual('This is not a valid e-mail address. Please fix it and try again.') 
    })

    it('should get alert on invalid password submission (<6 chars)', async function () {
        let signUpPage = new SignUpPage()
        await signUpPage.open()
        await signUpPage.signUpAs({
            fullname: "Some full name",
            email: 'testemail@gmail.com',
            password: '12345'
            }
        )
        await expect($('[ng-if="vm.error"]').getText()).toEqual('This password is invalid. Minimal length is 6 characters.') 
    })

    xit('it should sign up with valid credentials, accept terms and logout', async function () {
        let d = new Date()
        let n = d.getTime();
        let signUpPage = new SignUpPage()
        await signUpPage.open()
        await signUpPage.signUpAs({
            fullname: "Test Simone",
            email: n+'@test.com',
            password: '123456'
            }
        )
        await new TermsAndConditionsPage().agreeTermsAndConditions()
        await new AppPage().logOutTest()
    })
})



    // it('Checking that created project can start and communicate with browser', async function () {
    //     await expect($$('div').first()).toAppear('Atleast one div should appear on the page')
    // })

    // afterAll(() => {
    //     console.warn(`
    //         If all test is passed, and no errors in console - this means you are good to go! 
    //         Just remove this describe block from specs/homepage.spec.ts file. And start writing your tests!

    //         Please check README.md in generated project for future details`)
    // })
    // })