import { PRESS } from "@/lib/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Press releases – COSMOS UK",
};

export default function PressPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-navy px-8 pt-[52px] pb-12">
        <div className="max-w-content mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">
            {PRESS.eyebrow}
          </p>
          <h1 className="font-playfair text-[38px] font-semibold text-white tracking-[-0.01em] mb-2">
            {PRESS.heading}
          </h1>
          <p className="text-[14.5px] text-white/44">{PRESS.subtitle}</p>
        </div>
      </div>

      {/* Featured image banner */}
      <div className="bg-cream px-8">
        <div className="max-w-content mx-auto">
          <ImagePlaceholder
            className="h-[220px] rounded-[10px] -mt-9 relative z-10"
            bgClass="bg-[#1a2f58]"
            showIcon
          />
        </div>
      </div>

      {/* Press list */}
      <section className="section-wrap" style={{ paddingTop: "44px" }}>
        <div className="border border-[var(--color-border)] rounded-[10px] overflow-hidden">
          {PRESS.items.map((item, i) => (
            <div
              key={item.title}
              className="grid items-center gap-[18px] px-[22px] py-5 bg-white hover:bg-cream cursor-pointer transition-colors duration-150 group"
              style={{
                gridTemplateColumns: "58px 1fr 20px",
                borderBottom:
                  i < PRESS.items.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
              }}
            >
              {/* Date block */}
              <div className="text-center flex-shrink-0">
                <div className="font-playfair text-[26px] font-semibold text-navy leading-none">
                  {item.day}
                </div>
                <div className="text-[10px] uppercase tracking-[0.1em] text-subtle mt-0.5">
                  {item.month}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="text-[10px] uppercase tracking-[0.12em] font-semibold text-gold mb-[5px]">
                  {item.category}
                </div>
                <div className="text-[14px] font-medium text-navy leading-[1.42] group-hover:text-gold transition-colors duration-150">
                  {item.title}
                </div>
              </div>

              {/* Arrow */}
              <div className="text-[18px] text-[var(--color-border-dark)] opacity-40 group-hover:text-gold group-hover:opacity-100 transition-all duration-150">
                ›
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer minimal />
    </>
  );
}
