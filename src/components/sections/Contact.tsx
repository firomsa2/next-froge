"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientText from "@/components/ui/GradientText";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import type { ContactFormData } from "@/types";
import { CONTACT_SERVICES, CONTACT_BUDGETS } from "@/lib/constants";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const inputBase =
  "w-full rounded-xl border border-cyan/15 bg-elevated px-4 py-3 font-body text-sm text-ink placeholder:text-ink-muted/60 transition-[border-color] duration-200 outline-none focus:border-cyan focus-visible:border-cyan";

const errorClass = "font-body text-xs text-red-400 mt-1";

const INFO_ROWS = [
  {
    label: "Email",
    value: "hello@hornlink.et",
    href: "mailto:hello@hornlink.et",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+251 940433419",
    href: "https://wa.me/251940433419",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Hornlink Technology",
    href: "https://linkedin.com/company/hornlink",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({ mode: "onBlur" });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setSubmitError(null);

    if (!isSupabaseConfigured || !supabase) {
      setSubmitError(
        "The contact form isn't connected yet. Please email us at hello@hornlink.et.",
      );
      return;
    }

    const { error } = await supabase.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      service: data.service,
      budget: data.budget,
      message: data.message,
    });

    if (error) {
      console.error("Supabase insert error:", error.message);
      setSubmitError(
        "Something went wrong sending your message. Please try again, or email hello@hornlink.et.",
      );
      return;
    }

    reset();
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,145,194,0.05) 0%, transparent 70%)",
          }}
          className="h-full w-full"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left — copy */}
          <AnimatedSection className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <SectionLabel>Get in Touch</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.025em] text-ink">
                Ready to Build
                <br />
                <GradientText>Something Smart?</GradientText>
              </h2>
              <p className="max-w-md font-body text-base leading-relaxed text-ink-muted">
                Tell us about your project. We&apos;ll get back to you within
                one business day with a clear plan, not a vague proposal.
              </p>
            </div>

            {/* Info rows */}
            <ul className="flex flex-col gap-5" role="list">
              {INFO_ROWS.map((row) => (
                <li key={row.label}>
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 transition-colors duration-200"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/8 text-cyan transition-[border-color,background-color] duration-300 group-hover:border-cyan/40 group-hover:bg-cyan/12">
                      {row.icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-body text-xs text-ink-muted">
                        {row.label}
                      </span>
                      <span className="font-body text-sm font-medium text-ink transition-colors group-hover:text-cyan">
                        {row.value}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={0.1}>
            {isSubmitSuccessful ? (
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-cyan/20 bg-cyan/5 p-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Message Sent!
                </h3>
                <p className="font-body text-sm text-ink-muted">
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-body text-xs font-medium text-ink-muted">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    className={inputBase}
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "At least 2 characters" },
                    })}
                  />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-body text-xs font-medium text-ink-muted">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    className={inputBase}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                {/* Service + Budget */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="mb-1.5 block font-body text-xs font-medium text-ink-muted">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className={`${inputBase} cursor-pointer`}
                      style={{ colorScheme: "light" }}
                      {...register("service", { required: "Select a service" })}
                    >
                      <option value="">Select…</option>
                      {CONTACT_SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className={errorClass}>{errors.service.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="budget" className="mb-1.5 block font-body text-xs font-medium text-ink-muted">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      className={`${inputBase} cursor-pointer`}
                      style={{ colorScheme: "light" }}
                      {...register("budget", { required: "Select a budget range" })}
                    >
                      <option value="">Select…</option>
                      {CONTACT_BUDGETS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                    {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block font-body text-xs font-medium text-ink-muted">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline…"
                    className={`${inputBase} resize-none`}
                    {...register("message", {
                      required: "Please describe your project",
                      minLength: { value: 20, message: "At least 20 characters" },
                    })}
                  />
                  {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                </div>

                {submitError && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 font-body text-sm text-red-600"
                  >
                    {submitError}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                  {!isSubmitting && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  )}
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
