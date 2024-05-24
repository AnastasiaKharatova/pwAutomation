import {Page} from "@playwright/test"
export class DragAndDrop {
    readonly page:Page
      constructor(page:Page){
        this.page = page
      }

      get dragEl(){
        return '[draggable="true"]'
      }
      get drophereEl(){
        return '#mydropzone'
      }
      get dropList(){
        return '#droppedList'
      }
      public async dragAndDropElementy(text:string){
        await this.page.locator(this.dragEl,{hasText: text}).dragTo(this.page.locator(this.drophereEl))
      }
}