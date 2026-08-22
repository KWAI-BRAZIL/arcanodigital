import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = pathToFileURL(path.join(root, "scripts/proofs.html")).href;
const out = path.join(root, "public/proofs");

const shots = [
  ["roas", "proof-roas.png"],
  ["whatsapp-recorde", "proof-whatsapp-recorde.png"],
  ["vendas", "proof-vendas.png"],
  ["conversao", "proof-conversao.png"],
  ["whatsapp-feedback", "proof-whatsapp-feedback.png"],
  ["ads", "proof-ads.png"],
  ["vyria", "proof-vyria.png"],
];

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 780, height: 1040, deviceScaleFactor: 3 });
await page.goto(html, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);

for (const [id, file] of shots) {
  const el = await page.$(`#${id}`);
  await el.screenshot({
    path: path.join(out, file),
    type: "png",
    captureBeyondViewport: false,
  });
  console.log("wrote", file);
}

await browser.close();
