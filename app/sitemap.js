import { blogs } from "../data/blogs";
import { destinations } from "../data/destinations";
import { siteConfig } from "../lib/seo";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/destinations",
    "/blogs",
    "/contact",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const destinationEntries = destinations.map((item) => ({
    url: `${siteConfig.url}/destinations/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries = blogs.map((blog) => ({
    url: `${siteConfig.url}/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...destinationEntries, ...blogEntries];
}
