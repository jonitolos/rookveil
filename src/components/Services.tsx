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
import { useI18n } from "@/lib/i18n";

const icons = [Code2, Palette, Smartphone, Zap, Search, Shield];

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
  const { locale, t } = useI18n();

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
            {t.services.label[locale]}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t.services.title1[locale]}{" "}
            <span className="gradient-text">{t.services.titleAccent[locale]}</span>
          </h2>
          <p className="text-muted mt-3 max-w-md mx-auto text-sm">
            {t.services.subtitle[locale]}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-5 rounded-xl border border-border bg-surface/40 hover:bg-surface-light hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                  <Icon size={18} className="text-accent-light" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">
                  {item.title[locale]}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description[locale]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
