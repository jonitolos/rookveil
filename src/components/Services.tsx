"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Palette,
  Search,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites built with Next.js and React. Fast, SEO-friendly, and built to scale.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Online stores that convert. Seamless checkout flows and inventory management.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, modern interfaces designed around your users. Every pixel is intentional.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Lighthouse-optimized sites that rank. Core Web Vitals tuned for maximum visibility.",
  },
  {
    icon: Zap,
    title: "Web Applications",
    description:
      "Full-stack SaaS platforms, dashboards, and tools with real-time data and auth.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing updates, security patches, and feature additions to keep you running smooth.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">go live</span>
          </h2>
          <p className="text-muted mt-3 max-w-md mx-auto text-sm">
            We handle the full spectrum of web development so you can focus on
            growing your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-5 rounded-xl border border-border bg-surface/40 hover:bg-surface-light hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <service.icon size={18} className="text-accent-light" />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{service.title}</h3>
              <p className="text-xs text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
