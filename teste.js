const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // mostra o navegador
  const page = await browser.newPage();

  while (true) {
    await page.goto('https://youtu.be/lIEZ5rZj7Gk?si=vNEu2ccbGjqYW4T0'); // substitua por sua página de teste
    console.log('Página aberta. Esperando 2 minutos...');
    await new Promise(r => setTimeout(r, 2 * 60 * 1000)); // espera 2 minutos
  }
})();
