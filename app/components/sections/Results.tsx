"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollReveal";
import { CounterAnimation, PercentageCounter } from "@/app/components/animations/CounterAnimation";
import { Quote, Star, Trophy, TrendingUp, Sparkles } from "lucide-react";

const stats = [
  { value: 70, suffix: "%", label: "Automation Achieved", description: "Average process automation for clients", color: "wizard-orange", glow: "rgba(236, 67, 15, 0.5)" },
  { value: 40, suffix: "%", label: "Client Growth", description: "Average increase in new clients", color: "electric-purple", glow: "rgba(168, 85, 247, 0.5)" },
  { value: 65, suffix: "%", label: "Engagement Boost", description: "Content strategy optimization results", color: "neon-cyan", glow: "rgba(34, 211, 238, 0.5)" },
  { value: 10, suffix: "+", label: "Years Experience", description: "Delivering AI solutions", color: "magic-gold", glow: "rgba(251, 191, 36, 0.5)" },
];

const testimonials = [
  {
    quote: "Julian automated over 70% of our lead qualification process, resulting in a 40% increase in new clients.",
    author: "Marketing Agency CEO",
    role: "AI Acrobatics Client",
    gradient: "from-wizard-orange to-hot-pink",
  },
  {
    quote: "The executive AI system gave me back 15 hours a week. I can finally focus on strategic decisions.",
    author: "Tech Startup Founder",
    role: "ExecTech AI Client",
    gradient: "from-electric-purple to-neon-cyan",
  },
  {
    quote: "His coaching transformed not just my business, but my entire approach to life and success.",
    author: "Entrepreneur",
    role: "Peak Performance Client",
    gradient: "from-neon-cyan to-magic-gold",
  },
];

export function Results() {
  return (
    <section id="results" className="py-24 md:py-32 relative overflow-hidden">
      {/* Vibrant gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 100% 50% at 0% 50%, rgba(236, 67, 15, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 100% 50% at 100% 50%, rgba(34, 211, 238, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 50% 80% at 50% 100%, rgba(168, 85, 247, 0.2) 0%, transparent 60%)
          `,
        }}
      />

      {/* Animated floating elements */}
      <motion.div
        className="absolute top-20 left-10 pointer-events-none"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Trophy className="w-8 h-8 text-magic-gold opacity-40" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 pointer-events-none"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <TrendingUp className="w-10 h-10 text-neon-cyan opacity-40" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-vibrant mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(251, 191, 36, 0.3)",
                "0 0 40px rgba(251, 191, 36, 0.5)",
                "0 0 20px rgba(251, 191, 36, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Trophy className="w-4 h-4 text-magic-gold" />
            <span className="text-sm font-semibold text-white">The Grimoire</span>
            <Sparkles className="w-4 h-4 text-wizard-orange" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text-aurora">Proven Results</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real numbers from real transformations. See what <span className="text-magic-gold font-semibold">magic</span> can do for your business.
          </p>
        </ScrollReveal>

        {/* Stats grid with glowing numbers */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20" staggerDelay={0.15}>
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"
                  style={{ background: stat.glow }}
                />

                <div className="relative text-center p-6 glass-vibrant rounded-2xl border border-white/10">
                  <motion.div
                    className={`text-5xl md:text-6xl font-bold mb-2`}
                    style={{
                      color: stat.glow.replace("0.5", "1"),
                      textShadow: `0 0 40px ${stat.glow}`,
                    }}
                    animate={{
                      textShadow: [
                        `0 0 20px ${stat.glow}`,
                        `0 0 60px ${stat.glow}`,
                        `0 0 20px ${stat.glow}`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.suffix === "%" ? (
                      <PercentageCounter value={stat.value} />
                    ) : (
                      <CounterAnimation value={stat.value} suffix={stat.suffix} />
                    )}
                  </motion.div>
                  <div className="text-lg font-semibold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-text-muted">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Testimonials */}
        <ScrollReveal delay={0.3}>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Client </span>
            <motion.span
              className="text-magic-gold"
              animate={{
                textShadow: [
                  "0 0 10px rgba(251, 191, 36, 0.5)",
                  "0 0 30px rgba(251, 191, 36, 0.8)",
                  "0 0 10px rgba(251, 191, 36, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Testimonials
            </motion.span>
          </h3>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="relative group h-full"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-electric-purple/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl" />

                <div className="relative h-full glass-vibrant rounded-2xl p-6 flex flex-col border border-white/10">
                  {/* Quote icon with gradient */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Quote text */}
                  <p className="text-text-secondary italic flex-grow mb-6 text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}
                      animate={{ boxShadow: ["0 0 15px rgba(168, 85, 247, 0.3)", "0 0 25px rgba(168, 85, 247, 0.5)", "0 0 15px rgba(168, 85, 247, 0.3)"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <Star className="w-6 h-6 text-white" fill="currentColor" />
                    </motion.div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-neon-cyan">
                        {testimonial.role}
                      </div>
                    </div>
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
