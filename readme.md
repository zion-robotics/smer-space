# The SMer Space — Marketing Site

Rebuild of the smerspace.com marketing site. React, Supabase, Vercel. Same content, fonts, and colors as the original, but with a real backend behind the waitlist and a codebase Titiloye's team can actually work with going forward.

SMer OS (the AI-powered platform for social media managers) is a separate, later project and is not part of this repo.

## Docs

- `prd.md` — what this rebuild is and isn't for, and open questions for Titiloye
- `design.md` — colors, fonts, full section-by-section content pulled from the live site
- `architecture.md` — stack, folder structure, domain setup
- `schema.md` — Supabase tables and RLS policies
- `build.md` — ordered build checklist

## Stack

- React (Vite)
- Supabase (waitlist, stats, testimonials)
- Vercel (hosting)

## Getting started

```bash
git clone <repo-url>
cd smerspace-site
npm install
```

Create a `.env` file in the project root:

```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Then run the dev server:

```bash
npm run dev
```

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run preview` — preview the production build locally

## Deployment

Deploys to Vercel, pointed at the smerspace.com domain. See `architecture.md` for the domain split between this site and the future SMer OS subdomain.

## Status

Marketing site rebuild in progress. SEO work (targeting real search terms instead of just the brand name) is planned as the phase after this one ships.
