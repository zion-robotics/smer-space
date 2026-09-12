# architecture.md — The SMer Space (Marketing Site)

Covers the marketing site rebuild only. SMer OS gets its own architecture section once that project starts.

## Stack

- **Frontend:** React, built with Vite
- **Styling:** matches design.md tokens exactly (colors, Playfair Display + Inter, section spacing)
- **Backend:** Supabase (see schema.md) for waitlist, stats, and testimonials
- **Hosting:** Vercel
- **Domain:** smerspace.com (existing domain, already owned by Titiloye)
- **Version control:** new GitHub repo, built from scratch, not migrated from the old Framer export

## Why this stack

- React was chosen because it's the team's existing skillset, and because a static-only site is what caused the SEO and backend problems in the first place.
- Vite over Next.js for now, since this is a single marketing page with anchor-linked sections, not a multi-route app. Revisit this choice if SEO work later needs server-side rendering per page rather than one page with good meta tags.
- Supabase over a custom backend, since the only backend needs right now are storing form submissions and reading a handful of numbers and quotes, well within what Supabase handles without extra infrastructure.

## Project structure (proposed)

```
smerspace-site/
  src/
    components/
      Nav.tsx
      Hero.tsx
      About.tsx
      HowWeWork.tsx
      Services.tsx
      Waitlist.tsx
      Pricing.tsx
      Portfolio.tsx
      Founder.tsx
      FAQ.tsx          (new)
      Contact.tsx
      Footer.tsx
    lib/
      supabaseClient.ts
    styles/
      tokens.css       (colors, fonts, from design.md)
    App.tsx
    main.tsx
  public/
    founder-photo.jpg  (replacing the inline base64 image)
  .env                 (Supabase URL + anon key, not committed)
```

## Section-to-component mapping

Matches the DOM structure already documented in design.md, so nothing gets lost or reordered in the rebuild: Nav → Hero → About → HowWeWork → Services → Waitlist → Pricing → Portfolio → Founder → FAQ (new) → Contact → Footer.

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
- Server-side rendering (revisit only if SEO work requires it)
