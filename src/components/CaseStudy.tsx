"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-3">
            Case study
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Arx Auto — <span className="gradient-text">car marketplace</span>
          </h2>
          <p className="text-muted mt-3 max-w-lg mx-auto text-sm">
            A platform I designed, built, and operate. Here&apos;s how and why.
          </p>
        </motion.div>

        {/* Full-width screenshot */}
        <motion.a
          href="https://arx-auto.vercel.app/"
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
              src="/work/arx-auto.svg"
              alt="Arx Auto screenshot"
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
              Lithuania&apos;s car market is dominated by outdated platforms with
              poor UX, slow load times, and zero mobile optimization.
              I wanted to prove a modern stack could do it better —
              faster search, cleaner interface, real-time listings.
            </p>

            <h3 className="text-lg font-semibold mb-3">Tech decisions</h3>
            <ul className="space-y-2.5">
              {[
                "Next.js with App Router for SSR and SEO out of the box",
                "Supabase for real-time database, auth, and storage",
                "Tailwind CSS for rapid, consistent UI development",
                "TypeScript end-to-end for reliability",
                "Deployed on Vercel edge network for sub-200ms TTFB",
              ].map((item) => (
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
              A fully functional car marketplace with advanced filtering,
              dealer dashboards, and mobile-first design. Lighthouse
              performance score consistently above 95.
            </p>

            <div className="rounded-xl border border-border bg-surface/30 p-5">
              <p className="text-xs text-muted uppercase tracking-wider mb-3">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Next.js",
                  "React",
                  "Supabase",
                  "TypeScript",
                  "Tailwind CSS",
                  "Vercel",
                ].map((t) => (
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
              href="https://arx-auto.vercel.app/"
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
