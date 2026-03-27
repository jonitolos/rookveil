"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your goals, audience, and vision. Every great project starts with understanding the problem.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description:
      "Clean wireframes and polished mockups. We iterate until the design feels right before writing a single line of code.",
  },
  {
    icon: Code,
    step: "03",
    title: "Development",
    description:
      "We build with precision using the latest web technologies. Clean code, tested thoroughly, optimized for speed.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Grow",
    description:
      "Seamless deployment, monitoring setup, and ongoing support. Your site goes live, and we stay by your side.",
  },
];

export default function Process() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How we <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            A streamlined process refined over years of delivering successful
            projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative p-6 rounded-xl border border-border bg-surface/30"
            >
              <span className="text-4xl font-bold text-border/60 absolute top-4 right-4">
                {step.step}
              </span>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <step.icon size={18} className="text-accent-light" />
              </div>
              <h3 className="text-sm font-semibold mb-2">{step.title}</h3>
              <p className="text-xs text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
