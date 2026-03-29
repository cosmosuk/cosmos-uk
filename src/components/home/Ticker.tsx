import Link from "next/link";
import { HOME } from "@/lib/content";

export function Ticker() {
  const { ticker } = HOME;

  return (
    <div
      className="flex items-center gap-3.5 px-8 py-[11px]"
      style={{ background: "var(--color-gold)" }}
    >
      <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-white/65 whitespace-nowrap">
        {ticker.label}
      </span>
      <div className="w-px h-[11px] flex-shrink-0 bg-white/30" />
      <Link
        href="/press"
        className="text-[13px] text-white tracking-[0.01em] hover:underline underline-offset-2 no-underline cursor-pointer"
      >
        {ticker.text}
      </Link>
    </div>
  );
}
