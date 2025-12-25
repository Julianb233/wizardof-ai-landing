"use client";

import { motion } from "framer-motion";
import { Template } from "@/app/lib/template-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface WorkflowDiagramProps {
  template: Template;
}

export function WorkflowDiagram({ template }: WorkflowDiagramProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white mb-6">Implementation Workflow</h3>

      <div className="relative">
        {/* Vertical connecting line */}
        <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-cosmic-cyan via-nebula-purple to-cosmic-pink opacity-30" />

        <div className="space-y-6">
          {template.workflow.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative flex gap-4"
            >
              {/* Step number circle */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${template.gradient} flex items-center justify-center font-bold text-white shadow-lg`}
                  style={{ boxShadow: `0 0 20px ${template.glow}` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.step}
                </motion.div>

                {/* Animated checkmark on hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-cosmic-cyan drop-shadow-glow" />
                </motion.div>
              </div>

              {/* Step content card */}
              <motion.div
                className="flex-grow glass-cosmic rounded-xl p-6 border border-white/10 group hover:border-cosmic-cyan transition-all"
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cosmic-cyan transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-text-secondary">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  {index < template.workflow.length - 1 && (
                    <motion.div
                      className="flex-shrink-0 text-cosmic-cyan opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  )}
                </div>

                {/* Progress indicator */}
                <div className="mt-4">
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${template.gradient}`}
                      initial={{ width: "0%" }}
                      animate={{ width: `${((index + 1) / template.workflow.length) * 100}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Completion badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: template.workflow.length * 0.1 + 0.5 }}
        className="flex items-center justify-center gap-3 p-6 glass-cosmic rounded-xl border border-cosmic-cyan/30 bg-cosmic-cyan/5"
      >
        <CheckCircle2 className="w-6 h-6 text-cosmic-cyan" />
        <div>
          <p className="text-white font-semibold">Ready to Deploy</p>
          <p className="text-text-secondary text-sm">
            Estimated implementation time: {template.implementationTime}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
