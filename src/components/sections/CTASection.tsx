"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
    <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-16 md:py-[120px] text-center" ref={sectionRef}>
      <div 
        className="border-4 border-brand-text bg-brand-primary p-8 md:p-16 max-w-4xl mx-auto relative overflow-hidden"
        style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
      >
        {/* Dot pattern background */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzE5MWQxMCIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')"
          }}
        />
        
        <div className="relative z-10 cta-content">
          <h2 className="font-archivo text-5xl md:text-[64px] font-extrabold uppercase text-[#4f6d00] mb-6 tracking-tight leading-tight">
            Build the Future.
          </h2>
          <p className="font-inter text-lg text-brand-text mb-8 max-w-2xl mx-auto font-medium">
            Ready to architect a high-performance solution? Let's discuss your next project and build something transparent, bold, and unapologetically technical.
          </p>
          <button 
            className="bg-brand-bg text-brand-text border-4 border-brand-text font-space text-lg font-bold uppercase px-12 py-6 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
            style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
          >
            Initialize Contact
          </button>
        </div>
      </div>
    </section>
  );
}