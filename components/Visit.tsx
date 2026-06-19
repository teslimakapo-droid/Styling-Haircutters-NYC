"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Scissors, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const INFO = [
  { icon: MapPin, title: "123 Fulton St", sub: "New York, NY 10038" },
  { icon: Phone, title: "(212) 571-9832", sub: "Tap to call · Walk-ins welcome" },
  { icon: Clock, title: "Mon–Sat · 7 AM — 7 PM", sub: "Early openings · Quality service" },
  { icon: Scissors, title: "Walk-ins Accepted", sub: "Restroom · Friendly stylists" },
];

const MAPS_URL = "https://maps.google.com/?q=123+Fulton+St,+New+York,+NY+10038";

export default function Visit() {
  return (
    <section id="visit" className="max-w-7xl mx-auto w-full px-6 md:px-8 py-24 md:py-32">
      <SectionHeading
        index="04"
        kicker="The Studio"
        title="Visit the studio."
        description="In the heart of the Financial District. Walk in, or call ahead — we'll have a chair ready."
        align="split"
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          <div className="rounded-2xl p-8 md:p-10" style={{ border: "1px solid var(--border)" }}>
            <ul className="space-y-7">
              {INFO.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--muted)", color: "var(--accent)" }}
                  >
                    <item.icon size={17} />
                  </span>
                  <div>
                    <p className="font-medium" style={{ fontSize: "1.0625rem" }}>{item.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: "var(--muted-foreground)" }}>{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#book"
              className="rounded-full px-7 py-3.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
            >
              Book Appointment
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300"
              style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
            >
              Get Directions
              <ArrowUpRight size={15} style={{ color: "var(--accent)" }} />
            </a>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative rounded-2xl overflow-hidden min-h-[340px]"
          style={{ border: "1px solid var(--border)", backgroundColor: "var(--card)" }}
        >
          {/* Live OpenStreetMap embed, dark-themed via CSS filter (no built-in marker) */}
          <iframe
            title="Map to Styling Haircutters · NYC, 123 Fulton St"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0125%2C40.7065%2C-74.0009%2C40.7133&layer=mapnik&marker=40.7099%2C-74.0067"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0, filter: "invert(91%) hue-rotate(180deg) brightness(0.92) contrast(0.95) saturate(0.7)" }}
          />
          {/* Amber location pin at the map center (the shop's coordinates) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
            <MapPin size={36} fill="var(--accent)" strokeWidth={1.5} style={{ color: "var(--background)" }} />
          </div>
          {/* Amber tint + edge fade to blend with the dark theme */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(to top, color-mix(in oklch, var(--background) 55%, transparent) 0%, transparent 35%)", mixBlendMode: "multiply" }}
          />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-4 py-2 text-[11px] tracking-[0.3em] uppercase font-medium transition-transform duration-300 hover:translate-x-1"
            style={{
              color: "var(--accent)",
              backgroundColor: "color-mix(in oklch, var(--background) 80%, transparent)",
              backdropFilter: "blur(8px)",
              border: "1px solid var(--border)",
            }}
          >
            Get Directions <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
