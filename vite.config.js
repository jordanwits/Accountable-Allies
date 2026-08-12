import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const SITE_URL = 'https://accountablealliesllc.com'

// Static hosts serve files, not routes: they don't rewrite an unknown path to
// index.html, so a direct visit to /about 404s even though client-side routing
// handles it fine once the app is loaded. Writing a real index.html at each
// route makes direct loads, refreshes and shared links work anywhere we host.
// Unknown paths still 404, which is what we want — App.jsx has no 404 route,
// so a catch-all rewrite would render a blank page instead.
// Keep in sync with the <Route> list in src/App.jsx.
const SPA_ROUTES = ['about', 'contact']

function emitSpaRoutes(routes) {
  let root
  let outDir

  return {
    name: 'emit-spa-routes',
    apply: 'build',
    configResolved(config) {
      root = config.root
      outDir = config.build.outDir
    },
    closeBundle() {
      const dist = resolve(root, outDir)
      const home = readFileSync(join(dist, 'index.html'), 'utf8')
      for (const route of routes) {
        mkdirSync(join(dist, route), { recursive: true })
        // The copies are identical apart from og:url, which link scrapers use to
        // canonicalise a shared URL — left as the homepage it would fold shared
        // /about and /contact links back into /.
        const html = home.replace(
          `<meta property="og:url" content="${SITE_URL}/" />`,
          `<meta property="og:url" content="${SITE_URL}/${route}" />`
        )
        writeFileSync(join(dist, route, 'index.html'), html)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), emitSpaRoutes(SPA_ROUTES)],
  publicDir: 'Public',
  server: {
    port: 5173,
  },
})
