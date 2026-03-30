"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const technologies = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Supabase" },
  { name: "Vercel" },
  { name: "Node.js" },
  { name: "PostgreSQL" },
];

export default function TechStack() {
  const { locale, t } = useI18n();

  return (
    <section className="py-14 px-6 border-t border-b border-border">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-6"
        >
          {t.techStack.label[locale]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-4 py-2 rounded-lg border border-border bg-surface/30 text-sm text-muted hover:text-foreground hover:border-accent/30 transition-all duration-200 cursor-default"
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
