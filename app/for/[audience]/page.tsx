"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/app/components/layout/Navigation";
import { Footer } from "@/app/components/layout/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollReveal";
import { getAudienceBySlug, audiences } from "@/app/lib/audiences-data";
import { ArrowLeft, CheckCircle, ArrowRight, Sparkles, Star, Wand2, AlertTriangle } from "lucide-react";

export default function AudiencePage() {
  const params = useParams();
  const slug = params.audience as string;
  const audience = getAudienceBySlug(slug);

  if (!audience) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Audience Not Found</h1>
            <Link href="/#who-we-serve" className="text-cosmic-cyan hover:underline">
              Return to Who We Serve
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const AudienceIcon = audience.icon;

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
              background: `radial-gradient(circle, ${audience.glow} 0%, transparent 70%)`,
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
              href="/#who-we-serve"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-cosmic-cyan transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Audiences
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                {/* Icon badge */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-6`}
                  style={{ boxShadow: `0 0 40px ${audience.glow}` }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <AudienceIcon className="w-10 h-10 text-white" />
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="gradient-text-aurora">{audience.title}</span>
                </h1>

                <p className="text-2xl text-white/90 font-semibold mb-4">
                  {audience.subtitle}
                </p>

                <p className="text-xl text-text-secondary mb-8">
                  {audience.description}
                </p>

                <motion.a
                  href="#contact"
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r ${audience.gradient} text-white font-semibold text-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ boxShadow: `0 0 30px ${audience.glow}` }}
                >
                  <Wand2 className="w-5 h-5" />
                  {audience.cta}
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </ScrollReveal>

              {/* Testimonial preview */}
              <ScrollReveal delay={0.2}>
                <motion.div
                  className="glass-cosmic rounded-2xl p-8 border border-white/10"
                  whileHover={{ y: -10 }}
                  style={{ boxShadow: `0 0 60px ${audience.glow.replace('0.5', '0.2')}` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <Star className="w-6 h-6 text-cosmic-pink fill-cosmic-pink flex-shrink-0" />
                    <Star className="w-6 h-6 text-cosmic-pink fill-cosmic-pink flex-shrink-0" />
                    <Star className="w-6 h-6 text-cosmic-pink fill-cosmic-pink flex-shrink-0" />
                    <Star className="w-6 h-6 text-cosmic-pink fill-cosmic-pink flex-shrink-0" />
                    <Star className="w-6 h-6 text-cosmic-pink fill-cosmic-pink flex-shrink-0" />
                  </div>
                  <p className="text-white text-lg italic mb-6">
                    &quot;{audience.testimonialPlaceholder}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${audience.gradient}`} />
                    <div>
                      <p className="text-white font-semibold">Real Client</p>
                      <p className="text-text-secondary text-sm">{audience.title}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cosmic mb-6"
              >
                <AlertTriangle className="w-4 h-4 text-cosmic-magenta" />
                <span className="text-sm font-semibold text-white">Common Challenges</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text-aurora">What Keeps You Up at Night</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                If you&apos;re a {audience.title.toLowerCase()}, you&apos;re probably facing these challenges every single day.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {audience.painPoints.map((pain, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="glass-cosmic rounded-2xl p-8 border border-white/10 h-full"
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center flex-shrink-0`}
                        style={{ boxShadow: `0 0 20px ${audience.glow}` }}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <AlertTriangle className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{pain.title}</h3>
                        <p className="text-text-secondary">{pain.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${audience.glow.replace('0.5', '0.1')} 0%, transparent 70%)`,
            }}
          />

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <ScrollReveal className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cosmic mb-6"
              >
                <Sparkles className="w-4 h-4 text-cosmic-cyan" />
                <span className="text-sm font-semibold text-white">AI-Powered Solutions</span>
                <Star className="w-4 h-4 text-cosmic-pink" fill="currentColor" />
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text-aurora">How We Help You Win</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Custom AI solutions built specifically for {audience.title.toLowerCase()} that solve your unique challenges.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {audience.solutions.map((solution, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="glass-cosmic rounded-2xl p-8 border border-white/10 h-full"
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center flex-shrink-0`}
                        style={{ boxShadow: `0 0 20px ${audience.glow}` }}
                      >
                        <CheckCircle className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                        <p className="text-text-secondary">{solution.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <motion.div
                className="glass-cosmic rounded-3xl p-12 border border-white/10"
                style={{ boxShadow: `0 0 80px ${audience.glow.replace('0.5', '0.2')}` }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mx-auto mb-6`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <AudienceIcon className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text-aurora">Ready to Transform Your Business?</span>
                </h2>
                <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                  Let&apos;s discuss how AI can solve your specific challenges as a {audience.title.toLowerCase()}.
                  Book a free consultation call today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/#contact"
                    className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r ${audience.gradient} text-white font-semibold text-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ boxShadow: `0 0 30px ${audience.glow}` }}
                  >
                    <Wand2 className="w-5 h-5" />
                    {audience.cta}
                  </motion.a>
                  <motion.a
                    href="/#services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-cosmic text-white font-semibold border border-white/20"
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Services
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Related Audiences */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-white">We Also Serve </span>
                <span className="gradient-text-aurora">Other Professionals</span>
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {audiences
                .filter((a) => a.slug !== slug)
                .slice(0, 3)
                .map((relatedAudience, index) => {
                  const RelatedIcon = relatedAudience.icon;
                  return (
                    <StaggerItem key={index}>
                      <Link href={`/for/${relatedAudience.slug}`}>
                        <motion.div
                          className="glass-cosmic rounded-2xl p-6 border border-white/10 h-full"
                          whileHover={{ y: -10, scale: 1.02 }}
                        >
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${relatedAudience.gradient} flex items-center justify-center mb-4`}
                            style={{ boxShadow: `0 0 20px ${relatedAudience.glow}` }}
                          >
                            <RelatedIcon className="w-6 h-6 text-white" />
                          </motion.div>
                          <h3 className="text-lg font-bold text-white mb-2">{relatedAudience.title}</h3>
                          <p className="text-text-secondary text-sm mb-3">{relatedAudience.subtitle}</p>
                          <p className="text-text-secondary text-xs">{relatedAudience.description}</p>
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
