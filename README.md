# Zay Studio

Marketing site for Zay Studio— a software studio building operational systems for organizations.

**Live:** [zays.vercel.app](https://zays.vercel.app)

## Structure

- `app/` — Next.js App Router pages (`/`, `/case-studies`, `/case-studies/[slug]`, `/contact`)
- `components/` — all homepage sections, one file per section (Hero, WhatWeBuild, ProblemsWeSolve, FeaturedProject, About, WhyUs, TechStack, CTA, ContactForm, Nav, Footer, StatusPanel)
- `lib/case-studies.ts` — single source of truth for all case study content (CopaLog, VoYN Pipeline, CareerLiftNG). Add a new object here to add a new case study — the `[slug]` page picks it up automatically. Each entry can include a `heroScreen` and a `screens` array for visual proof (see CopaLog for the current example).
- `public/copalog/` — CopaLog screenshots used in its case study (dashboard, roster upload, CDS attendance, inbox, etc.)

## Contact form

Wired to Formspree. The endpoint lives in `components/ContactForm.tsx` (`FORMSPREE_ENDPOINT`). Submissions go to the email tied to that Formspree form.

## Adding a new case study

Open `lib/case-studies.ts` and add a new object to the `caseStudies` array with a unique `slug`. A page at `/case-studies/your-slug` is generated automatically. To add screenshots, drop images in `public/your-project/` and reference them in that case study's `heroScreen` / `screens` fields.

## Editing brand copy

- Hero headline/tagline: `components/Hero.tsx`
- What We Build cards: `components/WhatWeBuild.tsx`
- Colors/fonts: `tailwind.config.ts` (colors), `app/layout.tsx` (fonts)

## Deployment

Connected to Vercel — every push to `main` auto-deploys to production at `zays.vercel.app`. Framework preset is Next.js, no custom build overrides.

## Notes

- Built and maintained via GitHub Codespaces on mobile (no local dev environment). Edits are made directly in-browser, committed via the Codespace terminal.
- `node_modules/` and `.next/` are gitignored — never commit these. If a push is ever rejected for a large file, check `git status` for anything under `node_modules` before pushing.
