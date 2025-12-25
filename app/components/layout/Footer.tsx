"use client";

import { Sparkles, ExternalLink, Heart } from "lucide-react";
import Image from "next/image";

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
        {/* Top section - Profile and Heading */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6">
            {/* Profile Image */}
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-wizard-purple/30">
              <Image
                src="/images/wizard-of-ai-profile.png"
                alt="Julian Bradley - The Wizard of AI"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold">
              <span className="gradient-text-aurora">Unlock the Power of AI</span>
            </h3>
          </div>
        </div>

        {/* Links Grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left - Quick Links */}
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
                <a href="/templates" className="text-text-secondary hover:text-text-primary transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Middle - Ventures */}
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

          {/* Right - Connect (Social Links) */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
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
