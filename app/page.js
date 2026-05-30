import HeroSection from "../components/home/HeroSection";
import StatsBand from "../components/home/StatsBand";
import KoreaSpotlight from "../components/home/KoreaSpotlight";
import ServicesGrid from "../components/home/ServicesGrid";
import ProcessSteps from "../components/home/ProcessSteps";
import AboutSplitSection from "../components/home/AboutSplitSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FaqSection from "../components/home/FaqSection";
import CtaSection from "../components/home/CtaSection";
import { buildMetadata, siteConfig } from "../lib/seo";
import { faqItems } from "../data/faq";

export function generateMetadata() {
  return buildMetadata({
    title: "Pokhara Future Minds | Korean Language, IELTS & Study Abroad",
    description:
      "Pokhara Future Minds — Pokhara's #1 study abroad consultancy. Korean language (TOPIK) classes, IELTS & PTE coaching, GKS scholarship guidance, and expert student visa support for Korea, Australia, Canada, UK & USA.",
    path: "/",
  });
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection />
      <StatsBand />
      <KoreaSpotlight />
      <ServicesGrid />
      <ProcessSteps />
      <AboutSplitSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
