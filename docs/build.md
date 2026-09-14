# build.md — The SMer Space (Marketing Site Rebuild)

Build order for this phase, following prd.md, architecture.md, and schema.md. SMer OS gets its own build.md later.

## 1. Repo and project setup
- [x] Create the new GitHub repo
- [ ] Scaffold the React project with Vite
- [ ] Add React Router and set up the 4 page routes (`/`, `/hire`, `/trainees`, `/contact`) per architecture.md
- [ ] Set up the folder structure from architecture.md
- [ ] Add design tokens (colors, fonts) from design.md into `styles/tokens.css`

## 2. Supabase setup
- [ ] Create (or reuse) the Supabase project
- [ ] Create `waitlist_signups`, `stats`, and `testimonials` tables per schema.md
- [ ] Enable RLS and add the policies documented in schema.md
- [ ] Add environment variables and confirm the Supabase client connects

## 3. Static sections (content matches the live site exactly)
- [ ] Nav + mobile menu
- [ ] Hero (including stats row, wired to the `stats` table instead of hardcoded numbers)
- [ ] Meet the Team (new, needs photos and bios from Titiloye, not on the current site)
- [ ] About
- [ ] How We Work
- [ ] Services
- [ ] Pricing (all 14 tiers, WhatsApp links preserved)
- [ ] Portfolio
- [ ] Founder (replace base64 image with a real served file)
- [ ] Contact
- [ ] Footer

## 4. Waitlist (the critical fix)
- [ ] Build the form UI matching the current field set (Name, Email, Phone, I Am A)
- [ ] Wire the submit handler to insert into `waitlist_signups`
- [ ] Add a real error state for failed submissions, not just a static success message
- [ ] Test end to end: submit → confirm the row appears in Supabase

## 5. New sections from Titiloye's list
- [ ] Homepage video embed
- [ ] Live stats display, pulling from the `stats` table
- [ ] Testimonials section, pulling from `testimonials` where `is_published = true`, with a sensible empty state for now
- [ ] FAQ block
- [ ] Audit every CTA on the page and consolidate to one repeated action

## 6. Review against design.md
- [ ] Side-by-side comparison with the live site for fonts, colors, and spacing
- [ ] Confirm no content was dropped or reworded from the original

## 7. Deploy
- [ ] Deploy to Vercel
- [ ] Point smerspace.com at the new deployment
- [ ] Confirm the waitlist and stats work against production Supabase, not a local/dev instance

## 8. Handoff check
- [ ] Confirm Titiloye's team can view waitlist entries and update stats without needing a code change

## After this ships
Move to the SEO phase (the original scope from the first pitch): meta tags, schema markup, targeting real search terms like "hire SMM Nigeria." Not part of this build.
