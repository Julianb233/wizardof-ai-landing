"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { TextReveal } from "@/app/components/animations/TextReveal";
import { Sparkles, Wand2, ArrowDown, Zap, Star } from "lucide-react";

// Dynamic import for Three.js components to avoid SSR issues
const ParticleField = dynamic(
  () => import("@/app/components/three/ParticleField").then((mod) => mod.ParticleField),
  { ssr: false }
);

// Cosmic floating orbs matching the photo's color scheme
function CosmicOrbs() {
  return (
    <>
      {/* Large cyan orb - top center (like the photo's cosmic glow) */}
      <motion.div
        className="floating-orb floating-orb-cyan"
        style={{ width: 600, height: 600, top: "-15%", left: "30%" }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, 20, -15, 0],
          scale: [1, 1.3, 0.95, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Purple/violet orb - left side */}
      <motion.div
        className="floating-orb floating-orb-purple"
        style={{ width: 450, height: 450, top: "20%", left: "-12%" }}
        animate={{
          x: [0, -30, 25, 0],
          y: [0, -40, 30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Pink/magenta orb - right side */}
      <motion.div
        className="floating-orb floating-orb-pink"
        style={{ width: 400, height: 400, top: "40%", right: "-10%" }}
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -25, 35, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Magenta orb - bottom left */}
      <motion.div
        className="floating-orb floating-orb-magenta"
        style={{ width: 350, height: 350, bottom: "5%", left: "15%" }}
        animate={{
          x: [0, 25, -35, 0],
          y: [0, 35, -20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Teal orb - bottom right */}
      <motion.div
        className="floating-orb floating-orb-teal"
        style={{ width: 300, height: 300, bottom: "15%", right: "20%" }}
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 25, -15, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </>
  );
}

// Animated cosmic sparkles
function CosmicSparkles() {
  const sparkles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 3,
    delay: Math.random() * 4,
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
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star className="w-full h-full text-cosmic-cyan" fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Cosmic floating orbs */}
      <CosmicOrbs />

      {/* Sparkle particles */}
      <CosmicSparkles />

      {/* 3D Particle Background */}
      <ParticleField className="opacity-80" particleCount={500} showOrb />

      {/* Animated cosmic gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(34, 211, 238, 0.1) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 md:order-1 text-left">
            {/* Animated cosmic badge */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full glass-cosmic animate-glow-pulse-cosmic"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-cosmic-cyan icon-glow" />
              </motion.div>
              <span className="text-sm font-semibold text-white">AI Automation Expert</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Zap className="w-5 h-5 text-cosmic-pink icon-glow" />
              </motion.div>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <TextReveal
                text="Julian Bradley"
                className="text-white block mb-4 drop-shadow-lg"
                delay={0.4}
              />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="block gradient-text-aurora text-5xl md:text-7xl lg:text-8xl"
              >
                The Wizard of AI
              </motion.span>
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-lg md:text-xl text-text-secondary max-w-xl mb-10 leading-relaxed"
            >
              Transforming businesses through the{" "}
              <span className="text-cosmic-pink font-semibold">magic</span> of artificial intelligence.
              <br />
              <motion.span
                className="text-cosmic-cyan font-bold"
                animate={{ textShadow: ["0 0 20px rgba(34, 211, 238, 0.5)", "0 0 40px rgba(34, 211, 238, 0.8)", "0 0 20px rgba(34, 211, 238, 0.5)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                10+ years
              </motion.span>{" "}
              of innovation.{" "}
              <span className="text-nebula-purple font-semibold">Proven results.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.a
                href="https://api.leadconnectorhq.com/widget/booking/LJlYwAZ7flnJCYpRDkoU"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cosmic flex items-center gap-3 text-lg"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Wand2 className="w-6 h-6" />
                <span>Summon the Wizard</span>
              </motion.a>
              <motion.a
                href="#services"
                className="btn-outline-cosmic flex items-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5" />
                Explore My Magic
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Hero Image with cosmic portal effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="order-1 md:order-2 relative"
          >
            {/* Cosmic portal glow behind image */}
            <motion.div
              className="absolute inset-0 -m-8"
              style={{
                background: "conic-gradient(from 0deg, rgba(34, 211, 238, 0.4), rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4), rgba(232, 121, 249, 0.4), rgba(34, 211, 238, 0.4))",
                borderRadius: "50%",
                filter: "blur(50px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Secondary glow ring */}
            <motion.div
              className="absolute inset-0 -m-4"
              style={{
                background: "conic-gradient(from 180deg, rgba(168, 85, 247, 0.5), rgba(34, 211, 238, 0.5), rgba(232, 121, 249, 0.5), rgba(168, 85, 247, 0.5))",
                borderRadius: "50%",
                filter: "blur(30px)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Image container */}
            <div className="relative hero-image-container">
              <motion.div
                className="relative overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/julian-bradley-hero.jpg"
                  alt="Julian Bradley - The Wizard of AI"
                  width={500}
                  height={500}
                  className="hero-image w-full h-auto object-cover"
                  priority
                />

                {/* Gradient overlay on image */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(8, 5, 18, 0.3) 0%, transparent 30%)",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats preview - Enhanced with cosmic colors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "70%", label: "Automation Rate", color: "text-cosmic-cyan", glow: "rgba(34, 211, 238, 0.5)" },
            { value: "40%", label: "Client Growth", color: "text-nebula-purple", glow: "rgba(168, 85, 247, 0.5)" },
            { value: "10+", label: "Years Experience", color: "text-cosmic-pink", glow: "rgba(236, 72, 153, 0.5)" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-5 rounded-2xl glass-cosmic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`text-4xl md:text-5xl font-bold ${stat.color}`}
                style={{ textShadow: `0 0 30px ${stat.glow}` }}
                animate={{ textShadow: [`0 0 20px ${stat.glow}`, `0 0 50px ${stat.glow}`, `0 0 20px ${stat.glow}`] }}
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
          <span className="text-xs uppercase tracking-wider text-cosmic-cyan font-semibold">Scroll</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-cosmic-cyan icon-glow" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-darker via-bg-darker/50 to-transparent pointer-events-none" />
    </section>
  );
}
