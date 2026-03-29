import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type Variant = "gold" | "outline" | "outline-dark" | "donate";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  gold: [
    "bg-gold hover:bg-gold-light text-white border-transparent",
    "font-inter text-[13.5px] font-medium px-[26px] py-3 rounded-md tracking-[0.01em]",
    "transition-colors duration-150",
  ].join(" "),

  outline: [
    "bg-transparent border border-white/20 hover:border-white/35 text-white/80 hover:bg-white/10 hover:text-white",
    "font-inter text-[13.5px] px-[26px] py-3 rounded-md tracking-[0.01em]",
    "transition-all duration-150",
  ].join(" "),

  "outline-dark": [
    "bg-transparent border border-[var(--color-border)] hover:border-gold text-navy hover:text-gold",
    "font-inter text-[13px] px-5 py-[9px] rounded-md tracking-[0.01em]",
    "transition-all duration-150",
  ].join(" "),

  donate: [
    "bg-gold hover:bg-gold-light text-white border-transparent",
    "font-inter text-[14px] font-medium px-8 py-[14px] rounded-md tracking-[0.01em] whitespace-nowrap",
    "transition-colors duration-150",
  ].join(" "),
};

export function Button({
  variant = "gold",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
