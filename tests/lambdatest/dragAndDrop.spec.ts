import { test as it } from "@playwright/test";

it.describe('DRAG AND DROP', () => {
    it('drag and drop', ({page}) => {
        //let dragAndDrop = new DragAndDrop(page)
        page.goto(`${process.env.LAMBDA}/selenium-playground/drag-and-drop-demo`)
    })
})