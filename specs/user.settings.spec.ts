import { browser, ExpectedConditions as EC, $, $$ } from 'protractor'
import { LoginPage } from '../page_objects/login.page'
import { UserSettings } from '../page_objects/user.settings.page'
import { AppPage } from '../page_objects/app.page'

declare let expect:any

describe('Test editing of user settings', function () {
    
    beforeEach(async () => {
        await new LoginPage().open()

        // new login for each test case
        let loginPage = new LoginPage()
        await loginPage.open()
        await loginPage.loginAs({
            email: 'simonex@sharklasers.com',
            password: 'sendIT'
            })

        await new AppPage().openUserProfile()
    })

    it('should change the name', async function () {
        let d = new Date()
        let n = d.getTime().toString()
        let userSettingInstance = new UserSettings()
        await userSettingInstance.editName(n)
        await browser.sleep(300)
        await browser.refresh()
        await expect($('editable-field[field-value="data.fullName"] input').getAttribute('value')).toEqual(n)
    })


    it('should change the job title', async function () {
        let d = new Date()
        let n = d.getTime().toString()
        let userSettingInstance = new UserSettings()
        await userSettingInstance.editJobTitle(n)
        await browser.sleep(300)
        await browser.refresh()
        await expect($('editable-field[field-value="data.jobTitle"] input').getAttribute('value')).toEqual(n)
    })

    it('should change time format', async function () {
        let userSettingInstance = new UserSettings()
        let oldFormat = userSettingInstance.checkTimeFormat()
        await userSettingInstance.editTimeFormat()
        let newFormat = userSettingInstance.checkTimeFormat()
        await expect(oldFormat).not.toEqual(newFormat)
    })

})