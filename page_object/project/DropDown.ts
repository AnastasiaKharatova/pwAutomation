import {Page} from "@playwright/test"

export class DropDown{
    readonly page:Page;
    constructor(page:Page){
        this.page = page;
    }

    get dropDownInput(){
        return '.header-container . appearance-outline'
    }
    get dropDownList(){
        return  '.option-list nb-option'
    }

    //const text = ['Light', 'Dark', 'Cosmic', 'Corporate']
    async interactWithDropDown(){
        await this.page.locator(this.dropDownInput).click()
       // expect(this.page.locator(this.dropDownList)).toHaveText(this.text)
    }
}

//
//this.page.getByRole('list') ul tag
//this.page.getByRole('listitem) li tag