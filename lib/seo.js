export const siteConfig = {
  name: "Pokhara Future Minds Educational Consultancy",
  shortName: "Pokhara Future Minds",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.pokharafutureminds.com",
  description:
    "Pokhara Future Minds Educational Consultancy helps students with counseling, admissions, visa guidance, and destination planning.",
  ogImage: "/images/og-default.jpg",
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
