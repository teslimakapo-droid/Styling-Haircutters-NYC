const ITEMS = [
  "Haircut",
  "Fade",
  "Beard Trim",
  "Beard Conditioning",
  "Scissor Cut",
  "Curly Hair",
  "Buzz Cut",
  "Hair Coloring",
  "Eyebrow Tinting",
  "Hair Shape Up",
];

export default function MarqueeTicker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="relative w-full overflow-hidden py-5"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-xs md:text-sm tracking-[0.3em] uppercase font-medium px-6"
              style={{ color: "var(--muted-foreground)" }}
            >
              {item}
            </span>
            <span style={{ color: "var(--accent)" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
