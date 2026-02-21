export default function PageHero({
  kicker,
  title,
  accent,
  description,
  className = "",
}) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      <div className="container">
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        <h1 className="brand-heading">
          {title}
          {accent ? <span> {accent}</span> : null}
        </h1>
        {description ? <p>{description}</p> : null}
      </div>
    </section>
  );
}
