const path = require('path');

const store = require(path.join(__dirname, '../checkStore/store'));
const getContacts = require(path.join(__dirname, './modules/getContacts'));

let checker = async () => {
    await store(true)
    await getContacts()
}
//sidebar-header__btn-container
// document.querySelector('.tgico-user)
// document.querySelector('button.btn-corner')
// document.querySelector('.input-field-phone > .input-field-input') inner phone
// document.querySelector('.name-fields > .input-field > .input-field-input') inner phone
// document.querySelector('.popup-header > .btn-primary') click add
module.exports = checker