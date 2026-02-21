import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug } from "../../../data/blogs";
import { buildMetadata } from "../../../lib/seo";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return buildMetadata({
      title: "Blog Not Found",
      path: `/blogs/${slug}`,
    });
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

  if (!blog) {
    notFound();
  }

  return (
    <article className="section blog-detail">
      <div className="container blog-detail-container">
        <p className="section-kicker">Blog Article</p>
        <h1 className="brand-heading">
          {blog.title} <span>Insights</span>
        </h1>
        <p className="blog-date">
          {blog.date} • {blog.category} • {blog.readTime}
        </p>

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
            Key discussion <span>points</span>
          </h2>
          <ul className="blog-points">
            {blog.content.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="blog-subsection">
          <h2 className="brand-heading-sm">
            Quick takeaway <span>summary</span>
          </h2>
          <ul className="check-list compact-check">
            {blog.takeaways.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <div className="hero-actions">
          <Link href="/contact" className="btn-pill-gradient">
            Book Free Counselling
          </Link>
          <Link href="/blogs" className="btn-pill-gray">
            Back to Blogs
          </Link>
        </div>
      </div>
    </article>
  );
}
