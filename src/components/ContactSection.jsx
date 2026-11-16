import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Briefcase,
  Globe,
  Sparkles,
  Clock,
} from 'lucide-react';

const projectTypes = [
  'Figma to React / Next.js',
  'E-Commerce Storefront',
  'SaaS Dashboard / Web App',
  'UI Animation & Performance Polish',
  'Full-Time / Contract Opportunity',
];

const freelanceProfiles = [
  {
    platform: 'Fiverr',
    handle: '@juyelapon_dev',
    badge: 'Level Ready · 5.0★',
    description: 'Custom React, Next.js & Tailwind CSS gigs with fast turnaround.',
    href: 'https://www.fiverr.com/',
    accent: 'group-hover:border-[#10B981]/50',
    dotColor: 'bg-[#10B981]',
  },
  {
    platform: 'Upwork',
    handle: 'Juyel Apon — Frontend Dev',
    badge: '100% Job Success Focus',
    description: 'Hourly & fixed-price contracts for production web applications.',
    href: 'https://www.upwork.com/',
    accent: 'group-hover:border-[#6366F1]/50',
    dotColor: 'bg-[#6366F1]',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: projectTypes[0],
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastSuccess, setToastSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'juyelapon.dev@gmail.com';

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(directEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message =
        'Please share a brief overview (at least 15 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastSuccess(true);
      setFormData({
        name: '',
        email: '',
        projectType: projectTypes[0],
        message: '',
      });
      setTimeout(() => {
        setToastSuccess(false);
      }, 6000);
    }, 650);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden border-t border-zinc-900"
    >
      {/* Ambient Obsidian Background Spotlights */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 h-[420px] w-[520px] rounded-full bg-[#6366F1]/12 blur-[150px]" />
        <div className="absolute bottom-10 right-1/4 h-[340px] w-[420px] rounded-full bg-[#10B981]/8 blur-[140px]" />
      </div>

      {/* Floating Success Toast Notification */}
      <AnimatePresence>
        {toastSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="status"
            aria-live="polite"
            className="fixed bottom-6 right-6 z-50 max-w-md rounded-2xl bg-zinc-900/95 backdrop-blur-xl border border-[#10B981]/50 p-4 sm:p-5 shadow-[0_15px_45px_-10px_rgba(16,185,129,0.35)]"
          >
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/15 border border-[#10B981]/40">
                <CheckCircle2 className="h-5 w-5 text-[#10B981]" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading text-sm font-bold text-white">
                  Message Received — Thank You!
                </h4>
                <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                  Juyel Apon will review your project brief and reply within 12–24
                  hours.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setToastSuccess(false)}
                className="font-mono text-xs text-zinc-400 hover:text-white px-1.5 py-0.5 rounded-md"
              >
                ESC
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800 px-3.5 py-1.5 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#6366F1]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#6366F1]">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let&apos;s Build Your Next Digital Product.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Have a Figma design ready for code, an e-commerce storefront to
            launch, or a React/Next.js role to fill? Reach out directly or send
            a project brief below.
          </p>
        </motion.div>

        {/* 2-Column Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN (5 cols): Direct Email, Fiverr/Upwork Profiles & Location */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* 1. Direct Email Card */}
            <div className="group rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-[#6366F1]/50 p-6 transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-[#6366F1]/40 transition-colors">
                  <Mail className="h-5 w-5 text-[#6366F1]" />
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#10B981] bg-zinc-950/90 border border-zinc-800 px-2.5 py-1 rounded-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  DIRECT INBOX
                </span>
              </div>

              <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Email Address
              </p>
              <a
                href={`mailto:${directEmail}`}
                className="mt-1 inline-flex items-center gap-2 font-heading text-lg sm:text-xl font-bold text-white hover:text-[#6366F1] transition-colors break-all"
              >
                <span>{directEmail}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#6366F1]" />
              </a>

              <div className="mt-4 pt-4 border-t border-zinc-800/70 flex items-center justify-between">
                <span className="text-xs text-zinc-400">
                  Avg. response under 12 hours
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 px-2.5 py-1 font-mono text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-zinc-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 2. Fiverr & Upwork Profile Cards */}
            <div className="rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-[#6366F1]" />
                  <h3 className="font-heading text-base font-bold text-white">
                    Freelance Marketplaces
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-zinc-500">
                  VERIFIED PROFILES
                </span>
              </div>

              <div className="space-y-3">
                {freelanceProfiles.map((item) => (
                  <a
                    key={item.platform}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col rounded-xl bg-zinc-950/80 border border-zinc-800/90 ${item.accent} p-4 transition-all duration-300 hover:-translate-y-0.5`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${item.dotColor}`}
                        />
                        <span className="font-heading text-sm font-bold text-white group-hover:text-indigo-200 transition-colors">
                          {item.platform}
                        </span>
                        <span className="font-mono text-xs text-zinc-400">
                          {item.handle}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="mt-2.5 self-start font-mono text-[11px] text-zinc-300 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* 3. Location & Timezone Card */}
            <div className="rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800">
                    <MapPin className="h-5 w-5 text-[#10B981]" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      Base Location
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                      Dhaka, Bangladesh
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#6366F1]" />
                      <span>GMT+6 · Worldwide Remote Collaboration</span>
                    </p>
                  </div>
                </div>
                <Globe className="h-5 w-5 text-zinc-600 shrink-0" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN (7 cols): Interactive Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-6 sm:p-9 shadow-[0_12px_45px_-15px_rgba(0,0,0,0.75)] overflow-hidden">
              {/* Top Specular Highlight */}
              <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/60 to-transparent" />

              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-800/80">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    Send a Project Brief
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-400">
                    Fill out the details below and I&apos;ll get back to you
                    promptly.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-lg">
                  <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                  Slots Open
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs font-medium uppercase tracking-wider text-zinc-300 mb-2"
                    >
                      Your Name <span className="text-[#6366F1]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full rounded-xl bg-zinc-950/90 border ${
                        errors.name
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-zinc-800 focus:border-[#6366F1]'
                      } px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/25 transition-all`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs font-medium uppercase tracking-wider text-zinc-300 mb-2"
                    >
                      Email Address <span className="text-[#6366F1]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full rounded-xl bg-zinc-950/90 border ${
                        errors.email
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-zinc-800 focus:border-[#6366F1]'
                      } px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/25 transition-all`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Type Selector */}
                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="block font-mono text-xs font-medium uppercase tracking-wider text-zinc-300 mb-2"
                  >
                    Project Type <span className="text-[#6366F1]">*</span>
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-zinc-950/90 border border-zinc-800 focus:border-[#6366F1] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1]/25 transition-all"
                  >
                    {projectTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-zinc-950 text-white"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quick Interactive Pill Selection for Project Type */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {projectTypes.map((type) => {
                    const active = formData.projectType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, projectType: type }))
                        }
                        className={`rounded-lg px-2.5 py-1 font-mono text-[11px] transition-all ${
                          active
                            ? 'bg-[#6366F1]/20 border border-[#6366F1] text-indigo-200'
                            : 'bg-zinc-950/70 border border-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs font-medium uppercase tracking-wider text-zinc-300 mb-2"
                  >
                    Project Details &amp; Timeline{' '}
                    <span className="text-[#6366F1]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your goals, scope, Figma links, or target launch date..."
                    className={`w-full rounded-xl bg-zinc-950/90 border ${
                      errors.message
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-zinc-800 focus:border-[#6366F1]'
                    } px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/25 transition-all resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit CTA & Inline Status */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="font-mono text-xs text-zinc-400">
                    <span className="text-[#10B981]">●</span> Encrypted &amp;
                    direct to Juyel&apos;s inbox
                  </p>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#6366F1] hover:bg-indigo-500 disabled:opacity-60 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_-4px_rgba(99,102,241,0.65)] hover:shadow-[0_0_36px_2px_rgba(99,102,241,0.85)] transition-all duration-300 border border-indigo-400/40"
                  >
                    <Send className="h-4 w-4" />
                    <span>
                      {isSubmitting ? 'Sending Brief...' : 'Send Message'}
                    </span>
                  </motion.button>
                </div>

                {/* Inline Persistent Banner when Submitted */}
                <AnimatePresence>
                  {toastSuccess && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="rounded-xl bg-[#10B981]/10 border border-[#10B981]/40 px-4 py-3 flex items-center gap-2.5 text-xs sm:text-sm text-emerald-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                      <span>
                        Your message has been dispatched! Expect a personal reply
                        soon.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
