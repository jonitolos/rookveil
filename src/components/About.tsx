"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Craft over code",
    description:
      "I don't just write code — I engineer experiences. Every decision is deliberate, every detail matters.",
  },
  {
    icon: Rocket,
    title: "Speed is a feature",
    description:
      "Performance isn't an afterthought. Sub-second load times, optimized assets, and edge-deployed infrastructure.",
  },
  {
    icon: Users,
    title: "Direct communication",
    description:
      "No project managers, no middlemen. You talk to the person building your site. That's how things get done right.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Not an agency.{" "}
              <span className="gradient-text">One developer, full focus.</span>
            </h2>
            <div className="space-y-3.5 text-muted text-sm leading-relaxed">
              <p>
                I&apos;m Jonas Losis. I spent 12 years working in transport and
                logistics — managing operations, solving real business
                problems, and learning what companies actually need from
                their digital presence.
              </p>
              <p>
                That background means I understand your business before
                writing a single line of code. Fleet management dashboards,
                customer-facing booking portals, company websites that
                actually generate leads — I&apos;ve seen what works and what
                doesn&apos;t from the inside.
              </p>
              <p>
                Now I build custom websites with the modern stack — Next.js,
                React, Supabase, Tailwind CSS. No templates, no page
                builders. Just clean code, fast sites, and direct
                communication.
              </p>
            </div>
          </motion.div>

          {/* Right column — values */}
          <div className="space-y-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-4 p-4 rounded-xl border border-border bg-surface/30 hover:bg-surface-light hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <value.icon size={16} className="text-accent-light" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">{value.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
