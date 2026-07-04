export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-semibold">
            Zay<span className="text-steel">.</span>Studio
          </p>
          <p className="mt-1 text-sm text-muted">Engineering systems that work.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <a href="mailto:dosunmuh070@gmail.com" className="transition hover:text-paper">
            Email
          </a>
          <a
            href="https://github.com/zaygal"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-paper"
          >
            GitHub
          </a>
          <a
            href="https://x.com/zaygalx1"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-paper"
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-dosunmu-8823a5260"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-paper"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-hairline px-6 py-4">
        <p className="mx-auto max-w-content text-xs text-muted">
          © {new Date().getFullYear()} Zay Studio. Built by operators, for operators.
        </p>
      </div>
    </footer>
  );
}