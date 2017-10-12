import { browser, ExpectedConditions as EC, $, $$ } from 'protractor'
import { LoginPage } from '../page_objects/login.page'
import { UserSettings } from '../page_objects/user.settings.page'
import { AppPage } from '../page_objects/app.page'


describe('Test editing of user settings', function () {
    const userSettings = new UserSettings()
    
    beforeEach(async () => {
        // new login for each test case
        new LoginPage().openAndLogin({
            email: 'simonex@sharklasers.com',
            password: 'sendIT'
        })
        await new AppPage().openUserProfile()
    })

    it('should change the name', async function () {
        const epochTime = new Date().getTime().toString()
        
        await userSettings.editName(epochTime)
        await browser.sleep(300)
        await browser.refresh()
        await expect(await $('editable-field[field-value="data.fullName"] input').getAttribute('value')).toEqual(n)
    })


    it('should change the job title', async function () {
        const epochTime = new Date().getTime().toString()
        
        await userSettings.editJobTitle(epochTime)
        await browser.sleep(300)
        await browser.refresh()
        await expect(await $('editable-field[field-value="data.jobTitle"] input').getAttribute('value')).toEqual(n)
    })

    it('should change time format', async function () {
        
        const oldFormat = await userSettings.selectedTimeFormat()
        await userSettings.switchTimeFormat()
        const newFormat = await userSettings.selectedTimeFormat()
        await expect(oldFormat).not.toEqual(newFormat)
    })

})
