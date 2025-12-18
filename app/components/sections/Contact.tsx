"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";
import { Send, Sparkles, Mail, MessageSquare, User, Loader2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-wizard-gold mb-4 block">
            Begin Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Summon the Wizard</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ready to transform your business with AI magic? Let&apos;s create something extraordinary together.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <ScrollReveal direction="left" className="flex flex-col justify-center">
            <div className="space-y-8">
              {/* Magic orb decoration */}
              <div className="relative w-32 h-32 mx-auto md:mx-0">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-wizard-purple to-tech-cyan blur-xl"
                />
                <div className="relative w-full h-full rounded-full glass flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-wizard-gold" />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Let&apos;s Work Together
                </h3>
                <p className="text-text-secondary mb-6">
                  Whether you&apos;re looking for AI automation, executive solutions, or personal coaching, I&apos;m here to help you achieve extraordinary results.
                </p>

                {/* Contact links */}
                <div className="space-y-4">
                  <a
                    href="mailto:julian@aiacrobatics.com"
                    className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-wizard-purple/20 flex items-center justify-center group-hover:bg-wizard-purple/30 transition-colors">
                      <Mail className="w-5 h-5 text-wizard-purple" />
                    </div>
                    <span>julian@aiacrobatics.com</span>
                  </a>
                  <a
                    href="https://aiacrobatics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-tech-cyan/20 flex items-center justify-center group-hover:bg-tech-cyan/30 transition-colors">
                      <MessageSquare className="w-5 h-5 text-tech-cyan" />
                    </div>
                    <span>Book a consultation</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Form glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-wizard-purple via-tech-cyan to-wizard-gold rounded-2xl blur opacity-20" />

              <div className="relative glass rounded-2xl p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-wizard-purple to-tech-cyan flex items-center justify-center"
                    >
                      <Sparkles className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-text-secondary">
                      The wizard has received your message and will respond soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name field */}
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-bg-darker border border-wizard-purple/20 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-wizard-purple/50 transition-colors"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-bg-darker border border-wizard-purple/20 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-wizard-purple/50 transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    {/* Message field */}
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">
                        Your Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-text-muted" />
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-bg-darker border border-wizard-purple/20 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-wizard-purple/50 transition-colors resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                    </div>

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-magic flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Casting Spell...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-wizard-purple/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-tech-cyan/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
