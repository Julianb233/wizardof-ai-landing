"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/app/components/layout/Navigation";
import { Footer } from "@/app/components/layout/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollReveal";
import { getServiceBySlug, services } from "@/app/lib/services-data";
import { ArrowLeft, CheckCircle, ArrowRight, Sparkles, Star, Wand2 } from "lucide-react";

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
            <Link href="/#services" className="text-cosmic-cyan hover:underline">
              Return to Services
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const ServiceIcon = service.icon;

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
              background: `radial-gradient(circle, ${service.glow} 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* Back link */}
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-cosmic-cyan transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                {/* Icon badge */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                  style={{ boxShadow: `0 0 40px ${service.glow}` }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <ServiceIcon className="w-10 h-10 text-white" />
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="gradient-text-aurora">{service.heroHeadline}</span>
                </h1>

                <p className="text-xl text-text-secondary mb-8">
                  {service.heroSubheadline}
                </p>

                <motion.a
                  href="#contact"
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold text-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ boxShadow: `0 0 30px ${service.glow}` }}
                >
                  <Wand2 className="w-5 h-5" />
                  {service.cta}
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </ScrollReveal>

              {/* Floating card preview */}
              <ScrollReveal delay={0.2}>
                <motion.div
                  className="glass-cosmic rounded-2xl p-8 border border-white/10"
                  whileHover={{ y: -10 }}
                  style={{ boxShadow: `0 0 60px ${service.glow.replace('0.5', '0.2')}` }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
                  <ul className="space-y-4">
                    {service.benefits.slice(0, 4).map((benefit, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-cosmic-cyan mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-white font-semibold">{benefit.title}</span>
                          <p className="text-text-secondary text-sm mt-1">{benefit.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cosmic mb-6"
              >
                <Sparkles className="w-4 h-4 text-cosmic-pink" />
                <span className="text-sm font-semibold text-white">The Process</span>
                <Star className="w-4 h-4 text-cosmic-cyan" fill="currentColor" />
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text-aurora">How It Works</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                A proven process designed for maximum results with minimal disruption.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.1}>
              {service.process.map((step, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="relative glass-cosmic rounded-2xl p-6 h-full border border-white/10"
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    {/* Step number */}
                    <motion.div
                      className={`absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white font-bold`}
                      style={{ boxShadow: `0 0 20px ${service.glow}` }}
                    >
                      {step.step}
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mt-4 mb-3">{step.title}</h3>
                    <p className="text-text-secondary text-sm">{step.description}</p>

                    {/* Connector line */}
                    {index < service.process.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/20 to-transparent" />
                    )}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${service.glow.replace('0.5', '0.1')} 0%, transparent 70%)`,
            }}
          />

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text-aurora">Perfect For</span>
                </h2>
                <p className="text-text-secondary text-lg mb-8">
                  Common use cases where {service.title.toLowerCase()} delivers exceptional results.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-4">
                  {service.useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 glass-cosmic rounded-xl p-4 border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 10, borderColor: `${service.glow.replace('rgba', 'rgb').replace(', 0.5)', ')')}` }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                      />
                      <span className="text-white">{useCase}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <motion.div
                className="glass-cosmic rounded-3xl p-12 border border-white/10"
                style={{ boxShadow: `0 0 80px ${service.glow.replace('0.5', '0.2')}` }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-6`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <ServiceIcon className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text-aurora">Ready to Get Started?</span>
                </h2>
                <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                  Let&apos;s discuss how {service.title.toLowerCase()} can transform your business.
                  Schedule a free consultation call today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/#contact"
                    className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold text-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ boxShadow: `0 0 30px ${service.glow}` }}
                  >
                    <Wand2 className="w-5 h-5" />
                    {service.cta}
                  </motion.a>
                  <motion.a
                    href="/#services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-cosmic text-white font-semibold border border-white/20"
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Services
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-white">Explore More </span>
                <span className="gradient-text-aurora">Services</span>
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {services
                .filter((s) => s.slug !== slug)
                .slice(0, 3)
                .map((relatedService, index) => {
                  const RelatedIcon = relatedService.icon;
                  return (
                    <StaggerItem key={index}>
                      <Link href={`/services/${relatedService.slug}`}>
                        <motion.div
                          className="glass-cosmic rounded-2xl p-6 border border-white/10 h-full"
                          whileHover={{ y: -10, scale: 1.02 }}
                        >
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${relatedService.gradient} flex items-center justify-center mb-4`}
                            style={{ boxShadow: `0 0 20px ${relatedService.glow}` }}
                          >
                            <RelatedIcon className="w-6 h-6 text-white" />
                          </motion.div>
                          <h3 className="text-lg font-bold text-white mb-2">{relatedService.title}</h3>
                          <p className="text-text-secondary text-sm">{relatedService.description}</p>
                        </motion.div>
                      </Link>
                    </StaggerItem>
                  );
                })}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
