# architecture.md: The SMer Space (Marketing Site)

Covers the marketing site only. SMer OS gets its own architecture section once that project starts.

## Stack

- **Framework:** TanStack Start (React 19) with TanStack Router. Pages render on the server (SSR, server-side rendering), so search engines get full HTML for every page.
- **Styling:** Tailwind CSS 4, using the tokens in `src/styles.css` (see design.md)
- **Backend:** Supabase (see schema.md) for the waitlist, stats, and testimonials
- **Data fetching:** TanStack Query, with the hooks in `src/lib/site-content.ts`
- **Package manager:** Bun
- **Hosting:** Vercel
- **Domain:** smerspace.com, already owned by Titiloye

## Routes

File-based routing. Each file in `src/routes` is one page, with its own title and meta description set in its `head` function.

| Page | Route | File |
|---|---|---|
| Home | `/` | `src/routes/index.tsx` |
| About Us | `/about` | `src/routes/about.tsx` |
| Hire an SMM | `/hire` | `src/routes/hire.tsx` |
| Trainees | `/trainees` | `src/routes/trainees.tsx` |
| Gallery | `/gallery` | `src/routes/gallery.tsx` |
| Contact Us | `/contact` | `src/routes/contact.tsx` |

## Folder structure

```
src/
  routes/            one file per page, plus __root.tsx
  components/
    site-ui.tsx      header, footer, WaitlistForm, PricingCard, ContactLinks
    site-data.ts     pricing tiers
    ui/              shared UI components
  lib/
    supabase.ts      Supabase client (returns null if env vars are missing)
    site-content.ts  hooks for stats and testimonials
  assets/            images and logos
  styles.css         design tokens and utilities
```

## Data flow

- **Waitlist:** `WaitlistForm` inserts a row into `waitlist_signups`. The public (anon) role can insert but cannot read, edit, or delete. Do not chain `.select()` onto the insert, because the anon role has no read permission.
- **Stats:** `useStats()` reads the `stats` table. If Supabase is unreachable, it falls back to the original hardcoded numbers.
- **Testimonials:** `useTestimonials()` reads only rows where `is_published = true`. With no published rows, the page shows an empty state.

## Environment variables

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Set both locally in `.env` and in the Vercel project settings. `VITE_` values are baked in at build time, so redeploy after changing them.

## Domain and future SMer OS separation

- `smerspace.com`: this site
- `app.smerspace.com`: reserved for SMer OS, a separate Vercel project and repo, pointed at it with a DNS (Domain Name System) subdomain record when that project starts

## Out of scope

- Authentication (needed only for SMer OS)
- Payment processing (package buttons open WhatsApp)
