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
  metadataBase: new URL("https://hornlink.et"),
  title: {
    default: "Hornlink Technology — Smart, Reliable, Transformative Technology.",
    template: "%s | Hornlink Technology",
  },
  description:
    "Hornlink Technology is a digital transformation and intelligent innovation firm. We build AI-powered websites, workflow automation, and smart business systems, and offer training & mentorship.",
  keywords: [
    "Hornlink Technology",
    "AI automation",
    "AI-powered website design",
    "workflow automation",
    "smart business systems",
    "digital transformation",
    "tech training and mentorship",
    "Ethiopia technology firm",
  ],
  authors: [{ name: "Hornlink Technology" }],
  openGraph: {
    title: "Hornlink Technology — Smart, Reliable, Transformative Technology.",
    description:
      "Digital transformation and intelligent innovation. Hornlink builds AI-powered websites, automation, and smart business systems.",
    url: "https://hornlink.et",
    siteName: "Hornlink Technology",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hornlink Technology",
    description: "Smart, Reliable, Transformative Technology.",
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
