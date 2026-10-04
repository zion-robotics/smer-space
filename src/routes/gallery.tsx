import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageIntro } from "@/components/site-ui";
import photo001Avif from "@/assets/gallery/IMG_001_converted.avif";
import photo001Webp from "@/assets/gallery/IMG_001_converted.webp";
import photo002Avif from "@/assets/gallery/IMG_002_converted.avif";
import photo002Webp from "@/assets/gallery/IMG_002_converted.webp";
import photo003Avif from "@/assets/gallery/IMG_003_converted.avif";
import photo003Webp from "@/assets/gallery/IMG_003_converted.webp";
import photo004Avif from "@/assets/gallery/IMG_004_converted.avif";
import photo004Webp from "@/assets/gallery/IMG_004_converted.webp";
import photo005Avif from "@/assets/gallery/IMG_005_converted.avif";
import photo005Webp from "@/assets/gallery/IMG_005_converted.webp";
import photo006Avif from "@/assets/gallery/IMG_006_converted.avif";
import photo006Webp from "@/assets/gallery/IMG_006_converted.webp";
import photo007Avif from "@/assets/gallery/IMG_007_converted.avif";
import photo007Webp from "@/assets/gallery/IMG_007_converted.webp";
import photo008Avif from "@/assets/gallery/IMG_008_converted.avif";
import photo008Webp from "@/assets/gallery/IMG_008_converted.webp";
import photo009Avif from "@/assets/gallery/IMG_009_converted.avif";
import photo009Webp from "@/assets/gallery/IMG_009_converted.webp";
import photo010Avif from "@/assets/gallery/IMG_010_converted.avif";
import photo010Webp from "@/assets/gallery/IMG_010_converted.webp";
import photo011Avif from "@/assets/gallery/IMG_011_converted.avif";
import photo011Webp from "@/assets/gallery/IMG_011_converted.webp";
import photo012Avif from "@/assets/gallery/IMG_012_converted.avif";
import photo012Webp from "@/assets/gallery/IMG_012_converted.webp";
import photo013Avif from "@/assets/gallery/IMG_013_converted.avif";
import photo013Webp from "@/assets/gallery/IMG_013_converted.webp";
import photo014Avif from "@/assets/gallery/IMG_014_converted.avif";
import photo014Webp from "@/assets/gallery/IMG_014_converted.webp";
import photo015Avif from "@/assets/gallery/IMG_015_converted.avif";
import photo015Webp from "@/assets/gallery/IMG_015_converted.webp";
import photo016Avif from "@/assets/gallery/IMG_016_converted.avif";
import photo016Webp from "@/assets/gallery/IMG_016_converted.webp";
import photo017Avif from "@/assets/gallery/IMG_017_converted.avif";
import photo017Webp from "@/assets/gallery/IMG_017_converted.webp";
import photo018Avif from "@/assets/gallery/IMG_018_converted.avif";
import photo018Webp from "@/assets/gallery/IMG_018_converted.webp";
import galleryVideo from "@/assets/gallery/VID_001.mp4";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | The SMer Space" },
      {
        name: "description",
        content: "See the people, energy, and community behind The SMer Space.",
      },
      { property: "og:title", content: "The SMer Space Gallery" },
      {
        property: "og:description",
        content: "Meet the people and see the community behind The SMer Space.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const galleryItems = [
  {
    type: "image",
    avif: photo001Avif,
    webp: photo001Webp,
    alt: "The SMer Space community",
    shape: "gallery-tall",
  },
  {
    type: "image",
    avif: photo002Avif,
    webp: photo002Webp,
    alt: "The SMer Space community",
    shape: "gallery-feature",
  },
  {
    type: "image",
    avif: photo003Avif,
    webp: photo003Webp,
    alt: "The SMer Space community",
    shape: "gallery-standard",
  },
  {
    type: "image",
    avif: photo004Avif,
    webp: photo004Webp,
    alt: "The SMer Space community",
    shape: "gallery-tall",
  },
  {
    type: "image",
    avif: photo005Avif,
    webp: photo005Webp,
    alt: "The SMer Space community",
    shape: "gallery-standard",
  },
  {
    type: "image",
    avif: photo006Avif,
    webp: photo006Webp,
    alt: "The SMer Space community",
    shape: "gallery-wide",
  },
  {
    type: "image",
    avif: photo007Avif,
    webp: photo007Webp,
    alt: "The SMer Space community",
    shape: "gallery-tall",
  },
  {
    type: "image",
    avif: photo008Avif,
    webp: photo008Webp,
    alt: "The SMer Space community",
    shape: "gallery-standard",
  },
  {
    type: "image",
    avif: photo009Avif,
    webp: photo009Webp,
    alt: "The SMer Space community",
    shape: "gallery-feature",
  },
  {
    type: "image",
    avif: photo010Avif,
    webp: photo010Webp,
    alt: "The SMer Space community",
    shape: "gallery-tall",
  },
  {
    type: "image",
    avif: photo011Avif,
    webp: photo011Webp,
    alt: "The SMer Space community",
    shape: "gallery-standard",
  },
  {
    type: "image",
    avif: photo012Avif,
    webp: photo012Webp,
    alt: "The SMer Space community",
    shape: "gallery-wide",
  },
  {
    type: "image",
    avif: photo013Avif,
    webp: photo013Webp,
    alt: "The SMer Space community",
    shape: "gallery-tall",
  },
  {
    type: "image",
    avif: photo014Avif,
    webp: photo014Webp,
    alt: "The SMer Space community",
    shape: "gallery-standard",
  },
  {
    type: "image",
    avif: photo015Avif,
    webp: photo015Webp,
    alt: "The SMer Space community",
    shape: "gallery-feature",
  },
  {
    type: "image",
    avif: photo016Avif,
    webp: photo016Webp,
    alt: "The SMer Space community",
    shape: "gallery-tall",
  },
  {
    type: "image",
    avif: photo017Avif,
    webp: photo017Webp,
    alt: "The SMer Space community",
    shape: "gallery-standard",
  },
  {
    type: "image",
    avif: photo018Avif,
    webp: photo018Webp,
    alt: "The SMer Space community",
    shape: "gallery-wide",
  },
  {
    type: "video",
    src: galleryVideo,
    alt: "The SMer Space community video",
    shape: "gallery-feature",
  },
];

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{
    avif: string;
    webp: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <PageIntro eyebrow="Inside our space" title="The People. The Energy. The SMer Space.">
        A look at the people building, learning, and growing with us.
      </PageIntro>
      <section className="section">
        <div className="site-container gallery-grid">
          {galleryItems.map((item, index) => (
            <figure
              key={item.type === "video" ? item.src : item.avif}
              className={`gallery-item ${item.shape} motion-reveal`}
            >
              {item.type === "video" ? (
                <video src={item.src} aria-label={item.alt} controls playsInline preload="none" />
              ) : (
                <button
                  className="gallery-trigger"
                  type="button"
                  aria-label={`Zoom in on ${item.alt}`}
                  onClick={() => setSelectedImage(item)}
                >
                  <picture>
                    <source srcSet={item.avif} type="image/avif" />
                    <source srcSet={item.webp} type="image/webp" />
                    <img
                      src={item.webp}
                      alt={item.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={index === 0 ? "high" : "auto"}
                    />
                  </picture>
                </button>
              )}
            </figure>
          ))}
        </div>
      </section>
      {selectedImage ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-lightbox-close"
            type="button"
            aria-label="Close expanded image"
            onClick={() => setSelectedImage(null)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <picture onClick={(event) => event.stopPropagation()}>
            <source srcSet={selectedImage.avif} type="image/avif" />
            <source srcSet={selectedImage.webp} type="image/webp" />
            <img src={selectedImage.webp} alt={selectedImage.alt} />
          </picture>
        </div>
      ) : null}
    </>
  );
}
