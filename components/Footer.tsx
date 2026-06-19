"use client";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#top" className="font-display text-lg">
          <span style={{ fontWeight: 600 }}>Styling Haircutters</span>
          <span style={{ color: "var(--muted-foreground)" }}> · NYC</span>
        </a>

        <ul className="flex items-center gap-8 text-[11px] tracking-[0.25em] uppercase">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors duration-300"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[11px] tracking-[0.2em] uppercase" style={{ color: "var(--muted-foreground)" }}>
          © 2026 Styling Haircutters · NYC
        </p>
      </div>
    </footer>
  );
}
