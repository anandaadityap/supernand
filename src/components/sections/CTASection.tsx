"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SubtleGlassCard } from '@/components/ui/SubtleGlassCard';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-6 relative" ref={sectionRef}>
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[150px] animate-orb-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent-bright/10 blur-[120px] animate-orb-float" style={{ animationDelay: '-6s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <SubtleGlassCard className="text-center py-16 md:py-20 relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
          
          <div className="cta-content relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-xs font-mono text-accent">Ready to start?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to <span className="text-gradient-accent text-glow">Build</span>?
            </h2>
            <p className="text-base md:text-lg text-text-muted mb-10 max-w-xl mx-auto">
              Let's turn your idea into a powerful digital product. Start a conversation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg font-semibold rounded-xl hover:bg-accent-bright transition-all duration-300 glow-accent hover:scale-105"
              >
                <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                Start Your Project
              </Link>
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 glass-subtle text-text-muted rounded-xl hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300 font-mono text-sm">
                Schedule a Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </SubtleGlassCard>
      </div>
    </section>
  );
}