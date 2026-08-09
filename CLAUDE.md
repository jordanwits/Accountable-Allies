# Accountable Allies

Marketing site for Accountable Allies, LLC — Patti's solo strategic-bookkeeping practice (client work by West Wave Creative). Vite 5 + React 18 SPA (plain JSX, no TypeScript) with React Router 6 and Tailwind CSS 3. Ships as a static `vite build`; the client self-hosts on Hostinger — nothing in this repo auto-deploys.

The client brief lives at `brief.txt` (and `brief.docx`) in the repo root and is the source of truth for copy, scope, and Patti's three signature stories. Copy voice rules from the brief: first person ("I", never "we"), plain language, no hype or sales-speak.

## Commands

- `npm run dev` — Vite dev server, pinned to port 5173 (vite.config.js)
- `npm run build` — production build to `dist/` (gitignored)
- `npm run preview` — serve the built `dist/`

There are no lint, test, or typecheck scripts. `.claude/launch.json` defines a `dev` server config for preview tooling.

## Layout

- `index.html` — SPA entry; loads Google Fonts and holds the SEO title/meta
- `src/main.jsx` → `src/App.jsx` — BrowserRouter with 3 routes: `/` (Home), `/about`, `/contact`; App also mounts ScrollManager (hash-scroll + scroll-to-top on nav) and a skip link
- `src/pages/` — Home.jsx, About.jsx, Contact.jsx
- `src/components/` — Nav, Footer, Hero, Marquee, Tiers, DoDont, HowItGoes, BeforeAfter, AboutBlock, SignalLanguage, Scheduler, ScrollReveal
- `src/styles/global.css` — Tailwind directives plus ~240 lines of custom classes (`.font-display`, `.reveal`, etc.) and CSS variables mirroring the palette
- `Public/` — static assets (photos, favicon.svg). Note the capital P: wired via `publicDir: 'Public'` in vite.config.js — do not create a lowercase `public/`
- `scripts/shot.mjs` — puppeteer-core full-page screenshot helper (hardcoded Windows Chrome path; dev server must be running); outputs to `screenshots/`

Styling: Tailwind with a custom palette defined in tailwind.config.js — `cream` (paper background), `forest` (navy), `ink` (warm dark text), `ochre`/`terra` accents. Fonts: Lora (serif/display via `.font-display`), Geist (sans/body), JetBrains Mono. Scroll-in animation is hand-rolled: give an element class `reveal`; ScrollReveal.jsx adds `in` via IntersectionObserver, re-armed on every route change.

## Deployment

No deploy config or CI exists in the repo (no netlify.toml, vercel.json, or .github/). Per `brief.txt`, the client self-hosts on Hostinger and delivery is the static `dist/` output — handed over or uploaded to her account at launch. Pushing to the GitHub remote (`jordanwits/Accountable-Allies`) does not deploy anything.

Deep-link caveat: the app uses BrowserRouter and `Public/` contains no `.htaccess`/rewrite file, so on a plain static host `/about` and `/contact` will 404 on direct load unless an SPA fallback rewrite is added at deploy time.

## Conventions / gotchas

- `motion` is listed in dependencies but never imported anywhere — all animation is CSS keyframes + the ScrollReveal pattern.
- Contact form submits to Web3Forms (`https://api.web3forms.com/submit`) via client-side `fetch` in Contact.jsx, with the access key hardcoded as `WEB3FORMS_ACCESS_KEY` (Web3Forms access keys are meant to be public/client-side). The sidebar `mailto:`/`tel:` links remain as a direct-contact alternative alongside the form.
- `Scheduler.jsx` is a mock booking UI with an explicitly commented Calendly integration seam — three functions at the top return mock data and are meant to be swapped for Calendly API calls. Calendly is in scope per the brief but not wired up.
- `puppeteer-core` (required by scripts/shot.mjs) is present in node_modules but absent from package.json and package-lock.json — a fresh `npm install` will not restore it.
- Only 4 of the 9 images in `Public/` are referenced by src: PattiAndHusband.png, PattiShoebox.png, ledger.jpg, workspace.jpg. The two PNGs are large and unoptimized (6.1 MB and 2.3 MB) and ship to production as-is.
