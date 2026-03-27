"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s build something{" "}
            <span className="gradient-text">remarkable</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-10 leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Drop us a
            line and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl border border-border bg-surface/50 p-8 md:p-10"
        >
          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-muted mb-2 uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-muted mb-2 uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs text-muted mb-2 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent hover:bg-accent-light text-white text-sm font-medium transition-all duration-200"
            >
              Send message
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center gap-4 text-sm text-muted">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-accent-light" />
              <span>info@rookveil.lt</span>
            </div>
            <span className="hidden sm:block text-border">|</span>
            <span>Based in Lithuania, working globally</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
