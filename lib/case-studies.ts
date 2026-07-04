export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  flagship?: boolean;
  problem: string[];
  solution: string[];
  result: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "copalog",
    name: "CopaLog",
    category: "Operational Management Platform",
    summary:
      "A five-role operational platform that replaced fragmented reporting with a centralized, real-time system.",
    flagship: true,
    problem: [
      "Field activity, attendance, and reports were tracked manually across group chats and paper logs, with no single source of truth.",
      "Supervisors and administrators had no real-time visibility into what was happening on the ground.",
      "Roster verification was manual and error-prone, with no reliable way to confirm records against official data.",
    ],
    solution: [
      "Built a five-role hierarchy (HQ Admin, State Coordinator, LGA Officer, PPA Supervisor, and Corps Member), each with scoped access and permissions.",
      "Delivered a Telegram bot for registration, logging, attendance, and reporting, so users could interact with the system without leaving a chat interface.",
      "Built a real-time dashboard so administrators can drill down from all states to an individual member, with live updates as new data comes in.",
      "Added CSV-based roster validation gated on official identifiers, so records are verified against source data before entering the system.",
      "Hardened the platform with strict security headers, rate limiting, IDOR testing, and verified email delivery.",
    ],
    result: [
      "A live, production platform at copalog.vercel.app used for real operational reporting.",
      "Positive reception at YEEP'26 from NYSC's ICT Chief, with a formal technical report requested for the Deputy Director of ICT.",
      "A security posture (Grade A headers, tested access controls) suitable for handling real organizational data.",
    ],
    stack: ["Next.js", "Supabase", "PostgreSQL", "Telegram Bot API", "n8n", "Upstash Redis", "Vercel"],
  },
  {
    slug: "voyn-pipeline",
    name: "VoYN Content Pipeline",
    category: "Workflow Automation",
    summary:
      "An autonomous, multi-platform content system that turns news sources into approved, published posts with no manual authoring.",
    problem: [
      "Publishing consistent content across six platforms required manual writing, formatting, and posting for every single update.",
      "There was no way to catch duplicate stories or verify content before it went live, risking reputational error.",
    ],
    solution: [
      "Built an automated pipeline: RSS feeds feed a supervisor model that assigns content type, a writer model drafts it, and a humanizer pass removes AI-sounding phrasing.",
      "Every draft routes through a Telegram approval gate before publishing, keeping a human in the loop without requiring manual writing.",
      "Approved content is rendered as branded visual cards and distributed automatically across Instagram, Facebook, LinkedIn, and X.",
      "Deduplication logic prevents the same story from being covered twice across the pipeline's run.",
    ],
    result: [
      "A single approval tap replaces what would otherwise be hours of manual writing and posting per week.",
      "Consistent presence across six platforms with a distinct voice tuned per platform.",
    ],
    stack: ["n8n", "Groq", "Supabase", "Cloudflare Workers", "Telegram Bot API"],
  },
  {
    slug: "careerliftng",
    name: "CareerLiftNG",
    category: "SaaS Product",
    summary:
      "A full-stack job platform with paid CV tooling, built and shipped end-to-end including payment integration.",
    problem: [
      "Job seekers had to check multiple job boards separately, with no Nigeria-first prioritization or CV help built in.",
    ],
    solution: [
      "Aggregated listings from multiple job sources with Nigerian sources surfaced first.",
      "Built a paid CV upgrade feature powered by the Claude API, with Paystack handling checkout.",
      "Deployed as a full production app on Vercel with Supabase as the backend.",
    ],
    result: [
      "A live, revenue-capable SaaS product with real payment processing, not just a demo.",
    ],
    stack: ["Next.js", "Supabase", "Claude API", "Paystack", "Vercel"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
