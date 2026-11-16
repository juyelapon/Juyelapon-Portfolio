import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Sparkles, Clock } from 'lucide-react';

const categories = ['All', 'E-Commerce', 'SaaS', 'Web Apps'];

const projectsData = [
  {
    id: 'nexus-analytics',
    title: 'Nexus Analytics',
    category: 'SaaS',
    year: '2026',
    status: 'Production',
    isComingSoon: false,
    description:
      'Real-time analytics & workforce intelligence platform with interactive telemetry charts, command palette (⌘K), and automated workflow pipelines.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    liveUrl: 'https://nexus-analytics-indol.vercel.app/',
    githubUrl: 'https://github.com/juyelapon/nexus-analytics',
    accent: 'from-violet-500/20 via-indigo-500/10 to-transparent',
  },
  {
    id: 'fasco',
    title: 'FASCO - Modern Storefront',
    category: 'E-Commerce',
    year: '2026',
    status: 'Production',
    isComingSoon: false,
    description:
      'High-conversion multi-brand retail architecture with dynamic variant filtering, flash-sale countdown telemetry, and sub-second route prefetching.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Firebase'],
    liveUrl: 'https://fasco-e-commerceshop.vercel.app/',
    githubUrl: 'https://github.com/juyelapon/FASCO',
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'bloody-shop-hub',
    title: 'Bloody Shop Hub',
    category: 'Web Apps',
    year: '2026',
    status: 'Live App',
    isComingSoon: false,
    description:
      'Next-gen digital commerce & creator hub engineered with real-time inventory synchronization, role-based access, and dark obsidian glass UI.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Firebase'],
    liveUrl: 'https://bloodyshopcom.vercel.app/',
    githubUrl: 'https://github.com/juyelapon/bloodyshop.com',
    accent: 'from-indigo-500/25 via-blue-500/10 to-transparent',
  },
  {
    id: 'veloir',
    title: 'VÉLOIR - Luxury Streetwear E-Commerce',
    category: 'E-Commerce',
    year: '2026',
    status: 'In Progress',
    isComingSoon: true,
    description:
      'Editorial high-fashion storefront featuring lookbook storytelling, instant predictive search, optimistic cart drawer, and fluid page transitions.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Firebase'],
    liveUrl: null,
    githubUrl: null,
    accent: 'from-amber-500/20 via-indigo-500/10 to-transparent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 overflow-hidden border-t border-zinc-900"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 h-[420px] w-[420px] rounded-full bg-[#6366F1]/10 blur-[140px]" />
        <div className="absolute bottom-10 left-0 h-[360px] w-[360px] rounded-full bg-[#10B981]/5 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Category Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800 px-3.5 py-1.5 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-[#6366F1]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#6366F1]">
                FEATURED WORKS
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Featured Works
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-zinc-400 leading-relaxed">
              Production-grade web applications built with modern frontend
              ecosystems.
            </p>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-1.5 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-1.5 self-start md:self-auto"
            role="tablist"
            aria-label="Project category filter"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`relative rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeProjectCategory"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-xl bg-[#6366F1] shadow-[0_0_20px_-2px_rgba(99,102,241,0.6)] -z-10"
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* 2-Column Projects Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                variants={cardVariants}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-[#6366F1]/50 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)] transition-colors duration-300"
              >
                {/* Top Ambient Hover Gradient */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div>
                  {/* Mockup Preview Container with Smooth Zoom-on-Hover */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                    {/* Browser Chrome Header Bar */}
                    <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2.5 bg-zinc-950/75 backdrop-blur-md border-b border-zinc-800/60">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 group-hover:bg-rose-500/80 transition-colors" />
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 group-hover:bg-amber-400/80 transition-colors" />
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500/80 transition-colors" />
                      </div>
                      <span className="font-mono text-[11px] text-zinc-400 bg-zinc-900/90 border border-zinc-800 px-2.5 py-0.5 rounded-md">
                        {project.category} · {project.year}
                      </span>

                      {project.isComingSoon ? (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-amber-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                          {project.status}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#10B981]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* High-Resolution Image with Smooth Zoom on Hover */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-center pt-9 transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Coming Soon Overlay Pill on Preview */}
                    {project.isComingSoon && (
                      <div className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-amber-500/40 px-3 py-1 font-mono text-[11px] font-medium text-amber-300 shadow-lg">
                        <Clock className="h-3 w-3 text-amber-400" />
                        <span>Coming Soon · Active Build</span>
                      </div>
                    )}

                    {/* Subtle Vignette Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-65" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="font-mono text-xs font-medium text-[#6366F1]">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-zinc-500">
                        // 0{projectsData.indexOf(project) + 1}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-950/80 border border-zinc-800/90 group-hover:border-zinc-700/80 px-2.5 py-1 font-mono text-xs text-zinc-300 transition-colors"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Action Links or Coming Soon State */}
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex items-center gap-3 border-t border-zinc-800/50 mt-2">
                  {project.isComingSoon ? (
                    <>
                      <div
                        aria-disabled="true"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/30 px-4 py-2.5 text-xs sm:text-sm font-semibold text-amber-300 select-none cursor-default"
                      >
                        <Clock className="h-4 w-4 text-amber-400" />
                        <span>Coming Soon / In Progress</span>
                      </div>

                      <div
                        aria-disabled="true"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950/70 border border-zinc-800/80 px-4 py-2.5 font-mono text-xs text-zinc-500 select-none cursor-default"
                      >
                        <Github className="h-4 w-4 text-zinc-600" />
                        <span>Private Repo</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#6366F1] hover:bg-indigo-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_-4px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_0px_rgba(99,102,241,0.75)] transition-all duration-300"
                      >
                        <span>Live Demo</span>
                        <span className="font-mono transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                          ↗
                        </span>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/git flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white transition-all duration-300"
                      >
                        <Github className="h-4 w-4 text-zinc-400 group-hover/git:text-white transition-colors" />
                        <span>GitHub Source</span>
                        <span className="font-mono text-zinc-400 group-hover/git:text-white transition-transform duration-300 group-hover/git:translate-x-0.5 group-hover/git:-translate-y-0.5">
                          ↗
                        </span>
                      </a>
                    </>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
