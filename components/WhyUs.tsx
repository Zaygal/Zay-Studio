const REASONS = [
  { title: "We think in systems, not pages.", detail: "Every build starts with how work actually moves through your organization." },
  { title: "Built for long-term scalability.", detail: "Architecture that holds up as your team, users, and data grow." },
  { title: "Modern, proven architecture.", detail: "Next.js, Supabase, and PostgreSQL — no fragile custom stacks." },
  { title: "Secure by design.", detail: "Access control, rate limiting, and hardening built in from day one." },
  { title: "Clear, direct communication.", detail: "You always know what's built, what's next, and why." },
  { title: "Focused on operational efficiency.", detail: "Success is measured in hours saved and visibility gained, not features shipped." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="border-b border-hairline">
      <div className="mx-auto max-w-content px-6 py-24">
        <p className="mono-label text-steel">Why Clients Choose Us</p>
        <h2 className="mt-4 max-w-lg text-balance font-display text-3xl font-semibold tracking-tightest md:text-4xl">
          We think like operators, not agencies.
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.title}>
              <h3 className="font-display text-base font-medium">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
