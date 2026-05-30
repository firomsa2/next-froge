"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses = {
  primary:
    "bg-cyan text-base font-semibold shadow-cyan-glow hover:brightness-110 active:scale-[0.97]",
  ghost:
    "border border-cyan/40 text-ink font-medium hover:border-cyan hover:bg-cyan/5 active:scale-[0.97]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xl font-body transition-[filter,border-color,background-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-3 disabled:opacity-50 disabled:cursor-not-allowed`;

  const allClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={allClasses}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={allClasses}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.button>
  );
}
