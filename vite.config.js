import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

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
      for (const route of routes) {
        mkdirSync(join(dist, route), { recursive: true })
        copyFileSync(join(dist, 'index.html'), join(dist, route, 'index.html'))
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
