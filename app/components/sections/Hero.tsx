"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { TextReveal, GradientTextReveal } from "@/app/components/animations/TextReveal";
import { Sparkles, Wand2, ArrowDown } from "lucide-react";

// Dynamic import for Three.js components to avoid SSR issues
const ParticleField = dynamic(
  () => import("@/app/components/three/ParticleField").then((mod) => mod.ParticleField),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Particle Background */}
      <ParticleField className="opacity-60" particleCount={400} showOrb />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass glow-purple"
        >
          <Sparkles className="w-4 h-4 text-wizard-gold" />
          <span className="text-sm text-text-secondary">AI Automation Expert</span>
        </motion.div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <TextReveal
            text="Julian Bradley"
            className="text-text-primary block mb-4"
            delay={0.4}
          />
          <GradientTextReveal
            text="The Wizard of AI"
            className="block"
            delay={0.8}
          />
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12"
        >
          Transforming businesses through the magic of artificial intelligence.
          <br />
          <span className="text-wizard-gold">10+ years</span> of innovation.{" "}
          <span className="text-tech-cyan">Proven results.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-magic flex items-center gap-2 text-lg"
          >
            <Wand2 className="w-5 h-5" />
            Summon the Wizard
          </a>
          <a
            href="#services"
            className="px-8 py-3 rounded-full border border-wizard-purple/30 text-text-secondary hover:text-text-primary hover:border-wizard-purple/60 transition-all duration-300"
          >
            Explore My Magic
          </a>
        </motion.div>

        {/* Stats preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "70%", label: "Automation" },
            { value: "40%", label: "Client Growth" },
            { value: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-darker to-transparent pointer-events-none" />
    </section>
  );
}
