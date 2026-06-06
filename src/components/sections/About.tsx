import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import { ABOUT, CORE_VALUES } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      {/* Soft brand glow */}
      <div
        className="pointer-events-none absolute -right-32 top-10 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(14,124,123,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header + about copy */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="flex flex-col gap-5">
            <SectionLabel>About Hornlink</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.025em] text-ink">
              In the Business of{" "}
              <GradientText>Digital Transformation</GradientText> &amp;
              Intelligent Innovation
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="flex flex-col gap-4">
            {ABOUT.about.map((para) => (
              <p
                key={para.slice(0, 24)}
                className="font-body text-base leading-[1.8] text-ink-muted"
              >
                {para}
              </p>
            ))}
          </AnimatedSection>
        </div>

        {/* Vision + Mission cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatedSection delay={0.05}>
            <GlassCard
              glowColor="cyan"
              className="flex h-full flex-col gap-4 p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/8 text-cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Our Vision
                </h3>
              </div>
              <p className="font-body text-base leading-[1.8] text-ink-muted">
                {ABOUT.vision}
              </p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <GlassCard
              glowColor="violet"
              className="flex h-full flex-col gap-4 p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet/20 bg-violet/8 text-violet">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Our Mission
                </h3>
              </div>
              <p className="font-body text-base leading-[1.8] text-ink-muted">
                {ABOUT.mission}
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>

        {/* Core values strip */}
        <AnimatedSection delay={0.1} className="mt-10">
          <div className="flex flex-wrap gap-3">
            {CORE_VALUES.map((value) => (
              <span
                key={value.label}
                className="group inline-flex items-center gap-2 rounded-full border border-cyan/15 bg-cyan/5 px-4 py-2 font-body text-sm text-ink transition-colors duration-200 hover:border-cyan/40"
                title={value.description}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                {value.label}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
