import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import WorkGrid from "@/components/sections/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Hornlink Technology — AI-powered websites, workflow automation, smart business systems, and applications we've delivered.",
};

export default function WorkPage() {
  return (
    <div className="bg-base text-ink">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8 lg:pt-40 lg:pb-32">
        {/* Header */}
        <AnimatedSection className="mb-14 flex max-w-2xl flex-col gap-5">
          <SectionLabel>Our Portfolio</SectionLabel>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            Solutions We&apos;ve <GradientText>Delivered</GradientText>
          </h1>
          <p className="font-body text-lg leading-relaxed text-ink-muted">
            A selection of projects across our service lines. Filter by category,
            then open any project to read the full story — the challenge, our
            approach, and the results.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <WorkGrid />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
