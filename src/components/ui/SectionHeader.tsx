import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  /** Use light variant (white text) for dark backgrounds */
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-[10px] font-semibold tracking-widest2 uppercase mb-2.5",
            light ? "text-gold-light" : "text-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-playfair text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] mb-2.5",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-[15px] leading-[1.65] max-w-[500px]",
            light ? "text-white/50" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
