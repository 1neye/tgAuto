const path = require('path');
const puppeteer = require(path.join(__dirname, '../../modules/puppeteer'));


let loginurl = 'https://web.telegram.org/k/'

let init = async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });

    const page = await browser.newPage();
    await page.goto(`${loginurl}`, {
        waitUntil: 'load'
    });

    return page
}

module.exports = init