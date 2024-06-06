import{Page} from "@playwright/test"

export class CheckBox {
    readonly page: Page;
    constructor(page:Page) {
        this.page = page;
    }
    get expandToggle(){
       return '[class="ret=icon ret-icon-expand-class]';
    }
    get subDirectoryCBox(){
        return '[class="ret-icon ret-icon-uncheck]'
    }
    get checkedBox(){
        return '[class="ret-icon ret-icon-check"]'
    }

    async expandOptions(): Promise<void>{
        while ((await this.page.locator(this.expandToggle).count())> 0){
            await this.page.locator(this.expandToggle).first().click()
        }
    }

    async checkAll(){
        await this.page.locator(this.subDirectoryCBox).first().check()
        await this.page.locator('input[type=checkbox]').first().check()
    }
    
}