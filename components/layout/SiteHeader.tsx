"use client";

import { useEffect, useState } from "react";
import { BookingButton } from "@/components/booking/BookingButton";
import { Container } from "@/components/ui/Section";
import { navLinks, site } from "@/lib/site";

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-3.5">
      <span className="hex grid h-10 w-10 shrink-0 place-items-center bg-[linear-gradient(140deg,var(--color-brand),var(--color-blood))] font-display text-[15px] font-extrabold text-white">
        {site.initials}
      </span>
      <span>
        <strong className="block font-display text-[15.5px] leading-tight font-bold">
          {site.name}
        </strong>
        <small className="text-[10.5px] tracking-[0.24em] text-sand uppercase">
          {site.tagline}
        </small>
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-60 border-b border-hairline bg-void/85 backdrop-blur-lg">
      <Container>
        <div
          className={`flex items-center justify-between gap-6 transition-all duration-200 ${
            stuck ? "py-3" : "py-[18px]"
          }`}
        >
          <Brand />

          <nav className="hidden gap-[30px] text-[14px] font-medium text-paper/70 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all after:duration-200 hover:text-paper hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3.5">
            <span className="hidden lg:block">
              <BookingButton size="sm">Réserver mon appel</BookingButton>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="cursor-pointer p-2 text-paper lg:hidden"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {menuOpen ? (
        <div className="border-t border-hairline bg-[#080a0f] lg:hidden">
          <Container>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-hairline py-[15px] text-[15px] font-semibold"
              >
                {link.label}
              </a>
            ))}
            <div className="py-6">
              <BookingButton className="w-full" onSelect={() => setMenuOpen(false)}>
                Réserver mon appel
              </BookingButton>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
