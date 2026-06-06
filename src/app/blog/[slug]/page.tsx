import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/constants";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="bg-base text-ink">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8 lg:pt-36 lg:pb-32">
        {/* Breadcrumb */}
        <AnimatedSection className="mb-8">
          <nav className="flex flex-wrap items-center gap-2 font-body text-sm text-ink-muted" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-cyan">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="transition-colors hover:text-cyan">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">{post.category}</span>
          </nav>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection className="flex flex-col gap-5">
          <span
            className={`w-fit rounded-full border px-3 py-1 font-body text-xs font-medium ${
              post.accentColor === "violet"
                ? "border-violet/25 bg-violet/8 text-violet"
                : "border-cyan/20 bg-cyan/5 text-cyan"
            }`}
          >
            {post.category}
          </span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 font-body text-sm text-ink-muted">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
        </AnimatedSection>

        {/* Cover */}
        <AnimatedSection delay={0.1} className="mt-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-cyan/10 shadow-card">
            <Image
              src={post.imageUrl}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </AnimatedSection>

        {/* Body */}
        <AnimatedSection delay={0.05} className="mt-10">
          <article className="flex flex-col gap-6">
            {post.content.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2 key={i} className="mt-4 font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="flex flex-col gap-3" role="list">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-body text-base leading-relaxed text-ink-muted">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan/20 bg-cyan/5 text-cyan">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="font-body text-lg leading-[1.85] text-ink-muted">
                  {block.text}
                </p>
              );
            })}
          </article>
        </AnimatedSection>

        {/* Back + CTA */}
        <AnimatedSection delay={0.1} className="mt-12 flex flex-col items-start gap-6 border-t border-cyan/10 pt-10">
          <Link href="/blog" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-cyan transition-colors hover:text-ink">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to all articles
          </Link>
        </AnimatedSection>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-display text-xl font-bold tracking-[-0.02em] text-ink">Keep reading</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block h-full">
                  <GlassCard as="article" glowColor={p.accentColor} className="group flex h-full flex-col overflow-hidden p-0">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image src={p.imageUrl} alt={p.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <span className="font-body text-xs text-ink-muted">{p.date} · {p.readingTime}</span>
                      <h3 className="font-display text-base font-semibold leading-snug text-ink transition-colors group-hover:text-cyan">{p.title}</h3>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter / contact CTA */}
        <AnimatedSection delay={0.1} className="mt-16 flex flex-col items-center gap-5 rounded-2xl border border-cyan/10 bg-elevated px-6 py-12 text-center shadow-card">
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
            Want this for your business?
          </h2>
          <p className="max-w-md font-body text-base text-ink-muted">
            Let&apos;s talk about how AI and automation can work for you.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
