import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Github,
  Linkedin,
  Youtube,
  Briefcase,
  ArrowUp,
  ArrowUpRight,
} from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/juyelapon',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: Linkedin,
  },
  {
    name: 'Fiverr',
    href: 'https://www.fiverr.com/',
    icon: Briefcase,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: Youtube,
  },
];

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-zinc-900 bg-[#09090B] pt-14 pb-12 overflow-hidden">
      {/* Subtle Top Indigo Glow Line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-zinc-900">
          {/* Brand Logo & Status */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <a href="#" className="group inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-[#6366F1]/60 transition-colors">
                <Terminal className="h-4 w-4 text-[#6366F1]" />
              </div>
              <div className="flex items-center tracking-tight">
                <span className="font-heading text-lg font-extrabold text-white">
                  JUYEL
                </span>
                <span className="font-mono text-base font-semibold text-[#6366F1]">
                  .DEV
                </span>
              </div>
            </a>

            <span className="hidden sm:inline text-zinc-800">|</span>

            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 border border-zinc-800/80 px-3 py-1 font-mono text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Social Links (GitHub, LinkedIn, Fiverr, YouTube) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-[#6366F1]/50 px-3.5 py-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  <IconComponent className="h-3.5 w-3.5 text-zinc-400 group-hover:text-[#6366F1] transition-colors" />
                  <span>{social.name}</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-500 group-hover:text-zinc-300" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Bottom Copyright & Smooth Scroll-to-Top Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="font-sans text-center sm:text-left">
            © 2026 <span className="text-zinc-300 font-medium">Juyel Apon</span>.
            All rights reserved. Crafted with React, Tailwind CSS &amp; Framer
            Motion.
          </p>

          <motion.button
            type="button"
            onClick={handleScrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Scroll to top"
            className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-[#6366F1]/50 px-4 py-2 font-mono text-xs text-zinc-300 hover:text-white transition-all"
          >
            <span>Back to top</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-zinc-950 border border-zinc-800 group-hover:border-[#6366F1]/40">
              <ArrowUp className="h-3 w-3 text-[#6366F1] transition-transform duration-300 group-hover:-translate-y-0.5" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
