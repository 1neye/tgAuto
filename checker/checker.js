const path = require('path');

const store = require(path.join(__dirname, '../checkStore/store'));
const getContacts = require(path.join(__dirname, './modules/getContacts'));
const tgClicks = require(path.join(__dirname, './modules/tgClicks'));
const checkContact = require(path.join(__dirname, './modules/checkContact'));

let checker = async () => {

    phone = '380955617914'

    let data = await store(true)

    let page = data.page;
    let browser =  data.browser;

    await getContacts()
    await tgClicks(page, phone)
    let pass = await checkContact(page)
    console.log(pass)
}

checker()
//.popup-create-contact check if null it means that contact added
// нужно поставить дилеи правильные в боте ибо сейчас не работает

module.exports = checker