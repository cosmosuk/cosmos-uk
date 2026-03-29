"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: NAV.home, href: "/" },
  { label: NAV.press, href: "/press" },
  { label: NAV.about, href: "/about" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-8 h-[62px]"
      style={{
        background: "var(--color-navy)",
        borderBottom: "1px solid rgba(181,137,42,0.18)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 cursor-pointer no-underline">
        <div
          className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--color-gold)" }}
        >
          <span className="font-playfair text-[17px] font-semibold text-white leading-none">
            {SITE.logoLetter}
          </span>
        </div>
        <div>
          <div className="text-[13px] font-medium text-white tracking-[0.02em]">
            {SITE.name}
          </div>
          <div className="text-[10px] text-white/40 tracking-[0.1em] uppercase mt-px">
            {SITE.tagline}
          </div>
        </div>
      </Link>

      {/* Links */}
      <div className="flex items-center gap-px">
        {NAV_LINKS.map(({ label, href }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-3.5 py-[7px] rounded-md text-[13px] font-inter transition-all duration-150 no-underline",
                active
                  ? "text-white/95 bg-white/10"
                  : "text-white/60 hover:text-white hover:bg-white/[0.09]"
              )}
            >
              {label}
            </Link>
          );
        })}

        <button
          className="ml-2.5 px-[18px] py-2 rounded-md text-[13px] font-medium font-inter text-white transition-colors duration-150"
          style={{ background: "var(--color-gold)" }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.background =
              "var(--color-gold-light)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.background =
              "var(--color-gold)")
          }
        >
          {NAV.donate}
        </button>
      </div>
    </nav>
  );
}
