import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/common/PageHero";
import Reveal from "../../components/motion/Reveal";
import { blogs } from "../../data/blogs";
import { buildMetadata, siteConfig } from "../../lib/seo";

export function generateMetadata() {
  return buildMetadata({
    title: "Korea Study Guide, IELTS Tips & GKS Scholarship Blog | Pokhara Future Minds",
    description:
      "Practical guides for Nepali students — how to study in Korea, GKS scholarship application, IELTS vs PTE comparison, visa documentation tips, and more.",
    path: "/blogs",
  });
}

const blogsBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog & Guides", item: `${siteConfig.url}/blogs` },
  ],
};

export default function BlogsPage() {
  const [featured, ...rest] = blogs;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsBreadcrumb) }}
      />

      <PageHero
        kicker="Blog & Study Guides"
        title="Practical Guides for"
        accent="Nepali Students Abroad"
        description="In-depth articles on studying in Korea, GKS scholarships, IELTS and PTE preparation, and student visa documentation — written by our counselors."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <article className="featured-blog">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                width={980}
                height={540}
                className="featured-blog-image"
                unoptimized
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="featured-blog-content">
                <p className="blog-date">
                  {featured.date} &bull; {featured.category} &bull; {featured.readTime}
                </p>
                <h2 className="brand-heading-sm">
                  {featured.title}
                </h2>
                <p>{featured.excerpt}</p>
                <Link href={`/blogs/${featured.slug}`} className="btn-pill-gradient">
                  Read Full Guide
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="more-blogs-heading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 id="more-blogs-heading" className="brand-heading-md">
                More guides for <span>students & families</span>
              </h2>
              <p>
                Bookmark these articles — they cover the most common questions
                we hear from students in Pokhara about Korea, IELTS, PTE, and
                the study abroad process.
              </p>
            </div>
          </Reveal>

          <div className="blog-grid">
            {rest.map((blog, index) => (
              <Reveal key={blog.slug} delay={index * 0.04}>
                <article className="blog-card">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    width={700}
                    height={420}
                    className="blog-card-image"
                    unoptimized
                    loading="lazy"
                  />
                  <div className="blog-card-body">
                    <p className="blog-date">
                      {blog.date} &bull; {blog.category} &bull; {blog.readTime}
                    </p>
                    <h3 className="brand-heading-xs">{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <Link href={`/blogs/${blog.slug}`} className="btn-pill-gray">
                      Read Article
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
