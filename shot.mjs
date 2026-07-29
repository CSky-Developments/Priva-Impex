import { chromium } from "playwright-core";

const BASE = "http://localhost:3100";
const pages = [
  ["home", "/"],
  ["products", "/products"],
  ["product-detail", "/products/hand-tools"],
  ["contact", "/contact"],
  ["global-reach", "/global-reach"],
];

// Reuse the already-installed Chromium (build 1223) rather than pulling a
// second copy just to match playwright-core's pinned revision.
const browser = await chromium.launch({
  executablePath:
    process.env.LOCALAPPDATA +
    "\\ms-playwright\\chromium-1223\\chrome-win64\\chrome.exe",
});
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();

const errors = [];
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
page.on("pageerror", (e) => errors.push(`PAGEERROR: ${e.message}`));

for (const [name, path] of pages) {
  await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `.shots/${name}-top.png` });
  await page.screenshot({ path: `.shots/${name}-full.png`, fullPage: true });
  const h1 = await page.locator("h1").first().innerText().catch(() => "(none)");
  console.log(`${name.padEnd(15)} h1="${h1.replace(/\n/g, " ")}"`);
}

// Mobile check on the homepage
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.screenshot({ path: ".shots/home-mobile.png", fullPage: true });

console.log(
  errors.length ? `\nCONSOLE ERRORS:\n${errors.join("\n")}` : "\nNo console errors.",
);

await browser.close();
