// Regenerates the favicon set and the social link-preview card from the logo
// artwork in Public/. Run after replacing AAlogo_Icon.png or AAlogo.png:
//
//   node scripts/brand-assets.mjs
//
// AAlogo_Icon.png is 304x239, so it is padded to a square here — an unpadded
// non-square icon gets stretched by iOS when used as an apple-touch-icon.
// Both source PNGs have transparent backgrounds, so the card and the touch
// icon are composited onto cream (#FAF8F4) to match the site's paper.
//
// Like scripts/shot.mjs this needs puppeteer-core, which is present in
// node_modules but missing from package.json — a fresh npm install won't
// restore it.
import puppeteer from 'puppeteer-core'
import { readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const PUB = resolve(process.cwd(), 'Public')
const CREAM = '#FAF8F4'

const dataUri = (file) =>
  'data:image/png;base64,' + readFileSync(join(PUB, file)).toString('base64')

const icon = dataUri('AAlogo_Icon.png')
const logo = dataUri('AAlogo.png')

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
})
const page = await browser.newPage()

// Draws `src` centred, letterboxed into an `art` x `art` box, inside a w x h
// frame, and writes the result to Public/<out>.
async function render({ out, w, h, src, art, background }) {
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 })
  await page.setContent(`<style>
    html,body{margin:0;padding:0;background:transparent}
    .frame{width:${w}px;height:${h}px;display:flex;align-items:center;justify-content:center;
           ${background ? `background:${background}` : ''}}
    img{width:${art}px;height:${art}px;object-fit:contain}
  </style><div class="frame"><img id="art" src="${src}"></div>`)
  await page.evaluate(() => document.getElementById('art').decode())
  await page.screenshot({
    path: join(PUB, out),
    omitBackground: !background,
    clip: { x: 0, y: 0, width: w, height: h },
  })
  console.log(`Wrote Public/${out} (${w}x${h})`)
}

await render({ out: 'favicon-32.png', w: 32, h: 32, src: icon, art: 31 })
await render({ out: 'favicon.png', w: 512, h: 512, src: icon, art: 472 })
await render({
  out: 'apple-touch-icon.png',
  w: 180,
  h: 180,
  src: icon,
  art: 150,
  background: CREAM,
})
// 1200x630 is the aspect every scraper crops to; a square source would lose the
// wordmark off the top and bottom.
await render({
  out: 'og-image.png',
  w: 1200,
  h: 630,
  src: logo,
  art: 540,
  background: CREAM,
})

await browser.close()
