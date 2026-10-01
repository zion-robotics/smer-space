import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-ui";
import photo4051 from "@/assets/IMG_4051.JPG.asset.json";
import photo4053 from "@/assets/IMG_4053.JPG.asset.json";
import photo4054 from "@/assets/IMG_4054.JPG.asset.json";
import photo4055 from "@/assets/IMG_4055.JPG.asset.json";
import photo4056 from "@/assets/IMG_4056.JPG.asset.json";
import photo4057 from "@/assets/IMG_4057.JPG.asset.json";
import photo4058 from "@/assets/IMG_4058.JPG.asset.json";
import photo4059 from "@/assets/IMG_4059.JPG.asset.json";
import photo4060 from "@/assets/IMG_4060.JPG.asset.json";
import photo4062 from "@/assets/IMG_4062.JPG.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | The SMer Space" },
      { name: "description", content: "See the people, energy, and community behind The SMer Space." },
      { property: "og:title", content: "The SMer Space Gallery" },
      { property: "og:description", content: "Meet the people and see the community behind The SMer Space." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: photo4051.url, alt: "SMer Space team member smiling outdoors", shape: "gallery-tall" },
  { src: photo4053.url, alt: "SMer Space team member in a red branded shirt", shape: "gallery-wide" },
  { src: photo4054.url, alt: "Portrait of an SMer Space team member", shape: "gallery-standard" },
  { src: photo4055.url, alt: "SMer Space portrait against a warm background", shape: "gallery-tall" },
  { src: photo4056.url, alt: "Side portrait of an SMer Space team member", shape: "gallery-standard" },
  { src: photo4057.url, alt: "SMer Space team member smiling beside a road", shape: "gallery-wide" },
  { src: photo4058.url, alt: "SMer Space team member adjusting sunglasses outdoors", shape: "gallery-tall" },
  { src: photo4059.url, alt: "Full-length SMer Space team portrait outdoors", shape: "gallery-standard" },
  { src: photo4060.url, alt: "SMer Space team member smiling with folded arms", shape: "gallery-wide" },
  { src: photo4062.url, alt: "Close portrait of an SMer Space team member", shape: "gallery-tall" },
];

function GalleryPage() {
  return <>
    <PageIntro eyebrow="Inside our space" title="The People. The Energy. The SMer Space.">
      A look at the people building, learning, and growing with us.
    </PageIntro>
    <section className="section">
      <div className="site-container gallery-grid">
        {photos.map((photo, index) => (
          <figure key={photo.src} className={`gallery-item ${photo.shape} motion-reveal`}>
            <img src={photo.src} alt={photo.alt} loading={index > 2 ? "lazy" : "eager"} />
          </figure>
        ))}
      </div>
    </section>
  </>;
}
