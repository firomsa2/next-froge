"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-base/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl font-bold tracking-[-0.02em] text-ink transition-opacity duration-200 hover:opacity-80"
            aria-label="NexForge home"
          >
            <span className="text-cyan">Nex</span>Forge
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="primary" size="sm" href="#contact">
              Start a Project
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-ink transition-colors duration-200 hover:bg-white/5 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-base/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              className="fixed right-0 top-0 bottom-0 z-40 flex w-72 flex-col bg-elevated px-8 py-8 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-lg font-bold text-ink">
                  <span className="text-cyan">Nex</span>Forge
                </span>
                <button
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav>
                <ul className="flex flex-col gap-2" role="list">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="block rounded-xl px-4 py-3 font-body text-base font-medium text-ink-muted transition-colors duration-200 hover:bg-white/5 hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto pt-8">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Start a Project
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
