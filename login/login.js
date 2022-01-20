
const path = require('path');
const prompt = require(path.join(__dirname, '../modules/prompt'));

const init = require(path.join(__dirname, '/modules/init'));
const LoginbyphoneNumberClick = require(path.join(__dirname, '/modules/LoginbyphoneNumberClick'));
const typeNubmer = require(path.join(__dirname, '/modules/typeNubmer'));


let login = async () => {

    let page = await init();
    await LoginbyphoneNumberClick(page);
    await typeNubmer(page)
}

login();

module.exports = login
