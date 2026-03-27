"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border py-10 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Rookveil. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href="#services"
            className="hover:text-foreground transition-colors"
          >
            Services
          </a>
          <a href="#work" className="hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
