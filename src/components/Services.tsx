"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Search,
  Zap,
  Palette,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Built from scratch",
    description:
      "No WordPress, no Wix, no templates. Every line of code is written specifically for your business using Next.js and React.",
  },
  {
    icon: Palette,
    title: "Designed to convert",
    description:
      "Clean, modern design that guides visitors toward action. Every element has a purpose — nothing is decoration.",
  },
  {
    icon: Smartphone,
    title: "Responsive on every device",
    description:
      "Mobile-first development ensures your site looks and works flawlessly on phones, tablets, and desktops.",
  },
  {
    icon: Zap,
    title: "Blazing fast",
    description:
      "Sub-second load times with server-side rendering, optimized images, and edge deployment. Speed is not optional.",
  },
  {
    icon: Search,
    title: "SEO-ready from day one",
    description:
      "Semantic HTML, structured data, meta tags, and Core Web Vitals tuned so Google finds and ranks your site.",
  },
  {
    icon: Shield,
    title: "Secure & maintained",
    description:
      "HTTPS, secure hosting, and ongoing updates included. Your site stays protected and up-to-date after launch.",
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
            What you get
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Every website we build{" "}
            <span className="gradient-text">includes</span>
          </h2>
          <p className="text-muted mt-3 max-w-md mx-auto text-sm">
            One service, done right. A fully custom website built with modern
            technology — no shortcuts, no compromises.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-5 rounded-xl border border-border bg-surface/40 hover:bg-surface-light hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <feature.icon size={18} className="text-accent-light" />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{feature.title}</h3>
              <p className="text-xs text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
