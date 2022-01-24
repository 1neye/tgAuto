

let tgClicks = async (page, phone) => {

    await page.waitForSelector('.sidebar-header__btn-container')
    await page.click('.sidebar-header__btn-container')
    await page.click('.tgico-user')
    await page.click('button.btn-corner')
    await page.click('.input-field-phone > .input-field-input', {clickCount: 3})
    await page.type('.input-field-phone > .input-field-input', phone)
    await page.type('.name-fields > .input-field > .input-field-input', phone)
    await page.click('.popup-header > .btn-primary')

}

module.exports = tgClicks;