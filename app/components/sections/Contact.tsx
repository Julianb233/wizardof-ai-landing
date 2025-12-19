"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";
import { Send, Sparkles, Mail, MessageSquare, User, Loader2, Calendar, Wand2, Star, Zap } from "lucide-react";

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
      {/* Cosmic gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(34, 211, 238, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 80% 20%, rgba(168, 85, 247, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 60%)
          `,
        }}
      />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-10 right-20 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating stars */}
      {Array.from({ length: 15 }).map((_, i) => (
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
            rotate: [0, 180, 360],
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
                "0 0 20px rgba(34, 211, 238, 0.3)",
                "0 0 40px rgba(168, 85, 247, 0.5)",
                "0 0 20px rgba(34, 211, 238, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-cosmic-cyan" />
            <span className="text-sm font-semibold text-white">Begin Your Journey</span>
            <Zap className="w-4 h-4 text-cosmic-pink" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text-aurora">Summon the Wizard</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ready to transform your business with <span className="text-cosmic-cyan font-semibold">AI magic</span>? Let&apos;s create something <span className="text-nebula-purple font-semibold">extraordinary</span> together.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <ScrollReveal direction="left" className="flex flex-col justify-center">
            <div className="space-y-8">
              {/* Cosmic portal orb decoration */}
              <div className="relative w-40 h-40 mx-auto md:mx-0">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{
                    background: "conic-gradient(from 0deg, rgba(34, 211, 238, 0.6), rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6), rgba(34, 211, 238, 0.6))",
                  }}
                />
                <motion.div
                  className="relative w-full h-full rounded-full glass-cosmic flex items-center justify-center border border-white/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Wand2 className="w-16 h-16 text-cosmic-cyan" />
                  </motion.div>
                </motion.div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Let&apos;s Work Together
                </h3>
                <p className="text-text-secondary mb-6">
                  Whether you&apos;re looking for <span className="text-cosmic-cyan font-semibold">AI automation</span>, executive solutions, or personal coaching, I&apos;m here to help you achieve extraordinary results.
                </p>

                {/* Book a Call CTA - PRIMARY */}
                <motion.a
                  href="https://api.leadconnectorhq.com/widget/booking/LJlYwAZ7flnJCYpRDkoU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cosmic flex items-center justify-center gap-3 text-lg w-full mb-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-6 h-6" />
                  <span>Book a Free Discovery Call</span>
                  <Sparkles className="w-5 h-5" />
                </motion.a>

                {/* Contact links */}
                <div className="space-y-4">
                  <motion.a
                    href="mailto:julian@aiacrobatics.com"
                    className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors group p-3 rounded-xl glass-cosmic border border-white/10"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-cosmic-cyan to-nebula-purple flex items-center justify-center"
                      style={{ boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="font-medium">julian@aiacrobatics.com</span>
                  </motion.a>
                  <motion.a
                    href="https://aiacrobatics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors group p-3 rounded-xl glass-cosmic border border-white/10"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-nebula-purple to-cosmic-pink flex items-center justify-center"
                      style={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                    >
                      <MessageSquare className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="font-medium">Visit AI Acrobatics</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-[2px] rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #22D3EE, #A855F7, #EC4899, #E879F9, #22D3EE)",
                  backgroundSize: "400% 400%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Outer glow */}
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-50"
                style={{
                  background: "linear-gradient(135deg, rgba(34, 211, 238, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))",
                }}
              />

              <div className="relative glass-cosmic rounded-2xl p-8 border border-white/10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 360] }}
                      transition={{ duration: 1 }}
                      className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cosmic-cyan via-nebula-purple to-cosmic-pink flex items-center justify-center"
                      style={{ boxShadow: "0 0 40px rgba(168, 85, 247, 0.5)" }}
                    >
                      <Sparkles className="w-12 h-12 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
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
                      <label className="block text-sm font-medium text-white mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cosmic-cyan" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-bg-darker/80 border-2 border-cosmic-cyan/30 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-cosmic-cyan transition-colors"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-nebula-purple" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-bg-darker/80 border-2 border-nebula-purple/30 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-nebula-purple transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    {/* Message field */}
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Your Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-cosmic-pink" />
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-bg-darker/80 border-2 border-cosmic-pink/30 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-cosmic-pink transition-colors resize-none"
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
                      className="w-full btn-cosmic flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed py-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          Casting Spell...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          Send Message
                          <Sparkles className="w-5 h-5" />
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
    </section>
  );
}
