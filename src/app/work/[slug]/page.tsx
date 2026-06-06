import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const hasLiveLink = project.liveUrl && project.liveUrl !== "#";
  const related = PROJECTS.filter(
    (p) => p.category === project.category && p.slug !== project.slug,
  ).slice(0, 3);

  const accentText = project.accentColor === "violet" ? "text-violet" : "text-cyan";
  const accentBorder =
    project.accentColor === "violet" ? "border-violet/25 bg-violet/8" : "border-cyan/20 bg-cyan/5";

  return (
    <div className="bg-base text-ink">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pt-28 pb-24 lg:px-8 lg:pt-36 lg:pb-32">
        {/* Breadcrumb */}
        <AnimatedSection className="mb-8">
          <nav className="flex flex-wrap items-center gap-2 font-body text-sm text-ink-muted" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-cyan">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/work" className="transition-colors hover:text-cyan">Work</Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">{project.title}</span>
          </nav>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={`rounded-full border px-3 py-1 font-body text-xs font-medium ${accentBorder} ${accentText}`}>
              {project.category}
            </span>
            <span className="rounded-full border border-cyan/15 bg-cyan/5 px-3 py-1 font-body text-xs font-medium text-ink-muted">
              {project.type}
            </span>
          </div>
          <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
            {project.title}
          </h1>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-muted">
            {project.overview}
          </p>
        </AnimatedSection>

        {/* Hero image */}
        <AnimatedSection delay={0.1} className="mt-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-cyan/10 shadow-card">
            <Image
              src={project.imageUrl}
              alt={project.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </AnimatedSection>

        {/* Meta + content */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px] lg:gap-14">
          {/* Body */}
          <AnimatedSection delay={0.05} className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink">The Challenge</h2>
              <p className="font-body text-base leading-[1.8] text-ink-muted">{project.challenge}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink">Our Solution</h2>
              <p className="font-body text-base leading-[1.8] text-ink-muted">{project.solution}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink">The Results</h2>
              <ul className="flex flex-col gap-3" role="list">
                {project.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 font-body text-base leading-relaxed text-ink-muted">
                    <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${accentBorder} ${accentText}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection delay={0.15}>
            <aside className="flex flex-col gap-6 rounded-2xl border border-cyan/10 bg-elevated p-6 shadow-card">
              <div className="flex flex-col gap-1">
                <span className="font-body text-xs uppercase tracking-[0.12em] text-ink-muted">Client</span>
                <span className="font-display text-base font-semibold text-ink">{project.client}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-body text-xs uppercase tracking-[0.12em] text-ink-muted">Year</span>
                <span className="font-display text-base font-semibold text-ink">{project.year}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-body text-xs uppercase tracking-[0.12em] text-ink-muted">Tech &amp; Tools</span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan/15 bg-cyan/5 px-2.5 py-0.5 font-mono text-[11px] text-ink-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {hasLiveLink ? (
                <Button variant="primary" size="md" href={project.liveUrl} className="w-full">
                  Visit Site
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </Button>
              ) : (
                <p className="font-body text-xs leading-relaxed text-ink-muted/80">
                  Live link available on request — some client work is under NDA.
                </p>
              )}
            </aside>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.1} className="mt-16 flex flex-col items-center gap-5 rounded-2xl border border-cyan/10 bg-elevated px-6 py-12 text-center shadow-card">
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
            Have a project like this in mind?
          </h2>
          <p className="max-w-md font-body text-base text-ink-muted">
            Tell us what you&apos;re building. We&apos;ll come back with a clear plan.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </AnimatedSection>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">More {project.category}</h2>
              <Link href="/work" className="font-body text-sm font-semibold text-cyan transition-colors hover:text-ink">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
