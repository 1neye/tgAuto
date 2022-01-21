const fs = require('fs').promises;
const path = require('path');

let coockieSave = async (page, number) => {

    // await page.waitForSelector('.connection-status-bottom') //left telegram panel when you authorized
    // const coockies = await page.cookies()

    // console.log(coockies)
    await page.waitForTimeout(3000)

    let data = await page.evaluate(() => {
        let json = {};
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
        json[key] = localStorage.getItem(key);
        }
        return json;
    });

    // let data = await page.evaluate(async () => {
    //     let obj = localStorage; 
    //     return obj
    // })

    console.log(data)

    let pathCoockie = path.join(__dirname, `../coockie/${number}${Math.random() * 1}`)
    
    // fs.writeFileSync(`${pathCoockie}.json`, JSON.stringify(coockies), {flag: "w"}, function(err){
    //     if(err) throw err
    //     console.log('Coockie written to file, ', number)
    // })

    await fs.writeFile(`${pathCoockie}.json`, JSON.stringify(data, null, 2));
}


module.exports = coockieSave;