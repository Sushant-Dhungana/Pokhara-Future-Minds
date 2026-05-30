export const siteConfig = {
  name: "Pokhara Future Minds Educational Consultancy",
  shortName: "Pokhara Future Minds",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.pokharafutureminds.com",
  description:
    "Pokhara Future Minds — Pokhara's trusted study abroad consultancy offering Korean language classes, IELTS & PTE preparation, and expert visa & admissions guidance for Korea, Australia, Canada, UK, USA, and Japan.",
  ogImage: "/images/og-default.jpg",
  keywords: [
    "Korean language classes Pokhara",
    "study in Korea from Nepal",
    "IELTS classes Pokhara",
    "PTE preparation Pokhara",
    "study abroad consultancy Pokhara",
    "Korea visa guidance Nepal",
    "student visa consultancy Pokhara",
    "education consultancy Pokhara Nepal",
    "study in Korea Nepal",
    "Korean language course Nepal",
    "IELTS coaching Pokhara",
    "PTE coaching Nepal",
    "Australia student visa Nepal",
    "Canada study permit Nepal",
    "university admission Nepal",
    "SOP writing Nepal",
    "GKS scholarship Nepal",
    "Korean government scholarship",
    "Pokhara Future Minds",
  ],
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
}) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteConfig.url}${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
