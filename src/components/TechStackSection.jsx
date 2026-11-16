import React from 'react';
import { motion } from 'framer-motion';
import {
  FileCode2,
  Palette,
  Braces,
  ShieldCheck,
  Atom,
  Layers,
  Wind,
  Workflow,
  GitBranch,
  Triangle,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

const techStackItems = [
  {
    name: 'HTML5',
    category: 'Semantic Markup & A11y',
    level: 'Expert',
    badge: 'W3C / ARIA',
    icon: FileCode2,
    accentColor: 'text-orange-400',
    glowColor: 'group-hover:border-orange-500/40',
    dotColor: 'bg-orange-400',
  },
  {
    name: 'CSS3',
    category: 'Modern Layouts & Keyframes',
    level: 'Expert',
    badge: 'Grid / Flex',
    icon: Palette,
    accentColor: 'text-sky-400',
    glowColor: 'group-hover:border-sky-500/40',
    dotColor: 'bg-sky-400',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Async Runtime & DOM APIs',
    level: 'Core',
    badge: 'ES2024+',
    icon: Braces,
    accentColor: 'text-amber-300',
    glowColor: 'group-hover:border-amber-400/40',
    dotColor: 'bg-amber-300',
  },
  {
    name: 'TypeScript',
    category: 'Type-Safe Architecture',
    level: 'Strict',
    badge: 'v5.x Strict',
    icon: ShieldCheck,
    accentColor: 'text-blue-400',
    glowColor: 'group-hover:border-blue-500/40',
    dotColor: 'bg-blue-400',
  },
  {
    name: 'React.js',
    category: 'Component Driven UI',
    level: 'Core',
    badge: 'React 18+',
    icon: Atom,
    accentColor: 'text-cyan-400',
    glowColor: 'group-hover:border-cyan-400/40',
    dotColor: 'bg-cyan-400',
  },
  {
    name: 'Next.js',
    category: 'SSR, RSC & App Router',
    level: 'Production',
    badge: 'App Router',
    icon: Layers,
    accentColor: 'text-white',
    glowColor: 'group-hover:border-zinc-400/50',
    dotColor: 'bg-white',
  },
  {
    name: 'Tailwind CSS',
    category: 'Utility-First Design Systems',
    level: 'Expert',
    badge: 'JIT Engine',
    icon: Wind,
    accentColor: 'text-teal-400',
    glowColor: 'group-hover:border-teal-400/40',
    dotColor: 'bg-teal-400',
  },
  {
    name: 'Redux Toolkit',
    category: 'Predictable State & RTK Query',
    level: 'Advanced',
    badge: 'RTK / Slices',
    icon: Workflow,
    accentColor: 'text-purple-400',
    glowColor: 'group-hover:border-purple-500/40',
    dotColor: 'bg-purple-400',
  },
  {
    name: 'Git & GitHub',
    category: 'Version Control & CI Workflows',
    level: 'Daily Driver',
    badge: 'PR / Actions',
    icon: GitBranch,
    accentColor: 'text-rose-400',
    glowColor: 'group-hover:border-rose-500/40',
    dotColor: 'bg-rose-400',
  },
  {
    name: 'Vercel Deployment',
    category: 'Edge Network & CI/CD Previews',
    level: 'Production',
    badge: 'Edge / CDN',
    icon: Triangle,
    accentColor: 'text-[#10B981]',
    glowColor: 'group-hover:border-[#10B981]/40',
    dotColor: 'bg-[#10B981]',
  },
];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative py-24 sm:py-32 overflow-hidden border-t border-zinc-900"
    >
      {/* Subtle Ambient Background Spotlight */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-obsidian-grid [mask-image:radial-gradient(ellipse_70%_55%_at_50%_50%,#000_40%,transparent_100%)] opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[720px] rounded-full bg-[#6366F1]/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800 px-3.5 py-1.5 mb-4">
            <Cpu className="h-3.5 w-3.5 text-[#6366F1]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#6366F1]">
              TECHNICAL ARSENAL
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Modern Frontend Ecosystem
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            My production toolkit for engineering resilient, type-safe, and
            blazingly fast web applications from first commit to global edge
            deployment.
          </p>
        </motion.div>

        {/* Interactive 10-Item Tech Stack Grid */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {techStackItems.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 340, damping: 24 }}
                className={`group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 ${tech.glowColor} p-5 transition-colors duration-300 overflow-hidden shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]`}
              >
                {/* Hover Radial Corner Spotlight */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#6366F1]/15 opacity-0 blur-2xl group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Row: Icon Box + Monospace Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                      <IconComponent
                        className={`h-5 w-5 ${tech.accentColor} transition-transform duration-300 group-hover:scale-110`}
                      />
                    </div>

                    <span className="font-mono text-[11px] font-medium text-zinc-400 bg-zinc-950/90 border border-zinc-800/90 px-2 py-0.5 rounded-md">
                      {tech.badge}
                    </span>
                  </div>

                  {/* Tech Title & Subtitle */}
                  <h3 className="font-heading text-base font-bold text-white tracking-tight group-hover:text-indigo-100 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    {tech.category}
                  </p>
                </div>

                {/* Bottom Status Bar */}
                <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${tech.dotColor}`}
                    />
                    <span className="font-mono text-[11px] text-zinc-400">
                      {tech.level}
                    </span>
                  </div>
                  <CheckCircle2 className="h-3.5 w-3.5 text-zinc-600 group-hover:text-[#10B981] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
