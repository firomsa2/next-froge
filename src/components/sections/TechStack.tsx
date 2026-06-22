"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TECH_STACK } from "@/lib/constants";

export default function TechStack() {
  // Duplicate the list so the marquee can loop seamlessly.
  const row = [...TECH_STACK, ...TECH_STACK];
  const [paused, setPaused] = useState(false);

  return (
    <section aria-label="Technologies we use" className="overflow-hidden border-y border-cyan/10 bg-elevated py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mb-8 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Technologies We Build With
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee — continuous right-to-left scroll, full-bleed with edge fade */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <motion.ul
          className="flex w-max items-center gap-4 sm:gap-6"
          aria-hidden="true"
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          role="list"
        >
          {row.map((tech, i) => (
            <li
              key={`${tech}-${i}`}
              className="shrink-0 rounded-full border border-cyan/12 bg-base px-5 py-2.5 font-body text-sm font-medium text-ink-muted shadow-card transition-[color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-cyan/40 hover:text-ink hover:shadow-cyan-glow"
            >
              {tech}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Accessible static list for screen readers */}
      <ul className="sr-only" role="list">
        {TECH_STACK.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  );
}
