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
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">go live</span>
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            We handle the full spectrum of web development so you can focus on
            growing your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-border bg-surface/50 hover:bg-surface-light hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon size={20} className="text-accent-light" />
              </div>
              <h3 className="text-base font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
