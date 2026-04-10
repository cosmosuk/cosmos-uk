import Link from "next/link";
import { HOME } from "@/lib/content";
import { getPressReleases } from "@/lib/csv";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const BG_CLASSES = ["bg-[#1a2f58]", "bg-[#1e3568]", "bg-[#15284e]"];

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function NewsGrid() {
  const { latestNews } = HOME;
  const pressReleases = await getPressReleases();
  const items = pressReleases.slice(0, 3);

  return (
    <section className="section-wrap">
      <SectionHeader
        eyebrow={latestNews.eyebrow}
        title={latestNews.title}
        subtitle={latestNews.subtitle}
      />

      <div className="grid grid-cols-3 gap-3.5">
        {items.map((item, i) => (
          <Link
            key={item.titleKey}
            href="/press"
            className="group rounded-[10px] overflow-hidden border border-[var(--color-border)] bg-white hover:border-gold transition-colors duration-150 no-underline block"
          >
            <ImagePlaceholder
              className="h-[188px] w-full"
              bgClass={BG_CLASSES[i]}
              showIcon
            />
            <div className="p-5">
              <span
                className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase px-[9px] py-[3px] rounded-[3px] mb-2.5"
                style={{
                  color: "var(--color-gold)",
                  background: "var(--color-gold-pale)",
                }}
              >
                {item.type}
              </span>
              <p className="text-[11.5px] text-subtle tracking-[0.01em] mb-1.5">
                {formatDate(item.created)}
              </p>
              <p className="text-[14.5px] font-medium text-navy leading-[1.4] group-hover:text-gold transition-colors duration-150">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-[18px] text-right">
        <Link href="/press">
          <Button variant="outline-dark">{latestNews.viewAllCta}</Button>
        </Link>
      </div>
    </section>
  );
}
