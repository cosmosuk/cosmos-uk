import { ABOUT } from "@/lib/content";
import { getAboutUs, getImages } from "@/lib/csv";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About – COSMOS UK",
};

export default async function AboutPage() {
  const { intro, stats, mission, timeline } = ABOUT;
  const [aboutText, images] = await Promise.all([getAboutUs(), getImages()]);

  const bannerUrl = images["IMG_BANNER_LOGO"];
  const bannerPreview = bannerUrl
    ? `https://drive.google.com/file/d/${bannerUrl.match(/\/file\/d\/([^/]+)\//)?.[1]}/preview`
    : null;

  const allParagraphs = aboutText
    .split("\n\n")
    .map((p) => p.trim())
    .filter((p) => p && p !== "COSMOS UK");

  const affiliatesIdx = allParagraphs.findIndex((p) =>
    p.startsWith("Our Affiliates are")
  );

  const historyParagraphs =
    affiliatesIdx !== -1 ? allParagraphs.slice(0, affiliatesIdx) : allParagraphs;

  let affiliates: string[] = [];
  let affiliatesNote = "";
  if (affiliatesIdx !== -1 && allParagraphs[affiliatesIdx + 1]) {
    const lines = allParagraphs[affiliatesIdx + 1]
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    const last = lines[lines.length - 1];
    if (last.toLowerCase().startsWith("full name")) {
      affiliatesNote = last;
      affiliates = lines.slice(0, -1);
    } else {
      affiliates = lines;
    }
  }

  return (
    <>
      {/* Page hero */}
      <div className="bg-navy px-8 pt-[52px] pb-12">
        <div className="max-w-content mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">
            {ABOUT.eyebrow}
          </p>
          <h1 className="font-playfair text-[38px] font-semibold text-white tracking-[-0.01em] mb-2">
            {ABOUT.heading}
          </h1>
          <p className="text-[14.5px] text-white/60">{ABOUT.subtitle}</p>
        </div>
      </div>

      {/* Intro split */}
      <section className="section-wrap">
        <div className="grid grid-cols-2 gap-14 items-center">
          <div className="rounded-[10px] overflow-hidden aspect-[4/5] relative bg-navy">
            {bannerPreview ? (
              <iframe
                src={bannerPreview}
                title="COSMOS UK banner"
                allow="autoplay"
                className="absolute border-0 pointer-events-none"
                style={{ width: "calc(100% + 120px)", left: "-60px", top: 0, height: "100%" }}
              />
            ) : (
              <ImagePlaceholder className="w-full h-full" bgClass="bg-[#1a2f58]" showIcon />
            )}
          </div>
          <div>
            <p
              className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-2.5"
              style={{ color: "var(--color-gold)" }}
            >
              {intro.eyebrow}
            </p>
            <h2 className="font-playfair text-[32px] font-semibold text-navy leading-[1.2] tracking-[-0.01em] mb-4">
              {intro.heading}
            </h2>
            {intro.paragraphs.map((p, i) => (
              <p key={i} className="text-[14.5px] text-muted leading-[1.75] mb-3.5">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="grid mt-12 border border-[var(--color-border)] rounded-[10px] overflow-hidden"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {stats.map(({ number, label }, i) => (
            <div
              key={label}
              className="bg-white py-7 px-6 text-center"
              style={{
                borderRight:
                  i < stats.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div className="font-playfair text-[42px] font-semibold text-navy leading-none">
                {number}
              </div>
              <div className="text-[11px] text-muted uppercase tracking-[0.1em] mt-1.5">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History */}
      <section className="section-wrap">
        <SectionHeader eyebrow="Our History" title="The Humble Origins of COSMOS" />
        <div className="columns-2 gap-10">
          {historyParagraphs.map((p, i) => (
            <p
              key={i}
              className="text-[14px] text-muted leading-[1.8] mb-4 break-inside-avoid"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Affiliates */}
      {affiliates.length > 0 && (
        <section className="bg-cream">
          <div className="section-wrap">
            <SectionHeader eyebrow="Member Organisations" title="Our Affiliates" />
            <ul className="grid grid-cols-3 gap-x-6 gap-y-2.5">
              {affiliates.map((name) => (
                <li key={name} className="flex items-start gap-2">
                  <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-[14px] text-muted leading-[1.6]">{name}</span>
                </li>
              ))}
            </ul>
            {affiliatesNote && (
              <p className="mt-5 text-[12px] text-muted/60 italic">{affiliatesNote}</p>
            )}
          </div>
        </section>
      )}

      {/* Mission cards + timeline */}
      <section className="bg-cream">
        <div className="section-wrap">
          <SectionHeader eyebrow={mission.eyebrow} title={mission.title} />

          <div className="grid grid-cols-3 gap-3.5">
            {mission.cards.map((card, i) => {
              const bgClasses = ["bg-[#1c3260]", "bg-[#15274c]", "bg-[#1e3568]"];
              return (
                <div
                  key={card.eyebrow}
                  className="bg-white border border-[var(--color-border)] rounded-[10px] overflow-hidden hover:border-gold transition-colors duration-150"
                >
                  <ImagePlaceholder
                    className="h-[150px] w-full"
                    bgClass={bgClasses[i]}
                    showIcon
                  />
                  <div className="p-5">
                    <p
                      className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-1.5"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {card.eyebrow}
                    </p>
                    <p className="text-[13px] text-muted leading-[1.65]">
                      {card.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="mt-[52px]">
            <SectionHeader eyebrow={timeline.eyebrow} title={timeline.title} />
            <div className="border border-[var(--color-border)] rounded-[10px] overflow-hidden bg-white">
              <div className="flex flex-col px-6 py-2">
                {timeline.items.map((item, i) => (
                  <div
                    key={item.year}
                    className="grid items-baseline gap-4 py-3.5"
                    style={{
                      gridTemplateColumns: "52px 1fr",
                      borderBottom:
                        i < timeline.items.length - 1
                          ? "1px solid var(--color-border)"
                          : "none",
                    }}
                  >
                    <span className="text-[12px] font-semibold text-navy tracking-[0.02em]">
                      {item.year}
                    </span>
                    <span className="text-[13.5px] text-muted">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
