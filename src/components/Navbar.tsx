"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useI18n, type Locale } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const links = [
    { label: t.nav.services[locale], href: "#services" },
    { label: t.nav.work[locale], href: "#case-study" },
    { label: t.nav.about[locale], href: "#about" },
    { label: t.nav.contact[locale], href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleLocale() {
    setLocale(locale === "pl" ? "en" : "pl");
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Rookveil"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <span className="text-lg font-semibold tracking-tight">
            rookveil<span className="text-accent-light">.lt</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            className="text-xs font-medium px-2.5 py-1 rounded-md border border-border hover:border-accent/40 text-muted hover:text-foreground transition-all duration-200 uppercase tracking-wider"
          >
            {locale === "pl" ? "EN" : "PL"}
          </button>

          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-lg bg-accent hover:bg-accent-light text-white transition-colors duration-200"
          >
            {t.nav.getInTouch[locale]}
          </a>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLocale}
            className="text-xs font-medium px-2 py-1 rounded-md border border-border text-muted uppercase tracking-wider"
          >
            {locale === "pl" ? "EN" : "PL"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="text-sm px-4 py-2 rounded-lg bg-accent hover:bg-accent-light text-white transition-colors text-center"
              >
                {t.nav.getInTouch[locale]}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
