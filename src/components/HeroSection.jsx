import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  CheckCircle2,
  Cpu,
  Code2,
  Terminal,
  Zap,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const techStackPills = [
  { name: 'React.js', tag: 'v18+' },
  { name: 'Next.js', tag: 'App Router' },
  { name: 'Tailwind CSS', tag: 'Design Systems' },
  { name: 'TypeScript', tag: 'Strict' },
];

const trustMetrics = [
  {
    icon: CheckCircle2,
    metric: '100% Pixel Accuracy',
    detail: 'Figma-to-production parity with sub-pixel precision & fluid motion',
    badge: 'UI/UX FIDELITY',
  },
  {
    icon: Cpu,
    metric: 'Modern Tech Stack',
    detail: 'React.js, Next.js, TypeScript, Tailwind CSS & Framer Motion',
    badge: 'NEXT-GEN WEB',
  },
  {
    icon: Code2,
    metric: 'Clean Code Architecture',
    detail: 'Modular, scalable, strongly-typed & Core Web Vitals optimized',
    badge: '99+ LIGHTHOUSE',
  },
];

export default function HeroSection() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        const nameInput = document.getElementById('contact-name');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (nameInput) {
          setTimeout(() => nameInput.focus({ preventScroll: true }), 450);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24">
      {/* Ambient Obsidian Background Lighting & Linear-style Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid mesh */}
        <div className="absolute inset-0 bg-obsidian-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_25%,#000_55%,transparent_100%)]" />

        {/* Primary electric indigo top spotlight */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[780px] rounded-full bg-[#6366F1]/15 blur-[130px]" />

        {/* Secondary subtle emerald ambient accent */}
        <div className="absolute top-32 left-1/4 h-[260px] w-[260px] rounded-full bg-[#10B981]/5 blur-[110px]" />
      </div>

      {/* Main Hero Content Container */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* 1. Live Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full bg-zinc-900/50 backdrop-blur-md border border-zinc-800 px-4 py-1.5 shadow-[0_0_25px_-5px_rgba(16,185,129,0.2)] hover:border-zinc-700 transition-colors duration-300">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </span>
              <span className="font-mono text-xs sm:text-sm font-medium tracking-tight text-zinc-200">
                <span className="text-[#10B981] mr-1">●</span>
                Available for Frontend &amp; React Projects
              </span>
            </div>
          </motion.div>

          {/* 2. Massive Bold Headline */}
          <motion.h1
            variants={fadeUpVariants}
            className="font-heading max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.08]"
          >
            Hi, I&apos;m{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-[#6366F1] bg-clip-text text-transparent">
                Juyel Apon
              </span>
              <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6366F1]/80 via-[#6366F1]/30 to-transparent rounded-full" />
            </span>{' '}
            — Frontend Developer crafting{' '}
            <span className="bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              fast, pixel-perfect, &amp; immersive web apps.
            </span>
          </motion.h1>

          {/* 3. Subtitle Highlighting Core Expertise */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-6 sm:mt-7 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed font-normal"
          >
            Engineering high-velocity interfaces and resilient frontend systems
            with{' '}
            <span className="text-zinc-100 font-medium">React.js</span>,{' '}
            <span className="text-zinc-100 font-medium">Next.js</span>,{' '}
            <span className="text-zinc-100 font-medium">Tailwind CSS</span>, and{' '}
            <span className="text-zinc-100 font-medium">TypeScript</span> —
            blending obsessive design engineering with fluid 60fps motion.
          </motion.p>

          {/* Code-style Tech Pill Strip */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
          >
            {techStackPills.map((item) => (
              <div
                key={item.name}
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900/50 backdrop-blur-md border border-zinc-800/90 px-3 py-1 text-xs font-mono text-zinc-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                <span className="font-medium text-zinc-100">{item.name}</span>
                <span className="text-zinc-500">·</span>
                <span className="text-[11px] text-indigo-400/90">{item.tag}</span>
              </div>
            ))}
          </motion.div>

          {/* 4. Two Interactive CTA Buttons with Hover Micro-Interactions */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA: Explore Projects ↗ */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#6366F1] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_0_30px_-4px_rgba(99,102,241,0.65)] hover:shadow-[0_0_40px_2px_rgba(99,102,241,0.85)] hover:bg-indigo-500 transition-all duration-300 border border-indigo-400/40 overflow-hidden"
            >
              {/* Top specular highlight line */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <span>Explore Projects</span>
              <span className="font-mono text-base leading-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </motion.a>

            {/* Secondary CTA: Get in Touch */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-zinc-600/80 hover:bg-zinc-800/60 px-7 py-3.5 text-sm sm:text-base font-semibold text-zinc-100 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]"
            >
              <Mail className="h-4 w-4 text-zinc-400 group-hover:text-[#6366F1] transition-colors duration-300" />
              <span>Get in Touch</span>
              <span className="ml-1 inline-flex items-center rounded-md bg-zinc-800/80 border border-zinc-700/60 px-1.5 py-0.5 font-mono text-[11px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                ⌘K
              </span>
            </motion.a>
          </motion.div>

          {/* Interactive Code Telemetry Bar (Obsidian Minimalist Accent) */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-10 sm:mt-12 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/70 px-4 py-2 font-mono text-xs text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-[#6366F1]" />
              <span className="text-zinc-500">stack:</span>
              <span className="text-zinc-200">react · nextjs · ts · tailwind</span>
            </div>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <div className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-[#10B981]" />
              <span className="text-zinc-500">motion:</span>
              <span className="text-[#10B981]">60fps spring physics</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 5. Minimalist Trust Metrics Strip at the Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 pt-8 border-t border-zinc-800/70"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {trustMetrics.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.metric}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className="group relative rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-[#6366F1]/50 p-5 sm:p-6 transition-colors duration-300 overflow-hidden"
                >
                  {/* Subtle hover corner glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#6366F1]/10 opacity-0 blur-2xl group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-[#6366F1]/40 transition-colors">
                      <IconComponent className="h-5 w-5 text-[#6366F1]" />
                    </div>
                    <span className="font-mono text-[11px] font-medium tracking-wider uppercase text-zinc-400 bg-zinc-950/80 border border-zinc-800 px-2.5 py-1 rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  <h2 className="font-heading text-lg font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                    {item.metric}
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
