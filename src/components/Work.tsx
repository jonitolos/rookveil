"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Sintorio",
    url: "https://www.sintorio.com/",
    category: "AI Video Processing",
    description:
      "An AI-powered video processing platform I built and operate. Python backend handles the heavy lifting, React frontend keeps the experience smooth.",
    tech: ["Next.js", "Python", "AI/ML", "Tailwind CSS"],
    image: "/work/sintorio.svg",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-3">
            Also built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Other <span className="gradient-text">projects</span>
          </h2>
          <p className="text-muted mt-3 max-w-md mx-auto text-sm">
            Platforms I built and operate — not client work, but proof of what I can deliver.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block relative rounded-2xl border border-border bg-surface/40 hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              {/* Screenshot */}
              <div className="relative overflow-hidden">
                <div className="aspect-[16/9] md:aspect-[2.8/1] relative">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111111] to-transparent" />
                </div>
              </div>

              {/* Info bar */}
              <div className="relative p-5 md:p-6 -mt-8 flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
                <div className="flex-1">
                  <span className="text-[10px] text-accent-light font-medium uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mt-1 mb-1.5 group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-background/50 border border-border text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 mb-1">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent-light group-hover:bg-accent/10 transition-all duration-300">
                    <ArrowUpRight
                      size={18}
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
