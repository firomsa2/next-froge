import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { DIFFERENTIATORS } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section id="about" className="bg-elevated py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 flex flex-col gap-4">
          <SectionLabel>Why NexForge</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.025em] text-ink">
            The Agency That Actually
            <br />
            <span className="text-ink-muted">Gets It Done</span>
          </h2>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {DIFFERENTIATORS.map((item, i) => (
            <AnimatedSection key={item.number} delay={i * 0.1}>
              <div className="group relative flex gap-5 rounded-2xl border border-white/5 bg-floating p-7 transition-[border-color] duration-300 hover:border-white/10">
                {/* Large background numeral */}
                <span
                  className="pointer-events-none absolute right-6 top-4 select-none font-display text-[7rem] font-black leading-none text-ink"
                  style={{ opacity: 0.025 }}
                  aria-hidden="true"
                >
                  {item.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/8 text-cyan transition-[border-color,background-color] duration-300 group-hover:border-cyan/40 group-hover:bg-cyan/12">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.iconPath} />
                  </svg>
                </div>

                {/* Text */}
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
