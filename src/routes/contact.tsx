import { createFileRoute } from "@tanstack/react-router";
import { ContactLinks, PageIntro } from "@/components/site-ui";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact The SMer Space | Social Media Support" },
    { name: "description", content: "Contact The SMer Space about hiring a social media manager, agency support, or joining the SMM masterclass." },
    { property: "og:title", content: "Contact The SMer Space | Social Media Support" },
    { property: "og:description", content: "Talk to The SMer Space about brand support, SMM matching, or professional training." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/contact" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/contact" }] }),
  component: ContactPage,
});

function ContactPage() {
  return <><PageIntro eyebrow="Contact us" title="Let’s Talk About Your Next Move."><p>The SMer Space trains the next generation of social media managers and connects businesses with the right professional or agency team at every budget.</p></PageIntro><section className="section pt-0"><div className="site-container"><ContactLinks /><div className="mt-16 grid gap-8 border-t border-border pt-12 md:grid-cols-2"><h2 className="section-title">One Space. Two Clear Paths.</h2><div className="space-y-5 text-lg text-muted-foreground"><p>If you are a business owner, we will help you stop guessing and put the right social media support behind your brand.</p><p>If you are an aspiring SMM, we will help you build the practical skills and confidence to begin a sustainable career.</p></div></div></div></section></>;
}
