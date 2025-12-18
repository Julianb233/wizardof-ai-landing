"use client";

import { Sparkles, ExternalLink, Heart } from "lucide-react";

const ventures = [
  { name: "AI Acrobatics", href: "https://aiacrobatics.com" },
  { name: "ExecTech AI", href: "https://exectechai.com" },
  { name: "Julian Bradley", href: "https://julianbradley.com" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/julianbradley" },
  { name: "Twitter", href: "https://twitter.com/julianbradley" },
  { name: "Instagram", href: "https://instagram.com/julianbradley" },
];

export function Footer() {
  return (
    <footer className="py-16 border-t border-wizard-purple/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-wizard-purple to-tech-cyan flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-text-primary">
                TheWizzardOf<span className="text-wizard-gold">.ai</span>
              </span>
            </a>
            <p className="text-text-secondary max-w-md mb-6">
              Transforming businesses through the magic of artificial intelligence.
              Julian Bradley - The Wizard of AI.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg glass text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Ventures</h4>
            <ul className="space-y-3">
              {ventures.map((venture) => (
                <li key={venture.name}>
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
                  >
                    {venture.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-text-secondary hover:text-text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#results" className="text-text-secondary hover:text-text-primary transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-wizard-purple/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Julian Bradley. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-text-muted text-sm">
            Built with <Heart className="w-4 h-4 text-wizard-gold" /> and AI magic
          </p>
        </div>
      </div>
    </footer>
  );
}
