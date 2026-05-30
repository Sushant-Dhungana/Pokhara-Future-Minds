import Image from "next/image";

export default function Loading() {
  return (
    <div className="page-loader" aria-label="Loading" role="status">
      <div className="loader-logo">
        <Image
          src="/favicon-icon.png"
          alt="Pokhara Future Minds"
          width={72}
          height={72}
          priority
        />
      </div>
      <div className="loader-ring" aria-hidden="true" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
