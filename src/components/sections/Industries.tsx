import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { INDUSTRIES } from "@/lib/constants";

export default function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14 flex flex-col gap-4">
          <SectionLabel>Industries We Serve</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.025em] text-ink">
            Built for Teams in Every Sector
          </h2>
          <p className="max-w-lg font-body text-base leading-relaxed text-ink-muted">
            The problems differ, but the goal is the same: less manual work,
            faster decisions, and systems that scale. We&apos;ve built for them all.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <AnimatedSection key={industry.label} delay={(i % 4) * 0.06}>
              <div className="group flex h-full items-center gap-3.5 rounded-2xl border border-cyan/10 bg-floating p-5 shadow-card transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-cyan/30">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan/15 bg-cyan/8 text-cyan transition-colors duration-300 group-hover:bg-cyan/12">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d={industry.iconPath} />
                  </svg>
                </span>
                <span className="font-display text-base font-semibold leading-tight text-ink">
                  {industry.label}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
