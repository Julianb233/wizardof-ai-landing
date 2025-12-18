"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollReveal";
import { CounterAnimation, PercentageCounter } from "@/app/components/animations/CounterAnimation";
import { Quote, Star } from "lucide-react";

const stats = [
  { value: 70, suffix: "%", label: "Automation Achieved", description: "Average process automation for clients" },
  { value: 40, suffix: "%", label: "Client Growth", description: "Average increase in new clients" },
  { value: 65, suffix: "%", label: "Engagement Boost", description: "Content strategy optimization results" },
  { value: 10, suffix: "+", label: "Years Experience", description: "Delivering AI solutions" },
];

const testimonials = [
  {
    quote: "Julian automated over 70% of our lead qualification process, resulting in a 40% increase in new clients.",
    author: "Marketing Agency CEO",
    role: "AI Acrobatics Client",
  },
  {
    quote: "The executive AI system gave me back 15 hours a week. I can finally focus on strategic decisions.",
    author: "Tech Startup Founder",
    role: "ExecTech AI Client",
  },
  {
    quote: "His coaching transformed not just my business, but my entire approach to life and success.",
    author: "Entrepreneur",
    role: "Peak Performance Client",
  },
];

export function Results() {
  return (
    <section id="results" className="py-24 md:py-32 relative bg-bg-dark/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-wizard-gold mb-4 block">
            The Grimoire
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Proven Results</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real numbers from real transformations. See what magic can do for your business.
          </p>
        </ScrollReveal>

        {/* Stats grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20" staggerDelay={0.15}>
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="text-center p-6 glass rounded-2xl card-hover">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.suffix === "%" ? (
                    <PercentageCounter value={stat.value} />
                  ) : (
                    <CounterAnimation value={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-lg font-semibold text-text-primary mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-text-muted">
                  {stat.description}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Testimonials */}
        <ScrollReveal delay={0.3}>
          <h3 className="text-2xl font-bold text-center mb-12">
            <span className="text-text-primary">Client </span>
            <span className="text-wizard-gold">Testimonials</span>
          </h3>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="relative group h-full">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-wizard-purple to-tech-cyan opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 rounded-2xl" />

                <div className="relative h-full glass rounded-2xl p-6 flex flex-col">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-wizard-purple/50 mb-4" />

                  {/* Quote text */}
                  <p className="text-text-secondary italic flex-grow mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-wizard-purple to-tech-cyan flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-text-muted">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-wizard-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-tech-cyan/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
