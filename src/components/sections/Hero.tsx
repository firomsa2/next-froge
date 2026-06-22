"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import AiHeroGraphic from "@/components/ui/AiHeroGraphic";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 lg:px-8"
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
          background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* Radial glow — purple bottom-right */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 h-[700px] w-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(108,99,255,0.14) 0%, transparent 70%)",
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

      {/* Content — two columns */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left — copy */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div {...fadeUp(0)} className="mb-7">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 font-body text-[10px] font-semibold uppercase tracking-[0.1em] text-cyan sm:text-xs sm:tracking-[0.12em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              AI · Automation · Innovation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.4rem] xl:text-6xl text-balance"
          >
            AI Systems That
            <br />
            <GradientText>Work While You Sleep.</GradientText>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink-muted lg:text-lg"
          >
            We design intelligent automation, AI agents, and scalable digital
            platforms that help businesses save time, cut costs, and grow faster —
            without hiring more people.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button variant="primary" size="lg" href="/contact">
              Book a Free Strategy Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
            <Button variant="ghost" size="lg" href="/work">
              See Our Work
            </Button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-12 flex flex-wrap items-center gap-8 border-t border-cyan/10 pt-8"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "30–70%", label: "Cost Reduction" },
              { value: "24/7", label: "AI Systems Working" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
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

        {/* Right — animated AI graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[340px] self-center sm:max-w-[440px] lg:order-last lg:justify-self-end"
        >
          <AiHeroGraphic />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,145,194,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
