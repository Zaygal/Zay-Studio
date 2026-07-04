const STACK = ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"];

export default function TechStack() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-content px-6 py-16">
        <p className="mono-label mb-8 text-steel">Technology</p>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {STACK.map((t) => (
            <span key={t} className="font-display text-lg text-muted transition hover:text-paper">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
