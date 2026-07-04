import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Zay Studio",
};

export default function ContactPage() {
  return (
    <main className="grid-texture">
      <div className="mx-auto max-w-content px-6 py-24">
        <p className="mono-label text-steel">Contact</p>
        <h1 className="mt-4 max-w-lg text-balance font-display text-3xl font-semibold tracking-tightest md:text-4xl">
          Let&apos;s talk about your operations.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
          Tell us where the friction is — manual reporting, scattered records,
          slow approvals — and we&apos;ll tell you what a system for that
          could look like.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <div>
              <p className="mono-label text-muted">Email</p>
              <a href="mailto:dosunmuh070@gmail.com" className="mt-1 block text-base text-paper transition hover:text-steel">
                dosunmuh070@gmail.com
              </a>
            </div>
            <div>
              <p className="mono-label text-muted">Response time</p>
              <p className="mt-1 text-base text-paper">Within 24 hours, most days sooner.</p>
            </div>
            <div>
              <p className="mono-label text-muted">Currently based in</p>
              <p className="mt-1 text-base text-paper">Abuja, Nigeria — working with organizations globally.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}