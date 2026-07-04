import Link from "next/link";

const FEATURES = [
  "Authentication",
  "Multi-role access",
  "Real-time dashboard",
  "Reports",
  "Search",
  "File management",
  "Notifications",
  "Approval workflow",
];

export default function FeaturedProject() {
  return (
    <section className="border-b border-hairline bg-panel">
      <div className="mx-auto max-w-content px-6 py-24">
        <p className="mono-label text-steel">Featured Project</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tightest md:text-4xl">
          CopaLog
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          An operational management platform designed to digitize
          organizational workflows, improve transparency, and centralize
          operational data across a five-role hierarchy — from field staff to
          headquarters.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {FEATURES.map((f) => (
            <span
              key={f}
              className="rounded-full border border-hairline px-3 py-1.5 text-xs text-muted"
            >
              {f}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/case-studies/copalog"
            className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition hover:bg-steel"
          >
            Read the Case Study
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-hairline px-6 py-3 text-sm font-medium text-paper transition hover:border-steel hover:text-steel"
          >
            Request a Similar System
          </Link>
        </div>
      </div>
    </section>
  );
}
