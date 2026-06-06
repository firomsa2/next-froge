export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  iconPath: string;
  iconViewBox?: string;
  title: string;
  description: string;
  tags: string[];
  accentColor: "cyan" | "violet";
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export type ProjectCategory =
  | "Websites"
  | "Automation"
  | "Systems"
  | "Apps";

export interface ProjectItem {
  slug: string;
  title: string;
  type: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  imageUrl: string;
  imageAlt: string;
  imageBg: string;
  accentColor: "cyan" | "violet";
  /* Detail-page fields */
  client: string;
  year: string;
  liveUrl: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface Differentiator {
  number: number;
  iconPath: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  accentColor: "cyan" | "violet" | "white";
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  imageUrl: string;
  imageAlt: string;
  accentColor: "cyan" | "violet";
  content: BlogBlock[];
}

export interface ValuePillar {
  label: string;
  description: string;
}
