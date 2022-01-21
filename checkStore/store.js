const path = require('path');
const getBrowser = require('./modules/getBrowser');
const getPage = require(path.join(__dirname, '/modules/getPage'));
const setStore = require(path.join(__dirname, '/modules/setStore'));
const checkLogin = require(path.join(__dirname, '/modules/checkLogin'));

let store = async (behavior = false) => {
    let browser = await getBrowser()
    let page = await getPage(browser)
    await setStore(page)
    let pass = await checkLogin(page)
    if(!behavior || !pass) await browser.close()
}



store()

module.exports = store