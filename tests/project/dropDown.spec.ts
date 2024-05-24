import {test as it} from "@playwright/test"
import { DropDown } from "../../page_object/project/DropDown";

it.describe('DROP DOWN', () => {
    it ('interact with dropDown menu', ({page}) => {
        let dropDown = new DropDown(page);
       // await page.goto('')
       // await dropDown.interactWithDropDown()
    })
})