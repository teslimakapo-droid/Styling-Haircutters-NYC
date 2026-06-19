"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  kicker,
  title,
  description,
  align = "left",
}: {
  index: string;
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "split";
}) {
  return (
    <div className={align === "split" ? "flex flex-col md:flex-row md:items-end md:justify-between gap-6" : ""}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="text-[11px] tracking-[0.3em] uppercase font-medium mb-5"
          style={{ color: "var(--accent)" }}
        >
          {index} · {kicker}
        </p>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.05 }}
        >
          {title}
        </h2>
      </motion.div>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`max-w-md text-sm md:text-base leading-relaxed ${align === "split" ? "md:text-right" : "mt-5"}`}
          style={{ color: "var(--muted-foreground)" }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
