import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2"
    >
      <nav
        aria-label="Primary Navigation"
        className={`mx-auto max-w-6xl transition-all duration-300 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 px-4 sm:px-6 py-3.5 ${
          scrolled
            ? 'shadow-[0_8px_32px_-4px_rgba(0,0,0,0.6),0_0_1px_1px_rgba(99,102,241,0.12)] bg-zinc-900/75 border-zinc-800/90'
            : 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)]'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo: JUYEL.DEV */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-[#6366F1]/60 transition-colors duration-300 shadow-inner">
              <div className="absolute -inset-0.5 rounded-xl bg-[#6366F1]/20 opacity-0 blur group-hover:opacity-100 transition-opacity duration-300" />
              <Terminal className="relative h-4 w-4 text-[#6366F1] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex items-center tracking-tight">
              <span className="font-heading text-base sm:text-lg font-extrabold tracking-tight text-white">
                JUYEL
              </span>
              <span className="font-mono text-sm sm:text-base font-semibold text-[#6366F1]">
                .DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div
            className="hidden md:flex items-center gap-1 rounded-xl bg-zinc-950/60 border border-zinc-800/70 p-1"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors duration-200 rounded-lg"
              >
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navbar-pill"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                    className="absolute inset-0 rounded-lg bg-zinc-800/70 border border-zinc-700/50 -z-10"
                  />
                )}
                {link.name}
              </a>
            ))}
          </div>

          {/* Right CTA: Glowing "Hire Me" Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative group inline-flex items-center gap-2 rounded-xl bg-[#6366F1] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-[0_0_24px_-2px_rgba(99,102,241,0.55)] hover:shadow-[0_0_32px_2px_rgba(99,102,241,0.75)] hover:bg-indigo-500 transition-all duration-300 border border-indigo-400/30 overflow-hidden"
            >
              {/* Subtle top specular highlight */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <Sparkles className="h-3.5 w-3.5 text-indigo-100 transition-transform duration-300 group-hover:rotate-12" />
              <span>Hire Me</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
