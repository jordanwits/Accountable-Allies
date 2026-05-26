import puppeteer from 'puppeteer-core'

const url = process.argv[2] || 'http://localhost:5173/'
const outPath = process.argv[3] || 'screenshots/home-full2.png'

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 1 },
})

const page = await browser.newPage()
await page.goto(url, { waitUntil: 'networkidle0' })
// Wait a tick for fonts and intersection observer
await new Promise((r) => setTimeout(r, 1200))

// Force all reveal classes to "in" so screenshot captures everything
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'))
  // Scroll through page to trigger any lazy loads
  return new Promise((resolve) => {
    let y = 0
    const max = document.body.scrollHeight
    const tick = () => {
      window.scrollTo(0, y)
      y += 600
      if (y < max) setTimeout(tick, 60)
      else {
        window.scrollTo(0, 0)
        setTimeout(resolve, 200)
      }
    }
    tick()
  })
})

await new Promise((r) => setTimeout(r, 500))
await page.screenshot({ path: outPath, fullPage: true })
console.log('Wrote', outPath)
await browser.close()
