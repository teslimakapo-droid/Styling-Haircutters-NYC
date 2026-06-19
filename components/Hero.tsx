"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Phone, Star } from "lucide-react";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Right-half hero image */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[52%]">
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&q=80"
            alt="Classic barbershop interior with leather chair"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--background) 0%, color-mix(in oklch, var(--background) 70%, transparent) 38%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, var(--background) 0%, transparent 22%, transparent 72%, var(--background) 100%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 pt-28">
        <div className="max-w-2xl">
          <motion.div {...rise(0)} className="mb-8">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] tracking-[0.28em] uppercase font-medium"
              style={{
                color: "var(--accent)",
                border: "1px solid color-mix(in oklch, var(--accent) 35%, transparent)",
                backgroundColor: "color-mix(in oklch, var(--accent) 8%, transparent)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              Financial District · Est. Classic Grooming
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.12)}
            className="font-display leading-[0.92]"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 500, letterSpacing: "-0.015em" }}
          >
            The Art of the
            <br />
            Modern Gentleman.
          </motion.h1>

          <motion.p
            {...rise(0.28)}
            className="mt-7 max-w-xl text-base md:text-lg leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            A neighborhood barber shop in the Financial District. Stop by 123 Fulton St for a
            sharp haircut, a clean fade, or a beard trim. Friendly staff, fair prices, and
            walk-ins are always welcome.
          </motion.p>

          <motion.div {...rise(0.42)} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="rounded-full px-7 py-3.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
            >
              Book Appointment
            </a>
            <a
              href="tel:+12125719832"
              className="flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300"
              style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
            >
              <Phone size={15} style={{ color: "var(--accent)" }} />
              Call (212) 571-9832
            </a>
          </motion.div>

          {/* Inline rating / trust badge */}
          <motion.div
            {...rise(0.54)}
            className="mt-9 flex w-fit items-center gap-4 rounded-2xl px-5 py-3.5"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "color-mix(in oklch, var(--card) 55%, transparent)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center gap-1" style={{ color: "var(--accent)" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="h-5 w-px" style={{ backgroundColor: "var(--border)" }} />
            <p className="text-sm whitespace-nowrap">
              <span className="font-display" style={{ fontWeight: 600, fontSize: "1.05rem" }}>
                4.7
              </span>
              <span style={{ color: "var(--muted-foreground)" }}> · 258 verified reviews</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
