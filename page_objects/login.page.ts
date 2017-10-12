import { browser, $, $$, element, ExpectedConditions as EC } from 'protractor'

export class LoginPage {
    protected url: string = '/login/'

    private email = $('input[name="email"]')
    private password = $('input[name="password"]')
    private loginButton = $('button.login-button')

    async open() {
        return await browser.get(this.url)
    }

    async loginAs(credentials: IUser) {
        await this.email.sendKeys(credentials.email)
        await this.password.sendKeys(credentials.password)
        await browser.wait(EC.elementToBeClickable(this.loginButton), 2000,
            'Login button must became clickable after filling all fields')
        await this.loginButton.click()
    }

    async openAndLogin(credentials: IUser) {
        await this.open()
        await this.loginAs(credentials)
    }
}

interface IUser {
    email: string,
    password: string
}
