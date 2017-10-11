import { browser, $, $$, element, ExpectedConditions as EC } from 'protractor'

export class TermsAndConditionsPage {
    protected url: string = '/terms/'

    private agreeTerms = $('button.agree-button')

    public async agreeTermsAndConditions() {
        await browser.wait(EC.and(
            EC.visibilityOf(this.agreeTerms),
            EC.elementToBeClickable(this.agreeTerms)), 10000,
            'Agree button must be visible and clickable, check that you actually signed up, and Terms and Conditions page are loaded')

        await this.agreeTerms.click()
    }
}