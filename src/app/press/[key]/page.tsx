import { notFound } from "next/navigation";
import Link from "next/link";
import { getPressReleases } from "@/lib/csv";
import { PRESS } from "@/lib/content";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const releases = await getPressReleases();
  return releases.map((r) => ({ key: r.titleKey }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const releases = await getPressReleases();
  const release = releases.find((r) => r.titleKey === key);
  return { title: release ? `${release.title} – COSMOS UK` : "Press – COSMOS UK" };
}

/** Render content: paragraph breaks, *bold*, bullet lines */
function renderContent(text: string) {
  const paragraphs = text.split(/\n{2,}/);

  return paragraphs.map((para, pi) => {
    const lines = para.split("\n");

    const renderedLines = lines.map((line, li) => {
      const parts = line.split(/(\*[^*]+\*)/g);
      const inline = parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <strong key={i}>{part.slice(1, -1)}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      );

      return (
        <span key={li}>
          {inline}
          {li < lines.length - 1 && <br />}
        </span>
      );
    });

    return (
      <p key={pi} className="text-[14.5px] text-muted leading-[1.8] mb-4">
        {renderedLines}
      </p>
    );
  });
}

export default async function PressDetailPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const releases = await getPressReleases();
  const release = releases.find((r) => r.titleKey === key);

  if (!release) notFound();

  const dateStr = release.created.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const hasImages = release.images.length > 0;

  return (
    <>
      {/* Page hero */}
      <div className="bg-navy px-8 pt-[52px] pb-12">
        <div className="max-w-content mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">
            {PRESS.eyebrow}
          </p>
          <div className="text-[11px] uppercase tracking-[0.12em] font-semibold text-gold/70 mb-3">
            {release.type}
          </div>
          <h1 className="font-playfair text-[32px] font-semibold text-white tracking-[-0.01em] mb-3 leading-[1.2]">
            {release.title}
          </h1>
          <p className="text-[13px] text-white/50">{dateStr}</p>
        </div>
      </div>

      {/* Body */}
      <section className="section-wrap">
        <div className={hasImages ? "grid grid-cols-[1fr_420px] gap-12 items-start" : ""}>

          {/* Left — scrollable text */}
          <div>
            {renderContent(release.content)}

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <Link
                href="/press"
                className="text-[13px] text-subtle hover:text-navy transition-colors duration-150"
              >
                ← Back to press releases
              </Link>
            </div>
          </div>

          {/* Right — sticky carousel */}
          {hasImages && (
            <div className="sticky top-[78px]">
              <div className="bg-[#202124] rounded-[12px] p-4 pt-6">
                <ImageCarousel images={release.images} />
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer minimal />
    </>
  );
}
