
const path = require('path');

const init = require(path.join(__dirname, '/modules/init'));
const LoginbyphoneNumberClick = require(path.join(__dirname, '/modules/LoginbyphoneNumberClick'));
const typeNubmer = require(path.join(__dirname, '/modules/typeNubmer'));
const typeSmsCode = require(path.join(__dirname, '/modules/typeSmsCode'));
const coockieSave = require(path.join(__dirname, '/modules/coockieSave'));


let login = async () => {

    let number = '380634778143';

    let page = await init()
    await LoginbyphoneNumberClick(page)
    // await typeNubmer(page, number)
    // await typeSmsCode(page)
    await coockieSave(page, number)
}

login();

module.exports = login
