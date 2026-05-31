import PageHero from "../../components/common/PageHero";
import Reveal from "../../components/motion/Reveal";
import Gallery from "../../components/about/Gallery";
import { buildMetadata, siteConfig } from "../../lib/seo";
import { galleryImages } from "../../data/gallery";

export function generateMetadata() {
  return buildMetadata({
    title: "Gallery — Classrooms, Counseling & Team | Pokhara Future Minds Pokhara",
    description:
      "Photos of our IELTS, PTE & Korean language classrooms, student counseling office, and expert team at Pokhara Future Minds Educational Consultancy, New Road Pokhara, Nepal.",
    path: "/gallery",
  });
}

const galleryBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Gallery", item: `${siteConfig.url}/gallery` },
  ],
};

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Pokhara Future Minds — Office & Classroom Photos",
  description:
    "Photos of the IELTS, PTE and Korean language classrooms, student counseling desk, and team at Pokhara Future Minds Educational Consultancy in Pokhara, Nepal.",
  url: `${siteConfig.url}/gallery`,
  image: galleryImages.map((img) => ({
    "@type": "ImageObject",
    contentUrl: `${siteConfig.url}${img.src}`,
    description: img.alt,
    name: img.caption,
  })),
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      <PageHero
        kicker="Our Office & Team"
        title="Inside Pokhara"
        accent="Future Minds"
        description="Take a look at our IELTS, PTE & Korean language classrooms, student counseling office, and the team behind every successful visa at New Road, Pokhara."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="section-kicker">Photo Gallery</p>
              <h2 className="brand-heading-md">
                Our Classrooms, Office &amp; <span>Team</span>
              </h2>
              <p>
                Click any photo to view full screen and navigate with arrow keys.
              </p>
            </div>
          </Reveal>

          <Gallery />
        </div>
      </section>
    </>
  );
}
