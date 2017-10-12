import { browser, $, $$, element, ExpectedConditions as EC } from 'protractor'

export class UserSettings {

    private name = $('editable-field[field-value="data.fullName"] input')
    private jobTitle = $('editable-field[field-value="data.jobTitle"] input')
    /* this means - find me element, with tag name - editable-field
    and this element should have attribute field-value equal to data.jobTitle
    and inside this element, find element with tag name - input*/
    private timeFormat = $('#user-time-format')
    private options = $$('ul.dropdown-menu a')

    async editJobTitle(newJobTitle: string) {
        await this.jobTitle.clear()
        await this.jobTitle.sendKeys(newJobTitle)
        await this.name.click()
    }

    async editName(newName: string) {
        await this.name.clear()
        await this.name.sendKeys(newName)
        await this.jobTitle.click()
    }


    async selectTime(format: string) {
        await this.options.map(async (option)=> {
            let text = await option.getText()
            if(text.includes(format)) {
                 await option.click()
            }
        })
    }

    async checkTimeFormat () {
        return await this.timeFormat.$('span.value').getText()
    }

    async editTimeFormat () {
        await this.timeFormat.click()
        let options = $$('ul.dropdown-menu a')
        let currentTime = await this.timeFormat.$('span.value').getText()
        if (currentTime.includes('AM') || currentTime.includes('PM')) {
            await this.selectTime('(24h)')
        } else {
            await this.selectTime('(12h)')
        }
    }


}