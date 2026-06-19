"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
  { label: "Book", href: "#book" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: solid ? "color-mix(in oklch, var(--background) 88%, transparent)" : "transparent",
        backdropFilter: solid ? "blur(12px)" : "none",
        borderBottom: solid ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto w-full px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-display text-xl tracking-tight whitespace-nowrap"
        >
          <span style={{ fontWeight: 600 }}>Styling Haircutters</span>
          <span style={{ color: "var(--muted-foreground)" }}> · NYC</span>
        </a>

        {/* Center nav (desktop) */}
        <ul className="hidden md:flex items-center gap-9 text-sm">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors duration-300"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-4 md:gap-5">
          <span
            className="hidden lg:flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-medium"
            style={{ color: "var(--accent)" }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
            Opens 7 AM Daily
          </span>
          <a
            href="tel:+12125719832"
            className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
          >
            <Phone size={14} />
            <span className="hidden sm:inline">Call</span>
          </a>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 -mr-2"
            style={{ color: "var(--foreground)" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className="md:hidden overflow-hidden transition-[max-height,opacity] duration-400 ease-out"
        style={{
          maxHeight: open ? "70vh" : "0px",
          opacity: open ? 1 : 0,
          borderTop: open ? "1px solid var(--border)" : "1px solid transparent",
          backgroundColor: "color-mix(in oklch, var(--background) 96%, transparent)",
          backdropFilter: "blur(12px)",
        }}
      >
        <ul className="px-6 py-6 flex flex-col gap-1">
          {NAV.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-display text-2xl py-3 transition-transform duration-300"
                style={{
                  fontWeight: 500,
                  transform: open ? "translateY(0)" : "translateY(8px)",
                  transition: `transform 0.4s ease ${i * 0.05}s, opacity 0.4s ease ${i * 0.05}s`,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="tel:+12125719832"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium"
              style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
            >
              <Phone size={15} />
              Call (212) 571-9832
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
