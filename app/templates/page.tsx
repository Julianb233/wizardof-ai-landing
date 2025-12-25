"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/app/components/layout/Navigation";
import { Footer } from "@/app/components/layout/Footer";
import { TemplatesDashboard } from "@/app/components/templates/TemplatesDashboard";
import { TemplateGallery } from "@/app/components/templates/TemplateGallery";
import { ScrollReveal } from "@/app/components/animations/ScrollReveal";
import { Sparkles, Zap, Package } from "lucide-react";

export default function TemplatesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background effects */}
          <motion.div
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <ScrollReveal className="text-center mb-12">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cosmic mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-4 h-4 text-cosmic-cyan" />
                <span className="text-sm font-semibold text-white">Pre-built AI Agent Templates</span>
                <Package className="w-4 h-4 text-cosmic-pink" />
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="gradient-text-aurora">AI Agent Templates</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready-to-deploy AI agent templates for every business need. Deploy in minutes, customize to perfection.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.a
                  href="#templates"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cosmic-cyan to-nebula-purple text-white font-semibold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" }}
                >
                  <Zap className="w-5 h-5" />
                  Browse Templates
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-cosmic text-white font-semibold border border-white/20"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Need Custom Templates?
                </motion.a>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                <span className="text-white">Template </span>
                <span className="gradient-text-aurora">Library Stats</span>
              </h2>
              <p className="text-text-secondary text-center text-lg">
                Explore our growing collection of production-ready AI agent templates
              </p>
            </ScrollReveal>

            <TemplatesDashboard />
          </div>
        </section>

        {/* Templates Gallery Section */}
        <section id="templates" className="py-20 relative overflow-hidden">
          {/* Background gradient */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <ScrollReveal className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                <span className="gradient-text-aurora">All Templates</span>
              </h2>
              <p className="text-text-secondary text-center text-lg">
                Find the perfect AI agent template for your business needs
              </p>
            </ScrollReveal>

            <TemplateGallery />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4">
            <ScrollReveal>
              <motion.div
                className="glass-cosmic rounded-3xl p-12 border border-white/10 text-center"
                style={{ boxShadow: "0 0 80px rgba(34, 211, 238, 0.2)" }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cosmic-cyan to-nebula-purple flex items-center justify-center mx-auto mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text-aurora">Ready to Get Started?</span>
                </h2>
                <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                  All templates are free with your Wizard of AI subscription. Deploy unlimited AI agents and transform your business today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/login"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cosmic-cyan to-nebula-purple text-white font-semibold text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" }}
                  >
                    <Zap className="w-5 h-5" />
                    Get Started Free
                  </motion.a>
                  <motion.a
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-cosmic text-white font-semibold border border-white/20"
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Sales
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
