"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Discovery & Architecture',
    description: 'Defining system requirements, database schemas, and architectural patterns before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Engineering',
    description: 'Developing core infrastructure and user interfaces using modern, high-performance tech stacks.',
  },
  {
    number: '03',
    title: 'QA & Optimization',
    description: 'Rigorous automated testing, load testing, and performance profiling to ensure bulletproof reliability.',
  },
  {
    number: '04',
    title: 'Deployment & Scaling',
    description: 'Setting up CI/CD pipelines, container orchestration, and monitoring for scalable deployments.',
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-step',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
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
    <section id="process" className="py-32 px-6 relative" ref={sectionRef}>
      {/* Background geometric accent */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-surface/50" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-brand-surface/30" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="border-2 border-brand-text px-3 py-1 font-mono text-xs uppercase tracking-widest mb-4 inline-block shadow-brutal-sm">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-archivo font-extrabold uppercase mb-4 text-brand-text">
            How We Work
          </h2>
          <div className="w-12 h-1 bg-brand-primary mx-auto mb-4" />
          <p className="text-base text-brand-muted font-mono">// 4-Step Deployment Protocol</p>
        </div>

        {/* Process Steps - Grid with heavy borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-brand-text">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`process-step group p-8 md:p-10 relative transition-all duration-200 hover:bg-brand-surface/80 ${
                index < 2 ? 'border-b-4 border-brand-text' : ''
              } ${
                index % 2 === 0 ? 'md:border-r-4 md:border-brand-text' : ''
              }`}
            >
              {/* Step number */}
              <div className="text-6xl md:text-7xl font-archivo font-black text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors duration-200 mb-4 leading-none">
                {step.number}
              </div>

              {/* Step content */}
              <h3 className="text-xl font-space font-bold uppercase mb-3 text-brand-text group-hover:text-brand-primary transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {step.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-4 h-4 border-2 border-brand-text group-hover:bg-brand-primary transition-all duration-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
