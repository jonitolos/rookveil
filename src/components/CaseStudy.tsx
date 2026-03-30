"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface CaseStudyProps {
  id: string;
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  url: string;
  image: string;
  problem: string;
  techDecisions: string[];
  result: string;
  techStack: string[];
}

export default function CaseStudy({
  id,
  label,
  title,
  titleAccent,
  subtitle,
  url,
  image,
  problem,
  techDecisions,
  result,
  techStack,
}: CaseStudyProps) {
  return (
    <section id={id} className="py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-3">
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title} <span className="gradient-text">{titleAccent}</span>
          </h2>
          <p className="text-muted mt-3 max-w-lg mx-auto text-sm">
            {subtitle}
          </p>
        </motion.div>

        {/* Full-width screenshot */}
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="group block relative rounded-2xl border border-border overflow-hidden mb-10"
        >
          <div className="aspect-[16/8] md:aspect-[2.4/1] relative bg-surface">
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              className="object-cover object-top group-hover:scale-[1.015] transition-transform duration-700 ease-out"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="text-sm text-foreground flex items-center gap-1.5">
              Visit live site <ArrowUpRight size={14} />
            </span>
          </div>
        </motion.a>

        {/* Details grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-3">The problem</h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              {problem}
            </p>

            <h3 className="text-lg font-semibold mb-3">Tech decisions</h3>
            <ul className="space-y-2.5">
              {techDecisions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <CheckCircle2
                    size={14}
                    className="text-accent-light mt-0.5 flex-shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-3">The result</h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              {result}
            </p>

            <div className="rounded-xl border border-border bg-surface/30 p-5">
              <p className="text-xs text-muted uppercase tracking-wider mb-3">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-md bg-background/50 border border-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm text-accent-light hover:text-foreground transition-colors"
            >
              View live site
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
