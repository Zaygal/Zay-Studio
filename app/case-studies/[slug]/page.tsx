import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return { title: `${cs.name} — Zay Studio` };
}

function Block({
  label,
  color,
  items,
}: {
  label: string;
  color: string;
  items: string[];
}) {
  return (
    <div className="border-t border-hairline py-12">
      <p className={`mono-label ${color}`}>{label}</p>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="max-w-2xl text-base leading-relaxed text-paper/90">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  return (
    <main>
      <section className="grid-texture border-b border-hairline">
        <div className="mx-auto max-w-content px-6 py-20">
          <Link href="/case-studies" className="text-sm text-muted transition hover:text-paper">
            ← All case studies
          </Link>
          <p className="mono-label mt-6 text-steel">{cs.category}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tightest md:text-5xl">
            {cs.name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{cs.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6">
        <Block label="The Problem" color="text-alert" items={cs.problem} />
        <Block label="The Solution" color="text-steel" items={cs.solution} />
        <Block label="The Result" color="text-signal" items={cs.result} />

        <div className="border-t border-hairline py-12">
          <p className="mono-label text-muted">Stack</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {cs.stack.map((s) => (
              <span key={s} className="rounded-full border border-hairline px-3 py-1.5 text-xs text-muted">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-content px-6 py-20 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tightest md:text-3xl">
            Need something like this for your organization?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-steel"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
