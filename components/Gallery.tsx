"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const SHOTS = [
  { tag: "Fade", src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80", alt: "Barber giving a fresh fade" },
  { tag: "Texture", src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=80", alt: "Textured curly cut" },
  { tag: "Classic", src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=900&q=80", alt: "Classic gentleman styling" },
  { tag: "Detail", src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=80", alt: "Straight razor detail work" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-7xl mx-auto w-full px-6 md:px-8 py-24 md:py-32">
      <SectionHeading
        index="02"
        kicker="The Work"
        title="Financial District Cut Gallery"
        description="Some of our recent work, from classic tapers to modern textured cuts."
        align="split"
      />

      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {SHOTS.map((shot, i) => (
          <motion.div
            key={shot.tag}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl"
            style={{ border: "1px solid var(--border)" }}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, color-mix(in oklch, var(--background) 85%, transparent) 0%, transparent 55%)" }}
            />
            <span
              className="absolute bottom-4 left-4 text-[11px] tracking-[0.3em] uppercase font-medium"
              style={{ color: "var(--foreground)" }}
            >
              {shot.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
