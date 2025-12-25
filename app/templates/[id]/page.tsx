"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/app/components/layout/Navigation";
import { Footer } from "@/app/components/layout/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollReveal";
import { getTemplateById, templates } from "@/app/lib/template-data";
import { WorkflowDiagram } from "@/app/components/templates/WorkflowDiagram";
import { DownloadButton } from "@/app/components/templates/DownloadButton";
import {
  ArrowLeft,
  CheckCircle,
  Download,
  Star,
  Clock,
  Zap,
  Shield,
  Code,
  Users,
  TrendingUp,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function TemplateDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const template = getTemplateById(id);

  if (!template) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Template Not Found</h1>
            <p className="text-text-secondary mb-8">The template you're looking for doesn't exist.</p>
            <Link href="/templates" className="text-cosmic-cyan hover:underline">
              Return to Templates
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const Icon = template.icon;

  // Get related templates (same category, different template)
  const relatedTemplates = templates
    .filter(t => t.category === template.category && t.id !== template.id)
    .slice(0, 3);

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
              background: `radial-gradient(circle, ${template.glow} 0%, transparent 70%)`,
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
              href="/templates"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-text-secondary hover:text-cosmic-cyan transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Templates
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <ScrollReveal>
                {/* Category badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cosmic mb-4">
                  <TrendingUp className="w-4 h-4 text-cosmic-cyan" />
                  <span className="text-sm font-semibold text-white">{template.category}</span>
                </div>

                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${template.gradient} flex items-center justify-center mb-6`}
                  style={{ boxShadow: `0 0 40px ${template.glow}` }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text-aurora">{template.title}</span>
                </h1>

                <p className="text-xl text-text-secondary mb-8">
                  {template.longDescription}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-cosmic-cyan" />
                    <span className="text-white font-semibold">{template.downloads.toLocaleString()}</span>
                    <span className="text-text-secondary text-sm">downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{template.rating}</span>
                    <span className="text-text-secondary text-sm">rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cosmic-pink" />
                    <span className="text-white font-semibold">{template.implementationTime}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <DownloadButton
                  templateId={template.id}
                  templateName={template.title}
                  variant="primary"
                />
              </ScrollReveal>

              {/* Info card */}
              <ScrollReveal delay={0.2}>
                <motion.div
                  className="glass-cosmic rounded-2xl p-8 border border-white/10 sticky top-24"
                  whileHover={{ y: -5 }}
                  style={{ boxShadow: `0 0 60px ${template.glow.replace('0.5', '0.1')}` }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-cosmic-cyan" />
                    Quick Info
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-cosmic-cyan mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Difficulty</p>
                        <p className="text-text-secondary text-sm">{template.difficulty}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-cosmic-cyan mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Implementation Time</p>
                        <p className="text-text-secondary text-sm">{template.implementationTime}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Code className="w-5 h-5 text-cosmic-cyan mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Technologies</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {template.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full bg-cosmic-cyan/10 text-cosmic-cyan text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {template.technologies.length > 3 && (
                            <span className="px-3 py-1 rounded-full bg-cosmic-cyan/10 text-cosmic-cyan text-xs font-medium">
                              +{template.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-cosmic-cyan mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Pricing</p>
                        <p className="text-text-secondary text-sm">{template.pricing}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text-aurora">Key Benefits</span>
              </h2>
              <p className="text-text-secondary text-lg">
                Transform your business with these powerful capabilities
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {template.benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="glass-cosmic rounded-2xl p-6 border border-white/10 h-full"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <CheckCircle className="w-8 h-8 text-cosmic-cyan mb-4" />
                    <p className="text-white leading-relaxed">{benefit}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${template.glow.replace('0.5', '0.08')} 0%, transparent 70%)`,
            }}
          />

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text-aurora">Implementation Workflow</span>
              </h2>
              <p className="text-text-secondary text-lg">
                Follow these simple steps to get your AI agent up and running
              </p>
            </ScrollReveal>

            <WorkflowDiagram template={template} />
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="gradient-text-aurora">Perfect For</span>
                </h2>
                <p className="text-text-secondary text-lg mb-8">
                  Common scenarios where this template delivers exceptional results
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-4">
                  {template.useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 glass-cosmic rounded-xl p-4 border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 10, borderColor: template.glow.replace('0.5', '0.8') }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${template.gradient}`}
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

        {/* Prerequisites Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4">
            <ScrollReveal>
              <div className="glass-cosmic rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-cosmic-pink" />
                  Prerequisites
                </h3>
                <ul className="space-y-3">
                  {template.prerequisites.map((prerequisite, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-text-secondary"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-cosmic-cyan mt-0.5 flex-shrink-0" />
                      <span>{prerequisite}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Related Templates */}
        {relatedTemplates.length > 0 && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <ScrollReveal className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <span className="text-white">More in </span>
                  <span className="gradient-text-aurora">{template.category}</span>
                </h2>
              </ScrollReveal>

              <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
                {relatedTemplates.map((relatedTemplate) => {
                  const RelatedIcon = relatedTemplate.icon;
                  return (
                    <StaggerItem key={relatedTemplate.id}>
                      <Link
                        href={`/templates/${relatedTemplate.id}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        <motion.div
                          className="glass-cosmic rounded-2xl p-6 border border-white/10 h-full cursor-pointer"
                          whileHover={{ y: -10, scale: 1.02 }}
                        >
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${relatedTemplate.gradient} flex items-center justify-center mb-4`}
                            style={{ boxShadow: `0 0 20px ${relatedTemplate.glow}` }}
                          >
                            <RelatedIcon className="w-6 h-6 text-white" />
                          </motion.div>
                          <h3 className="text-lg font-bold text-white mb-2 hover:text-cosmic-cyan transition-colors">
                            {relatedTemplate.title}
                          </h3>
                          <p className="text-text-secondary text-sm line-clamp-2">
                            {relatedTemplate.description}
                          </p>
                        </motion.div>
                      </Link>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4">
            <ScrollReveal>
              <motion.div
                className="glass-cosmic rounded-3xl p-12 border border-white/10 text-center"
                style={{ boxShadow: `0 0 80px ${template.glow.replace('0.5', '0.2')}` }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${template.gradient} flex items-center justify-center mx-auto mb-6`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text-aurora">Ready to Deploy?</span>
                </h2>
                <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                  Download this template and start transforming your business today. Free with your Wizard of AI subscription.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <DownloadButton
                    templateId={template.id}
                    templateName={template.title}
                    variant="primary"
                  />
                  <motion.a
                    href="/templates"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-cosmic text-white font-semibold border border-white/20"
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Templates
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
