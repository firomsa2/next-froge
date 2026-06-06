"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/constants";
import type { ProjectCategory } from "@/types";

type Filter = "All" | ProjectCategory;

export default function WorkGrid() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="flex flex-col gap-10">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter work by category">
        {PROJECT_CATEGORIES.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 font-body text-sm font-medium transition-[color,background-color,border-color] duration-200 active:scale-[0.97] ${
                isActive
                  ? "border-cyan bg-cyan text-base"
                  : "border-cyan/20 bg-cyan/5 text-ink-muted hover:border-cyan/40 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
