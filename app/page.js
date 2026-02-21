import HeroSection from "../components/home/HeroSection";
import StatsBand from "../components/home/StatsBand";
import ServicesGrid from "../components/home/ServicesGrid";
import ProcessSteps from "../components/home/ProcessSteps";
import AboutSplitSection from "../components/home/AboutSplitSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FaqSection from "../components/home/FaqSection";
import CtaSection from "../components/home/CtaSection";
import { buildMetadata } from "../lib/seo";

export function generateMetadata() {
  return buildMetadata({
    title: "Home",
    description:
      "Pokhara Future Minds Educational Consultancy offers expert guidance for study destinations, admissions, and visas.",
    path: "/",
  });
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <ServicesGrid />
      <ProcessSteps />
      <AboutSplitSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
