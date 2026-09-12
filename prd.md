# prd.md — The SMer Space (Marketing Site Rebuild)

## Problem

The current site (smerspace.com) is a static Framer export with no backend. It ranks for the brand name but not for real search terms like "hire SMM Nigeria." Its waitlist form has never saved a single submission, every signup has been silently discarded since launch. Titiloye's team has no code access to the current site at all.

## Goal

Rebuild the marketing site from scratch in React, keeping the existing content, fonts, and colors, but on a real, functional foundation: a working waitlist, a maintainable codebase Titiloye's team can eventually hand off or extend, and a structure that supports the SEO work planned for after this rebuild ships.

## In scope

- Full rebuild of all 10 existing sections (Hero, About, How We Work, Services, Waitlist, Pricing, Portfolio, Founder, Contact, Footer), matching current content, fonts, and colors as documented in design.md
- A working waitlist form that actually saves submissions to Supabase (see schema.md)
- New sections from Titiloye's "what we could do differently" list:
  - Embedded short training video clip on the homepage
  - Live stats section (students enrolled, creatives reached, etc.)
  - Testimonials section (populated once Titiloye collects course reviews; built to support empty state until then)
  - FAQ block answering common DM questions
  - Consolidation to one clear, repeated CTA instead of the current multiple competing buttons
- Replacing the founder photo's base64 embed with a proper served image file
- Deployment to smerspace.com via Vercel

## Out of scope (this phase)

- SMer OS (the AI-powered SaaS product) — separate project, separate PRD, once this phase ships
- Payment processing — pricing CTAs continue linking to WhatsApp for now
- SEO optimization work — planned as the phase immediately after this rebuild, but not part of this PRD
- User accounts or authentication — not needed for a marketing site

## Success criteria

- Every waitlist submission is retrievable afterward (the current failure mode is fixed)
- Visual match to the existing brand (same fonts, same colors, same section order) confirmed against design.md
- Site loads noticeably faster than the current version (removing the inline base64 image alone should help)
- Titiloye and his team can view submitted waitlist entries and update displayed stats without needing Zion to redeploy code

## Open questions for Titiloye

- Do the pricing CTAs staying on WhatsApp (rather than a real checkout) reflect the actual sales process, or is that unfinished?
- What video does he want embedded on the homepage, and does he have it ready?
- What's the actual current count for stats like "students enrolled," since the site doesn't currently show any real-time numbers?
