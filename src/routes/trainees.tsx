import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, BriefcaseBusiness, ChartNoAxesCombined, Medal } from "lucide-react";
import founderImage from "@/assets/daniel-titiloye.jpg.asset.json";
import { PageIntro, SectionHeading, WaitlistForm } from "@/components/site-ui";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/trainees")({
  head: () => ({ meta: [
    { title: "Social Media Management Masterclass | SMer Space" },
    { name: "description", content: "Train to become a social media manager with The SMer Space 14-module masterclass, practical career tools, and client-ready skills." },
    { property: "og:title", content: "Social Media Management Masterclass | SMer Space" },
    { property: "og:description", content: "Build practical social media management skills and prepare to land your first client." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/trainees" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/trainees" }] }),
  component: TraineesPage,
});

const outcomes = [
  { icon: BookOpen, title: "14 focused modules", body: "A clear path from fundamentals to professional delivery." },
  { icon: ChartNoAxesCombined, title: "Strategy that works", body: "Learn to plan content around real brand goals." },
  { icon: BriefcaseBusiness, title: "Client-ready skills", body: "Build the confidence and tools to land your first client." },
  { icon: Medal, title: "Certification", body: "Complete the training with proof of your new capability." },
];

function TraineesPage() {
  return <>
    <PageIntro eyebrow="SMM Masterclass" title="Learn The Work. Build The Career."><p>The only social media management course you will ever need. Fourteen modules built to take you from knowing nothing to landing your first client.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><a href="https://selar.com/m/smer-space1" target="_blank" rel="noreferrer">Buy Masterclass <ArrowRight /></a></Button><Button asChild variant="outline" size="lg"><a href="#waitlist">Join the waitlist</a></Button></div></PageIntro>
    <section className="section"><div className="site-container"><SectionHeading eyebrow="Inside the programme" title="Beginners Welcome. Limits Not." description="Built for aspiring managers who want a practical foundation, professional confidence, and a clear route into paid work." /><div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">{outcomes.map(({ icon: Icon, title, body }) => <article key={title} className="outcome-card"><Icon /><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section bg-surface"><div className="site-container grid items-start gap-12 lg:grid-cols-2"><div className="parallax-frame aspect-[4/5] overflow-hidden"><img src={founderImage.url} alt="Daniel Oluwadarasimi Titiloye, founder of The SMer Space" loading="lazy" width={1536} height={1920} className="parallax-media h-[115%] w-full object-cover object-top" /></div><div><SectionHeading eyebrow="Meet the founder" title="Daniel Oluwadarasimi Titiloye" /><p className="role-line">Founder & Creative Director · Brand Strategist · Content Strategist · Musician</p><div className="motion-reveal mt-7 space-y-5 text-muted-foreground"><p>Daniel Oluwadarasimi Titiloye, popularly known as DOT, is a dedicated professional driven by a passion for growth, both his own and everyone he works with.</p><p>Known for his expertise in branding and music content creation, Daniel crafts brand strategies that set products apart in competitive markets. He is also a Content Strategist, working with brands across different industries, including a leading law firm, bringing sharp strategic direction to how they show up and communicate online. Daniel has trained and mentored over 100 Social Media Managers across the UK, Canada, and around the world.</p><p>As a seasoned Drum Tutor at RCCG Music College, Redemption Camp, and Dynamic Music Institute in Ogun State, Nigeria, Daniel also brings his talents into music content writing, using his skills to educate and engage readers.</p><p>Daniel is the CEO of DOT Drums Community, where he has hosted top drummers including Victor Karo, drummer for Nathaniel Bassey, and Marcus Hassan.</p><p>He is also the Founder and Creative Director of The SMer Space, an academy he built that reached over 50,000 creatives in just three weeks, with over 150 students enrolled in the Founding Cohort alone. He is also an aspiring photographer committed to making his mark in that field.</p><p>For Daniel, learning is a continuous journey, and he believes deeply in the transformative power of knowledge, a philosophy that shows in everything he builds.</p></div></div></div></section>
    <section id="waitlist" className="section bg-primary text-primary-foreground scroll-mt-20"><div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow text-primary-foreground/70">Join the next cohort</p><h2 className="section-title">Start Your SMM Career.</h2><p className="mt-5 text-primary-foreground/80">The masterclass launches at ₦10,000 and rises to ₦15,000 once live. This form does not send data yet.</p></div><WaitlistForm path="Aspiring SMM" /></div></section>
  </>;
}
