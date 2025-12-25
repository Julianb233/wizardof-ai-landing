"use client";

import { motion } from "framer-motion";
import { getTemplateStats, getMostDownloadedTemplates } from "@/app/lib/template-data";
import { Package, Download, Star, TrendingUp, Award } from "lucide-react";

export function TemplatesDashboard() {
  const stats = getTemplateStats();
  const topTemplates = getMostDownloadedTemplates(5);

  const statCards = [
    {
      icon: Package,
      label: "Total Templates",
      value: stats.totalTemplates,
      gradient: "from-cosmic-cyan to-cosmic-cyan-bright",
      glow: "rgba(34, 211, 238, 0.5)"
    },
    {
      icon: Download,
      label: "Total Downloads",
      value: stats.totalDownloads.toLocaleString(),
      gradient: "from-nebula-purple to-cosmic-violet",
      glow: "rgba(168, 85, 247, 0.5)"
    },
    {
      icon: Star,
      label: "Average Rating",
      value: stats.avgRating,
      gradient: "from-cosmic-pink to-cosmic-magenta",
      glow: "rgba(236, 72, 153, 0.5)"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-cosmic rounded-2xl p-6 border border-white/10"
              whileHover={{ y: -5, scale: 1.02 }}
              style={{ boxShadow: `0 0 30px ${stat.glow.replace('0.5', '0.1')}` }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center flex-shrink-0`}
                  style={{ boxShadow: `0 0 20px ${stat.glow}` }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <p className="text-text-secondary text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold gradient-text-aurora">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Templates by category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass-cosmic rounded-2xl p-6 border border-white/10"
      >
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-cosmic-cyan" />
          <h3 className="text-xl font-bold text-white">Templates by Category</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(stats.categoryCounts).map(([category, count], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
              className="flex items-center justify-between p-4 rounded-xl glass border border-white/10 hover:border-cosmic-cyan transition-colors"
              whileHover={{ x: 5 }}
            >
              <span className="text-text-primary font-medium">{category}</span>
              <span className="px-3 py-1 rounded-full bg-cosmic-cyan/20 text-cosmic-cyan text-sm font-semibold">
                {count}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Most downloaded templates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="glass-cosmic rounded-2xl p-6 border border-white/10"
      >
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-cosmic-pink" />
          <h3 className="text-xl font-bold text-white">Most Downloaded</h3>
        </div>
        <div className="space-y-4">
          {topTemplates.map((template, index) => {
            const Icon = template.icon;
            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-cosmic-cyan transition-colors group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                {/* Rank badge */}
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${template.gradient} flex items-center justify-center flex-shrink-0 font-bold text-white text-sm`}
                >
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${template.gradient} flex items-center justify-center flex-shrink-0`}
                  style={{ boxShadow: `0 0 15px ${template.glow}` }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Info */}
                <div className="flex-grow">
                  <h4 className="text-white font-semibold group-hover:text-cosmic-cyan transition-colors">
                    {template.title}
                  </h4>
                  <p className="text-text-secondary text-sm">{template.category}</p>
                </div>

                {/* Stats */}
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
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Quick stats summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="glass-cosmic rounded-2xl p-6 border border-white/10 text-center"
      >
        <p className="text-text-secondary mb-2">
          All templates are <span className="text-cosmic-cyan font-semibold">free</span> with your Wizard of AI subscription
        </p>
        <p className="text-text-muted text-sm">
          Download unlimited templates and get started in minutes
        </p>
      </motion.div>
    </div>
  );
}
