"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Check } from "lucide-react";

function LinkedinIcon({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:jonas@rookveil.lt?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 md:py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent-light mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Have a project?{" "}
            <span className="gradient-text">Let&apos;s talk.</span>
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8 text-sm leading-relaxed">
            Tell me what you need. I&apos;ll respond within 24 hours with an honest
            assessment of whether I&apos;m the right fit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] text-muted mb-1.5 uppercase tracking-widest"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] text-muted mb-1.5 uppercase tracking-widest"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[10px] text-muted mb-1.5 uppercase tracking-widest"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                placeholder="Tell me about your project — what do you need, by when, and what's your budget range?"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-lg bg-accent hover:bg-accent-light disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-accent/20"
            >
              {sent ? (
                <>
                  <Check size={16} />
                  Opening email client...
                </>
              ) : (
                <>
                  Send message
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-border flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs text-muted">
            <a
              href="mailto:jonas@rookveil.lt"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail size={12} className="text-accent-light" />
              jonas@rookveil.lt
            </a>
            <span className="hidden sm:block text-border">|</span>
            <a
              href="tel:+37067308538"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Phone size={12} className="text-accent-light" />
              +370 673 08538
            </a>
            <span className="hidden sm:block text-border">|</span>
            <a
              href="https://www.linkedin.com/in/jonas-losis/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <LinkedinIcon size={12} className="text-accent-light" />
              LinkedIn
            </a>
            <span className="hidden sm:block text-border">|</span>
            <span>Vilnius, Lithuania</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
