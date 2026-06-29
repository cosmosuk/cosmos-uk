import Link from "next/link";
import { HOME } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export async function WhoWeAre() {
  const { who } = HOME;

  return (
    <section className="bg-cream">
      <div className="section-wrap text-center">
        <p
          className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-2.5"
          style={{ color: "var(--color-gold)" }}
        >
          {who.eyebrow}
        </p>
        <h2 className="font-playfair text-[32px] font-semibold text-navy leading-[1.2] tracking-[-0.01em] mb-4">
          {who.heading}
        </h2>
        <p className="text-[14.5px] text-muted leading-[1.75] max-w-[600px] mx-auto mb-10">
          {who.body}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {who.pillars.map(({ title, body }) => (
            <div
              key={title}
              className="px-5 py-6 rounded-[10px] border border-[var(--color-border)]"
              style={{ backgroundColor: "#f0ece3" }}
            >
              <strong className="block text-[14px] font-medium text-navy mb-1.5">
                {title}
              </strong>
              <span className="text-[12.5px] text-muted leading-[1.65]">
                {body}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/about">
            <Button variant="outline-dark">Learn more about us →</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
