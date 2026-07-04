import Link from "next/link";
import StatusPanel from "@/components/StatusPanel";

export default function Hero() {
  return (
    <section className="grid-texture border-b border-hairline">
      <div className="mx-auto grid max-w-content gap-16 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
        <div>
          <p className="mono-label mb-6 text-steel">Software Studio</p>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tightest md:text-5xl">
            Engineering systems that work.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            We design and build custom operational software that helps
            organizations replace paperwork, spreadsheets, and fragmented
            workflows with secure, scalable digital systems.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition hover:bg-steel hover:text-ink"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/case-studies/copalog"
              className="rounded-full border border-hairline px-6 py-3 text-sm font-medium text-paper transition hover:border-steel hover:text-steel"
            >
              View Featured Project
            </Link>
          </div>
        </div>
        <StatusPanel />
      </div>
    </section>
  );
}
