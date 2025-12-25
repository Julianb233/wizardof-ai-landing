"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollReveal";
import {
  Rocket,
  Users,
  ShoppingCart,
  Video,
  Megaphone,
  Briefcase,
  ArrowRight,
  Sparkles,
  Target,
} from "lucide-react";

const audiences = [
  {
    slug: "entrepreneurs",
    title: "Entrepreneurs & Founders",
    subtitle: "Building the future",
    description: "Automate the grind so you can focus on scaling your vision.",
    icon: Rocket,
    gradient: "from-cosmic-cyan to-nebula-purple",
    glow: "rgba(34, 211, 238, 0.5)",
    stat: "10+ hours saved weekly",
  },
  {
    slug: "coaches",
    title: "Coaches & Consultants",
    subtitle: "Scale your impact",
    description: "Deliver more value to more clients without burning out.",
    icon: Users,
    gradient: "from-nebula-purple to-cosmic-pink",
    glow: "rgba(168, 85, 247, 0.5)",
    stat: "3x client capacity",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Owners",
    subtitle: "Sell on autopilot",
    description: "From inventory to customer service—automate it all.",
    icon: ShoppingCart,
    gradient: "from-cosmic-pink to-cosmic-magenta",
    glow: "rgba(236, 72, 153, 0.5)",
    stat: "40% revenue boost",
  },
  {
    slug: "creators",
    title: "Content Creators",
    subtitle: "Create more, manage less",
    description: "AI-powered workflows that multiply your content output.",
    icon: Video,
    gradient: "from-cosmic-magenta to-cosmic-cyan",
    glow: "rgba(232, 121, 249, 0.5)",
    stat: "5x content output",
  },
  {
    slug: "agencies",
    title: "Agencies & Teams",
    subtitle: "Scale without headcount",
    description: "Deliver enterprise results with a lean team.",
    icon: Megaphone,
    gradient: "from-cosmic-cyan via-nebula-purple to-cosmic-pink",
    glow: "rgba(34, 211, 238, 0.4)",
    stat: "50% cost reduction",
  },
  {
    slug: "executives",
    title: "Executives & C-Suite",
    subtitle: "Lead with intelligence",
    description: "AI-powered decision support for strategic leadership.",
    icon: Briefcase,
    gradient: "from-nebula-purple via-cosmic-pink to-cosmic-magenta",
    glow: "rgba(168, 85, 247, 0.4)",
    stat: "Enterprise-grade AI",
  },
];

export function WhoIServe() {
  return (
    <section id="audience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Seamless gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-bg-darker/50 to-bg-darker pointer-events-none" />

      {/* Ambient background gradients */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Flowing gradient mesh overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 50% 30% at 20% 20%, rgba(34, 211, 238, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 40% 40% at 80% 40%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 30% at 50% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cosmic mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(236, 72, 153, 0.3)",
                "0 0 40px rgba(236, 72, 153, 0.5)",
                "0 0 20px rgba(236, 72, 153, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Target className="w-4 h-4 text-cosmic-pink" />
            <span className="text-sm font-semibold text-white">Who I Serve</span>
            <Sparkles className="w-4 h-4 text-cosmic-cyan" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text-aurora">Built For Visionaries</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Whether you&apos;re a solo founder or leading a team, I help{" "}
            <span className="text-cosmic-cyan font-semibold">ambitious people</span> automate their way to freedom.
          </p>
        </ScrollReveal>

        {/* Audience grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {audiences.map((audience, index) => {
            const AudienceIcon = audience.icon;
            return (
              <StaggerItem key={index}>
                <Link href={`/for/${audience.slug}`} className="block h-full">
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative group h-full"
                  >
                    {/* Animated glow effect */}
                    <motion.div
                      className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"
                      style={{ background: audience.glow }}
                    />

                    {/* Gradient border on hover */}
                    <motion.div
                      className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Card content */}
                    <div className="relative h-full glass-cosmic rounded-2xl p-6 flex flex-col border border-white/10 overflow-hidden">
                      {/* Subtle gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      {/* Icon */}
                      <motion.div
                        className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        style={{ boxShadow: `0 0 25px ${audience.glow}` }}
                      >
                        <AudienceIcon className="w-7 h-7 text-white" />
                      </motion.div>

                      {/* Title & subtitle */}
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cosmic-cyan transition-colors">
                        {audience.title}
                      </h3>
                      <p className="text-sm text-cosmic-pink font-medium mb-3">
                        {audience.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-text-secondary text-sm flex-grow mb-4">
                        {audience.description}
                      </p>

                      {/* Stats & CTA */}
                      <div className="flex items-center justify-between">
                        <motion.span
                          className="text-xs font-bold text-cosmic-gold"
                          animate={{
                            textShadow: [
                              "0 0 10px rgba(251, 191, 36, 0.3)",
                              "0 0 20px rgba(251, 191, 36, 0.6)",
                              "0 0 10px rgba(251, 191, 36, 0.3)",
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {audience.stat}
                        </motion.span>
                        <motion.div
                          className="flex items-center gap-1 text-sm text-cosmic-cyan opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <span className="font-medium">Learn more</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Seamless gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent via-bg-darker/50 to-bg-darker pointer-events-none" />
    </section>
  );
}
