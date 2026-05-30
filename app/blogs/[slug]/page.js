import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug } from "../../../data/blogs";
import { buildMetadata, siteConfig } from "../../../lib/seo";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return buildMetadata({ title: "Blog Not Found", path: `/blogs/${slug}` });
  }

  return buildMetadata({
    title: blog.title,
    description: blog.excerpt,
    path: `/blogs/${blog.slug}`,
    image: blog.coverImage,
  });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: `${siteConfig.url}${blog.coverImage}`,
    datePublished: blog.date,
    author: {
      "@type": "Organization",
      name: "Pokhara Future Minds Educational Consultancy",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Pokhara Future Minds Educational Consultancy",
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blogs` },
      { "@type": "ListItem", position: 3, name: blog.title, item: `${siteConfig.url}/blogs/${slug}` },
    ],
  };

  const otherBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="section blog-detail">
        <div className="container blog-detail-container">
          <p className="section-kicker">
            {blog.category} &bull; {blog.readTime}
          </p>
          <h1 className="brand-heading">{blog.title}</h1>
          <p className="blog-date">Published: {blog.date}</p>

          <Image
            src={blog.coverImage}
            alt={blog.title}
            width={1040}
            height={560}
            className="blog-detail-image"
            priority
            sizes="(max-width: 1024px) 100vw, 70vw"
          />

          <p className="blog-intro">{blog.intro}</p>

          <section className="blog-subsection">
            <h2 className="brand-heading-sm">
              What you need to <span>know</span>
            </h2>
            <ol className="blog-points">
              {blog.content.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ol>
          </section>

          <section className="blog-subsection">
            <h2 className="brand-heading-sm">
              Key takeaways <span>at a glance</span>
            </h2>
            <ul className="check-list compact-check">
              {blog.takeaways.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <div className="blog-cta-box">
            <p>
              Have questions about this topic? Our counselors are available
              Sunday–Friday at our Pokhara office.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-pill-gradient">
                Book Free Counselling
              </Link>
              <Link href="/destinations/korea" className="btn-pill-gray">
                Explore Korea Programs
              </Link>
            </div>
          </div>
        </div>
      </article>

      {otherBlogs.length > 0 && (
        <section className="section section--muted" aria-label="More articles">
          <div className="container">
            <h2 className="brand-heading-sm">
              More guides you might <span>find helpful</span>
            </h2>
            <div className="blog-grid">
              {otherBlogs.map((b) => (
                <article key={b.slug} className="blog-card">
                  <Image
                    src={b.coverImage}
                    alt={b.title}
                    width={700}
                    height={420}
                    className="blog-card-image"
                    loading="lazy"
                  />
                  <div className="blog-card-body">
                    <p className="blog-date">
                      {b.date} &bull; {b.category}
                    </p>
                    <h3 className="brand-heading-xs">{b.title}</h3>
                    <p>{b.excerpt}</p>
                    <Link href={`/blogs/${b.slug}`} className="btn-pill-gray">
                      Read Article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
