import type {
  NavLink,
  ServiceItem,
  ProcessStep,
  ProjectItem,
  Differentiator,
  TeamMember,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "dev",
    iconPath:
      "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    iconViewBox: "0 0 24 24",
    title: "Full-Stack Development",
    description:
      "We architect and build scalable web applications from database to UI. Clean code, rapid shipping, no technical debt left behind.",
    tags: ["Next.js", "Node.js", "Supabase", "TypeScript"],
    accentColor: "cyan",
  },
  {
    id: "ai",
    iconPath:
      "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2",
    iconViewBox: "0 0 24 24",
    title: "AI Integration",
    description:
      "Embed large language models, computer vision, and predictive analytics directly into your product. We turn AI hype into working features.",
    tags: ["Claude API", "OpenAI", "LangChain", "RAG"],
    accentColor: "violet",
  },
  {
    id: "automation",
    iconPath:
      "M13 10V3L4 14h7v7l9-11h-7z",
    iconViewBox: "0 0 24 24",
    title: "Workflow Automation",
    description:
      "Eliminate repetitive work across your entire operation. We connect your tools, build pipelines, and let your team focus on what matters.",
    tags: ["n8n", "Make", "Zapier", "Webhooks"],
    accentColor: "cyan",
  },
  {
    id: "saas",
    iconPath:
      "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    iconViewBox: "0 0 24 24",
    title: "SaaS Development",
    description:
      "From MVP to production-ready platform. We build the infrastructure, billing, auth, and core features your SaaS needs to launch and scale.",
    tags: ["SaaS", "Stripe", "Auth.js", "Postgres"],
    accentColor: "violet",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We map your goals, constraints, and user needs in a focused kickoff. No fluff — just the clarity needed to ship right the first time.",
  },
  {
    number: 2,
    title: "Architecture",
    description:
      "We design the system before writing a line of code. Scalable by default, secure by design, and built to evolve with your product.",
  },
  {
    number: 3,
    title: "Build",
    description:
      "Iterative delivery with weekly check-ins. You see real progress every sprint, not a black box that opens at the end.",
  },
  {
    number: 4,
    title: "Launch & Automate",
    description:
      "We ship to production and wire the automation layer. Your new system works for you 24/7 from day one.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "LeadFlow AI",
    type: "SaaS · AI Automation",
    description:
      "An intelligent lead qualification platform that scores, enriches, and routes inbound leads automatically using Claude API and custom scoring models.",
    stack: ["Next.js", "Supabase", "Claude API", "n8n"],
    imageUrl: "https://placehold.co/640x400/0F1A14/00F5C4",
    imageAlt: "LeadFlow AI dashboard showing lead pipeline",
    imageBg: "#0F1A14",
  },
  {
    title: "ShopBot",
    type: "E-commerce · Chatbot",
    description:
      "A conversational shopping assistant embedded in a Shopify storefront. Handles product discovery, size recommendations, and order tracking at scale.",
    stack: ["React", "Node.js", "OpenAI", "Shopify API"],
    imageUrl: "https://placehold.co/640x400/0F0F1A/7B61FF",
    imageAlt: "ShopBot interface on a product page",
    imageBg: "#0F0F1A",
  },
  {
    title: "OpsAutomator",
    type: "Workflow Automation",
    description:
      "A no-code automation hub that replaced 40+ hours of weekly manual work for an ops team — built on n8n with custom nodes and a management dashboard.",
    stack: ["n8n", "Make", "Twilio", "Google Sheets API"],
    imageUrl: "https://placehold.co/640x400/14100F/F5A500",
    imageAlt: "OpsAutomator workflow canvas",
    imageBg: "#14100F",
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: 1,
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "We Ship Fast",
    description:
      "No 6-month timelines. Our process is built around delivering working software every sprint. You see results in weeks, not quarters.",
  },
  {
    number: 2,
    iconPath:
      "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    title: "No Account Managers",
    description:
      "You work directly with the engineers building your product. No telephone games, no project manager overhead, no miscommunication.",
  },
  {
    number: 3,
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI-Native by Default",
    description:
      "Every product we build considers where AI can reduce friction. We don't bolt it on — we architect for intelligence from the start.",
  },
  {
    number: 4,
    iconPath:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "ROI-First Pricing",
    description:
      "We price based on value delivered, not hours logged. Fixed-scope projects mean no surprise invoices and full budget predictability.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex Rivera",
    role: "AI Automation Lead",
    bio: "Former ML engineer turned builder. Specializes in wiring LLMs into production systems that don't hallucinate on your customers.",
    imageUrl: "https://placehold.co/200x200/0F1A14/00F5C4",
    accentColor: "cyan",
  },
  {
    name: "Jordan Lee",
    role: "Full-Stack Engineer",
    bio: "5 years building SaaS platforms. Obsessed with performance, clean architecture, and shipping features that users actually use.",
    imageUrl: "https://placehold.co/200x200/0F0F1A/7B61FF",
    accentColor: "violet",
  },
  {
    name: "Sam Chen",
    role: "Full-Stack Engineer",
    bio: "Frontend-leaning engineer with a sharp eye for design systems. If the UI doesn't feel right, the product doesn't ship.",
    imageUrl: "https://placehold.co/200x200/141414/F0F0F0",
    accentColor: "white",
  },
];

export const CONTACT_SERVICES = [
  "Full-Stack Development",
  "AI Integration",
  "Workflow Automation",
  "SaaS Development",
  "Other",
];

export const CONTACT_BUDGETS = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
];
