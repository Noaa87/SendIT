import { browser, $, $$, element, ExpectedConditions as EC, Key} from 'protractor'

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
        await this.jobTitle.sendKeys(Key.ENTER)
    }

    async editName(newName: string) {
        await this.name.clear()
        await this.name.sendKeys(newName)
        await this.name.sendKeys(Key.ENTER)
    }


    async switchTimeFormatTo(format: '24h' | '12h') {
        await this.options.map(async (option) => {
            const text = await option.getText()
            if (text.includes(format)) {
                await option.click()
            }
        })
    }

    async selectedTimeFormat(): Promise<string> {
        return await this.timeFormat.$('span.value').getText()
    }

    async switchTimeFormat() {
        await this.timeFormat.click()
        const currentTimeFormat = await this.selectedTimeFormat()
        if (currentTimeFormat.includes('AM') || currentTimeFormat.includes('PM')) {
            await this.switchTimeFormatTo('24h')
        } else {
            await this.switchTimeFormatTo('12h')
        }
    }


}
