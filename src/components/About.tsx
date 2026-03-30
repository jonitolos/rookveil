"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const valueIcons = [Code2, Rocket, Users];

export default function About() {
  const { locale, t } = useI18n();

  return (
    <section id="about" className="py-20 md:py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-3">
              {t.about.label[locale]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              {t.about.title1[locale]}{" "}
              <span className="gradient-text">{t.about.titleAccent[locale]}</span>
            </h2>
            <div className="space-y-3.5 text-muted text-sm leading-relaxed">
              <p>{t.about.bio1[locale]}</p>
              <p>{t.about.bio2[locale]}</p>
              <p>{t.about.bio3[locale]}</p>
            </div>
          </motion.div>

          <div className="space-y-3">
            {t.about.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex gap-4 p-4 rounded-xl border border-border bg-surface/30 hover:bg-surface-light hover:border-accent/20 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon size={16} className="text-accent-light" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">{value.title[locale]}</h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {value.description[locale]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
