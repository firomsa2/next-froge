import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { TEAM_MEMBERS } from "@/lib/constants";

const ringColors: Record<string, string> = {
  cyan: "ring-cyan/40",
  violet: "ring-violet/40",
  white: "ring-white/20",
};

const badgeColors: Record<string, string> = {
  cyan: "border-cyan/25 bg-cyan/8 text-cyan",
  violet: "border-violet/25 bg-violet/8 text-violet",
  white: "border-white/15 bg-white/5 text-ink-muted",
};

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-4 flex flex-col items-center gap-4 text-center">
          <SectionLabel>The Team</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.025em] text-ink">
            Small Team. Outsized Output.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.05} className="mb-16 text-center">
          <p className="mx-auto max-w-lg font-body text-base text-ink-muted">
            A focused team of three — no account managers, no middlemen. You
            work directly with the people building your product.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TEAM_MEMBERS.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <GlassCard
                glowColor={member.accentColor === "white" ? "none" : member.accentColor}
                className="flex flex-col items-center gap-5 p-8 text-center"
              >
                {/* Avatar */}
                <div
                  className={`relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-base ${ringColors[member.accentColor]}`}
                >
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                {/* Name + Role */}
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {member.name}
                  </h3>
                  <span
                    className={`rounded-full border px-3 py-0.5 font-body text-xs font-medium ${badgeColors[member.accentColor]}`}
                  >
                    {member.role}
                  </span>
                </div>

                {/* Bio */}
                <p className="font-body text-sm leading-relaxed text-ink-muted">
                  {member.bio}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
