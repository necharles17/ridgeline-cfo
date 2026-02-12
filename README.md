# Ridgeline CFO

Fractional CFO & FP&A consultancy website. Built with Vite + Tailwind CSS v4.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production Build

```bash
npm run build
npm run preview   # preview the build locally
```

## Deploy

Push to GitHub and connect the repo to [Vercel](https://vercel.com). Vercel auto-detects Vite and deploys on every push.

- **Build command**: `npm run build`
- **Output directory**: `dist`

## Updating Content

All site content lives in `index.html`. Edit the relevant `<section>` directly.

### Changing the Calendly link

Update the URL in `calendly.js`:

```js
const CALENDLY_URL = "https://calendly.com/your-new-link";
```

## Stack

- [Vite](https://vitejs.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- Vanilla JS (no framework)
