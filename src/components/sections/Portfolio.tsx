"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROJECTS } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 flex flex-col gap-4">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.025em] text-ink">
            Products We&apos;ve Shipped
          </h2>
          <p className="max-w-lg font-body text-base text-ink-muted">
            A snapshot of recent projects. Every build is production-ready,
            tested, and handed off with full documentation.
          </p>
        </AnimatedSection>

        {/* Cards — desktop grid, mobile horizontal scroll */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.12}>
              <GlassCard
                className="group relative flex h-full flex-col overflow-hidden p-0"
                glowColor={i === 1 ? "violet" : "cyan"}
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient overlay — always visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/20 to-transparent" />

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-base/70"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="flex items-center gap-2 font-body text-sm font-semibold text-cyan">
                      View Project
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  {/* Type badge */}
                  <span className="w-fit rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1 font-body text-xs font-medium text-cyan">
                    {project.type}
                  </span>

                  <h3 className="font-display text-lg font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  {/* Stack tags */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/8 bg-white/4 px-2.5 py-0.5 font-mono text-[11px] text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
