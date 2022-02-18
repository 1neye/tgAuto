
let checkContact = async (page) => {

    let pass;
    let popup = await page.evaluate(() => {
        let el = document.querySelector('.popup-create-contact')

        return el
    })

    if(popup === null) {
        pass = true;
    } else {
        pass = false
    }

    console.log(popup)

    return pass;

}

module.exports = checkContact

