"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollReveal";
import { Bot, Briefcase, Heart, ExternalLink, Sparkles, Star } from "lucide-react";

const ventures = [
  {
    title: "AI Acrobatics",
    description: "AI-powered automation solutions that transform businesses. From lead qualification to backend automation, we make AI accessible for everyone.",
    icon: Bot,
    gradient: "from-cosmic-cyan via-nebula-purple to-cosmic-pink",
    glowColor: "rgba(34, 211, 238, 0.5)",
    stats: "70% automation achieved",
    link: "https://aiacrobatics.com",
    highlights: ["AI Consulting", "Custom Bots", "Process Automation"],
  },
  {
    title: "ExecTech AI",
    description: "Executive-grade AI automation systems. We help C-suite leaders reclaim 10+ hours per week and achieve 3x ROI within 6 months.",
    icon: Briefcase,
    gradient: "from-nebula-purple via-cosmic-pink to-cosmic-magenta",
    glowColor: "rgba(168, 85, 247, 0.5)",
    stats: "Featured in Forbes, Inc.",
    link: "https://exectechai.com",
    highlights: ["Calendar Optimization", "Decision Support", "Executive AI"],
  },
  {
    title: "Peak Performance",
    description: "Personal freedom coaching rooted in 10+ years of experience. Helping entrepreneurs unlock their potential through mind, body, and spiritual development.",
    icon: Heart,
    gradient: "from-cosmic-pink via-cosmic-magenta to-cosmic-cyan",
    glowColor: "rgba(236, 72, 153, 0.5)",
    stats: "10+ years coaching",
    link: "https://julianbradley.com",
    highlights: ["1-on-1 Coaching", "Business Scaling", "Life Transformation"],
  },
];

export function WhatIDo() {
  return (
    <section id="ventures" className="py-24 md:py-32 relative overflow-hidden">
      {/* Cosmic background orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cosmic mb-6"
            animate={{ boxShadow: ["0 0 20px rgba(34, 211, 238, 0.3)", "0 0 40px rgba(34, 211, 238, 0.5)", "0 0 20px rgba(34, 211, 238, 0.3)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-4 h-4 text-cosmic-cyan" fill="currentColor" />
            <span className="text-sm font-semibold text-white">The Magic I Create</span>
            <Sparkles className="w-4 h-4 text-cosmic-pink" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text-aurora">What I Do</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Building <span className="text-cosmic-cyan font-semibold">AI-powered empires</span> that transform how businesses operate and how people live.
          </p>
        </ScrollReveal>

        {/* Venture cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {ventures.map((venture, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -15, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group h-full"
              >
                {/* Animated glow effect */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: `linear-gradient(135deg, ${venture.glowColor}, transparent)` }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Card content */}
                <div className="relative h-full glass-cosmic rounded-2xl p-8 flex flex-col border border-white/10 overflow-hidden">
                  {/* Animated gradient border */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${venture.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Icon with glow */}
                  <motion.div
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${venture.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 0 30px ${venture.glowColor}` }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <venture.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cosmic-cyan transition-colors">
                    {venture.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 flex-grow">
                    {venture.description}
                  </p>

                  {/* Highlights with gradient pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {venture.highlights.map((highlight, i) => (
                      <motion.span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${venture.gradient} bg-opacity-20 text-white border border-white/20`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>

                  {/* Stats badge */}
                  <div className="flex items-center justify-between">
                    <motion.span
                      className="text-sm text-cosmic-gold font-bold"
                      animate={{ textShadow: ["0 0 10px rgba(251, 191, 36, 0.5)", "0 0 20px rgba(251, 191, 36, 0.8)", "0 0 10px rgba(251, 191, 36, 0.5)"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {venture.stats}
                    </motion.span>
                    <motion.a
                      href={venture.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-cosmic-cyan hover:text-white transition-colors font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Visit <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
