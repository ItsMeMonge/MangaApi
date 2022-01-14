const puppeteer = require('puppeteer');

async function search(titulo){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  console.log(titulo)
  await page.goto(`https://mangatube.site/wp-json/site/search/?keyword=${titulo}&type=undefined&nonce=5e74532793`);

  // Get the "viewport" of the page, as reported by the page.
  const resSearch = await page.evaluate(() => {
    return {
      json: document.querySelector("body > pre").innerText,

    };
  });

  console.log('Response:', resSearch);

  await browser.close();
};

module.exports = {
  search,
}