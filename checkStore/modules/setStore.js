const fs = require('fs');
const path = require('path');


let setStore = async (page) => {

    await page.waitForTimeout(3000)

    let stPath = path.join(__dirname, '../../login/coockie/3806347781430.5942235401743701.json')
    let getObj = fs.readFileSync(stPath)
    getObj = await JSON.parse(getObj)


    await page.evaluate(async () => {
        window.localStorage.clear();
    })


    // await page.evaluate(() => {
    //     let sessionData = {key : value};
    //     window.localStorage.setItem('data', JSON.stringify(sessionData));
    //     console.log('3')
    // })

    // for(let el in getObj) {
    // await page.evaluate(async (el, getObj) => {
    //         window.localStorage.setItem(el, getObj[el]);
    //         console.log('ff')
    // })
    // console.log(el + ' ' + getObj[el])

    await page.evaluate((getObj) => {
        localStorage.clear();
        for (let key in getObj) {
            localStorage.setItem(key, getObj[key]);
        }
    }, getObj);
    console.log(typeof getObj)

}






module.exports = setStore