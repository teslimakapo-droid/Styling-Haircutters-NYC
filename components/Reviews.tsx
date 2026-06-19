"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const REVIEWS = [
  { quote: "Great spot with very friendly staff.", name: "Nikunj" },
  { quote: "Mark is the best barber in the city.", name: "Gabriel" },
  {
    quote:
      "Experienced, good quality hairdressers for a great price. Rina cut my son and my hair and did an excellent job. She was thorough and efficient.",
    name: "Stephanie",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="max-w-7xl mx-auto w-full px-6 md:px-8 py-24 md:py-32">
      <SectionHeading index="03" kicker="The Word" title="4.7 stars · 258 reviews." />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
        {REVIEWS.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 md:p-10 flex flex-col"
            style={{ borderLeft: i === 0 ? "none" : "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-1 mb-6" style={{ color: "var(--accent)" }}>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p
              className="font-display italic text-lg leading-relaxed flex-1"
              style={{ fontWeight: 400 }}
            >
              &ldquo;{r.quote}&rdquo;
            </p>
            <p
              className="mt-8 text-[11px] tracking-[0.3em] uppercase font-medium"
              style={{ color: "var(--accent)" }}
            >
              {r.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
