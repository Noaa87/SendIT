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


