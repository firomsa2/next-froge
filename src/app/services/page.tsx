import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import HowWeWork from "@/components/sections/HowWeWork";
import { SERVICES, SERVICE_DETAILS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hornlink Technology services: AI-Powered Website Design & Development, AI & Workflow Automation, Smart Business Systems Development, and Training & Mentorship.",
};

export default function ServicesPage() {
  return (
    <div className="bg-base text-ink">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-4 lg:px-8 lg:pt-24">
          <AnimatedSection className="flex max-w-2xl flex-col gap-5">
            <SectionLabel>Our Services</SectionLabel>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
              Solutions That <GradientText>Drive Transformation</GradientText>
            </h1>
            <p className="font-body text-lg leading-relaxed text-ink-muted">
              Four core service lines, one team. From AI-powered websites to
              intelligent automation and smart business systems — we handle the
              full spectrum so you don&apos;t juggle vendors.
            </p>
          </AnimatedSection>
        </section>

        {/* Service detail blocks */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-6">
            {SERVICES.map((service, i) => {
              const detail = SERVICE_DETAILS[service.id];
              const isViolet = service.accentColor === "violet";
              return (
                <AnimatedSection key={service.id} delay={i * 0.05}>
                  <GlassCard
                    glowColor={service.accentColor}
                    className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-[1fr_1.2fr] lg:p-10"
                  >
                    {/* Left: icon, title, tagline, desc, impact */}
                    <div className="flex flex-col gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                          isViolet
                            ? "border-violet/20 bg-violet/8 text-violet"
                            : "border-cyan/20 bg-cyan/8 text-cyan"
                        }`}
                      >
                        <svg width="24" height="24" viewBox={service.iconViewBox ?? "0 0 24 24"} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <path d={service.iconPath} />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                          {service.title}
                        </h2>
                        {detail && (
                          <p className={`font-body text-sm font-medium ${isViolet ? "text-violet" : "text-cyan"}`}>
                            {detail.tagline}
                          </p>
                        )}
                      </div>
                      <p className="font-body text-base leading-[1.8] text-ink-muted">
                        {service.description}
                      </p>
                      {detail && (
                        <p className="mt-1 border-l-2 border-cyan/30 pl-4 font-body text-sm italic leading-relaxed text-ink-muted">
                          {detail.impact}
                        </p>
                      )}
                    </div>

                    {/* Right: what we offer */}
                    <div className="flex flex-col gap-4 lg:border-l lg:border-cyan/10 lg:pl-10">
                      <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                        What We Offer
                      </span>
                      <ul className="flex flex-col gap-3" role="list">
                        {detail?.offerings.map((item) => (
                          <li key={item} className="flex items-start gap-3 font-body text-base leading-relaxed text-ink">
                            <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${isViolet ? "border-violet/25 bg-violet/8 text-violet" : "border-cyan/20 bg-cyan/5 text-cyan"}`}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-cyan/15 bg-cyan/5 px-3 py-1 font-mono text-[11px] text-ink-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* Process */}
        <HowWeWork />

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
          <AnimatedSection className="flex flex-col items-center gap-5 rounded-2xl border border-cyan/10 bg-elevated px-6 py-14 text-center shadow-card">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-ink">
              Not sure which service fits?
            </h2>
            <p className="max-w-md font-body text-base text-ink-muted">
              Tell us your goal and we&apos;ll point you to the right solution —
              or combine a few. The first conversation is free.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Get in Touch
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
