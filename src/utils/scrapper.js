const puppeteer = require("puppeteer");
const fs = require("fs");

const ANTIQUES = [];

const scrapper = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({ width: 1080, height: 1024 });

  const arrayDivs = await page.$$(".product-container");

  for (const antiquesDiv of arrayDivs) {
    let price = await antiquesDiv.$eval(
      ".content_price",
      (el) => el.textContent
    );
    let title = await antiquesDiv.$eval(
      ".product-name",
      (el) => el.textContent
    );
    let img = await antiquesDiv.$eval("img", (el) => el.src);


    const antique = {
      title,
      price,
      img,
    };

    console.log(antique);

    ANTIQUES.push(antique);
  }

  print(ANTIQUES);
};

const print = (ANTIQUES) => {
  fs.writeFile("antiques.json", JSON.stringify(ANTIQUES), () => {
    console.log("Escrito");
  });
};

module.exports = { scrapper }