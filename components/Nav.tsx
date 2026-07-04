import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold tracking-tightest">
          Zay<span className="text-steel">.</span>Studio
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/#what-we-build" className="text-sm text-muted transition hover:text-paper">
            What We Build
          </Link>
          <Link href="/case-studies" className="text-sm text-muted transition hover:text-paper">
            Case Studies
          </Link>
          <Link href="/#why-us" className="text-sm text-muted transition hover:text-paper">
            Why Us
          </Link>
          <Link href="/contact" className="text-sm text-muted transition hover:text-paper">
            Contact
          </Link>
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-hairline bg-panel px-4 py-2 text-sm font-medium text-paper transition hover:border-steel hover:text-steel"
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
}
