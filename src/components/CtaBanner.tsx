"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
              Need a website? I can help.
            </h3>
            <p className="text-sm text-muted">
              Projects typically start from <span className="text-foreground font-medium">€500</span>.
              Tell me what you need and I&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <a
            href="#contact"
            className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-light text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-accent/20"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
