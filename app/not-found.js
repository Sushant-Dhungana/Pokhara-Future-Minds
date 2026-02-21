import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="section not-found">
      <div className="container not-found-inner">
        <p className="section-kicker">404</p>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="btn-pill-gray">
          Go Home
        </Link>
      </div>
    </section>
  );
}
