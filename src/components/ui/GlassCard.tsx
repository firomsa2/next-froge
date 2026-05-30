import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "violet" | "none";
  as?: "div" | "article" | "li";
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "cyan",
  as: Tag = "div",
}: GlassCardProps) {
  const hoverStyles =
    glowColor === "cyan"
      ? "hover:border-cyan/30 hover:shadow-cyan-glow"
      : glowColor === "violet"
        ? "hover:border-violet/30 hover:shadow-violet-glow"
        : "";

  return (
    <Tag
      className={`glass rounded-2xl transition-[border-color,box-shadow] duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </Tag>
  );
}
