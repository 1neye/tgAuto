const ps = require('prompt-sync');
const prompt = ps();



let typeSmsCode = async (page) => {
    await page.waitForSelector('input[type="tel"]')
    let val = await prompt('Sms code: ')
    await page.type('input[type="tel"]', val)
} 

module.exports = typeSmsCode