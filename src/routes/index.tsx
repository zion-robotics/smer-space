import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import teamStrategist from "@/assets/team-strategist.jpg";
import teamContent from "@/assets/team-content.jpg";
import teamSuccess from "@/assets/team-success.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site-ui";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "The SMer Space | Hire & Train Social Media Managers" },
    { name: "description", content: "The SMer Space matches brands with certified social media managers and trains aspiring SMMs through a practical masterclass." },
    { property: "og:title", content: "The SMer Space | Hire & Train Social Media Managers" },
    { property: "og:description", content: "Hire the right social media manager or build your own SMM career with The SMer Space." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }] }),
  component: HomePage,
});

const stats = [["4yr+", "Experience"], ["50+", "Brands"], ["40%+", "Growth"], ["188K", "Views"]];
const team = [
  { name: "Amara Okeke", role: "Lead Strategist", bio: "Shapes practical growth strategies around each brand’s goals.", image: teamStrategist },
  { name: "David Adeyemi", role: "Content & Community", bio: "Turns brand ideas into content people want to engage with.", image: teamContent },
  { name: "Zainab Bello", role: "Client Success", bio: "Keeps every partnership clear, responsive, and moving forward.", image: teamSuccess },
];
const steps = [["01", "Tell Us Your Brief", "Share your goals, challenges, audience, and budget."], ["02", "Get Matched", "We identify the right certified professional or team."], ["03", "Onboard", "Align on scope, voice, workflow, and priorities."], ["04", "Grow", "Move forward with focused, consistent social media support."]];
const faqs = [
  ["How does matching work?", "Tell us what your brand needs and we’ll recommend a social media manager or agency package that fits your goals and budget."],
  ["Can complete beginners join the masterclass?", "Yes. The 14-module programme is designed to move beginners from the fundamentals toward client-ready skills."],
  ["Do you work with brands outside Nigeria?", "Yes. The team has worked with brands across Nigeria, the UK, and beyond."],
  ["Are package payments made on this website?", "No. Package enquiries and masterclass purchases currently continue through WhatsApp."],
];

function HomePage() {
  return <>
    <section className="home-hero"><div className="site-container"><p className="eyebrow">Social media, handled properly</p><h1>Stop Guessing.<br /><span>Start Hiring Right.</span></h1><p className="hero-copy">The SMer Space connects brands with dedicated social media managers and deploys full agency teams for brands that are ready to grow.</p><Button asChild size="xl"><Link to="/hire">Find your SMM <ArrowRight /></Link></Button><div className="stats-row">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>
    <section className="section"><div className="site-container"><SectionHeading eyebrow="Meet the team" title="The People Behind The Progress." description="Placeholder profiles for now. Your real team photos and biographies can replace these directly." /><div className="grid gap-6 md:grid-cols-3">{team.map((person) => <article key={person.name} className="team-card"><img src={person.image} alt={`Placeholder portrait of ${person.name}`} loading="lazy" width={768} height={1024} /><div><p className="eyebrow">{person.role}</p><h3>{person.name}</h3><p>{person.bio}</p></div></article>)}</div></div></section>
    <section className="section bg-surface"><div className="site-container grid gap-14 lg:grid-cols-[1.1fr_0.9fr]"><div><SectionHeading eyebrow="Who we are" title="The Industry Needed One Space That Does It All. We Built It." /><div className="space-y-5 text-lg text-muted-foreground"><p>The SMer Space was built for two kinds of people. The business owner who is tired of guessing what to post and needs a professional to handle it. And the aspiring social media manager who is ready to build a real career but does not know where to start.</p><p>We built a platform that solves both problems at once. Businesses come to us and get matched with a certified, professional social media manager at a price point that works for their budget. Aspiring SMMs come to us and get the training, the certification, and the tools they need to land their first client and build a sustainable career.</p><p>This is not just an agency. This is the infrastructure the social media industry has been missing. And we built it from the ground up.</p></div></div><div className="grid gap-px bg-border"><article className="belief-card"><span>Mission</span><p>To train the next generation of social media managers and connect businesses with the right professional for their brand at every budget. We exist to make social media management accessible, professional, and results-driven for everyone.</p></article><article className="belief-card"><span>Vision</span><p>To become the number one social media management platform globally. The name every business calls when they need to grow online and every aspiring SMM turns to when ready to build a career.</p></article></div></div></section>
    <section className="section"><div className="site-container"><SectionHeading eyebrow="How we work" title="Simple. Seamless. Effective." /><div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, body]) => <article key={number} className="step-card"><strong>{number}</strong><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section bg-surface"><div className="site-container"><SectionHeading eyebrow="Client stories" title="Proof, Coming Soon." /><div className="empty-testimonial"><Quote /><h3>Real reviews will live here.</h3><p>Testimonials are waiting on your future data connection. This state is intentionally ready for them.</p></div></div></section>
    <section className="section"><div className="site-container"><SectionHeading eyebrow="FAQ" title="A Few Things You May Want To Know." /><div className="divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="faq-row"><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="section bg-primary text-primary-foreground"><div className="site-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><h2 className="section-title max-w-2xl">Ready To Stop Guessing?</h2><div className="flex flex-wrap gap-3"><Button asChild variant="inverse" size="lg"><Link to="/hire">Hire an SMM</Link></Button><Button asChild variant="inverseOutline" size="lg"><Link to="/trainees">Join the masterclass</Link></Button></div></div></section>
  </>;
}
