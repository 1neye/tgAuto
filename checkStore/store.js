const path = require('path');
const init = require(path.join(__dirname, '/modules/init'));
const setStore = require(path.join(__dirname, '/modules/setStore'));


let store = async () => {
    let page = await init()
    await setStore(page)
}

store()

module.exports = store