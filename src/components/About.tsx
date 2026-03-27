"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Craft over code",
    description:
      "We don't just write code — we engineer experiences. Every decision is deliberate, every detail matters.",
  },
  {
    icon: Rocket,
    title: "Speed is a feature",
    description:
      "Performance isn't an afterthought. Sub-second load times, optimized assets, and edge-deployed infrastructure.",
  },
  {
    icon: Users,
    title: "Partnership, not projects",
    description:
      "We work as an extension of your team. Long-term relationships over one-off transactions.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              A studio built on{" "}
              <span className="gradient-text">obsession with quality</span>
            </h2>
            <div className="space-y-4 text-muted text-sm leading-relaxed">
              <p>
                Rookveil is a boutique web development studio based in
                Lithuania. With over 12 years of experience spanning logistics
                technology to modern SaaS, we bring a unique blend of
                business understanding and technical excellence.
              </p>
              <p>
                We specialize in the modern web stack — Next.js, React,
                Supabase, and Tailwind CSS — to deliver blazing-fast websites
                that don&apos;t just look great but perform at the highest level.
              </p>
              <p>
                Every project starts with understanding your goals and ends
                with a solution that exceeds expectations. No templates, no
                shortcuts — just clean, custom code.
              </p>
            </div>
          </motion.div>

          {/* Right column — values */}
          <div className="space-y-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex gap-4 p-5 rounded-xl border border-border bg-surface/30"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <value.icon size={18} className="text-accent-light" />
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
