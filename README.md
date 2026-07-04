# Zay Studio

Marketing site for Zay Studio — a software studio building operational systems.

## Structure

- `app/` — Next.js App Router pages (`/`, `/case-studies`, `/case-studies/[slug]`, `/contact`)
- `components/` — all homepage sections, one file per section
- `lib/case-studies.ts` — single source of truth for all case study content (CopaLog, VoYN Pipeline, CareerLiftNG). Add a new object here to add a new case study — the `[slug]` page picks it up automatically.

## Setup (Vercel, same flow as CopaLog)

1. Push all these files into a new GitHub repo.
2. Import the repo into Vercel (New Project → select repo).
3. Vercel auto-detects Next.js — no config needed. Deploy.

## Adding a new case study

Open `lib/case-studies.ts` and add a new object to the `caseStudies` array with a unique `slug`. A page at `/case-studies/your-slug` is generated automatically, no new files needed.

## Editing brand copy

- Hero headline/tagline: `components/Hero.tsx`
- What We Build cards: `components/WhatWeBuild.tsx`
- Colors/fonts: `tailwind.config.ts` (colors), `app/layout.tsx` (fonts)

## Notes

- No backend yet — the contact form in `app/contact/page.tsx` is UI only. Wire it to Supabase, a form service (e.g. Formspree), or an email API before relying on it.
- Built mobile-first for editing via GitHub's web editor, consistent with the rest of the CopaLog/VoYN stack.
