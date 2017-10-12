import { browser, $, $$, element, ExpectedConditions as EC } from 'protractor'

export class AppPage {
    protected url: string = '/app/'

    // private userMenu = $('[ng-click="vm.loadCurrentUsage()"]')
    private userMenu = $('#navbar-user-menu')
    private logOut = $('[ng-click="vm.logout()"]')
    private yourProfile = $('.dropdown-menu a[href*="user-settings"]')

    public async LogOut() {
        await browser.wait(EC.visibilityOf(this.userMenu), 10000, 'Avatar button menu to be visible and clickable')
        await this.userMenu.click()
        await browser.wait(EC.visibilityOf(this.logOut), 10000, 'Logout button must be visible and clickable')
        await this.logOut.click()
    }

    public async openUserProfile() {
        await browser.wait(EC.visibilityOf(this.userMenu), 10000, 'Avatar button menu to be visible and clickable')
        await this.userMenu.click()
        await browser.wait(EC.visibilityOf(this.yourProfile), 10000, 'Your profile button must be visible and clickable')
        await this.yourProfile.click()
    }

}