import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 flex flex-col gap-4">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.025em] text-ink">
            Solutions That
            <br />
            <span className="text-ink-muted">Drive Transformation</span>
          </h2>
          <p className="max-w-lg font-body text-base leading-relaxed text-ink-muted">
            From AI-powered websites to intelligent automation and smart business
            systems — Hornlink delivers end-to-end, so you don&apos;t juggle vendors.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.1}>
              <GlassCard
                glowColor={service.accentColor}
                className="group relative flex h-full flex-col gap-5 overflow-hidden p-7"
              >
                {/* Top accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 ${
                    service.accentColor === "cyan"
                      ? "bg-cyan"
                      : "bg-violet"
                  }`}
                />

                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-300 ${
                    service.accentColor === "cyan"
                      ? "border-cyan/20 bg-cyan/8 text-cyan group-hover:border-cyan/40 group-hover:bg-cyan/12"
                      : "border-violet/20 bg-violet/8 text-violet group-hover:border-violet/40 group-hover:bg-violet/12"
                  }`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox={service.iconViewBox ?? "0 0 24 24"}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={service.iconPath} />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm leading-[1.75] text-ink-muted">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan/15 bg-cyan/5 px-3 py-1 font-mono text-[11px] text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* View all */}
        <AnimatedSection delay={0.1} className="mt-12 flex justify-center">
          <Button variant="ghost" size="md" href="/services">
            Explore All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
