const path = require('path')
const fs = require('fs')

const contactsPath = path.join(__dirname, '../contacts.json')

let getContacts = async () => {

    const contactsBuffer = fs.readFileSync(contactsPath)
    const contactsObj = JSON.parse(contactsBuffer)
    let contacts = []
    for(let el of contactsObj) {
        let obj = el
        arr.push(obj.phone)
    }

    return contacts
    
}


module.exports = getContacts;