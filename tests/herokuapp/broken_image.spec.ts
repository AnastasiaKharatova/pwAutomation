import {test as it} from '@playwright/test'

it('Testing Broken images', async ({page}) => {
  await page.bringToFront() //('https://the-internet.herokuapp.com/broken_images')
  
  await page.route('**/*', route => {
    route.continue().catch(() => console.log('Error'))
  })
  const imag = await page.evaluate(async () => {
    const brokenImages = Array.from(document.querySelectorAll('img'))
    const arrayOfImages = []

    for(const img of brokenImages){
        const response = await fetch(img.src).catch(()=>null)   // respond return null 

        if(!response || response.status != 200){  //if respond will get 404 then we will get false => true
            arrayOfImages.push(img.src)
        }
    }
    return arrayOfImages
  })
  console.log(imag.length)
  for(const src of imag){
    console.log(src)
  }
})