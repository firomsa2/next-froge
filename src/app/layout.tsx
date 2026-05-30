import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexforge.dev"),
  title: {
    default: "NexForge — We Build Smarter. We Automate Everything.",
    template: "%s | NexForge",
  },
  description:
    "NexForge is a full-stack development and AI automation agency. We build SaaS products, integrate AI, and automate business workflows.",
  keywords: [
    "AI development agency",
    "full-stack development",
    "workflow automation",
    "SaaS development",
    "AI integration",
    "n8n automation",
    "Next.js agency",
  ],
  authors: [{ name: "NexForge" }],
  openGraph: {
    title: "NexForge — We Build Smarter. We Automate Everything.",
    description:
      "Full-stack development meets intelligent automation. NexForge builds the software your business runs on.",
    url: "https://nexforge.dev",
    siteName: "NexForge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexForge",
    description: "We Build Smarter. We Automate Everything.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
