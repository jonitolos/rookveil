"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

interface CaseStudyData {
  label: { pl: string; en: string };
  title: { pl: string; en: string };
  titleAccent: { pl: string; en: string };
  subtitle: { pl: string; en: string };
  problem: { pl: string; en: string };
  techDecisions: { pl: readonly string[]; en: readonly string[] };
  result: { pl: string; en: string };
  problemTitle: { pl: string; en: string };
  techTitle: { pl: string; en: string };
  resultTitle: { pl: string; en: string };
  techStackLabel: { pl: string; en: string };
  viewSite: { pl: string; en: string };
  visitSite: { pl: string; en: string };
}

interface CaseStudyProps {
  id: string;
  url: string;
  image: string;
  techStack: string[];
  data: CaseStudyData;
}

export default function CaseStudy({
  id,
  url,
  image,
  techStack,
  data,
}: CaseStudyProps) {
  const { locale } = useI18n();

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
            {data.label[locale]}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {data.title[locale]}{" "}
            <span className="gradient-text">{data.titleAccent[locale]}</span>
          </h2>
          <p className="text-muted mt-3 max-w-lg mx-auto text-sm">
            {data.subtitle[locale]}
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
              alt={`${data.title[locale]} screenshot`}
              fill
              className="object-cover object-top group-hover:scale-[1.015] transition-transform duration-700 ease-out"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="text-sm text-foreground flex items-center gap-1.5">
              {data.visitSite[locale]} <ArrowUpRight size={14} />
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
            <h3 className="text-lg font-semibold mb-3">{data.problemTitle[locale]}</h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              {data.problem[locale]}
            </p>

            <h3 className="text-lg font-semibold mb-3">{data.techTitle[locale]}</h3>
            <ul className="space-y-2.5">
              {data.techDecisions[locale].map((item) => (
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
            <h3 className="text-lg font-semibold mb-3">{data.resultTitle[locale]}</h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              {data.result[locale]}
            </p>

            <div className="rounded-xl border border-border bg-surface/30 p-5">
              <p className="text-xs text-muted uppercase tracking-wider mb-3">
                {data.techStackLabel[locale]}
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
              {data.viewSite[locale]}
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
