const BEFORE = ["Paper files", "Spreadsheets everywhere", "Reports that go missing", "Slow, manual approvals", "No visibility into operations"];
const AFTER = ["Centralized platform", "Automated workflow", "Instant reporting", "Routed, trackable approvals", "Real-time operational insight"];

export default function ProblemsWeSolve() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-content px-6 py-24">
        <p className="mono-label text-steel">Problems We Solve</p>
        <h2 className="mt-4 max-w-lg text-balance font-display text-3xl font-semibold tracking-tightest md:text-4xl">
          We don&apos;t just write code. We remove the friction underneath it.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-hairline bg-panel p-8">
            <p className="mono-label text-alert">Before</p>
            <ul className="mt-5 space-y-3">
              {BEFORE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-alert" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-steeldim bg-panel p-8">
            <p className="mono-label text-signal">After</p>
            <ul className="mt-5 space-y-3">
              {AFTER.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-paper">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
