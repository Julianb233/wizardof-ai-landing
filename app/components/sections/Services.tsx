"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollReveal";
import {
  Brain,
  Cog,
  MessageSquareCode,
  Users,
  TrendingUp,
  Zap,
  Target,
  Sparkles,
  Wand2,
  Star,
} from "lucide-react";

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Custom AI roadmaps that align with your business goals and drive scalable growth.",
    icon: Brain,
    size: "large",
    gradient: "from-cosmic-cyan to-nebula-purple",
    glow: "rgba(34, 211, 238, 0.5)",
  },
  {
    title: "Backend Automation",
    description: "Streamline operations and boost productivity with intelligent automation systems.",
    icon: Cog,
    size: "medium",
    gradient: "from-nebula-purple to-cosmic-pink",
    glow: "rgba(168, 85, 247, 0.5)",
  },
  {
    title: "Custom Bot Development",
    description: "AI-powered chatbots and assistants that engage customers 24/7.",
    icon: MessageSquareCode,
    size: "medium",
    gradient: "from-cosmic-pink to-cosmic-magenta",
    glow: "rgba(236, 72, 153, 0.5)",
  },
  {
    title: "Lead Qualification",
    description: "Automated lead scoring and nurturing that converts prospects into customers.",
    icon: Target,
    size: "small",
    gradient: "from-cosmic-magenta to-cosmic-cyan",
    glow: "rgba(232, 121, 249, 0.5)",
  },
  {
    title: "Executive AI Systems",
    description: "Enterprise-grade automation for C-suite decision support.",
    icon: Users,
    size: "small",
    gradient: "from-cosmic-cyan to-cosmic-pink",
    glow: "rgba(34, 211, 238, 0.5)",
  },
  {
    title: "Process Optimization",
    description: "Identify bottlenecks and implement AI solutions for maximum efficiency.",
    icon: TrendingUp,
    size: "small",
    gradient: "from-nebula-purple to-cosmic-cyan",
    glow: "rgba(168, 85, 247, 0.5)",
  },
  {
    title: "Marketing Automation",
    description: "AI-driven content and campaign automation that scales your reach.",
    icon: Zap,
    size: "medium",
    gradient: "from-cosmic-pink to-nebula-purple",
    glow: "rgba(236, 72, 153, 0.5)",
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing tech stack.",
    icon: Sparkles,
    size: "small",
    gradient: "from-cosmic-cyan via-nebula-purple to-cosmic-pink",
    glow: "rgba(34, 211, 238, 0.5)",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating sparkles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -50, -100],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 3,
            repeat: Infinity,
          }}
        >
          <Star className="w-3 h-3 text-cosmic-cyan" fill="currentColor" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cosmic mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.3)",
                "0 0 40px rgba(168, 85, 247, 0.5)",
                "0 0 20px rgba(168, 85, 247, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Wand2 className="w-4 h-4 text-nebula-purple" />
            <span className="text-sm font-semibold text-white">The Spells I Cast</span>
            <Star className="w-4 h-4 text-cosmic-cyan" fill="currentColor" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text-aurora">Services & Solutions</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From strategy to implementation, I offer <span className="text-nebula-purple font-semibold">end-to-end AI solutions</span> that deliver real results.
          </p>
        </ScrollReveal>

        {/* Bento grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
          {services.map((service, index) => {
            const gridClass =
              service.size === "large"
                ? "col-span-2 row-span-2"
                : service.size === "medium"
                ? "col-span-2 md:col-span-1"
                : "col-span-1";

            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`${gridClass} relative group h-full`}
                >
                  {/* Animated glowing border */}
                  <motion.div
                    className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  {/* Outer glow on hover */}
                  <motion.div
                    className="absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"
                    style={{ background: service.glow }}
                  />

                  {/* Card content */}
                  <div className="relative h-full glass-cosmic rounded-2xl p-6 flex flex-col border border-white/5">
                    {/* Icon with vibrant background */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      style={{ boxShadow: `0 0 25px ${service.glow}` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cosmic-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-secondary flex-grow">
                      {service.description}
                    </p>

                    {/* Animated hover indicator */}
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <motion.span
                        className="w-2 h-2 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{ backgroundColor: service.glow.replace("0.5", "1") }}
                      />
                      <span className="text-white font-medium">Learn more</span>
                    </motion.div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Bottom gradient line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(34, 211, 238, 0.5), rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.5), transparent)",
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}
