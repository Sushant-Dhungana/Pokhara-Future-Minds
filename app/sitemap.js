import { blogs } from "../data/blogs";
import { destinations } from "../data/destinations";
import { siteConfig } from "../lib/seo";

export default function sitemap() {
  const now = new Date();

  // Static pages — high priority
  const staticEntries = [
    { url: siteConfig.url,                    priority: 1.0, changeFrequency: "daily" },
    { url: `${siteConfig.url}/destinations/korea`,  priority: 0.95, changeFrequency: "weekly" },
    { url: `${siteConfig.url}/services`,       priority: 0.9,  changeFrequency: "weekly" },
    { url: `${siteConfig.url}/contact`,        priority: 0.9,  changeFrequency: "weekly" },
    { url: `${siteConfig.url}/about`,          priority: 0.85, changeFrequency: "weekly" },
    { url: `${siteConfig.url}/destinations`,   priority: 0.85, changeFrequency: "weekly" },
    { url: `${siteConfig.url}/blogs`,          priority: 0.8,  changeFrequency: "weekly" },
    { url: `${siteConfig.url}/gallery`,        priority: 0.7,  changeFrequency: "monthly" },
  ].map((entry) => ({ ...entry, lastModified: now }));

  // All destination pages — explicitly listed (Korea already above, rest here)
  const destinationEntries = destinations
    .filter((d) => d.slug !== "korea") // Korea already listed above
    .map((item) => ({
      url: `${siteConfig.url}/destinations/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: item.slug === "japan" ? 0.82 : 0.78,
    }));

  // Blog pages
  const blogEntries = blogs.map((blog) => ({
    url: `${siteConfig.url}/blogs/${blog.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: blog.slug === "how-to-study-in-korea-from-nepal" ? 0.85 : 0.75,
  }));

  return [...staticEntries, ...destinationEntries, ...blogEntries];
}
