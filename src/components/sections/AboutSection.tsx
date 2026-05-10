"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GlassCard } from '@/components/ui/GlassCard';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-32 px-6 relative" ref={sectionRef}>
      {/* Background geometric accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-surface/50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 about-content">
          <span className="border-2 border-brand-text px-3 py-1 font-mono text-xs uppercase tracking-widest mb-4 inline-block shadow-brutal-sm">
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-archivo font-extrabold uppercase mb-4 text-brand-text">
            The Architect
          </h2>
          <div className="w-12 h-1 bg-brand-primary mx-auto" />
        </div>

        {/* The Architect - Single statement block */}
        <div className="about-content">
          <GlassCard className="max-w-3xl mx-auto text-center py-12 md:py-16">
            <p className="text-xl md:text-2xl text-brand-text leading-relaxed font-inter" style={{ lineHeight: '1.6' }}>
              Building solutions that are{' '}
              <span className="text-brand-primary font-bold">unapologetically technical</span>. 
              I believe in a transparent machine philosophy—where performance, raw engineering, 
              and robust systems take precedence over bloated abstractions. Every system is 
              designed to be{' '}
              <span className="text-brand-primary font-bold">scalable</span>,{' '}
              <span className="text-brand-primary font-bold">fast</span>, and entirely{' '}
              <span className="text-brand-primary font-bold">reliable</span>.
            </p>
          </GlassCard>
        </div>

        {/* Founder Credit */}
        <div className="text-center mt-12 about-content">
          <p className="text-sm text-brand-muted uppercase tracking-widest mb-3 font-mono">Founded by</p>
          <Link
            href="/cv"
            className="text-2xl md:text-3xl font-archivo font-bold uppercase hover:text-brand-primary transition-colors inline-flex items-center gap-2 group"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-200">Ananda Aditya Putra</span>
            <span className="text-brand-primary group-hover:translate-x-2 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}