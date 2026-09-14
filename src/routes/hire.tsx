import { createFileRoute } from "@tanstack/react-router";
import { agencyPackages, matchedPackages, portfolio, services } from "@/components/site-data";
import { PageIntro, PricingCard, SectionHeading, WaitlistForm } from "@/components/site-ui";

export const Route = createFileRoute("/hire")({
  head: () => ({ meta: [
    { title: "Hire a Social Media Manager | The SMer Space" },
    { name: "description", content: "Hire a certified social media manager or full agency team for your brand. Explore flexible monthly packages from The SMer Space." },
    { property: "og:title", content: "Hire a Social Media Manager | The SMer Space" },
    { property: "og:description", content: "Find the right social media manager or agency package for your brand and budget." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/hire" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/hire" }] }),
  component: HirePage,
});

function HirePage() {
  return <>
    <PageIntro eyebrow="For growing brands" title="The Right Team Changes Everything."><p>Choose a dedicated social media manager or deploy a complete agency team built around your goals and budget.</p></PageIntro>
    <section className="section"><div className="site-container"><SectionHeading eyebrow="Our Services" title="Every Brand Deserves The Right Fit." /><div className="grid gap-px border border-border bg-border md:grid-cols-2">{services.map((service) => <article key={service.title} className="service-card"><span>{service.number}</span><h3>{service.title}</h3><p>{service.body}</p></article>)}</div></div></section>
    <section className="section bg-surface"><div className="site-container"><SectionHeading eyebrow="Matched Packages" title="A Dedicated SMM, Matched To Your Budget." description="A focused option for brands ready to hand social media to one capable professional." /><div className="pricing-grid">{matchedPackages.map((item) => <PricingCard key={item.name} item={item} />)}</div></div></section>
    <section className="section"><div className="site-container"><SectionHeading eyebrow="Agency Packages" title="Put A Complete Team Behind Your Brand." description="Strategy, content, design, media, and management working together every month." /><div className="pricing-grid">{agencyPackages.map((item) => <PricingCard key={item.name} item={item} />)}</div></div></section>
    <section className="section bg-surface"><div className="site-container"><SectionHeading eyebrow="Selected Work" title="Strategy Made Visible." /><div className="grid gap-px border border-border bg-border lg:grid-cols-2">{portfolio.map((item, index) => <article key={item.name} className={`portfolio-card ${index === 4 ? "lg:col-span-2" : ""}`}><p className="eyebrow">{item.sector}</p><h3>{item.name}</h3><p>{item.body}</p><div className="mt-7 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div></article>)}</div></div></section>
    <section id="waitlist" className="section bg-primary text-primary-foreground scroll-mt-20"><div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow text-primary-foreground/70">Start here</p><h2 className="section-title">Tell Us What Your Brand Needs.</h2><p className="mt-5 text-primary-foreground/80">Share your details now. This form is ready for your future connection and does not send data yet.</p></div><WaitlistForm path="Brand" /></div></section>
  </>;
}
