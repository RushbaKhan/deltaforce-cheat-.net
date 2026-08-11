# Delta Force Cheats — Marketing Site Static Astro 7 site for [deltaforcecheat.net](https://deltaforcecheat.net). Primary SEO keyword: **delta force cheats** (secondary: delta force cheats, aimbot, ESP). ## Stack - Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages deployment with `functions/_middleware.js` ## Quick start ```bash
npm install
npm run generate:i18n # after editing scripts/i18n-data/*
node scripts/generate-blog-posts.mjs
npm run dev
``` Build and validate sitemaps: ```bash
npm run build:validate
``` Fetch fresh Delta Force WebP images (optional): ```bash
npm run fetch:images
npm run optimize:images
``` ## Deploy (Cloudflare Pages) 1. Create a Cloudflare Pages project named **delta-forcehacks**
2. Connect this repo or upload `dist/` after `npm run build`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add custom domain **deltaforcecheat.net** (apex) and redirect **www** → apex
6. Enable SSL **Always Use HTTPS**
7. Legacy Fortnite domains 301 via `functions/_middleware.js` CLI deploy: ```bash
npm run pages:deploy
``` ## Environment - Node.js >= 22.12.0
- Checkout URL: Delta Force product (`siteConfig.checkoutUrl` in `src/data/site.ts`) ## License Private — for deltaforcecheat.net deployment only.
