const path = require('path');
const puppeteer = require(path.join(__dirname, '../../modules/puppeteer'));


let loginurl = 'https://web.telegram.org/k/'

let init = async (browser) => {

    const page = await browser.newPage();

    await page.goto(loginurl)

    return page
}

module.exports = init  