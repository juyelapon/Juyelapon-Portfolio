import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 selection:bg-[#6366F1]/30 selection:text-indigo-200">
      {/* Top Electric Indigo Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#6366F1] via-indigo-400 to-[#10B981]"
      />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Smooth Animated Main Page Flow */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <HeroSection />
        <ProjectsSection />
        <TechStackSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </motion.main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}
