import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SectionHeading } from "@/components/site-ui";
import { team } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | The SMer Space" },
      { name: "description", content: "Meet the people behind The SMer Space and learn why we built a better way to train and match social media managers." },
      { property: "og:title", content: "About Us | The SMer Space" },
      { property: "og:description", content: "Meet the strategists, creators, and designers behind The SMer Space." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About The SMer Space" title="The People Behind The Progress.">
        <p>We are building the infrastructure the social media industry has been missing: practical training for aspiring SMMs and dependable support for growing brands.</p>
      </PageIntro>
      <section className="section bg-surface">
        <div className="site-container grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Who we are" title="One Space. Two Clear Paths." />
            <div className="space-y-5 text-lg text-muted-foreground">
              <p>The SMer Space was built for the business owner who is tired of guessing what to post and the aspiring social media manager who is ready to build a real career.</p>
              <p>Businesses come to us for the right professional or agency team. Aspiring SMMs come to us for the training, certification, and tools they need to land their first client and grow with confidence.</p>
            </div>
          </div>
          <div className="grid gap-px bg-border">
            <article className="belief-card"><span>Mission</span><p>To train the next generation of social media managers and connect businesses with the right professional at every budget.</p></article>
            <article className="belief-card"><span>Vision</span><p>To become the space every business calls when they need to grow online and every aspiring SMM turns to when ready to build a career.</p></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Meet the team" title="The People Doing The Work." description="The founder, strategists, creators, and designers making thoughtful social media support possible." />
          <div className="grid gap-6 md:grid-cols-3">
            {[...team].sort((a, b) => Number(b.role.startsWith("Founder")) - Number(a.role.startsWith("Founder"))).map((person) => (
              <article key={person.name} className="team-card">
                <div className="team-portrait">{person.image ? <img src={person.image} alt={person.name} /> : <span>{person.initials}</span>}</div>
                <div>
                  <p className="eyebrow">{person.role}</p>
                  <h3>{person.name}</h3>
                  <p className="team-bio">{person.bio}</p>
                  <details className="team-more">
                    <summary>More about {person.name.split(" ")[0]}<span aria-hidden="true">+</span></summary>
                    <p>{person.describe}</p>
                    <p><strong>A skill I like most</strong>{person.fun}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
