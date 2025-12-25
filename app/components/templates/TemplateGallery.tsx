"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { templates, getAllCategories, Template } from "@/app/lib/template-data";
import { TemplateCard } from "./TemplateCard";
import { Filter, Search, X } from "lucide-react";

export function TemplateGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const categories = ["All", ...getAllCategories()];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  // Filter templates
  const filteredTemplates = useMemo(() => {
    return templates.filter(template => {
      const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "All" || template.difficulty === selectedDifficulty;
      const matchesSearch =
        searchQuery === "" ||
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedDifficulty("All");
    setSearchQuery("");
  };

  const hasActiveFilters = selectedCategory !== "All" || selectedDifficulty !== "All" || searchQuery !== "";

  return (
    <div className="space-y-8">
      {/* Search and filters */}
      <div className="space-y-6">
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 rounded-xl glass-cosmic border border-white/10 text-text-primary placeholder-text-muted focus:outline-none focus:border-cosmic-cyan focus:ring-2 focus:ring-cosmic-cyan/20 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <Filter className="w-4 h-4" />
            <span>Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cosmic-cyan to-nebula-purple text-white shadow-lg"
                    : "glass border border-white/10 text-text-secondary hover:text-text-primary hover:border-cosmic-cyan"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Difficulty filters */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <Filter className="w-4 h-4" />
            <span>Filter by difficulty:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {difficulties.map((difficulty) => (
              <motion.button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                  selectedDifficulty === difficulty
                    ? "bg-gradient-to-r from-cosmic-cyan to-nebula-purple text-white shadow-lg"
                    : "glass border border-white/10 text-text-secondary hover:text-text-primary hover:border-cosmic-cyan"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {difficulty}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Results count and reset */}
        <div className="flex items-center justify-between">
          <p className="text-text-secondary text-sm">
            Showing <span className="text-cosmic-cyan font-semibold">{filteredTemplates.length}</span> template
            {filteredTemplates.length !== 1 ? "s" : ""}
          </p>
          {hasActiveFilters && (
            <motion.button
              onClick={resetFilters}
              className="text-sm text-cosmic-cyan hover:text-cosmic-cyan-bright transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-4 h-4" />
              Reset filters
            </motion.button>
          )}
        </div>
      </div>

      {/* Templates grid */}
      <AnimatePresence mode="wait">
        {filteredTemplates.length > 0 ? (
          <motion.div
            key="templates-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <TemplateCard template={template} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="no-results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="text-center py-20"
          >
            <div className="glass-cosmic rounded-2xl p-12 border border-white/10 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-cosmic-violet/20 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-cosmic-violet" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No templates found</h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your filters or search query to find what you're looking for.
              </p>
              <motion.button
                onClick={resetFilters}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cosmic-cyan to-nebula-purple text-white font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset all filters
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
