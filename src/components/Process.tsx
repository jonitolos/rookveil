"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your goals, audience, and vision to understand the problem first.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description:
      "Wireframes and polished mockups. We iterate until it feels right before writing code.",
  },
  {
    icon: Code,
    step: "03",
    title: "Development",
    description:
      "Built with precision using the latest web technologies. Clean, tested, and optimized.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Grow",
    description:
      "Seamless deployment, monitoring, and ongoing support. We stay by your side.",
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-3">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How we <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted mt-3 max-w-md mx-auto text-sm">
            A streamlined process refined over years of delivering successful
            projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative p-5 rounded-xl border border-border bg-surface/30 hover:bg-surface-light hover:border-accent/20 transition-all duration-300"
            >
              <span className="text-3xl font-bold text-border/50 absolute top-3 right-4 group-hover:text-accent/15 transition-colors">
                {step.step}
              </span>
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <step.icon size={16} className="text-accent-light" />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{step.title}</h3>
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
