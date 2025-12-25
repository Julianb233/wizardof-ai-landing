"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Template } from "@/app/lib/template-data";
import { Download, Star, Clock, TrendingUp } from "lucide-react";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const Icon = template.icon;

  const difficultyColors = {
    Beginner: "text-green-400 bg-green-400/10",
    Intermediate: "text-yellow-400 bg-yellow-400/10",
    Advanced: "text-cosmic-pink bg-cosmic-pink/10"
  };

  return (
    <Link href={`/templates/${template.id}`}>
      <motion.div
        className="group glass-cosmic rounded-2xl p-6 border border-white/10 h-full flex flex-col cursor-pointer"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{ boxShadow: `0 0 20px ${template.glow.replace('0.5', '0.1')}` }}
      >
        {/* Header with icon and category badge */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${template.gradient} flex items-center justify-center flex-shrink-0`}
            style={{ boxShadow: `0 0 20px ${template.glow}` }}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>

          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[template.difficulty]}`}>
            {template.difficulty}
          </div>
        </div>

        {/* Title and description */}
        <div className="flex-grow mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cosmic-cyan transition-colors">
            {template.title}
          </h3>
          <p className="text-text-secondary text-sm line-clamp-2">
            {template.description}
          </p>
        </div>

        {/* Category */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1 text-xs text-cosmic-cyan font-medium">
            <TrendingUp className="w-3 h-3" />
            {template.category}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-text-secondary">
              <Download className="w-4 h-4" />
              <span>{template.downloads.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span>{template.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs text-text-muted">
            <Clock className="w-3 h-3" />
            <span>{template.implementationTime}</span>
          </div>
        </div>

        {/* Hover effect gradient border */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${template.glow.replace('0.5', '0.3')}, transparent)`,
            zIndex: -1
          }}
        />
      </motion.div>
    </Link>
  );
}
