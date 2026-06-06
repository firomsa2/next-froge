import type {
  NavLink,
  ServiceItem,
  ProcessStep,
  ProjectItem,
  ProjectCategory,
  Differentiator,
  TeamMember,
  BlogPost,
  ValuePillar,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY = {
  name: "Hornlink",
  fullName: "Hornlink Technology",
  tagline: "Smart, Reliable, Transformative Technology.",
  founded: "2024",
  email: "hello@hornlink.et",
  phone: "+251 900 000 000",
  whatsapp: "https://wa.me/251900000000",
  linkedin: "https://linkedin.com/company/hornlink",
};

export const ABOUT = {
  vision:
    "To become the go-to partner in technology innovation — empowering individuals and businesses through smart, reliable, and transformative solutions.",
  mission:
    "To design and deliver innovative technology solutions that simplify life, empower businesses, and drive digital transformation across the world. We merge creativity, intelligence, and technology to build sustainable solutions that create real impact and lasting value for our clients.",
  about: [
    "Founded in 2024, Hornlink Technology is a professional technology firm dedicated to delivering end-to-end digital transformation and intelligent innovation solutions across industries.",
    "Our approach is innovation-driven — blending creativity, technical expertise, and strategic thinking to co-create practical, scalable, and future-ready solutions that truly make an impact.",
    "We work with businesses, startups, public institutions, and organizations to help them leverage technology for efficiency, growth, and sustainability. Our expertise spans AI automation, intelligent systems development, and digital experience design.",
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "awd",
    iconPath:
      "M2 5a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2zM8 21h8M12 18v3",
    iconViewBox: "0 0 24 24",
    title: "AI-Powered Website Design & Development",
    description:
      "Smart, adaptive websites and dashboards powered by AI — combining aesthetics, functionality, and intelligence. Our platforms learn from user behavior, automate engagement, and convert 24/7.",
    tags: ["UX Optimization", "Responsive", "Chatbots", "SEO"],
    accentColor: "cyan",
  },
  {
    id: "awa",
    iconPath:
      "M13 10V3L4 14h7v7l9-11h-7z",
    iconViewBox: "0 0 24 24",
    title: "AI & Workflow Automation",
    description:
      "Intelligent automation that streamlines operations and eliminates repetitive tasks. We connect your systems so your team works smarter, not harder — saving time and reducing costs.",
    tags: ["CRM/ERP", "Custom Bots", "Voice AI", "Integrations"],
    accentColor: "violet",
  },
  {
    id: "sbsd",
    iconPath:
      "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    iconViewBox: "0 0 24 24",
    title: "Smart Business Systems Development",
    description:
      "Tailored digital systems that streamline operations, improve decision-making, and scale effectively. Each system integrates innovation, efficiency, and intelligence into your business model.",
    tags: ["Dashboards", "Analytics", "IoT", "Enterprise Apps"],
    accentColor: "cyan",
  },
  {
    id: "tm",
    iconPath:
      "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.42A12 12 0 0112 21a12 12 0 01-6.16-10.42L12 14z",
    iconViewBox: "0 0 24 24",
    title: "Training & Mentorship",
    description:
      "Hands-on learning and mentorship in AI, automation, and digital innovation. We equip individuals and organizations with the skills and mindset to thrive in the digital age.",
    tags: ["AI Skills", "Full-Stack", "1:1 Mentorship", "Teams"],
    accentColor: "violet",
  },
];

/* Per-service detail used on the dedicated /services page (from the profile). */
export const SERVICE_DETAILS: Record<
  string,
  { tagline: string; offerings: string[]; impact: string }
> = {
  awd: {
    tagline: "Building Intelligent Digital Experiences",
    offerings: [
      "AI-enhanced web design and UX optimization",
      "Dynamic, responsive, and data-driven platforms",
      "Integration with chatbots and automation tools",
      "SEO and performance-focused architecture",
    ],
    impact:
      "We transform your online presence into a living, intelligent platform that attracts, engages, and converts — 24/7.",
  },
  awa: {
    tagline: "Redefining Efficiency Through Intelligent Automation",
    offerings: [
      "AI-driven workflow automation",
      "Integration of smart CRM and ERP systems",
      "Custom bots and voice assistants for operations",
      "Data synchronization and process optimization",
    ],
    impact:
      "We turn complex, manual processes into efficient, intelligent systems that save time, reduce costs, and scale with your business.",
  },
  sbsd: {
    tagline: "Engineering Intelligent Systems for Smarter Growth",
    offerings: [
      "Custom business management systems and dashboards",
      "Data analytics and reporting platforms",
      "IoT and smart control systems integration",
      "Enterprise-level applications for growth and scalability",
    ],
    impact:
      "We empower organizations to turn data into action and operations into intelligent ecosystems that drive sustainable success.",
  },
  tm: {
    tagline: "Empowering the Next Generation of Tech Innovators",
    offerings: [
      "AI and automation skill development",
      "Training for individuals and organizations on using AI",
      "Full-stack web development and programming training",
      "One-on-one mentorship for developers and tech teams",
    ],
    impact:
      "We bridge the gap between learning and doing, transforming talent into innovation powerhouses ready for tomorrow's challenges.",
  },
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We map your goals, constraints, and users in a focused kickoff. Clear thinking before code — so we build the right thing the first time.",
  },
  {
    number: 2,
    title: "Design & Architecture",
    description:
      "We design intelligent systems before writing a line of code. Scalable by default, secure by design, and built to evolve with your business.",
  },
  {
    number: 3,
    title: "Build",
    description:
      "Iterative delivery with regular check-ins. You see real, working progress every sprint — no black box that only opens at the end.",
  },
  {
    number: 4,
    title: "Launch & Automate",
    description:
      "We ship to production and wire in the automation layer. Your new system starts working for you, around the clock, from day one.",
  },
];

export const PROJECT_CATEGORIES: Array<"All" | ProjectCategory> = [
  "All",
  "Websites",
  "Automation",
  "Systems",
  "Apps",
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: "intelligent-web-platform",
    title: "Intelligent Web Platform",
    type: "AI-Powered Website",
    category: "Websites",
    description:
      "An adaptive, data-driven website with an embedded AI assistant that personalizes content, qualifies visitors, and drives conversions around the clock.",
    stack: ["Next.js", "AI Assistant", "Analytics", "SEO"],
    imageUrl: "/work-ai-website.jpg",
    imageAlt: "Modern AI-powered website on a laptop screen",
    imageBg: "#E6F0EF",
    accentColor: "cyan",
    client: "Regional Services Group",
    year: "2025",
    liveUrl: "#",
    overview:
      "A flagship marketing site that behaves less like a brochure and more like a 24/7 sales assistant — adapting its content and calls-to-action to each visitor in real time.",
    challenge:
      "The client's old site was static and converted poorly. Visitors bounced before reaching the right service, and the team had no visibility into what content actually drove enquiries.",
    solution:
      "We rebuilt the platform on a modern, SEO-first stack and embedded an AI assistant that surfaces the most relevant service, answers questions instantly, and routes qualified leads straight to the sales team.",
    results: [
      "2.4× increase in qualified enquiries within the first quarter",
      "Average time-to-answer for visitor questions dropped to seconds",
      "Full analytics on which content converts, feeding ongoing iteration",
    ],
  },
  {
    slug: "operations-autopilot",
    title: "Operations Autopilot",
    type: "AI & Workflow Automation",
    category: "Automation",
    description:
      "An automation hub that replaced 40+ hours of weekly manual work — connecting CRM, messaging, and reporting into one self-running intelligent pipeline.",
    stack: ["Automation", "CRM", "Custom Bots", "Webhooks"],
    imageUrl: "/work-automation.jpg",
    imageAlt: "Automated workflow dashboard with connected systems",
    imageBg: "#FBF1DF",
    accentColor: "violet",
    client: "Mid-Size Operations Team",
    year: "2025",
    liveUrl: "#",
    overview:
      "A central automation layer that wires together the tools an operations team already uses, so routine handoffs, follow-ups, and reports run themselves.",
    challenge:
      "Staff spent over 40 hours a week copying data between systems, chasing follow-ups, and assembling reports by hand — slow, error-prone, and impossible to scale.",
    solution:
      "We mapped every repetitive process, then built event-driven automations connecting CRM, messaging, and reporting with custom bots and webhooks — with a dashboard to monitor every run.",
    results: [
      "40+ hours of manual work eliminated every week",
      "Near-zero data-entry errors across connected systems",
      "Reports that once took a day now generate automatically",
    ],
  },
  {
    slug: "smart-business-suite",
    title: "Smart Business Suite",
    type: "Business Systems Development",
    category: "Systems",
    description:
      "A custom management system with live analytics dashboards that turned scattered spreadsheets into a single intelligent ecosystem for faster decisions.",
    stack: ["Dashboards", "Analytics", "Cloud", "Reporting"],
    imageUrl: "/work-business-system.jpg",
    imageAlt: "Business analytics dashboard with charts",
    imageBg: "#E6F0EF",
    accentColor: "cyan",
    client: "Growing Enterprise",
    year: "2024",
    liveUrl: "#",
    overview:
      "A tailored business-management system that consolidated dozens of disconnected spreadsheets into one secure, real-time platform leadership can trust.",
    challenge:
      "Critical data lived in scattered spreadsheets with no single source of truth. Leadership made decisions on stale numbers and reconciliation ate days every month.",
    solution:
      "We designed a cloud system with role-based access, automated data capture, and live analytics dashboards — so every team works from the same accurate, up-to-the-minute view.",
    results: [
      "One source of truth replacing 30+ spreadsheets",
      "Month-end reporting cut from days to minutes",
      "Decisions now made on live data, not last month's",
    ],
  },
  {
    slug: "executive-analytics-dashboard",
    title: "Executive Analytics Dashboard",
    type: "Data & Reporting Platform",
    category: "Systems",
    description:
      "A real-time KPI dashboard unifying sales, finance, and operations data into one executive view with automated alerts and forecasting.",
    stack: ["Analytics", "Data Pipeline", "Forecasting", "Cloud"],
    imageUrl: "/work-analytics.jpg",
    imageAlt: "Executive analytics dashboard with KPI charts",
    imageBg: "#E6F0EF",
    accentColor: "violet",
    client: "Multi-Branch Retailer",
    year: "2025",
    liveUrl: "#",
    overview:
      "A single executive cockpit that pulls live numbers from every branch and department, with smart alerts when something needs attention.",
    challenge:
      "Leaders waited on weekly slide decks to understand performance, and problems were only spotted long after they started costing money.",
    solution:
      "We built an automated data pipeline feeding a real-time dashboard with KPI tracking, trend forecasting, and threshold-based alerts delivered straight to decision-makers.",
    results: [
      "Live visibility across every branch in one screen",
      "Issues flagged automatically before they escalate",
      "Forecasts that make planning proactive, not reactive",
    ],
  },
  {
    slug: "ai-commerce-storefront",
    title: "AI Commerce Storefront",
    type: "AI-Powered Website",
    category: "Websites",
    description:
      "A fast, SEO-optimized online store with AI-driven product recommendations and an assistant that guides shoppers from browse to checkout.",
    stack: ["Next.js", "Recommendations", "Payments", "SEO"],
    imageUrl: "/work-ecommerce.jpg",
    imageAlt: "Online store interface on a screen",
    imageBg: "#FBF1DF",
    accentColor: "cyan",
    client: "Retail Brand",
    year: "2025",
    liveUrl: "#",
    overview:
      "A conversion-focused storefront where AI recommendations and an in-store assistant do the work of an attentive sales associate, at scale.",
    challenge:
      "The brand's catalog was large but hard to navigate, and shoppers abandoned carts before finding what they wanted.",
    solution:
      "We delivered a high-performance storefront with personalized recommendations, an AI shopping assistant, and a streamlined checkout — all SEO-optimized for organic growth.",
    results: [
      "Higher average order value from smart recommendations",
      "Lower cart abandonment with guided checkout",
      "Strong organic traffic from SEO-first architecture",
    ],
  },
  {
    slug: "unified-crm-platform",
    title: "Unified CRM Platform",
    type: "Smart Business System",
    category: "Systems",
    description:
      "A custom CRM tailored to the client's real sales process — pipeline, automated follow-ups, and reporting in one place the whole team adopts.",
    stack: ["CRM", "Automation", "Dashboards", "Integrations"],
    imageUrl: "/work-crm.jpg",
    imageAlt: "CRM pipeline interface",
    imageBg: "#E6F0EF",
    accentColor: "violet",
    client: "Professional Services Firm",
    year: "2024",
    liveUrl: "#",
    overview:
      "A CRM built around how the team actually sells — not a generic tool they fight against — with automation that keeps the pipeline moving.",
    challenge:
      "Off-the-shelf CRMs didn't fit the firm's workflow, so adoption was low and deals slipped through the cracks.",
    solution:
      "We built a tailored CRM matching their exact stages, with automated follow-up reminders, integrated communications, and clear reporting for managers.",
    results: [
      "Team-wide adoption because it fits how they work",
      "Fewer lost deals thanks to automated follow-ups",
      "Managers get an honest, real-time view of the pipeline",
    ],
  },
  {
    slug: "elearning-portal",
    title: "E-Learning Portal",
    type: "Web Application",
    category: "Apps",
    description:
      "An interactive learning platform with course delivery, progress tracking, assessments, and certificates — accessible on any device.",
    stack: ["Web App", "Auth", "Video", "Progress Tracking"],
    imageUrl: "/work-elearning.jpg",
    imageAlt: "E-learning platform on a laptop",
    imageBg: "#FBF1DF",
    accentColor: "cyan",
    client: "Training Organization",
    year: "2024",
    liveUrl: "#",
    overview:
      "A complete e-learning portal that lets an organization deliver courses, track learner progress, and issue certificates without manual admin.",
    challenge:
      "Training was run over email and spreadsheets, with no way to track who completed what or to scale beyond a handful of learners.",
    solution:
      "We built a responsive learning platform with secure accounts, structured courses, video lessons, automated assessments, and certificate generation.",
    results: [
      "Hundreds of learners onboarded without extra admin",
      "Automatic progress tracking and certification",
      "Accessible on phone, tablet, or desktop",
    ],
  },
  {
    slug: "logistics-tracking-system",
    title: "Logistics Tracking System",
    type: "Workflow Automation",
    category: "Automation",
    description:
      "End-to-end shipment tracking that automates order intake, status updates, and customer notifications from pickup to delivery.",
    stack: ["Automation", "Notifications", "Tracking", "API"],
    imageUrl: "/work-logistics.jpg",
    imageAlt: "Logistics and delivery tracking",
    imageBg: "#E6F0EF",
    accentColor: "violet",
    client: "Logistics Company",
    year: "2025",
    liveUrl: "#",
    overview:
      "An automated tracking system that keeps customers informed at every step and frees staff from constant status-update phone calls.",
    challenge:
      "Order status lived in people's heads and phone calls. Customers had no visibility, and staff were swamped with 'where is my delivery?' questions.",
    solution:
      "We automated the full flow — order intake, status changes, and customer notifications — with live tracking and an API connecting the moving parts.",
    results: [
      "Customers get proactive updates without calling in",
      "Support load dropped sharply",
      "Full visibility from pickup to delivery",
    ],
  },
  {
    slug: "ai-support-assistant",
    title: "AI Support Assistant",
    type: "AI Integration",
    category: "Apps",
    description:
      "A conversational AI assistant embedded in a product to answer customer questions instantly and hand off complex cases to humans.",
    stack: ["AI Assistant", "Knowledge Base", "Chat", "Handoff"],
    imageUrl: "/work-chatbot.jpg",
    imageAlt: "AI chat assistant on a screen",
    imageBg: "#FBF1DF",
    accentColor: "cyan",
    client: "SaaS Product",
    year: "2025",
    liveUrl: "#",
    overview:
      "An always-on AI assistant trained on the product's knowledge base, resolving the bulk of questions instantly and escalating only what truly needs a person.",
    challenge:
      "Support volume grew faster than the team, and customers waited hours for answers to questions the docs already covered.",
    solution:
      "We embedded a conversational assistant grounded in the company's knowledge base, with smart human handoff for edge cases and full conversation logging.",
    results: [
      "Most routine questions answered instantly, 24/7",
      "Support team freed to focus on complex cases",
      "Happier customers from immediate responses",
    ],
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: 1,
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Innovation",
    description:
      "We don't follow trends — we build what's next. Every solution is designed to give you an edge in a fast-evolving digital world.",
  },
  {
    number: 2,
    iconPath:
      "M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 11a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Creativity",
    description:
      "We blend design thinking with engineering to create solutions that are as elegant as they are effective — beautiful and functional.",
  },
  {
    number: 3,
    iconPath:
      "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-3-6.7",
    title: "Client-Centricity",
    description:
      "Your goals lead the work. We co-create with you, communicate clearly, and treat your success as the measure of ours.",
  },
  {
    number: 4,
    iconPath: "M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3",
    title: "Result-Oriented",
    description:
      "We measure impact, not hours. Every project is built to deliver real, lasting value — efficiency, growth, and sustainable success.",
  },
];

export const CORE_VALUES: ValuePillar[] = [
  { label: "Innovation", description: "Always building what's next." },
  { label: "Creativity", description: "Elegant solutions, by design." },
  { label: "Client-Centricity", description: "Your goals lead the work." },
  { label: "Professionalism", description: "Reliable, every step." },
  { label: "Excellence", description: "Quality without compromise." },
  { label: "Result-Oriented", description: "Impact over activity." },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Firomsa Abrahim",
    role: "AI & Automation Lead",
    bio: "Designs and builds intelligent systems that turn manual, repetitive work into automated pipelines that scale with the business.",
    imageUrl: "/team-firomsa.png",
    accentColor: "cyan",
  },
  {
    name: "Usmael Abdurhaman",
    role: "Backend Engineer · 5 Years",
    bio: "Five years building scalable backends and APIs. Obsessed with performance, clean architecture, and systems that simply don't break.",
    imageUrl: "/team-usmael.png",
    accentColor: "violet",
  },
  {
    name: "Felmeta Muktar",
    role: "Full-Stack Engineer",
    bio: "Crafts pixel-perfect UIs and seamless frontend experiences. If the product doesn't feel right, it doesn't ship.",
    imageUrl: "/team-felmeta.png",
    accentColor: "cyan",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-automation-small-business",
    title: "How AI Automation Frees Small Teams to Do Their Best Work",
    excerpt:
      "Repetitive tasks quietly drain your team's time. Here's how intelligent automation gives those hours back — without adding headcount.",
    category: "Automation",
    date: "May 28, 2025",
    readingTime: "5 min read",
    author: "Hornlink Team",
    imageUrl: "/blog-1.jpg",
    imageAlt: "AI automation concept",
    accentColor: "cyan",
    content: [
      { type: "paragraph", text: "Every small team has the same hidden tax: the hours that disappear into copying data between tools, sending the same follow-up emails, and assembling reports by hand. None of it grows the business — but all of it has to get done. AI automation is how you get those hours back without hiring more people." },
      { type: "heading", text: "Start with the work nobody enjoys" },
      { type: "paragraph", text: "The best automation candidates are the tasks that are repetitive, rule-based, and frequent. If a person does it the same way every time, a machine can usually do it faster and without errors. Look for the work your team quietly dreads — that's where the quickest wins live." },
      { type: "list", items: [
        "Moving data between your CRM, spreadsheets, and inbox",
        "Sending reminders, confirmations, and follow-ups",
        "Generating weekly or monthly reports",
        "Routing new leads or tickets to the right person",
      ] },
      { type: "heading", text: "Automation isn't replacement — it's leverage" },
      { type: "paragraph", text: "The goal isn't to remove people; it's to remove busywork so people can focus on judgment, relationships, and creative problem-solving — the things AI can't do. Teams that automate the routine consistently report higher morale, not lower headcount." },
      { type: "heading", text: "How we approach it at Hornlink" },
      { type: "paragraph", text: "We map your real processes first, identify the highest-friction steps, then build event-driven automations that connect the tools you already use. You get a dashboard to watch every run, and a system that quietly works around the clock." },
    ],
  },
  {
    slug: "ai-powered-websites",
    title: "Why Your Next Website Should Learn From Its Visitors",
    excerpt:
      "Static sites are yesterday. We break down what makes an AI-powered website adapt, engage, and convert — 24 hours a day.",
    category: "Web Design",
    date: "May 12, 2025",
    readingTime: "6 min read",
    author: "Hornlink Team",
    imageUrl: "/blog-2.jpg",
    imageAlt: "Modern website design on screen",
    accentColor: "violet",
    content: [
      { type: "paragraph", text: "A traditional website is a brochure: it says the same thing to everyone and waits. An AI-powered website behaves more like your best salesperson — it pays attention, adapts to each visitor, and never sleeps." },
      { type: "heading", text: "What 'AI-powered' actually means" },
      { type: "paragraph", text: "It's not a gimmick chatbot bolted onto a static page. It's a site that uses signals — what a visitor reads, searches, and clicks — to surface the most relevant content, answer questions instantly, and guide people toward the next step." },
      { type: "list", items: [
        "Personalized content and calls-to-action per visitor",
        "An assistant that answers questions in seconds, 24/7",
        "Smart lead qualification that routes hot prospects to you",
        "Analytics that show which content actually converts",
      ] },
      { type: "heading", text: "Built on a fast, SEO-first foundation" },
      { type: "paragraph", text: "Intelligence means nothing if the page is slow or invisible to search engines. We build on modern frameworks with performance and SEO baked in, so the AI layer sits on top of a site that already ranks and loads fast." },
      { type: "heading", text: "The result: a platform, not a page" },
      { type: "paragraph", text: "Your online presence becomes a living system that attracts, engages, and converts — and gets smarter the more it's used." },
    ],
  },
  {
    slug: "smart-business-systems",
    title: "From Spreadsheets to Smart Systems: A Practical Roadmap",
    excerpt:
      "Outgrowing your spreadsheets is a good problem. Here's how to move to intelligent business systems without disrupting operations.",
    category: "Business Systems",
    date: "April 30, 2025",
    readingTime: "7 min read",
    author: "Hornlink Team",
    imageUrl: "/blog-3.jpg",
    imageAlt: "Business systems dashboard",
    accentColor: "cyan",
    content: [
      { type: "paragraph", text: "Spreadsheets are where most businesses start — and for good reason. They're flexible and familiar. But there's a point where they stop helping and start hurting: when nobody's sure which version is current, when reconciliation eats days, and when one wrong cell quietly breaks a report." },
      { type: "heading", text: "Signs you've outgrown spreadsheets" },
      { type: "list", items: [
        "Multiple people editing copies of the same file",
        "No reliable single source of truth",
        "Hours lost to manual reconciliation each month",
        "Decisions made on numbers you don't fully trust",
      ] },
      { type: "heading", text: "Move in stages, not all at once" },
      { type: "paragraph", text: "The mistake is trying to replace everything overnight. We migrate the highest-pain process first, prove the value, then expand. Operations keep running while the new system grows around them." },
      { type: "heading", text: "What a smart system gives you" },
      { type: "paragraph", text: "Role-based access, automated data capture, and live dashboards mean everyone works from the same accurate, up-to-the-minute view. Month-end reporting drops from days to minutes, and leadership finally makes decisions on real-time data." },
      { type: "paragraph", text: "The destination isn't just 'a database instead of a spreadsheet' — it's an intelligent ecosystem that turns your data into action." },
    ],
  },
];

export const CONTACT_SERVICES = [
  "AI-Powered Website Design & Development",
  "AI & Workflow Automation",
  "Smart Business Systems Development",
  "Training & Mentorship",
  "Other",
];

export const CONTACT_BUDGETS = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
];
