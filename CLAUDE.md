# Ridgeline CFO

## Hosting & Deployment
- **Platform:** Vercel (auto-deploys on push to main)
- **Custom domain:** ridgelinecfo.io
- **GitHub repo:** necharles17/ridgeline-cfo
- **Branch:** main

## Tech Stack
- Vite 7.x (static site, no framework)
- Tailwind CSS 4.x
- Vanilla JS
- Google Fonts: Inter (sans), Newsreader (serif)

## Color System
- **Steel blue (#3B6B8A)** — primary CTA buttons (Let's Talk, Book a Discovery Call, Schedule Your Free Call)
- **Amber/orange (amber-600)** — accent pops only (checkmarks, Most Popular badge, step circles, highlight text)
- **Forest green (#2D5F3F)** — structural/subtle (tier labels, Growth card border)
- **Cream (#F9F7F2 / #F0EDE5)** — page backgrounds
- **Steel light (#E8EEF3)** — section accent backgrounds (replaces old green tint)
- **Charcoal (#1A1A1A)** — primary text
- **Slate (#4A4A56)** — secondary text
- Hero CTA is white with dark text (stands out against dark hero overlay)

## Project Structure
All website files live under the `Website/` subfolder (Vercel root directory set to `Website`):
- `Website/index.html` — single-page site
- `Website/style.css` — Tailwind theme config and custom styles
- `Website/main.js` — main JS (mobile menu, interactions)
- `Website/calendly.js` — Calendly embed integration
- `Website/dist/` — Vite build output
- `Website/public/` — static assets (logo, favicons)

Other root-level folders:
- `Brand_Kit_Assets_v4/` — logo PNG/JPG exports

## Design Preferences
- Keep accent colors to two roles: blue for actions, orange for visual pops
- Avoid over-spacing on desktop (current standard: py-16 / 4rem)
- Professional, finance-forward aesthetic
- Tier card hierarchy: small uppercase label (tier name) above large serif heading (value prop)
