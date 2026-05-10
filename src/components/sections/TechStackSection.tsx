"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
  'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
  'AWS', 'Docker', 'Vercel', 'Linux',
  'Git', 'Figma', 'Three.js', 'GraphQL',
];

export function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-item',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'back.out(1.7)',
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
    <section id="tech" className="py-32 px-6 relative" ref={sectionRef}>
      {/* Background orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-accent-bright/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-mono text-accent uppercase tracking-widest mb-4 px-4 py-2 glass-subtle rounded-full">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tools & <span className="text-gradient-accent">Technologies</span>
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-4" />
          <p className="text-base text-text-muted font-mono">// What we work with</p>
        </div>

        {/* Tech Grid - lime accent pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech, i) => (
            <div
              key={tech}
              className="tech-item group relative glass-subtle p-4 rounded-xl text-center hover:scale-105 hover:border-accent/60 hover:shadow-[0_0_20px_rgba(152,205,0,0.15)] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-sm font-medium text-text group-hover:text-accent transition-colors duration-300 font-mono">{tech}</span>
              {/* Lime dot indicator */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent/80 group-hover:shadow-[0_0_6px_rgba(152,205,0,0.5)] transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}