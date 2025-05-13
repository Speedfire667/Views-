const puppeteer = require('puppeteer');

(async () => {
  const VIDEO_URL = 'https://youtu.be/33DtfUk3sfU?si=sINiidVrCTJUqCIP';

  const browser = await puppeteer.launch({ headless: false }); // headless: false para ver o navegador abrindo
  const page = await browser.newPage();

  for (let i = 1; i <= 10; i++) {
    console.log(`Acessando o vídeo - tentativa ${i}`);
    await page.goto(VIDEO_URL, { waitUntil: 'networkidle2' });

    // Espera 40 segundos simulando visualização
    await page.waitForTimeout(40000);

    // Recarrega a página como se estivesse assistindo de novo
    await page.reload({ waitUntil: 'networkidle2' });

    console.log(`Repetição ${i} concluída`);
  }

  await browser.close();
})();
