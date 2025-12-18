"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { TextReveal, GradientTextReveal } from "@/app/components/animations/TextReveal";
import { Sparkles, Wand2, ArrowDown, Zap, Flame, Star } from "lucide-react";

// Dynamic import for Three.js components to avoid SSR issues
const ParticleField = dynamic(
  () => import("@/app/components/three/ParticleField").then((mod) => mod.ParticleField),
  { ssr: false }
);

// Animated floating orbs for visual impact
function FloatingOrbs() {
  return (
    <>
      {/* Large orange orb - top right */}
      <motion.div
        className="floating-orb floating-orb-orange"
        style={{ width: 500, height: 500, top: "-10%", right: "-10%" }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Purple orb - left side */}
      <motion.div
        className="floating-orb floating-orb-purple"
        style={{ width: 400, height: 400, top: "30%", left: "-15%" }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, -50, 30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Cyan orb - bottom */}
      <motion.div
        className="floating-orb floating-orb-cyan"
        style={{ width: 350, height: 350, bottom: "10%", right: "20%" }}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Pink orb - center left */}
      <motion.div
        className="floating-orb floating-orb-pink"
        style={{ width: 300, height: 300, top: "50%", left: "10%" }}
        animate={{
          x: [0, 20, -30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Small gold orb - top center */}
      <motion.div
        className="floating-orb"
        style={{
          width: 200,
          height: 200,
          top: "15%",
          left: "40%",
          background: "radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0) 70%)",
        }}
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 20, -15, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </>
  );
}

// Animated sparkle particles
function SparkleParticles() {
  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star className="w-full h-full text-magic-gold" fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated floating orbs - FULL OPACITY */}
      <FloatingOrbs />

      {/* Sparkle particles */}
      <SparkleParticles />

      {/* 3D Particle Background - INCREASED OPACITY */}
      <ParticleField className="opacity-90" particleCount={600} showOrb />

      {/* Animated gradient mesh overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, transparent 40%, rgba(236, 67, 15, 0.1) 50%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Animated floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full glass-vibrant glow-orange animate-glow-pulse"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Flame className="w-5 h-5 text-wizard-orange icon-glow" />
          </motion.div>
          <span className="text-sm font-semibold text-white">AI Automation Expert</span>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Zap className="w-5 h-5 text-magic-gold icon-glow" />
          </motion.div>
        </motion.div>

        {/* Main heading with enhanced gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <TextReveal
            text="Julian Bradley"
            className="text-white block mb-4 drop-shadow-lg"
            delay={0.4}
          />
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="block gradient-text-aurora text-6xl md:text-8xl lg:text-9xl"
          >
            The Wizard of AI
          </motion.span>
        </h1>

        {/* Tagline with color accents */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Transforming businesses through the{" "}
          <span className="text-hot-pink font-semibold">magic</span> of artificial intelligence.
          <br />
          <motion.span
            className="text-wizard-orange font-bold"
            animate={{ textShadow: ["0 0 20px rgba(236, 67, 15, 0.5)", "0 0 40px rgba(236, 67, 15, 0.8)", "0 0 20px rgba(236, 67, 15, 0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            10+ years
          </motion.span>{" "}
          of innovation.{" "}
          <span className="text-neon-cyan font-semibold">Proven results.</span>
        </motion.p>

        {/* CTA Buttons - More vibrant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="https://api.leadconnectorhq.com/widget/booking/LJlYwAZ7flnJCYpRDkoU"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fire flex items-center gap-3 text-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Wand2 className="w-6 h-6" />
            <span>Summon the Wizard</span>
          </motion.a>
          <motion.a
            href="#services"
            className="btn-outline flex items-center gap-2 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5" />
            Explore My Magic
          </motion.a>
        </motion.div>

        {/* Stats preview - Enhanced with glowing numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "70%", label: "Automation Rate", color: "text-wizard-orange" },
            { value: "40%", label: "Client Growth", color: "text-electric-purple" },
            { value: "10+", label: "Years Experience", color: "text-neon-cyan" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-2xl glass-vibrant"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`text-4xl md:text-5xl font-bold ${stat.color}`}
                style={{ textShadow: "0 0 30px currentColor" }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-text-secondary mt-2 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-wider text-wizard-orange font-semibold">Scroll</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-wizard-orange icon-glow" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-darker via-bg-darker/50 to-transparent pointer-events-none" />
    </section>
  );
}
