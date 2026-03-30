"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
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

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border py-10 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 text-sm text-muted">
            <Image
              src="/logo.png"
              alt="Rookveil"
              width={24}
              height={24}
              className="rounded-sm opacity-60"
            />
            &copy; {new Date().getFullYear()} Rookveil. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a
              href="#services"
              className="hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              className="hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4 text-muted">
            <a
              href="mailto:hello@rookveil.lt"
              className="hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="tel:+37067308538"
              className="hover:text-foreground transition-colors"
              aria-label="Phone"
            >
              <Phone size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/jonas-losis/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border text-center text-xs text-muted/60">
          Vilnius, Lithuania
        </div>
      </div>
    </motion.footer>
  );
}
