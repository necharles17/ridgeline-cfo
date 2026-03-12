# Ridgeline CFO

Fractional CFO & FP&A consultancy website. Built with Vite + Tailwind CSS v4.

## Local Development

```bash
cd Website
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) for the main site.
Open [http://localhost:5173/audit](http://localhost:5173/audit) for the diagnostic hub.

## Production Build

```bash
npm run build
npm run preview   # preview the build locally
```

## Deploy

Push to `main` and Vercel auto-deploys. Live at [ridgelinecfo.io](https://ridgelinecfo.io).

- **Vercel root directory**: `Website`
- **Build command**: `npm run build`
- **Output directory**: `dist`

---

## Site Structure

### Main Site (`Website/index.html`)
Single-page marketing site with sections: Hero, What We Do, Why Fractional CFO, Services/Pricing, About, FAQ, Contact (Calendly).

### Diagnostic Hub (`Website/audit.html` + `Website/audit.js`)
Self-serve lead magnet at `/audit`. Visitors pick one of three scored audits, answer 7 questions, submit contact info, and see a results screen. Nick receives a lead notification via Formspree on every submission.

**Audits:**
- Financial Health Check (max 19 pts)
- CFO Readiness Score (max 18 pts)
- Blind Spots Audit (max 21 pts)

**Scoring:**
- 82-100: Excellent
- 62-81: Good
- 40-61: Needs Work
- 0-39: Critical

**Formspree endpoint:** `https://formspree.io/f/xqeybbgz`

---

## Updating Content

### Main site copy
Edit sections directly in `Website/index.html`.

### Quiz questions and findings
Edit `Website/audit.js`. The `AUDITS` array at the top of the file contains all questions, answer options, point values, and findings copy organized by audit and score tier.

A human-readable copy review file lives at `Quiz-Copy-Review v2.md` in the repo root. Edit that file and sync changes back to `audit.js`.

### Changing the Calendly link
Update the URL in `Website/calendly.js`:

```js
const CALENDLY_URL = "https://calendly.com/your-new-link";
```

---

## Key Files

| File | Purpose |
|------|---------|
| `Website/index.html` | Main single-page site |
| `Website/audit.html` | Diagnostic hub page shell |
| `Website/audit.js` | Full quiz app logic |
| `Website/style.css` | Tailwind theme config and custom styles |
| `Website/main.js` | Mobile menu and scroll animations |
| `Website/calendly.js` | Calendly embed integration |
| `Website/public/og-image.png` | Open Graph share image |
| `CLAUDE.md` | Project context and rules for AI-assisted development |
| `Quiz-Copy-Review v2.md` | Human-readable quiz copy for editing |

---

## Copy Rules

- No em dashes anywhere on the site. Use commas, colons, or rewrite the sentence.

---

## Session Log

### 2026-03-12
- Built `/audit` financial diagnostic hub from scratch (3 audits, scoring, email gate, results screen)
- Wired up Formspree lead notifications (`xqeybbgz`)
- Added "Free Audit" nav link to main site (desktop and mobile)
- Added audit promo section to homepage (before "How we work together")
- Added Open Graph meta tags to both pages, using banner as OG image
- Removed all em dashes site-wide, added rule to CLAUDE.md
- Applied v2 quiz copy: Blind Spots reordered, two new questions added
- Updated page title separator from em dash to pipe character

## Stack

- [Vite](https://vitejs.dev) 7.x
- [Tailwind CSS v4](https://tailwindcss.com)
- Vanilla JS (no framework)
- Google Fonts: Inter (sans), Newsreader (serif)
