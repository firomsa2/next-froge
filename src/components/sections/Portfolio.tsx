import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants";

export default function Portfolio() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 flex flex-col gap-4">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.025em] text-ink">
            Solutions We&apos;ve Delivered
          </h2>
          <p className="max-w-lg font-body text-base leading-relaxed text-ink-muted">
            A snapshot of the kind of work we do across our service lines. Every
            build ships production-ready, tested, and fully documented.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.12} className="h-full">
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* View all */}
        <AnimatedSection delay={0.1} className="mt-12 flex justify-center">
          <Button variant="ghost" size="md" href="/work">
            View All Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
