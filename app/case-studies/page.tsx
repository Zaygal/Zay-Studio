import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export const metadata = {
  title: "Case Studies — Zay Studio",
};

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-content px-6 py-24">
      <p className="mono-label text-steel">Case Studies</p>
      <h1 className="mt-4 max-w-lg text-balance font-display text-3xl font-semibold tracking-tightest md:text-4xl">
        Systems we&apos;ve built, and what they replaced.
      </h1>
      <div className="mt-14 space-y-px overflow-hidden rounded-lg border border-hairline bg-hairline">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="flex flex-col justify-between gap-2 bg-ink p-8 transition hover:bg-panel sm:flex-row sm:items-center"
          >
            <div>
              {cs.flagship && (
                <span className="mono-label text-signal">Flagship</span>
              )}
              <h2 className="mt-1 font-display text-xl font-medium">{cs.name}</h2>
              <p className="mt-1 text-sm text-muted">{cs.category}</p>
            </div>
            <span className="text-sm text-steel">Read case study →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
