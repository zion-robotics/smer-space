# design.md — The SMer Space

Source of truth for the redesign. Pulled directly from the live site's page source (view-source), not approximated.

**Note:** the rebuild is now 4 separate pages (Home, Hire an SMM, Trainees, Contact Us), not one scrolling page. See architecture.md for the page-to-content mapping. A new "Meet the Team" section (with team photos) is also being added to the Home page, this has no equivalent on the current live site, so there's no original content to match, it's new.

## Colors

```
--red:   #C8102E   primary brand color, CTAs, accents, active states
--black: #0A0A0A   page background
--white: #FFFFFF   primary text
--grey:  #999999   secondary text
--dark:  #1A1A1A   surface background (about, services, academy, portfolio cards)
--mid:   #2A2A2A   footer background
```

## Typography

Two font families, not one:

- **Playfair Display** (weights 700, 900) — all headings (`h1`, `.section-title`, `.pkg-price`, `.founder-name`, logo)
- **Inter** (weights 300, 400, 500, 600, 700) — body text, nav, buttons, labels
- Both loaded from Google Fonts
- Body `line-height: 1.6`

## Global layout rules

- `body`: `background: var(--black)`, `color: var(--white)`, `overflow-x: hidden`
- `html`: `scroll-behavior: smooth`
- Global reset: `margin: 0`, `padding: 0`, `box-sizing: border-box`
- Nav is fixed, blurred background (`backdrop-filter: blur(12px)`), 60px horizontal padding on desktop, 22px on mobile
- Standard section padding: `90px 60px` desktop, `64px 22px` mobile
- Responsive breakpoints: 900px (tablet/mobile nav switch) and 480px (single-column pricing)

## Page structure (sections, in DOM order)

1. `nav` + `.mobile-menu`
2. `section.hero` — `#home`
3. `section.about` — `#about`
4. `section.how` — `#how`
5. `section.services` — `#services`
6. `section.waitlist` — `#waitlist`
7. `section.ratecard` — `#pricing`
8. `section.portfolio` — `#portfolio`
9. `section.founder` — `#founder`
10. `section.contact` — `#contact`
11. `footer`

## Full content

### Nav
- Logo: "The **SMer** Space" (SMer in red, Playfair Display)
- Links: About, Services, Pricing, Contact
- CTA: "Get Started" → links to `#waitlist`
- Mobile menu adds: Work → `#portfolio`, Join Waitlist → `#waitlist`

### Hero (#home)
- Headline: "Stop Guessing. Start Hiring Right."
- Subtext: "The SMer Space connects brands with dedicated social media managers and deploys full agency teams for brands that are ready to grow."
- Buttons: "Get Started" (primary, → `#waitlist`), "Rate Card" (outline, → `#pricing`)
- Stats row: 4yr+ Experience · 50+ Brands · 40%+ Growth · 188K Views

### About (#about)
- Tag: "Who We Are"
- Title: "The Industry Needed One Space That Does It All. We Built It."
- Body copy (two paragraphs): built for business owners who need a professional, and aspiring SMMs who need training and career tools; positions itself as "the infrastructure the social media industry has been missing"
- Mission: to train the next generation of SMMs and connect businesses with the right professional at every budget
- Vision: to become the number one social media management platform globally

### How We Work (#how)
- Tag: "How We Work" / Title: "Simple. Seamless. Effective."
- 4 steps: 01 Tell Us Your Brief, 02 Get Matched, 03 Onboard, 04 Grow

### Services (#services)
- Tag: "Our Services" / Title: "Every Brand Deserves The Right Fit."
- 4 cards: Social Media Management, Social Media Consulting, SMM Masterclass (14 modules), Agency Services

### Waitlist (#waitlist)
- Background is solid red (`var(--red)`), not black
- Copy: Masterclass launches at ₦10,000, rises to ₦15,000 once live
- Form fields: Name, Email, Phone Number, "I Am A" (Brand / Aspiring SMM / Both)
- Secondary link: "Or proceed to buy now" → external Selar checkout link

### Pricing (#pricing)

**Matched Package tier:**
| Package | Price | Key features |
|---|---|---|
| Starter Boost | 50,000 naira/mo | 1 platform, 2 posts/wk, 2 stories/wk, monthly calendar, brand onboarding |
| Consistency Plus | 70,000 naira/mo | 1 platform, 3 posts/wk, 3 stories/wk, caption refinement, post boosting |
| Brand Lift (Popular) | 80,000 naira/mo | 2 platforms, 3 posts/wk, brand tone alignment, post boosting |
| Growth Edge | 120,000 naira/mo | 2 platforms, 4 posts/wk, monthly analytics report, 12hr DM response |

**Agency Package tier** (10 tiers, 150K to 3M naira/mo): Content Flow, Visual Growth, Strategic Presence, Brand Authority (Popular), Scale and Expansion, Market Leadership, Brand Expansion Suite, Authority Builder, Market Dominance Plus, Industry Leader System, each adding more platforms, team roles (designer, editor, ads manager, photographer, videographer, account manager), and response times.

All package CTAs link out to WhatsApp (wa.me/2349126262410) with a pre-filled message naming the package, not to any internal checkout.

### Portfolio (#portfolio)
5 case studies: Cresthood Legal LLP (legal/entertainment), Elvivaskut (fashion, Manchester UK), Isoken Smoked Fish Co. (food, UK), DOT Drums Community (music/community), DILA (e-commerce marketplace).

### Founder (#founder)
- Titiloye Daniel Oluwadarasimi (CEO), Brand Strategist, Social Media Strategist, Content Strategist, Musician
- 4+ years experience, has worked across Nigeria, UK, and beyond
- Also a professional musician, certified drum coach, CEO of DOT Drums Community
- Founder photo is currently embedded as a base64 data URI directly in the HTML, should be replaced with a real served image file, since inlining it this way bloats the page significantly

### Contact (#contact)
- Email: thesmerspace@gmail.com
- WhatsApp: +2349126262410
- Phone: +2349045651127

### Footer
- Logo + links: About, Services, Pricing, Work, Contact
- Copyright: 2026 The SMer Space. All Rights Reserved.

## Important finding: the waitlist form has never worked

The form's onsubmit handler only does this:

```js
function submitWaitlist(e){
  e.preventDefault();
  e.target.style.display='none';
  document.getElementById('waitlist-success').style.display='block';
}
```

It prevents the default submit, hides the form, and shows a static "You're in" message. It never sends the data anywhere, no fetch call, no form action, nothing. Every name, email, and phone number anyone has ever entered was thrown away the moment they hit submit. This isn't a backend that broke, there was never a backend at all. The rebuild needs an actual submit handler that writes to Supabase.
