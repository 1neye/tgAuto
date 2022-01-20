

let typeNubmer = async (page) => {

    await page.waitForSelector('div[class="input-field-input"]')
    let inpuElem = await page.$$('div[class="input-field-input"]')
    console.log(inpuElem)
    await inpuElem[1].type('380634778143')
    await page.click('button')
}

module.exports =  typeNubmer