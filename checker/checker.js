const path = require('path');

const store = require(path.join(__dirname, '../checkStore/store'));
const getContacts = require(path.join(__dirname, './modules/getContacts'));
const tgClicks = require(path.join(__dirname, './modules/tgClicks'));

let checker = async () => {

    phone = '380955617914'

    let data = await store(true)
    await getContacts()
    await tgClicks(data.page, phone)
}

checker()
//.popup-create-contact check if null it means that contact added
module.exports = checker