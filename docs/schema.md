# schema.md — The SMer Space (Marketing Site)

Supabase schema for the marketing site rebuild only. SMer OS tables (users, brands, strategies, subscriptions, etc.) will be added later in their own section of this document, kept clearly separate by naming.

## Project

One Supabase project shared by the marketing site and, later, SMer OS. Tables are prefixed or named so the two never collide.

## Tables

### waitlist_signups

Replaces the current fake submit handler that discards every entry.

| Column | Type | Notes |
|---|---|---|
| id | uuid, primary key | default `gen_random_uuid()` |
| name | text | required |
| email | text | required |
| phone | text | required |
| signup_type | text | one of `Brand`, `Aspiring SMM`, `Both` |
| created_at | timestamptz | default `now()` |

**RLS:** enabled. Policy: allow `INSERT` for the `anon` role. No `SELECT`, `UPDATE`, or `DELETE` for `anon`. Titiloye's team reads the list from the Supabase dashboard directly, or a future authenticated admin view.

### stats

Backs the "live numbers" section from Titiloye's redesign list (students enrolled, creatives reached, etc.).

| Column | Type | Notes |
|---|---|---|
| id | uuid, primary key | default `gen_random_uuid()` |
| label | text | e.g. `students_enrolled`, `creatives_reached` |
| value | integer | the current number shown on the site |
| updated_at | timestamptz | default `now()`, updated whenever the number changes |

**RLS:** enabled. Policy: allow `SELECT` for `anon` (public read, so the site can display the numbers). Writes restricted to an authenticated admin role only, since these numbers shouldn't be publicly editable.

### testimonials

Backs the "real student voices" section, populated once Titiloye collects course reviews.

| Column | Type | Notes |
|---|---|---|
| id | uuid, primary key | default `gen_random_uuid()` |
| name | text | student's real name |
| quote | text | the testimonial text |
| role_or_context | text | optional, e.g. "SMM Masterclass, Cohort 1" |
| is_published | boolean | default `false`, so drafts can sit unpublished until approved |
| created_at | timestamptz | default `now()` |

**RLS:** enabled. Policy: allow `SELECT` for `anon` only where `is_published = true`. Writes restricted to an authenticated admin role.

## Not stored in the database

- **FAQ content** — static content in the codebase, not a database table, since it changes rarely and doesn't need to be editable without a deploy.
- **Pricing tiers** — also static in the codebase for the same reason. Revisit if pricing needs to change without a code deploy.
- **Contact details** — email, WhatsApp, and phone are static links, not form submissions.

## Reserved for later (SMer OS)

Not built yet. Placeholder so future-you doesn't accidentally reuse these names for something else in the marketing site:

- `users`
- `brands`
- `strategies`
- `content_calendars`
- `subscriptions`
