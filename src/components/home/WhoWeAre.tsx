import { HOME } from "@/lib/content";
import { getImages } from "@/lib/csv";

export async function WhoWeAre() {
  const { who } = HOME;
  const images = await getImages();
  const bannerUrl = images["IMG_BANNER_LOGO"];
  const previewSrc = bannerUrl
    ? `https://drive.google.com/file/d/${bannerUrl.match(/\/file\/d\/([^/]+)\//)?.[1]}/preview`
    : null;

  return (
    <section className="bg-cream">
      <div className="section-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Image */}
          <div className="rounded-[10px] overflow-hidden aspect-[16/9] md:aspect-[4/5] relative bg-navy">
            {previewSrc ? (
              <iframe
                src={previewSrc}
                title="COSMOS UK banner"
                allow="autoplay"
                className="absolute border-0 pointer-events-none"
                style={{ width: "calc(100% + 120px)", left: "-60px", top: 0, height: "100%", overflow: "hidden" }}
              />
            ) : null}
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
