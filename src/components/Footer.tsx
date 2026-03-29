import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/content";

interface FooterProps {
  /** Render only the copyright bar (for inner pages) */
  minimal?: boolean;
}

export function Footer({ minimal = false }: FooterProps) {
  if (minimal) {
    return (
      <footer style={{ background: "#080f1e" }} className="px-8 py-6">
        <div className="max-w-content mx-auto flex justify-between text-[11.5px] text-white/20">
          <span>{SITE.copyrightShort}</span>
          <Link href="/" className="text-white/40 hover:text-white/75 no-underline cursor-pointer transition-colors">
            ← Back to home
          </Link>
        </div>
      </footer>
    );
  }

  return (
    <footer style={{ background: "#080f1e" }} className="pt-[52px] pb-6 px-8">
      <div className="max-w-content mx-auto">
        {/* Top grid */}
        <div
          className="grid gap-[52px] pb-10"
          style={{
            gridTemplateColumns: "2fr 1fr 1fr",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Brand */}
          <div>
            <p className="text-[13.5px] font-medium text-white/70 mb-2.5 leading-[1.45]">
              {SITE.fullName}
            </p>
            <p className="text-[12px] text-white/30 leading-[1.75] max-w-[250px]">
              {SITE.footerBlurb}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.13em] text-white/20 font-medium mb-3.5">
              {FOOTER_LINKS.pages.heading}
            </h4>
            {FOOTER_LINKS.pages.items.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="block text-[12.5px] text-white/40 hover:text-white/75 no-underline mb-2.5 transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Community */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.13em] text-white/20 font-medium mb-3.5">
              {FOOTER_LINKS.community.heading}
            </h4>
            {FOOTER_LINKS.community.items.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="block text-[12.5px] text-white/40 hover:text-white/75 no-underline mb-2.5 transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-[22px] flex justify-between text-[11.5px] text-white/20">
          <span>{SITE.copyright}</span>
          <span>{SITE.registered}</span>
        </div>
      </div>
    </footer>
  );
}
