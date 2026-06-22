# MRPC Demo Website Upgrade

This repository contains a Vercel-ready Next.js prototype for a modernized Mount Rock Powder Corporation website.

## Edit Content

Most visible text is centralized in:

```txt
src/data/site-content.ts
```

Start there when changing:

- headlines and section copy
- navigation labels
- capability cards
- product/service groupings
- resource cards
- project placeholders
- contact information

Inline comments in that file mark areas that should be reviewed by leadership, QHSE, legal, or compliance before public launch.

## Edit Images

Prototype images live in:

```txt
public/images
```

Use the same file names if you want to replace images without changing code. If you add new names, update `src/data/site-content.ts`.

## Run Locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Verify Before Pitch

```bash
npm run lint
npm run build
```

## Notes Before Public Launch

- Confirm current phone numbers and office details.
- Review all permit, license, SDS, TDS, emergency, and safety claims.
- Avoid exposing exact magazine depot addresses on public pages unless leadership and compliance approve.
- Replace placeholder case study copy with approved project outcomes, photos, and customer permissions.
- Add real downloadable SDS/TDS files only after document control review.

## Deploy on Vercel

Import this GitHub repository into Vercel as a Next.js project. Vercel should detect the framework automatically.
