# architecture.md — The SMer Space (Marketing Site)

Covers the marketing site rebuild only. SMer OS gets its own architecture section once that project starts.

## Stack

- **Frontend:** React, built with Vite, with React Router for multi-page routing
- **Styling:** matches design.md tokens exactly (colors, Playfair Display + Inter, section spacing)
- **Backend:** Supabase (see schema.md) for waitlist, stats, and testimonials
- **Hosting:** Vercel
- **Domain:** smerspace.com (existing domain, already owned by Titiloye)
- **Version control:** new GitHub repo, built from scratch, not migrated from the old Framer export

## Why this stack

- React was chosen because it's the team's existing skillset, and because a static-only site is what caused the SEO and backend problems in the first place.
- React Router added because the site is now 4 separate pages, not one scrolling page, so each page needs its own URL, its own title tag, and its own meta description targeting a different search term. This directly supports the original SEO goal, a single page can't target multiple search terms nearly as well as dedicated pages can.
- Supabase over a custom backend, since the only backend needs are storing form submissions and reading a handful of numbers and quotes, well within what Supabase handles without extra infrastructure.

## Site structure: 4 pages

| Page | Route | Content |
|---|---|---|
| Home | `/` | Hero (headline, subtext, CTA, stats row), Meet the Team, About, How We Work, live stats, testimonials, FAQ, one CTA |
| Hire an SMM | `/hire` | Services, full Pricing (all 14 tiers), Portfolio, waitlist form (Brand path) |
| Trainees | `/trainees` | SMM Masterclass details, Founder story, waitlist form (Aspiring SMM path) |
| Contact Us | `/contact` | Contact info, short recap of what The SMer Space does |

Each page needs its own `<title>` and meta description once the SEO phase starts, this is the whole point of splitting into pages rather than staying single-page.

## Project structure (proposed)

```
smerspace-site/
  src/
    pages/
      Home.tsx
      HireAnSMM.tsx
      Trainees.tsx
      Contact.tsx
    components/
      Nav.tsx
      Footer.tsx
      Hero.tsx
      MeetTheTeam.tsx    (new)
      About.tsx
      HowWeWork.tsx
      Stats.tsx
      Testimonials.tsx
      FAQ.tsx
      Services.tsx
      Pricing.tsx
      Portfolio.tsx
      WaitlistForm.tsx   (reused on both Hire an SMM and Trainees, with a path prop)
      Founder.tsx
      ContactInfo.tsx
    lib/
      supabaseClient.ts
    styles/
      tokens.css         (colors, fonts, from design.md)
    App.tsx              (routes)
    main.tsx
  public/
    founder-photo.jpg    (replacing the inline base64 image)
    team/                (Meet the Team photos)
  .env                   (Supabase URL + anon key, not committed)
```

## Domain and future SMer OS separation

- `smerspace.com` → marketing site (this project)
- `app.smerspace.com` → reserved for SMer OS later, a separate Vercel deployment from a separate repo, pointed there via a DNS subdomain record when that project starts

## Environment variables

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Both are safe to expose in frontend code, since the anon key's permissions are limited entirely by the RLS policies defined in schema.md, not by keeping the key secret.

## Out of scope for this architecture

- Authentication (not needed until SMer OS)
- Payment processing (pricing page CTAs link to WhatsApp, not a checkout)
- Server-side rendering (revisit only if SEO work requires it beyond per-page meta tags)
