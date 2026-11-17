import React from 'react';
import { motion } from 'framer-motion';
import {
  Figma,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Layers,
} from 'lucide-react';

const servicesData = [
  {
    id: '01',
    title: 'Figma to React / Next.js',
    description:
      'Converting complex Figma designs into pixel-perfect, lightning-fast, and fully responsive frontend code.',
    icon: Figma,
    badge: 'DESIGN TO CODE',
    accent: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
    deliverables: [
      'Sub-pixel accuracy & fluid responsive breakpoints',
      'Reusable, accessible Tailwind CSS component tokens',
      'Semantic HTML5 & Next.js App Router architecture',
    ],
  },
  {
    id: '02',
    title: 'E-Commerce Storefronts',
    description:
      'Building high-performance online stores with custom cart drawers, filters, and smooth UX.',
    icon: ShoppingBag,
    badge: 'HIGH CONVERSION',
    accent: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    deliverables: [
      'Optimistic slide-over cart drawers & instant search',
      'Multi-facet product filtering & dynamic variant states',
      'Sub-second page transitions & checkout flows',
    ],
  },
  {
    id: '03',
    title: 'UI Animation & Polish',
    description:
      'Optimizing web applications for speed, accessibility, and modern Framer Motion micro-interactions.',
    icon: Sparkles,
    badge: '60FPS MOTION',
    accent: 'from-violet-500/20 via-indigo-500/5 to-transparent',
    deliverables: [
      'Choreographed Framer Motion scroll & layout animations',
      'Core Web Vitals (LCP, CLS, INP) performance tuning',
      'WCAG keyboard navigation & tactile hover states',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 overflow-hidden border-t border-zinc-900"
    >
      {/* Ambient Obsidian Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 h-[380px] w-[520px] rounded-full bg-[#6366F1]/10 blur-[140px]" />
        <div className="absolute bottom-12 right-1/4 h-[300px] w-[380px] rounded-full bg-[#10B981]/5 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800 px-3.5 py-1.5 mb-4">
            <Layers className="h-3.5 w-3.5 text-[#6366F1]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#6366F1]">
              WHAT I DO
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            What I Do
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Specialized frontend engineering services tailored for
            high-converting digital experiences.
          </p>
        </motion.div>

        {/* 3-Column Clean Glassmorphic Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7"
        >
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-[#6366F1]/50 p-6 sm:p-8 transition-colors duration-300 overflow-hidden shadow-[0_10px_35px_-15px_rgba(0,0,0,0.65)]"
              >
                {/* Top Ambient Gradient Wash */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Top Specular Highlight Line */}
                <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Icon & Index Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-[#6366F1]/50 transition-colors">
                      <div className="absolute -inset-0.5 rounded-xl bg-[#6366F1]/20 opacity-0 blur group-hover:opacity-100 transition-opacity duration-300" />
                      <IconComponent className="relative h-5 w-5 text-[#6366F1] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-medium text-zinc-400 bg-zinc-950/80 border border-zinc-800 px-2.5 py-1 rounded-md">
                        {service.badge}
                      </span>
                      <span className="font-mono text-xs text-zinc-600 group-hover:text-[#6366F1] transition-colors">
                        /{service.id}
                      </span>
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables List */}
                  <ul className="mt-6 pt-6 border-t border-zinc-800/70 space-y-2.5">
                    {service.deliverables.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom Action Link */}
                <div className="mt-7 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-zinc-300 group-hover:text-[#6366F1] transition-colors"
                  >
                    <span>Discuss a project</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
