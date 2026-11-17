import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  GraduationCap,
  Compass,
  Award,
  Terminal,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const highlightCards = [
  {
    icon: GraduationCap,
    tag: 'EDUCATION & TRAINING',
    title: 'Creative IT Institute',
    subtitle: 'Professional Frontend Web Development with React & Next.js',
    detail:
      'Intensive hands-on engineering training in modern component architecture, responsive design systems, state management, and production deployment.',
    accent: 'text-[#6366F1]',
  },
  {
    icon: MapPin,
    tag: 'LOCATION & AVAILABILITY',
    title: 'Dhaka, Bangladesh (UTC+6)',
    subtitle: 'Available for Remote Roles & Global Freelance Contracts',
    detail:
      'Async-first communicator experienced with Git workflows, Figma handoffs, and agile sprint delivery across international time zones.',
    accent: 'text-[#10B981]',
  },
];

const milestones = [
  {
    period: '2025 — PRESENT',
    role: 'Frontend Developer (React & Next.js Focus)',
    org: 'Independent & Portfolio Engineering',
    summary:
      'Architecting full-featured e-commerce storefronts (TechNova, VÉLOIR, Aura), AI landing pages, and SaaS dashboards (NexusHR, Pulse) using React, Next.js, TypeScript, and Tailwind CSS.',
  },
  {
    period: 'TRAINING MILESTONE',
    role: 'Frontend Development Specialization',
    org: 'Creative IT Institute · Dhaka, Bangladesh',
    summary:
      'Mastered modern ES6+ JavaScript, React.js hooks & patterns, Redux Toolkit, REST/Firebase integrations, and pixel-accurate Figma-to-code workflows.',
  },
];

const philosophyPillars = [
  {
    title: 'Pixel-Level Craftsmanship',
    description:
      'Every spacing token, border gradient, and typography scale is deliberately tuned to match the original design intent.',
  },
  {
    title: 'Performance as a Feature',
    description:
      'Zero unnecessary re-renders, code-split routes, optimized assets, and smooth 60fps Framer Motion interactions.',
  },
  {
    title: 'Clean, Maintainable Architecture',
    description:
      'Composable React components, strict TypeScript contracts, and self-documenting folder structures built to scale.',
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden border-t border-zinc-900"
    >
      {/* Subtle Ambient Background Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 h-[400px] w-[480px] rounded-full bg-[#6366F1]/10 blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 h-[320px] w-[420px] rounded-full bg-[#10B981]/5 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800 px-3.5 py-1.5 mb-4">
            <Terminal className="h-3.5 w-3.5 text-[#6366F1]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#6366F1]">
              ABOUT &amp; BACKGROUND
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Engineering Interfaces Where Design Meets Speed.
          </h2>
        </motion.div>

        {/* Main Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column (7 cols): Developer Bio & Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Primary Bio Card */}
            <div className="relative rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-6 sm:p-8 overflow-hidden">
              <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#6366F1]/10 blur-3xl" />

              {/* Developer Identity Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-800/80">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366F1] to-indigo-800 text-white font-heading text-xl font-extrabold shadow-[0_0_25px_-4px_rgba(99,102,241,0.6)] border border-indigo-400/30">
                    JA
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#09090B]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      Juyel Apon
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-zinc-400">
                      Frontend Developer · React &amp; Next.js Specialist
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl bg-zinc-950/90 border border-zinc-800 px-3 py-1.5 font-mono text-xs text-zinc-300">
                  <MapPin className="h-3.5 w-3.5 text-[#10B981]" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <p>
                  I&apos;m <strong className="text-white font-semibold">Juyel Apon</strong>, a
                  Frontend Developer based in{' '}
                  <span className="text-white font-medium">Dhaka, Bangladesh</span>, dedicated to
                  building fast, accessible, and visually refined web applications. Currently
                  honing my craft at{' '}
                  <span className="text-indigo-300 font-medium">
                    Creative IT Institute
                  </span>
                  , I specialize in modern{' '}
                  <span className="text-white font-medium">React.js</span> and{' '}
                  <span className="text-white font-medium">Next.js</span> architectures.
                </p>
                <p className="text-zinc-400">
                  My workflow bridges the gap between UI/UX design and production frontend
                  engineering—translating intricate Figma systems into type-safe, responsive, and
                  motion-rich interfaces powered by Tailwind CSS, TypeScript, and Framer Motion.
                </p>
              </div>

              {/* Quick Core Competency Tags */}
              <div className="mt-6 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
                {[
                  'React.js Architecture',
                  'Next.js App Router',
                  'TypeScript',
                  'Tailwind CSS Systems',
                  'Framer Motion UI',
                  'Redux Toolkit',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-950/90 border border-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Milestones Timeline Card */}
            <div className="rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <Award className="h-5 w-5 text-[#6366F1]" />
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    Key Milestones &amp; Journey
                  </h3>
                </div>
                <span className="font-mono text-xs text-zinc-500">TIMELINE</span>
              </div>

              <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-zinc-800">
                {milestones.map((item, index) => (
                  <div key={item.role} className="relative pl-7">
                    <span
                      className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#09090B] ${
                        index === 0 ? 'bg-[#10B981]' : 'bg-[#6366F1]'
                      }`}
                    />
                    <span className="font-mono text-xs font-semibold text-[#6366F1]">
                      {item.period}
                    </span>
                    <h4 className="mt-1 font-heading text-base sm:text-lg font-bold text-white">
                      {item.role}
                    </h4>
                    <p className="font-mono text-xs text-zinc-400 mt-0.5">
                      {item.org}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Education/Location Highlight Cards & Development Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Highlight Cards (Creative IT Institute & Dhaka Location) */}
            {highlightCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className="group rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-[#6366F1]/50 p-6 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700">
                      <IconComponent className={`h-5 w-5 ${card.accent}`} />
                    </div>
                    <span className="font-mono text-[11px] font-medium text-zinc-400 bg-zinc-950/90 border border-zinc-800 px-2.5 py-1 rounded-md">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-sm font-medium text-indigo-300">
                    {card.subtitle}
                  </p>
                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {card.detail}
                  </p>
                </motion.div>
              );
            })}

            {/* Development Philosophy Card */}
            <div className="flex-1 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Compass className="h-5 w-5 text-[#6366F1]" />
                    <h3 className="font-heading text-lg font-bold text-white">
                      Development Philosophy
                    </h3>
                  </div>
                  <Sparkles className="h-4 w-4 text-[#10B981]" />
                </div>

                <div className="space-y-4">
                  {philosophyPillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="rounded-xl bg-zinc-950/70 border border-zinc-800/80 p-3.5"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                        <h4 className="font-heading text-sm font-bold text-zinc-100">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="mt-1.5 pl-6 text-xs text-zinc-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/70 flex items-center justify-between font-mono text-xs text-zinc-400">
                <span>status: ready_to_ship</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[#6366F1] hover:text-indigo-400 font-semibold transition-colors"
                >
                  <span>Let&apos;s Collaborate</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
