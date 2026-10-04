import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-ui";
import photo001 from "@/assets/gallery/IMG_001.JPG";
import photo002 from "@/assets/gallery/IMG_002.JPG";
import photo003 from "@/assets/gallery/IMG_003.JPG";
import photo004 from "@/assets/gallery/IMG_004.JPG";
import photo005 from "@/assets/gallery/IMG_005.JPG";
import photo006 from "@/assets/gallery/IMG_006.JPG";
import photo007 from "@/assets/gallery/IMG_007.JPG";
import photo008 from "@/assets/gallery/IMG_008.JPG";
import photo009 from "@/assets/gallery/IMG_009.JPG";
import photo010 from "@/assets/gallery/IMG_010.JPG";
import photo011 from "@/assets/gallery/IMG_011.JPG";
import photo012 from "@/assets/gallery/IMG_012.JPG";
import photo013 from "@/assets/gallery/IMG_013.JPG";
import photo014 from "@/assets/gallery/IMG_014.JPG";
import photo015 from "@/assets/gallery/IMG_015.JPG";
import photo016 from "@/assets/gallery/IMG_016.JPG";
import photo017 from "@/assets/gallery/IMG_017.JPG";
import photo018 from "@/assets/gallery/IMG_018.JPG";
import galleryVideo from "@/assets/gallery/VID_001.mp4";

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

const galleryItems = [
  { type: "image", src: photo001, alt: "The SMer Space community", shape: "gallery-tall" },
  { type: "image", src: photo002, alt: "The SMer Space community", shape: "gallery-feature" },
  { type: "image", src: photo003, alt: "The SMer Space community", shape: "gallery-standard" },
  { type: "image", src: photo004, alt: "The SMer Space community", shape: "gallery-tall" },
  { type: "image", src: photo005, alt: "The SMer Space community", shape: "gallery-standard" },
  { type: "image", src: photo006, alt: "The SMer Space community", shape: "gallery-wide" },
  { type: "image", src: photo007, alt: "The SMer Space community", shape: "gallery-tall" },
  { type: "image", src: photo008, alt: "The SMer Space community", shape: "gallery-standard" },
  { type: "image", src: photo009, alt: "The SMer Space community", shape: "gallery-feature" },
  { type: "image", src: photo010, alt: "The SMer Space community", shape: "gallery-tall" },
  { type: "image", src: photo011, alt: "The SMer Space community", shape: "gallery-standard" },
  { type: "image", src: photo012, alt: "The SMer Space community", shape: "gallery-wide" },
  { type: "image", src: photo013, alt: "The SMer Space community", shape: "gallery-tall" },
  { type: "image", src: photo014, alt: "The SMer Space community", shape: "gallery-standard" },
  { type: "image", src: photo015, alt: "The SMer Space community", shape: "gallery-feature" },
  { type: "image", src: photo016, alt: "The SMer Space community", shape: "gallery-tall" },
  { type: "image", src: photo017, alt: "The SMer Space community", shape: "gallery-standard" },
  { type: "image", src: photo018, alt: "The SMer Space community", shape: "gallery-wide" },
  { type: "video", src: galleryVideo, alt: "The SMer Space community video", shape: "gallery-feature" },
];

function GalleryPage() {
  return <>
    <PageIntro eyebrow="Inside our space" title="The People. The Energy. The SMer Space.">
      A look at the people building, learning, and growing with us.
    </PageIntro>
    <section className="section">
      <div className="site-container gallery-grid">
        {galleryItems.map((item, index) => (
          <figure key={item.src} className={`gallery-item ${item.shape} motion-reveal`}>
            {item.type === "video" ? (
              <video src={item.src} aria-label={item.alt} controls playsInline preload="none" />
            ) : (
              <img src={item.src} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" fetchPriority={index === 0 ? "high" : "auto"} />
            )}
          </figure>
        ))}
      </div>
    </section>
  </>;
}
