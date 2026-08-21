import { writeFile } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const chrome =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const url = "http://localhost:3000/apresentacao.html";
const out = path.resolve("Arcano-Digital.pdf");

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ["--no-sandbox", "--disable-gpu"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });
  await page.evaluate(async () => {
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            }),
      ),
    );
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await new Promise((r) => setTimeout(r, 800));
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "10mm", bottom: "12mm", left: "10mm", right: "10mm" },
  });
  await writeFile(out, pdf);
  await writeFile(path.resolve("public", "Arcano-Digital.pdf"), pdf);
  console.log(`PDF gerado: ${out}`);
} finally {
  await browser.close();
}
