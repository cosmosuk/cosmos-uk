"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.svg";

const NAV_LINKS = [
  { label: NAV.home, href: "/" },
  { label: NAV.press, href: "/press" },
  { label: NAV.about, href: "/about" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 px-5 md:px-8"
      style={{
        background: "var(--color-navy)",
        borderBottom: "1px solid rgba(181,137,42,0.18)",
      }}
    >
      <div className="flex items-center justify-between h-[62px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer no-underline" onClick={() => setOpen(false)}>
          <div className="w-9 h-9 rounded-md overflow-hidden flex-shrink-0">
            <Image src={logo} alt={SITE.name} width={36} height={36} className="object-cover w-full h-full" />
          </div>
          <div>
            <div className="text-[13px] font-medium text-white tracking-[0.02em]">
              {SITE.name}
            </div>
            <div className="hidden md:block text-[10px] text-white/40 tracking-[0.1em] uppercase mt-px">
              {SITE.tagline}
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-px">
          {NAV_LINKS.map(({ label, href }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
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
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--color-gold-light)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--color-gold)")}
          >
            {NAV.donate}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 items-center"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-5 h-px bg-white/70 transition-all duration-200", open && "rotate-45 translate-y-[6px]")} />
          <span className={cn("block w-5 h-px bg-white/70 transition-all duration-200", open && "opacity-0")} />
          <span className={cn("block w-5 h-px bg-white/70 transition-all duration-200", open && "-rotate-45 -translate-y-[6px]")} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden pb-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3.5 py-3 rounded-md text-[14px] font-inter transition-all duration-150 no-underline",
                  active ? "text-white bg-white/10" : "text-white/60"
                )}
              >
                {label}
              </Link>
            );
          })}
          <button
            className="mt-1 mx-3.5 py-2.5 rounded-md text-[14px] font-medium text-white text-left px-3.5"
            style={{ background: "var(--color-gold)" }}
          >
            {NAV.donate}
          </button>
        </div>
      )}
    </nav>
  );
}
