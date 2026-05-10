"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Split title into words
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      titleRef.current.innerHTML = text
        .split(' ')
        .map(word => `<span class="word inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`)
        .join(' ');
    }

    // Hero text stagger reveal
    tl.fromTo('.word span',
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.6, stagger: 0.1 }
    );

    // Subtitle fade up
    tl.fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.3'
    );

    // CTA fade up
    tl.fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.3'
    );

  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* Live animated gradient background */}
      <div className="absolute inset-0 bg-gradient-live opacity-[0.15]" />
      
      {/* Animated orbs - floating lime accents */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-[80px] animate-orb-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-bright/10 blur-[100px] animate-orb-float" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-accent-yellow/10 blur-[60px] animate-orb-float" style={{ animationDelay: '-8s' }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-accent/30 animate-float" />
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-accent-bright/40 animate-float-reverse" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-32 left-20 w-5 h-5 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '-4s' }} />
      <div className="absolute bottom-40 right-10 w-2 h-2 rounded-full bg-accent-bright/50 animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent-yellow/30 animate-pulse-glow" style={{ animationDelay: '-1.5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Accent badge */}
        <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full mb-8 animate-float" style={{ animationDuration: '4s' }}>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          <span className="text-xs font-mono text-accent">IT Company & SaaS Developer</span>
        </div>

        {/* Headline */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-text"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Super Nand
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building the future of software through innovative SaaS products and custom development projects.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg font-semibold rounded-xl hover:bg-accent-bright transition-all duration-300 glow-accent hover:scale-105"
          >
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            Start Your Project
          </Link>
          <Link
            href="/#portfolio"
            className="group inline-flex items-center gap-2 px-8 py-4 glass-subtle text-text-muted rounded-xl hover:border-accent/50 hover:text-text hover:scale-105 transition-all duration-300"
          >
            View Our Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            { value: '5+', label: 'Years' },
            { value: '50+', label: 'Projects' },
            { value: '30+', label: 'Clients' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-accent">{stat.value}</div>
              <div className="text-xs text-text-muted uppercase tracking-widest font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="glass-subtle w-6 h-10 rounded-full flex justify-center pt-2 animate-float" style={{ animationDuration: '2s' }}>
            <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}