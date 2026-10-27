# The SMer Space: Marketing Site

Rebuild of the smerspace.com marketing site. Same content, fonts, and colors as the original, now with a working waitlist, live stats, and testimonials backed by Supabase.

SMer OS (the AI-powered platform for social media managers) is a separate, later project and is not part of this repo.

## Docs

- `docs/prd.md`: what this rebuild is and is not for
- `docs/design.md`: colors, fonts, and section-by-section content pulled from the live site
- `docs/architecture.md`: stack, routes, folder structure, domain setup
- `docs/schema.md`: Supabase tables and Row Level Security (RLS) policies
- `docs/build.md`: ordered build checklist
- `schema.sql`: the SQL to run once in the Supabase SQL Editor

## Stack

- TanStack Start (React 19) with TanStack Router, file-based routes in `src/routes`
- Tailwind CSS 4
- Supabase for the waitlist, stats, and testimonials
- Bun for package management
- Vercel for hosting

## Getting started

```bash
git clone https://github.com/zion-robotics/smer-space.git
cd smer-space
bun install
```

Copy `.env.example` to `.env` and fill in the two values from the Supabase dashboard (Project Settings, then API):

```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Use only the anon key. Never put the service role key in this project.

Then run the dev server:

```bash
bun run dev
```

## Scripts

- `bun run dev`: local development server
- `bun run build`: production build
- `bun run preview`: preview the production build locally
- `bun run lint`: run ESLint
- `bun run format`: run Prettier

## Deployment

Deploys to Vercel. Add the two environment variables above in the Vercel project settings, then redeploy, because `VITE_` values are baked in at build time. The domain plan is in `docs/architecture.md`.

## Status

Frontend rebuild and Supabase wiring done. Next: point smerspace.com at the Vercel deployment, then the SEO phase.
