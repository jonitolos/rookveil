"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const stepIcons = [MessageSquare, PenTool, Code, Rocket];

export default function Process() {
  const { locale, t } = useI18n();

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
            {t.process.label[locale]}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t.process.title1[locale]}{" "}
            <span className="gradient-text">{t.process.titleAccent[locale]}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
            {t.process.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-0 px-4"
                >
                  <div className="relative z-10 w-12 h-12 rounded-full border-2 border-border bg-background flex items-center justify-center flex-shrink-0 md:mb-5">
                    <Icon size={18} className="text-accent-light" />
                  </div>

                  <div>
                    <span className="text-[10px] text-accent-light/60 uppercase tracking-widest">
                      {locale === "pl" ? "Krok" : "Step"} {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-semibold mt-0.5 mb-1">
                      {step.title[locale]}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed max-w-[200px] md:mx-auto">
                      {step.description[locale]}
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
