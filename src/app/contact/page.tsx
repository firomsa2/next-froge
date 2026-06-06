import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. Hornlink Technology responds within one business day with a clear plan, not a vague proposal.",
};

export default function ContactPage() {
  return (
    <div className="bg-base text-ink">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
