"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  { name: "Signature Haircut", price: "$16", desc: "Precision cut including wash, hot towel finish, and signature styling." },
  { name: "Skin Fade", price: "$20", desc: "Seamless transitions from skin to length using specialized clipper work." },
  { name: "Beard Sculpting", price: "$18", desc: "Full trim and conditioning with straight razor line-up and steam towel." },
  { name: "Scissor Cut", price: "$25", desc: "Expert hand-cut shear work for longer styles and natural texture." },
  { name: "Hair Coloring", price: "$35", desc: "Professional grey blending or full color transformation for men." },
  { name: "Curly & Long Hair", price: "$28", desc: "Texture-specific care, layering and shape for length and curl." },
  { name: "Hair Shape Up", price: "$16", desc: "Essential maintenance for the hairline and neck between full cuts." },
  { name: "Eyebrow Tinting", price: "$16", desc: "Subtle natural coverage to refine and define the brow line." },
  { name: "Buzz Cut", price: "$18", desc: "Clean, even all-over with a precise hairline and neck finish." },
];

export default function ServiceMenu() {
  return (
    <section id="services" className="max-w-7xl mx-auto w-full px-6 md:px-8 py-24 md:py-32">
      <SectionHeading
        index="01"
        kicker="The Menu"
        title="The Service Menu"
        description="Classic and modern cuts, done right. Every service starts with a quick consultation and finishes with a hot towel."
      />

      <div
        className="mt-14 rounded-2xl overflow-hidden"
        style={{ border: "1px solid var(--border)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group p-7 md:p-9 transition-colors duration-300"
              style={{ borderTop: "1px solid var(--border)", borderLeft: "1px solid var(--border)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "color-mix(in oklch, var(--card) 60%, transparent)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3 className="font-display text-xl" style={{ fontWeight: 600 }}>
                  {s.name}
                </h3>
                <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                  {s.price}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
