

let typeNubmer = async (page, number) => {

    await page.waitForSelector('div[class="input-field-input"]')
    let inpuElem = await page.$$('div[class="input-field-input"]')
    console.log(inpuElem)
    await inpuElem[1].type(number)
    await page.click('button')
}

module.exports =  typeNubmer