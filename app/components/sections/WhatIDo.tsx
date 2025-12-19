"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollReveal";
import { Star, Sparkles, Wand2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Lead Gen Machine",
    image: "/images/lead-gen-machine.png",
  },
  {
    title: "24-Hour Support Bot",
    image: "/images/24-hour-support-bot.png",
  },
  {
    title: "Appointment Setter",
    image: "/images/appointment-setter.png",
  },
  {
    title: "AI Accountant",
    image: "/images/an-accountant.png",
  },
  {
    title: "Content Factory",
    image: "/images/content-factory.png",
  },
  {
    title: "Workflow Wizard",
    image: "/images/workflow-wizard.png",
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text-aurora">What I Do</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Building <span className="text-cosmic-cyan font-semibold">AI-powered empires</span> that transform how businesses operate and how people live.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -15, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group h-full"
              >
                <div className="relative h-full glass-cosmic rounded-2xl p-8 flex flex-col border border-white/10 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  <h3 className="text-2xl font-bold text-white mb-3 mt-4 group-hover:text-cosmic-cyan transition-colors">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
