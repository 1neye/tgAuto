

let checkLogin = async (page) => {
    let pass = await page.evaluate(() => {
        let el = document.querySelector('.sidebar-header')

        return el
    })

    if (pass === null) {
        console.log('Pass === false, над перезайти в акк');
        return false
    } else {
        console.log('Pass === true, зашел в аккаунт');
        return true
    }

}

module.exports = checkLogin