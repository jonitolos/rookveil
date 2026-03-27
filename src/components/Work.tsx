"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Arx Auto",
    url: "https://arx-auto.vercel.app/",
    category: "Automotive Marketplace",
    description:
      "A car marketplace platform with vehicle listings, advanced search and filtering, and dealer tools. Built with server-side rendering, real-time data via Supabase, and optimized for SEO.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    gradient: "from-violet-500/20 to-blue-500/20",
  },
  {
    title: "Sintorio",
    url: "https://www.sintorio.com/",
    category: "AI Video Processing",
    description:
      "An AI-powered video processing platform that lets users clip, edit, and transform video content. Python backend handles the heavy lifting while a clean React frontend keeps the experience smooth.",
    tech: ["Next.js", "Python", "AI/ML", "Tailwind CSS"],
    gradient: "from-cyan-500/20 to-emerald-500/20",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            Real projects, real results. Here&apos;s a look at what we&apos;ve built.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group block relative rounded-2xl border border-border bg-surface/50 hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-accent-light font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-background/50 border border-border text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent-light group-hover:bg-accent/10 transition-all duration-300">
                    <ArrowUpRight
                      size={20}
                      className="text-muted group-hover:text-accent-light transition-colors"
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
