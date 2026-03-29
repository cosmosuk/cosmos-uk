import Link from "next/link";
import Image from "next/image";
import { HOME } from "@/lib/content";
import { Button } from "@/components/ui/Button";
// Portrait → tall left column. Two landscapes → stacked right column.
import imgTall from "@/assets/Home/Image2.jpeg";
import imgWide1 from "@/assets/Home/Image1.jpg";
import imgWide2 from "@/assets/Home/Image3.jpeg";

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
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {/* Left column – tall portrait image */}
        <div className="relative overflow-hidden">
          <Image src={imgTall} alt="" fill className="object-cover" />
        </div>

        {/* Right column – two landscape images stacked */}
        <div className="flex flex-col gap-1 overflow-hidden h-full">
          <div className="flex-1 relative overflow-hidden">
            <Image src={imgWide1} alt="" fill className="object-cover" />
          </div>
          <div className="flex-1 relative overflow-hidden">
            <Image src={imgWide2} alt="" fill className="object-cover object-center" />
          </div>
        </div>
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

        <p className="text-[15px] text-white/60 max-w-[460px] leading-[1.72] mb-8">
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
              <div className="text-[10.5px] text-white/60 uppercase tracking-[0.1em] mt-[5px]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
