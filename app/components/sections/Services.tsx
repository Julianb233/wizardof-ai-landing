"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollReveal";
import { Star, Sparkles, Wand2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "AI Strategy & Consulting",
    image: "/images/workflow-wizard.png",
    size: "large",
  },
  {
    title: "Backend Automation",
    image: "/images/lead-gen-machine.png",
    size: "medium",
  },
  {
    title: "Custom Bot Development",
    image: "/images/24-hour-support-bot.png",
    size: "medium",
  },
  {
    title: "Lead Qualification",
    image: "/images/appointment-setter.png",
    size: "small",
  },
  {
    title: "Executive AI Systems",
    image: "/images/an-accountant.png",
    size: "small",
  },
  {
    title: "Process Optimization",
    image: "/images/content-factory.png",
    size: "small",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text-aurora">Services & Solutions</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From strategy to implementation, I offer <span className="text-nebula-purple font-semibold">end-to-end AI solutions</span> that deliver real results.
          </p>
        </ScrollReveal>

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
                  <div className="relative h-full glass-cosmic rounded-2xl p-6 flex flex-col border border-white/5">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover rounded-lg mb-4"
                      />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cosmic-cyan transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
