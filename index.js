const puppeteer = require('puppeteer');

console.log('olá edymDelas');

async function robo(){
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const moedaBase = 'dolar'
  const moedaFinal = 'real'
  const urlDoProjeto = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDI5NzBqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8`
  await page.goto(urlDoProjeto);
  //await page.screenshot({path: 'example.png'});

  const resultado = await page.evaluate(() => {
    return document.querySelector('#knowledge-currency__updatable-data-column > div.ePzRBb > div > div.MWvIVe.egcvbb > input').value
});

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)

  await browser.close();
};

robo();