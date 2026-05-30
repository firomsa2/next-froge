interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className="block h-px w-8 bg-cyan/60"
        aria-hidden="true"
      />
      <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-cyan">
        {children}
      </span>
    </div>
  );
}
