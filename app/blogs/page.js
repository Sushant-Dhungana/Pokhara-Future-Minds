import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/common/PageHero";
import Reveal from "../../components/motion/Reveal";
import { blogs } from "../../data/blogs";
import { buildMetadata } from "../../lib/seo";

export function generateMetadata() {
  return buildMetadata({
    title: "Blogs",
    description:
      "Read practical blog articles on destinations, visa documentation, and admission planning.",
    path: "/blogs",
  });
}

export default function BlogsPage() {
  const [featured, ...rest] = blogs;

  return (
    <>
      <PageHero
        kicker="Blogs"
        title="Latest Student Guidance"
        accent="Articles"
        description="Practical reads designed to help students and families make better study-abroad decisions."
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
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="featured-blog-content">
                <p className="blog-date">
                  {featured.date} • {featured.category} • {featured.readTime}
                </p>
                <h2 className="brand-heading-sm">
                  {featured.title} <span>Guide</span>
                </h2>
                <p>{featured.excerpt}</p>
                <Link href={`/blogs/${featured.slug}`} className="btn-pill-gradient">
                  Read Featured Article
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2 className="brand-heading-md">
                More practical insights for <span>students</span>
              </h2>
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
                    loading="lazy"
                  />
                  <div className="blog-card-body">
                    <p className="blog-date">
                      {blog.date} • {blog.category} • {blog.readTime}
                    </p>
                    <h2 className="brand-heading-xs">{blog.title}</h2>
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
