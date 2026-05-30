import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROCESS_STEPS } from "@/lib/constants";

export default function HowWeWork() {
  return (
    <section id="process" className="bg-elevated py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 flex flex-col items-center gap-4 text-center">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.025em] text-ink">
            From First Call to Full Launch
          </h2>
          <p className="max-w-lg font-body text-base text-ink-muted">
            A process designed for speed and transparency. No black boxes, no
            waterfall timelines.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connector line */}
          <div
            className="absolute top-6 left-0 right-0 hidden h-px border-t border-dashed border-cyan/20 md:block"
            style={{ marginLeft: "3rem", marginRight: "3rem" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                {/* Mobile: vertical connector */}
                <div className="relative flex gap-6 md:flex-col md:gap-5">
                  {/* Mobile left border */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div
                      className="absolute left-5 top-12 bottom-0 w-px border-l border-dashed border-cyan/20 md:hidden"
                      aria-hidden="true"
                    />
                  )}

                  {/* Step badge */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan/30 bg-base font-display text-lg font-bold text-cyan transition-[border-color,background-color] duration-300 hover:border-cyan/70 hover:bg-cyan/8">
                    {step.number}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 pb-8 md:pb-0">
                    <h3 className="font-display text-base font-semibold text-ink md:mt-4">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-ink-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
