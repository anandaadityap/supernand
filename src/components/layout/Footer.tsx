'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@supernand.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="glass-card mt-20 rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-brutal text-2xl text-gradient-lime">
              SUPER NAND
            </Link>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              Building exceptional digital products with precision and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brutal text-lg mb-4">QUICK LINKS</h3>
            <div className="flex flex-col gap-2">
              {['About', 'Services', 'Portfolio', 'Contact'].map(item => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-brutal text-lg mb-4">CONNECT</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-[var(--color-primary)]/20 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-glass-border)] text-center text-[var(--color-text-secondary)] text-sm">
          © {new Date().getFullYear()} Super Nand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
