const fs = require('fs');
const path = require('path');


let setStore = async (page) => {

    let stPath = path.join(__dirname, '../../login/coockie/3806347781430.5942235401743701.json')
    let getObj = fs.readFileSync(stPath)
    getObj = await JSON.parse(getObj)

    await page.evaluate((getObj) => {
        localStorage.clear();
        for (let key in getObj) {
            localStorage.setItem(key, getObj[key]);
        }
    }, getObj);

    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

}






module.exports = setStore