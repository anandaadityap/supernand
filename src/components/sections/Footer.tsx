"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/supernand", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/supernand", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/in/supernand", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@supernand.tech", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-accent/10 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight group transition-all hover:scale-105"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-accent group-hover:text-accent-bright transition-colors">N</span>
            <span className="text-text group-hover:text-accent transition-colors">anda</span>
          </Link>

          {/* Social Links - enhanced glass with hover glow */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card-hover w-12 h-12 rounded-full flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/60 hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright with accent */}
          <p className="text-sm text-text-muted">
            © {currentYear} <span className="text-accent">Nanda</span>. All rights reserved.
          </p>
        </div>
        
        {/* Bottom accent line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>
    </footer>
  );
}