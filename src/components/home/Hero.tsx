import Link from "next/link";
import { HOME } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Hero() {
  const { hero } = HOME;

  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{
        minHeight: "540px",
        height: "88vh",
        background: "var(--color-navy)",
      }}
    >
      {/* Right-side image grid */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[46%] grid gap-1 p-1"
        style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}
      >
        <ImagePlaceholder
          bgClass="bg-[#182e58]"
          className="rounded-none"
          style={{ gridRow: "1 / 3" }}
          showIcon
        />
        <ImagePlaceholder bgClass="bg-[#1c3464]" className="rounded-none" />
        <ImagePlaceholder bgClass="bg-[#14274c]" className="rounded-none" />
      </div>

      {/* Dark gradient veil */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, var(--color-navy) 38%, rgba(15,31,61,.6) 65%, rgba(15,31,61,.1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto w-full px-8 pb-16">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-5">
          <span
            className="w-1 h-1 rounded-full flex-shrink-0"
            style={{ background: "var(--color-gold-light)" }}
          />
          <span
            className="text-[11px] font-medium tracking-[0.18em] uppercase"
            style={{ color: "var(--color-gold-light)" }}
          >
            {hero.eyebrow}
          </span>
        </div>

        <h1
          className="font-playfair text-[50px] font-semibold text-white leading-[1.08] max-w-[600px] mb-5 tracking-[-0.01em]"
        >
          {hero.heading}
        </h1>

        <p className="text-[15px] text-white/58 max-w-[460px] leading-[1.72] mb-8">
          {hero.body}
        </p>

        <div className="flex gap-3">
          <Link href="/about">
            <Button variant="gold">{hero.ctaPrimary}</Button>
          </Link>
          <Link href="/press">
            <Button variant="outline">{hero.ctaSecondary}</Button>
          </Link>
        </div>

        {/* Stats */}
        <div
          className="flex gap-9 mt-11 pt-7"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {hero.stats.map(({ number, label }) => (
            <div key={label}>
              <div className="font-playfair text-[34px] font-semibold text-white leading-none">
                {number}
              </div>
              <div className="text-[10.5px] text-white/36 uppercase tracking-[0.1em] mt-[5px]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
