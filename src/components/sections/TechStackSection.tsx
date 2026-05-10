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
      {/* Background geometric accent */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-surface/50 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-brand-surface/30 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="border-2 border-brand-text px-3 py-1 font-mono text-xs uppercase tracking-widest mb-4 inline-block shadow-brutal-sm">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-archivo font-extrabold uppercase mb-4 text-brand-text">
            Tools & Technologies
          </h2>
          <div className="w-12 h-1 bg-brand-primary mx-auto mb-4" />
          <p className="text-base text-brand-muted font-mono">// What we work with</p>
        </div>

        {/* Tech Grid - Sharp Brutalist Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="tech-item group p-4 border-4 border-brand-text bg-brand-surface hover:bg-brand-text hover:shadow-brutal-sm transition-all duration-200 cursor-default text-center"
            >
              <span className="text-sm font-mono font-bold uppercase text-brand-text group-hover:text-brand-surface transition-colors duration-200">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}