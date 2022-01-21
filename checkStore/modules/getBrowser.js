const path = require('path');
const puppeteer = require(path.join(__dirname, '../../modules/puppeteer'));


let browser = async () => {

    const browser = await puppeteer.launch({
        headless: false,
    });
    
    return browser
}

module.exports = browser;