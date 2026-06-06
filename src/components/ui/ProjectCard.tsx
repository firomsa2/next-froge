"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import type { ProjectItem } from "@/types";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="block h-full focus-visible:outline-none"
      aria-label={`${project.title} — view case study`}
    >
      <GlassCard
        className="group relative flex h-full flex-col overflow-hidden p-0"
        glowColor={project.accentColor}
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
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/5 to-transparent" />

          {/* Category chip */}
          <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 font-body text-xs font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-ink/55"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <span className="flex items-center gap-2 font-body text-sm font-semibold text-white">
              View Case Study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <span
            className={`w-fit rounded-full border px-3 py-1 font-body text-xs font-medium ${
              project.accentColor === "violet"
                ? "border-violet/25 bg-violet/8 text-violet"
                : "border-cyan/20 bg-cyan/5 text-cyan"
            }`}
          >
            {project.type}
          </span>

          <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-cyan">
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
                className="rounded-full border border-cyan/15 bg-cyan/5 px-2.5 py-0.5 font-mono text-[11px] text-ink-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
