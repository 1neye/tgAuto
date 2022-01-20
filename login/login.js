
const path = require('path');
const prompt = require(path.join(__dirname, '../modules/prompt'));
const init = require(path.join(__dirname, '/modules/init'));


let login = async () => {

    let page = await init();
    
    // const [button] = await page.$$x("//div[@class='i18n']/button[contains(., 'Log in by phone Number')]");

    // if (button) {
    //     await button.click();
    // }


    console.log(page)


}

login();

module.exports = login
