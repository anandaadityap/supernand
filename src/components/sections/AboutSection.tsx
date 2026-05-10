"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SubtleGlassCard } from '@/components/ui/SubtleGlassCard';
import Link from 'next/link';
import { Calendar, Users, Trophy, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Calendar, value: '5+', label: 'Years Experience' },
  { icon: Trophy, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Target, value: '100%', label: 'Success Rate' },
];

const values = [
  { title: 'Speed', desc: 'Fast delivery without compromising quality' },
  { title: 'Quality', desc: 'Clean code that scales with your business' },
  { title: 'Partnership', desc: 'We work with you, not just for you' },
];

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
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 about-content">
          <span className="inline-block text-xs font-mono text-accent uppercase tracking-widest mb-4 px-4 py-2 glass-subtle rounded-full">
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text" style={{ fontFamily: "'Playfair Display', serif" }}>
            About <span className="text-gradient-accent">Us</span>
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto" />
        </div>

        {/* Story - Subtle Glass Card */}
        <div className="mb-20 about-content">
          <SubtleGlassCard className="max-w-3xl mx-auto text-center relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6 relative z-10">
              <span className="text-accent font-semibold text-glow">Super Nand</span> is an IT company focused on building innovative SaaS products and delivering custom development projects.
            </p>
            <p className="text-base text-text-muted leading-relaxed relative z-10">
              We combine technical expertise with creative problem-solving to build digital products that drive real business results.
            </p>
          </SubtleGlassCard>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 about-content">
          {values.map((value, i) => (
            <div key={value.title} className="text-center glass-subtle p-6 rounded-2xl hover:border-accent/50 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-text group-hover:text-accent">{value.title}</h3>
              <p className="text-sm text-text-muted">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats - enhanced glass cards with glow on hover */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 about-content">
          {stats.map((stat, i) => (
            <div key={stat.label} className="glass-card-hover text-center p-6 rounded-2xl group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-bright/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:from-accent/30 group-hover:to-accent-bright/20 transition-all duration-300 border border-accent/20 group-hover:border-accent/40">
                <stat.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-accent mb-2 group-hover:text-glow transition-all">{stat.value}</div>
              <div className="text-xs text-text-muted uppercase tracking-wider font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Founder Credit */}
        <div className="text-center about-content">
          <p className="text-sm text-text-muted uppercase tracking-widest mb-3 font-mono">Founded by</p>
          <Link
            href="/cv"
            className="text-2xl md:text-3xl font-semibold hover:text-accent transition-colors inline-flex items-center gap-2 group"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="group-hover:text-gradient-accent transition-all">Ananda Aditya Putra</span>
            <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}