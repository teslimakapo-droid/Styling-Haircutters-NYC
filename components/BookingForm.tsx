"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  "Signature Haircut · $16",
  "Skin Fade · $20",
  "Beard Sculpting · $18",
  "Scissor Cut · $25",
  "Hair Coloring · $35",
  "Curly & Long Hair · $28",
  "Hair Shape Up · $16",
  "Eyebrow Tinting · $16",
  "Buzz Cut · $18",
];

const inputStyle: React.CSSProperties = {
  backgroundColor: "color-mix(in oklch, var(--card) 60%, transparent)",
  border: "1px solid var(--border)",
  color: "var(--foreground)",
};

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "", notes: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend yet, so just show a client-side confirmation.
    setSubmitted(true);
  };

  return (
    <section id="book" className="max-w-7xl mx-auto w-full px-6 md:px-8 py-24 md:py-32">
      <SectionHeading
        index="05"
        kicker="Book"
        title="Reserve your chair."
        description="Send a request and we'll call to confirm your time. Walk-ins are always welcome too."
        align="split"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 rounded-2xl p-7 md:p-10"
        style={{ border: "1px solid var(--border)", backgroundColor: "color-mix(in oklch, var(--card) 45%, transparent)" }}
      >
        {submitted ? (
          <div className="flex flex-col items-center text-center py-10">
            <span
              className="flex items-center justify-center w-14 h-14 rounded-full mb-6"
              style={{ backgroundColor: "color-mix(in oklch, var(--accent) 18%, transparent)", color: "var(--accent)" }}
            >
              <Check size={26} />
            </span>
            <h3 className="font-display text-2xl md:text-3xl" style={{ fontWeight: 500 }}>
              Request received{form.name ? `, ${form.name.split(" ")[0]}` : ""}.
            </h3>
            <p className="mt-3 max-w-md" style={{ color: "var(--muted-foreground)" }}>
              We&apos;ll call you at <span style={{ color: "var(--foreground)" }}>{form.phone || "your number"}</span> to confirm
              {form.service ? <> your <span style={{ color: "var(--foreground)" }}>{form.service.split(" · ")[0]}</span></> : " your appointment"}
              {form.date ? <> on <span style={{ color: "var(--foreground)" }}>{form.date}</span></> : ""}
              {form.time ? <> around <span style={{ color: "var(--foreground)" }}>{form.time}</span></> : ""}.
            </p>
            <button
              type="button"
              onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", date: "", time: "", notes: "" }); }}
              className="mt-8 rounded-full px-7 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
              style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
            >
              Book another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Full name">
              <input required value={form.name} onChange={set("name")} type="text" placeholder="James Carter"
                className="w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[color:var(--accent)]" style={inputStyle} />
            </Field>
            <Field label="Phone">
              <input required value={form.phone} onChange={set("phone")} type="tel" placeholder="(212) 555-0123"
                className="w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[color:var(--accent)]" style={inputStyle} />
            </Field>
            <Field label="Service" full>
              <select required value={form.service} onChange={set("service")}
                className="w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[color:var(--accent)]"
                style={{ ...inputStyle, color: form.service ? "var(--foreground)" : "var(--muted-foreground)" }}>
                <option value="" disabled>Select a service…</option>
                {SERVICES.map((s) => <option key={s} value={s} style={{ color: "#111" }}>{s}</option>)}
              </select>
            </Field>
            <Field label="Preferred date">
              <input value={form.date} onChange={set("date")} type="date"
                className="w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[color:var(--accent)]" style={inputStyle} />
            </Field>
            <Field label="Preferred time">
              <input value={form.time} onChange={set("time")} type="time"
                className="w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[color:var(--accent)]" style={inputStyle} />
            </Field>
            <Field label="Notes (optional)" full>
              <textarea value={form.notes} onChange={set("notes")} rows={3} placeholder="Anything we should know?"
                className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none focus:border-[color:var(--accent)]" style={inputStyle} />
            </Field>
            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
              <button type="submit"
                className="flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}>
                <Calendar size={15} />
                Request Appointment
              </button>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                Or call <a href="tel:+12125719832" style={{ color: "var(--accent)" }}>(212) 571-9832</a>. We're open Mon–Fri, 7 AM to 6:30 PM.
              </p>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-[11px] tracking-[0.2em] uppercase font-medium" style={{ color: "var(--muted-foreground)" }}>
        {label}
      </span>
      {children}
    </label>
  );
}
