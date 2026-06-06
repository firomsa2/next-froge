import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Hornlink Technology — founded in 2024, we deliver end-to-end digital transformation and intelligent innovation across industries. Our vision, mission, core values, and team.",
};

export default function AboutPage() {
  return (
    <div className="bg-base text-ink">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <About />
        <WhyUs />
        <Team />

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
          <AnimatedSection className="flex flex-col items-center gap-5 rounded-2xl border border-cyan/10 bg-elevated px-6 py-14 text-center shadow-card">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-ink">
              Let&apos;s build something that lasts.
            </h2>
            <p className="max-w-md font-body text-base text-ink-muted">
              We partner with businesses, startups, and institutions to turn
              technology into real, lasting value.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Work With Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
}
