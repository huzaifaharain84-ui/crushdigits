# Crush Digits Accountants — React site

A React (Vite) rebuild of the Crush Digits Accountants Limited marketing
page, ready to deploy on Vercel.

## Project structure

```
crushdigits-react/
├── index.html            Vite entry HTML
├── vercel.json            SPA rewrite rule for Vercel
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx           React root
    ├── index.css          All site styles (converted from the original <style> block)
    ├── App.jsx             Assembles the page from section components
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── About.jsx
        ├── Cta.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts (framework preset: Vite, build command: `npm run
build`, output directory: `dist` — Vercel auto-detects these).

**Option B — Git + Vercel dashboard**
1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. In the Vercel dashboard, "Add New Project" → import the repo.
3. Vercel auto-detects the Vite framework preset. Click Deploy.

## Before going live

- **Contact form**: the form in `src/components/Contact.jsx` currently
  only updates local state on submit — it doesn't send anywhere yet.
  Wire it up to a real endpoint, e.g.:
  - A Vercel Serverless Function under `/api/contact` that emails you
    or writes to a database, or
  - A third-party form service (Formspree, Resend, etc.)
- Double-check the registered office address, company number, and
  contact details are current.
