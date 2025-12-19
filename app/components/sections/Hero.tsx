"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { TextReveal } from "@/app/components/animations/TextReveal";
import { Sparkles, Wand2, ArrowDown, Zap, Star } from "lucide-react";
import { useRef } from "react";

// Dynamic import for Three.js components to avoid SSR issues
const ParticleField = dynamic(
  () => import("@/app/components/three/ParticleField").then((mod) => mod.ParticleField),
  { ssr: false }
);

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["end end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => 
    pos >= 1 ? "relative" : "fixed"
  );

  return (
    <motion.section 
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
      style={{ opacity }}
    >
      <motion.div 
        className="absolute inset-0"
        style={{ scale, position }}
      >
        <Image
          src="/images/wizard-of-ai-hero.png"
          alt="The Wizard of AI"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* 3D Particle Background */}
        <ParticleField className="opacity-80" particleCount={500} showOrb />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <TextReveal
                text="The Wizard of AI"
                className="text-white block mb-4 drop-shadow-lg"
                delay={0.4}
              />
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
      </motion.div>
    </motion.section>
  );
}
