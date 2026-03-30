"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WireframeScene from "./WireframeScene";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden grid-bg">
      {/* Central logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] opacity-20">
        <img src="/logo.png" alt="" className="w-full h-full object-contain brightness-150" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        {/* 3D wireframe — above headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] mb-6"
        >
          <WireframeScene />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          I build websites
          <br />
          that <span className="gradient-text">drive results</span>
        </motion.h1>

        {/* Identity line */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          12 years in transport &amp; logistics, now building custom websites
          for businesses that need more than a template.
          Based in Vilnius, Lithuania.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-light text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30"
          >
            Start a project
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="#case-study"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:border-accent/40 hover:bg-surface/50 text-sm font-medium text-muted hover:text-foreground transition-all duration-200"
          >
            See my work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border/60 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-muted/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
