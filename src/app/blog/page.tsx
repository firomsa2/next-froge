import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI automation, intelligent websites, and smart business systems from the Hornlink Technology team.",
};

export default function BlogPage() {
  return (
    <div className="bg-base text-ink">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8 lg:pt-40 lg:pb-32">
        {/* Header */}
        <AnimatedSection className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-5 text-center">
          <SectionLabel>The Hornlink Blog</SectionLabel>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            Ideas on <GradientText>Intelligent Innovation</GradientText>
          </h1>
          <p className="font-body text-lg leading-relaxed text-ink-muted">
            Practical thinking on AI automation, adaptive websites, and smart
            business systems — written by the people who build them.
          </p>
        </AnimatedSection>

        {/* Posts grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1} className="h-full">
              <Link href={`/blog/${post.slug}`} className="block h-full" aria-label={`${post.title} — read article`}>
              <GlassCard
                as="article"
                glowColor={post.accentColor}
                className="group flex h-full flex-col overflow-hidden p-0"
              >
                {/* Cover */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full border px-3 py-1 font-body text-xs font-medium backdrop-blur-sm ${
                      post.accentColor === "cyan"
                        ? "border-cyan/30 bg-cyan/10 text-cyan"
                        : "border-violet/30 bg-violet/10 text-violet"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-2 font-body text-xs text-ink-muted">
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-cyan">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-body text-sm font-semibold text-cyan transition-colors group-hover:text-ink">
                    Read article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </GlassCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
