import { HOME } from "@/lib/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function WhoWeAre() {
  const { who } = HOME;

  return (
    <section className="bg-cream">
      <div className="section-wrap">
        <div className="grid grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="rounded-[10px] overflow-hidden aspect-[4/5]">
            <ImagePlaceholder
              className="w-full h-full"
              bgClass="bg-[#1a2f58]"
              showIcon
            />
          </div>

          {/* Text */}
          <div>
            <p
              className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-2.5"
              style={{ color: "var(--color-gold)" }}
            >
              {who.eyebrow}
            </p>
            <h2 className="font-playfair text-[32px] font-semibold text-navy leading-[1.2] tracking-[-0.01em] mb-4">
              {who.heading}
            </h2>
            <p className="text-[14.5px] text-muted leading-[1.75] mb-3.5">
              {who.body}
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-2 mt-6">
              {who.pillars.map(({ title, body }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 px-4 py-3.5 rounded-[7px]"
                  style={{
                    background: "var(--color-cream)",
                    borderLeft: "2px solid var(--color-gold)",
                    // slightly whiter to differentiate from outer cream
                    backgroundColor: "#f0ece3",
                  }}
                >
                  <div>
                    <strong className="block text-[13.5px] font-medium text-navy mb-0.5">
                      {title}
                    </strong>
                    <span className="text-[12.5px] text-muted">{body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
