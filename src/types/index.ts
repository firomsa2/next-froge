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

export interface ProjectItem {
  title: string;
  type: string;
  description: string;
  stack: string[];
  imageUrl: string;
  imageAlt: string;
  imageBg: string;
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
