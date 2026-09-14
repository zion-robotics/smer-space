import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Instagram, Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/smer-logo-compact.png.asset.json";

const instagramUrl = "https://www.instagram.com/thesmerspace?stkn=MXA5YmRmcjF6bTZ6MQ%3D%3D&utm_source=qr";
const linkedinUrl = "https://www.linkedin.com/in/titiloye-daniel-242909289?utm_source=share_via&utm_content=profile&utm_medium=member_ios";
const whatsappUrl = "https://wa.me/2349126262410";

const navigation = [
  { label: "Home", to: "/" as const },
  { label: "Hire an SMM", to: "/hire" as const },
  { label: "Trainees", to: "/trainees" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [choiceOpen, setChoiceOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="The SMer Space home" onClick={() => setMenuOpen(false)}>
          <img src={logoAsset.url} alt="The SMer Space" className="h-12 w-36 object-contain object-left" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="relative hidden lg:block">
          <Button size="lg" onClick={() => setChoiceOpen((value) => !value)} aria-expanded={choiceOpen}>
            Get Started <ChevronDown className="size-4" />
          </Button>
          {choiceOpen && <StartMenu onChoose={() => setChoiceOpen(false)} />}
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && (
        <div className="border-t border-border bg-background px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navigation.map((item) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="mobile-nav-link">{item.label}</Link>)}
            <p className="mt-5 text-xs font-semibold uppercase text-muted-foreground">Get started</p>
            <Link to="/hire" hash="waitlist" onClick={() => setMenuOpen(false)} className="mobile-nav-link text-primary">Hire an SMM</Link>
            <Link to="/trainees" hash="waitlist" onClick={() => setMenuOpen(false)} className="mobile-nav-link text-primary">Join the masterclass</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function StartMenu({ onChoose }: { onChoose: () => void }) {
  return (
    <div className="absolute right-0 top-14 w-64 border border-border bg-card p-2 shadow-2xl">
      <Link to="/hire" hash="waitlist" onClick={onChoose} className="start-choice"><strong>I need an SMM</strong><span>Find the right professional</span></Link>
      <Link to="/trainees" hash="waitlist" onClick={onChoose} className="start-choice"><strong>I want to become one</strong><span>Join the masterclass</span></Link>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-footer py-12">
      <div className="site-container grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div><img src={logoAsset.url} alt="The SMer Space" className="h-16 w-44 object-contain object-left" /><p className="mt-4 max-w-md text-sm text-muted-foreground">Training the next generation of social media managers and matching brands with the right professionals.</p></div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">{navigation.map((item) => <Link key={item.to} to={item.to} className="text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>)}<a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="The SMer Space on Instagram" className="text-muted-foreground transition-colors hover:text-foreground"><Instagram className="size-5" /></a><a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="The SMer Space on LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground"><Linkedin className="size-5" /></a><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="The SMer Space on WhatsApp" className="text-muted-foreground transition-colors hover:text-foreground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.23 22l5.27-1.38c1.45.79 3.08 1.21 4.74 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2Zm5.65 13.88c-.23.64-1.32 1.19-1.83 1.26-.49.07-.96.22-3.18-.66-2.69-1.08-4.4-3.83-4.54-4.01-.14-.18-1.08-1.44-1.08-2.75 0-1.31.68-1.94.92-2.21.24-.27.53-.34.71-.34.18 0 .36 0 .52.01.17 0 .39-.06.6.46.21.52.72 1.8.78 1.93.06.13.1.28.02.45-.08.17-.12.27-.24.42-.12.15-.25.32-.36.43-.12.12-.24.25-.11.49.13.24.6 1.01 1.29 1.63.88.79 1.62 1.04 1.85 1.15.23.11.36.09.5-.05.14-.15.57-.67.72-.9.15-.23.3-.19.5-.12.2.08 1.29.61 1.51.72.22.11.37.17.43.27.05.09.05.52-.12 1.16Z" /></svg></a></div>
      </div>
      <div className="site-container mt-10 border-t border-border pt-6 text-xs text-muted-foreground">© 2026 The SMer Space. All Rights Reserved.</div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><div className="site-container motion-reveal"><p className="eyebrow">{eyebrow}</p><h1 className="page-title">{title}</h1><div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div></div></section>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="motion-reveal mb-12 max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{description && <p className="mt-5 text-lg text-muted-foreground">{description}</p>}</div>;
}

export function WaitlistForm({ path, onSubmit }: { path: "Brand" | "Aspiring SMM"; onSubmit?: (data: FormData) => void }) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(new FormData(event.currentTarget));
  };
  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2" aria-label={`${path} waitlist form`}>
      <label className="field-label">Name<input className="field" name="name" type="text" placeholder="Your full name" required /></label>
      <label className="field-label">Email<input className="field" name="email" type="email" placeholder="you@example.com" required /></label>
      <label className="field-label">Phone<input className="field" name="phone" type="tel" placeholder="+234" required /></label>
      <label className="field-label">I Am A<select className="field" name="identity" defaultValue={path}><option>Brand</option><option>Aspiring SMM</option><option>Both</option></select></label>
      <Button type="submit" variant="inverse" size="lg" className="mt-2 md:col-span-2 md:w-fit">Join the waitlist <ArrowRight /></Button>
    </form>
  );
}

export function PricingCard({ item }: { item: { name: string; price: string; features: string[]; popular?: boolean } }) {
  const { whatsappLink } = requireData();
  return <article className={`price-card ${item.popular ? "price-card-popular" : ""}`}>
    {item.popular && <span className="popular-label">Most popular</span>}
    <h3 className="text-2xl font-bold">{item.name}</h3><p className="mt-5 font-display text-4xl font-black">{item.price}<span className="font-body text-sm font-normal text-muted-foreground"> / month</span></p>
    <ul className="my-7 space-y-3">{item.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{feature}</li>)}</ul>
    <Button asChild variant={item.popular ? "default" : "outline"} className="w-full"><a href={whatsappLink(`Hello The SMer Space, I’m interested in the ${item.name} package.`)} target="_blank" rel="noreferrer">Choose {item.name}<ArrowRight /></a></Button>
  </article>;
}

function requireData() {
  return { whatsappLink: (message: string) => `https://wa.me/2349126262410?text=${encodeURIComponent(message)}` };
}

function WhatsAppIcon({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.23 22l5.27-1.38c1.45.79 3.08 1.21 4.74 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2Zm5.65 13.88c-.23.64-1.32 1.19-1.83 1.26-.49.07-.96.22-3.18-.66-2.69-1.08-4.4-3.83-4.54-4.01-.14-.18-1.08-1.44-1.08-2.75 0-1.31.68-1.94.92-2.21.24-.27.53-.34.71-.34.18 0 .36 0 .52.01.17 0 .39-.06.6.46.21.52.72 1.8.78 1.93.06.13.1.28.02.45-.08.17-.12.27-.24.42-.12.15-.25.32-.36.43-.12.12-.24.25-.11.49.13.24.6 1.01 1.29 1.63.88.79 1.62 1.04 1.85 1.15.23.11.36.09.5-.05.14-.15.57-.67.72-.9.15-.23.3-.19.5-.12.2.08 1.29.61 1.51.72.22.11.37.17.43.27.05.09.05.52-.12 1.16Z" /></svg>;
}

export function ContactLinks() {
  return <div className="grid gap-px overflow-hidden border border-border bg-border">
    <a className="contact-link contact-link-stacked" href="mailto:thesmerspace@gmail.com"><Mail className="size-8" /><span><small>Email</small>thesmerspace@gmail.com</span></a>
    <a className="contact-link contact-link-stacked" href="https://wa.me/2349126262410" target="_blank" rel="noreferrer"><WhatsAppIcon className="size-8" /><span><small>WhatsApp</small>+234 912 626 2410</span></a>
    <a className="contact-link contact-link-stacked" href="tel:+2349045651127"><Phone className="size-8" /><span><small>Phone</small>+234 904 565 1127</span></a>
  </div>;
}
