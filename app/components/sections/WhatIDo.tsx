"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollReveal";
import { Bot, Briefcase, Heart, ExternalLink } from "lucide-react";

const ventures = [
  {
    title: "AI Acrobatics",
    description: "AI-powered automation solutions that transform businesses. From lead qualification to backend automation, we make AI accessible for everyone.",
    icon: Bot,
    color: "from-wizard-purple to-tech-blue",
    stats: "70% automation achieved",
    link: "https://aiacrobatics.com",
    highlights: ["AI Consulting", "Custom Bots", "Process Automation"],
  },
  {
    title: "ExecTech AI",
    description: "Executive-grade AI automation systems. We help C-suite leaders reclaim 10+ hours per week and achieve 3x ROI within 6 months.",
    icon: Briefcase,
    color: "from-tech-cyan to-wizard-purple",
    stats: "Featured in Forbes, Inc.",
    link: "https://exectechai.com",
    highlights: ["Calendar Optimization", "Decision Support", "Executive AI"],
  },
  {
    title: "Peak Performance",
    description: "Personal freedom coaching rooted in 10+ years of experience. Helping entrepreneurs unlock their potential through mind, body, and spiritual development.",
    icon: Heart,
    color: "from-wizard-gold to-tech-cyan",
    stats: "10+ years coaching",
    link: "https://julianbradley.com",
    highlights: ["1-on-1 Coaching", "Business Scaling", "Life Transformation"],
  },
];

export function WhatIDo() {
  return (
    <section id="ventures" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-wizard-gold mb-4 block">
            The Magic I Create
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">What I Do</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Building AI-powered empires that transform how businesses operate and how people live.
          </p>
        </ScrollReveal>

        {/* Venture cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {ventures.map((venture, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group h-full"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, var(--wizard-purple), var(--tech-cyan))` }}
                />

                {/* Card content */}
                <div className="relative h-full glass rounded-2xl p-8 flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${venture.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <venture.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {venture.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 flex-grow">
                    {venture.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {venture.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-wizard-purple/20 text-wizard-purple-light border border-wizard-purple/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Stats badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-wizard-gold font-medium">
                      {venture.stats}
                    </span>
                    <a
                      href={venture.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
                    >
                      Visit <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-wizard-purple/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-tech-cyan/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
