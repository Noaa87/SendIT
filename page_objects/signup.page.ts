import { browser, $, $$, element, ExpectedConditions as EC } from 'protractor'

export class SignUpPage {
    protected url: string = '/sign-up/'

    private fullName = $('input[name="fullName"]')
    private email = $('input[name="email"]')
    private password = $('input[name="password"]')
    private signUpButton = $('button.login-button')

    async open() {
        return await browser.get(this.url)
    }

    async signUpAs(credentials: { fullname: string, email: string, password: string }) {
        await this.fullName.sendKeys(credentials.fullname)
        await this.email.sendKeys(credentials.email)
        await this.password.sendKeys(credentials.password)
        await browser.wait(EC.elementToBeClickable(this.signUpButton), 2000,
            'SignUp button must became clickable after filling all fields')
        await this.signUpButton.click()
    }
}



/** for test for invalid email:

let signUpPage = new SignUpPage()
await signUpPage.open()
await signUpPage.signUpAs({
    fullname: "Some full name",
    email: 'invalid email',
    password: '123456'
})

*/

/** for test for invalid passwords:

let signUpPage = new SignUpPage()
await signUpPage.open()
await signUpPage.signUpAs({
    fullname: "Some full name",
    email: 'test@test.com',
    password: '1'
})

*/

/** for test for correct login and accept terms and conditions:

let signUpPage = new SignUpPage()
await signUpPage.open()
await signUpPage.signUpAs({
    fullname: "Some full name",
    email: 'test@test.com', // use unique email here (maybe mailinator.com ?)
    password: '123456'
})

await new TermsAndConditionsPage().agreeTermsAndConditions()

*/
