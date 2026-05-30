"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 lg:px-8"
      aria-label="Hero"
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 bg-grid"
        style={{ animation: "grid-breathe 4s ease-in-out infinite" }}
        aria-hidden="true"
      />

      {/* Radial glow — cyan top-left */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,245,196,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* Radial glow — violet bottom-right */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 h-[700px] w-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(123,97,255,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Noise grain overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url(/noise.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
          opacity: 0.035,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.12em] text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            Full-Stack · AI · Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-extrabold leading-[1.0] tracking-[-0.03em] text-ink"
        >
          We Build Digital Products.
          <br />
          <GradientText>Powered by AI Automation.</GradientText>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink-muted"
        >
          NexForge is a boutique agency that ships fast, integrates AI by default,
          and automates the work your team shouldn&apos;t be doing manually.
          From SaaS platforms to intelligent workflows — we build the software your business runs on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button variant="primary" size="lg" href="#contact">
            Start a Project
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
          <Button variant="ghost" size="lg" href="#work">
            See Our Work
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/5 pt-10"
        >
          {[
            { value: "15+", label: "Projects Shipped" },
            { value: "3×", label: "Faster Than In-House" },
            { value: "100%", label: "Fixed-Scope Pricing" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl font-bold text-ink">
                {stat.value}
              </span>
              <span className="font-body text-sm text-ink-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(0,245,196,0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
