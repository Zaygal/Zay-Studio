"use client";

import { useEffect, useState } from "react";

const ROWS = [
  { label: "Field reports", before: "scattered in group chats", after: "logged & timestamped" },
  { label: "Staff records", before: "paper files, 3 offices", after: "single source of truth" },
  { label: "Approvals", before: "waiting on a signature", after: "routed automatically" },
  { label: "Visibility", before: "no one has the full picture", after: "live dashboard, all roles" },
];

export default function StatusPanel() {
  const [flipped, setFlipped] = useState<boolean[]>(ROWS.map(() => false));

  useEffect(() => {
    const timers = ROWS.map((_, i) =>
      setTimeout(() => {
        setFlipped((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 500 + i * 550)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full rounded-lg border border-hairline bg-panel">
      <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
        <span className="mono-label text-muted">system.status</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="mono-label text-signal">live</span>
        </span>
      </div>
      <div className="divide-y divide-hairline">
        {ROWS.map((row, i) => (
          <div key={row.label} className="flex items-center justify-between px-5 py-4">
            <span className="w-1/3 text-sm text-muted">{row.label}</span>
            <span className="flex flex-1 items-center justify-end gap-3 text-right">
              {!flipped[i] ? (
                <span className="font-mono text-sm text-alert/80">{row.before}</span>
              ) : (
                <span className="font-mono text-sm text-signal animate-flip">{row.after}</span>
              )}
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${
                  flipped[i] ? "bg-signal" : "bg-alert animate-blink"
                }`}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
