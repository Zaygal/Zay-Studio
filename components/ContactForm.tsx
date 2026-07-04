"use client";

import { useState, FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgojdwya";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col justify-center rounded-lg border border-hairline bg-panel p-8">
        <p className="mono-label text-signal">Message sent</p>
        <p className="mt-3 text-base text-paper">
          Thanks — we&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-hairline bg-panel p-8">
      <div>
        <label htmlFor="name" className="mono-label text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-md border border-hairline bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-steel"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="org" className="mono-label text-muted">
          Organization
        </label>
        <input
          id="org"
          name="org"
          type="text"
          className="mt-2 w-full rounded-md border border-hairline bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-steel"
          placeholder="Your organization"
        />
      </div>
      <div>
        <label htmlFor="email" className="mono-label text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-hairline bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-steel"
          placeholder="you@organization.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mono-label text-muted">
          What&apos;s the workflow problem?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-2 w-full rounded-md border border-hairline bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-steel"
          placeholder="Tell us what's manual today"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-alert">
          Something went wrong. Please try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition hover:bg-steel disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}