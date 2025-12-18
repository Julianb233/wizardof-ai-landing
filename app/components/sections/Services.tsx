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
} from "lucide-react";

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Custom AI roadmaps that align with your business goals and drive scalable growth.",
    icon: Brain,
    size: "large",
  },
  {
    title: "Backend Automation",
    description: "Streamline operations and boost productivity with intelligent automation systems.",
    icon: Cog,
    size: "medium",
  },
  {
    title: "Custom Bot Development",
    description: "AI-powered chatbots and assistants that engage customers 24/7.",
    icon: MessageSquareCode,
    size: "medium",
  },
  {
    title: "Lead Qualification",
    description: "Automated lead scoring and nurturing that converts prospects into customers.",
    icon: Target,
    size: "small",
  },
  {
    title: "Executive AI Systems",
    description: "Enterprise-grade automation for C-suite decision support.",
    icon: Users,
    size: "small",
  },
  {
    title: "Process Optimization",
    description: "Identify bottlenecks and implement AI solutions for maximum efficiency.",
    icon: TrendingUp,
    size: "small",
  },
  {
    title: "Marketing Automation",
    description: "AI-driven content and campaign automation that scales your reach.",
    icon: Zap,
    size: "medium",
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing tech stack.",
    icon: Sparkles,
    size: "small",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-tech-cyan mb-4 block">
            The Spells I Cast
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Services & Solutions</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From strategy to implementation, I offer end-to-end AI solutions that deliver real results.
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
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`${gridClass} relative group`}
                >
                  {/* Animated border */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-wizard-purple via-tech-cyan to-wizard-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />

                  {/* Card content */}
                  <div className="relative h-full glass rounded-2xl p-6 flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-wizard-purple/20 to-tech-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-wizard-gold" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-secondary flex-grow">
                      {service.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-4 flex items-center gap-2 text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="w-1.5 h-1.5 rounded-full bg-wizard-gold animate-pulse" />
                      Learn more
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-wizard-purple/30 to-transparent" />
    </section>
  );
}
