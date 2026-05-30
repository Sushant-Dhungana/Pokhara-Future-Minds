import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/motion/PageTransition";
import LenisProvider from "../components/providers/LenisProvider";
import NavigationLoader from "../components/providers/NavigationLoader";
import { siteConfig } from "../lib/seo";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.shortName,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} — Korean Language, IELTS, PTE & Study Abroad Consultancy Pokhara`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.shortName,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google5d4dbb930be0810e",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Pokhara Future Minds Educational Consultancy",
  alternateName: "Pokhara Future Minds",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: `${siteConfig.url}/images/og-default.jpg`,
  description:
    "Pokhara's trusted study abroad consultancy offering Korean language classes, IELTS & PTE preparation, and expert admissions & visa guidance for Korea, Australia, Canada, UK, USA, and Japan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Road, Ward No. 8",
    addressLocality: "Pokhara",
    addressRegion: "Gandaki Province",
    addressCountry: "NP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.2096,
    longitude: 83.9856,
  },
  telephone: "+977-61-585653",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Study Abroad Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Korean Language Classes",
          description:
            "Korean language courses from beginner (TOPIK I) to advanced (TOPIK II) for students planning to study in Korea.",
          provider: { "@type": "EducationalOrganization", name: "Pokhara Future Minds" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "IELTS Preparation Classes",
          description:
            "Expert IELTS coaching with mock tests, band-score targeting, and personalized feedback for international admissions.",
          provider: { "@type": "EducationalOrganization", name: "Pokhara Future Minds" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "PTE Academic Preparation",
          description:
            "Structured PTE coaching covering all four skills with targeted practice and score improvement strategies.",
          provider: { "@type": "EducationalOrganization", name: "Pokhara Future Minds" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Student Visa & Admissions Consultancy",
          description:
            "End-to-end admissions, SOP writing, visa documentation, and pre-departure support for Korea, Australia, Canada, UK, USA, and Japan.",
        },
      },
    ],
  },
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <LenisProvider>
          <NavigationLoader />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
