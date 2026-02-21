import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/motion/PageTransition";
import LenisProvider from "../components/providers/LenisProvider";
import { siteConfig } from "../lib/seo";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.shortName,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.shortName,
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
