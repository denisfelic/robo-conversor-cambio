const puppeteer = require('puppeteer');

async function robot (moeda) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${moeda.base}+para+${moeda.final}&oq=${moeda.base}+para+${moeda.final}`);
    //await page.screenshot({ path: 'example.png' });
    const resultado = await page.evaluate(() => {
        return document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value;

    });
    console.log(`1 ${moeda.base} equivale a ${resultado} ${moeda.final}`);
    await browser.close();
}


module.exports = robot;
