import Link from "next/link";

export default function CTA() {
  return (
    <section className="grid-texture">
      <div className="mx-auto max-w-content px-6 py-28 text-center">
        <h2 className="text-balance font-display text-3xl font-semibold tracking-tightest md:text-4xl">
          Ready to modernize your operations?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
          Let&apos;s discuss your workflow and design software that saves your
          team time.
        </p>
        <Link
          href="/contact"
          className="mt-9 inline-block rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-steel"
        >
          Book a Discovery Call
        </Link>
      </div>
    </section>
  );
}
