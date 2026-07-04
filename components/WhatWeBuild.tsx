const ITEMS = [
  {
    name: "Operations Dashboards",
    detail: "Monitor activity, staff, and records in real time.",
  },
  {
    name: "Staff Management Systems",
    detail: "Manage users, roles, permissions, and records in one place.",
  },
  {
    name: "Incident & Field Reporting",
    detail: "Digitize reports, approvals, and follow-up in one flow.",
  },
  {
    name: "Internal Portals",
    detail: "Secure, role-based access for staff and administrators.",
  },
  {
    name: "Workflow Automation",
    detail: "Replace repetitive manual processes with reliable systems.",
  },
  {
    name: "Civic & Data Platforms",
    detail: "Centralize operational data and turn it into visibility.",
  },
];

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="border-b border-hairline">
      <div className="mx-auto max-w-content px-6 py-24">
        <p className="mono-label text-steel">What We Build</p>
        <h2 className="mt-4 max-w-lg text-balance font-display text-3xl font-semibold tracking-tightest md:text-4xl">
          Operational software, built around how your organization actually works.
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.name} className="bg-ink p-7 transition hover:bg-panel">
              <h3 className="font-display text-lg font-medium">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
