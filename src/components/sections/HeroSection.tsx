"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );

    tl.fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.3'
    );

    tl.fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.3'
    );

  }, []);

  return (
    <section ref={containerRef} className="pt-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-12 md:py-[120px] grid md:grid-cols-12 gap-6 items-center">
        {/* Left Content - 8 cols */}
        <div className="md:col-span-8 space-y-6">
          {/* System Badge */}
          <div className="inline-flex items-center gap-2 border-2 border-brand-text bg-brand-surface px-4 py-2 font-space text-sm font-bold uppercase text-brand-muted">
            <span className="text-lg">⬡</span> SYSTEM ONLINE
          </div>

          {/* Headline */}
          <h1
            ref={titleRef}
            className="font-archivo text-6xl md:text-[80px] text-brand-text uppercase tracking-tight leading-none"
          >
            High-Performance{' '}
            <br />
            <span
              className="text-brand-primary border-b-[8px] border-brand-text"
              style={{
                WebkitTextStroke: '2px #191d10',
                textShadow: '4px 4px 0px #191d10',
              }}
            >
              Freelance & SaaS
            </span>{' '}
            <br />
            Solutions.
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-inter text-lg text-brand-muted max-w-2xl pt-4 leading-relaxed"
          >
            Architecting robust, scalable software systems. Bridging the gap between raw engineering and sophisticated interface design to deliver transparent machine philosophy.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 pt-6">
            <Link
              href="/#contact"
              className="bg-brand-primary text-brand-text border-2 border-brand-text font-space text-sm font-bold uppercase px-8 py-4 flex items-center gap-2 transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
            >
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link
              href="/#portfolio"
              className="bg-transparent text-brand-text border-2 border-brand-text font-space text-sm font-bold uppercase px-8 py-4 flex items-center gap-2 hover:bg-brand-surface transition-all duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Right Image - 4 cols */}
        <div className="md:col-span-4 hidden md:block">
          <div
            className="relative w-full aspect-square border-4 border-brand-text bg-brand-surface overflow-hidden group"
            style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
          >
            {/* Code/Workstation Image */}
            <div
              className="absolute inset-0 bg-cover bg-center grayscale contrast-150"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')",
                mixBlendMode: 'multiply',
                opacity: 0.8,
              }}
            />
            {/* Hover overlay */}
            <div
              className="absolute bottom-0 left-0 w-full p-6 border-t-2 border-brand-text transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              style={{
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(248, 251, 230, 0.6)',
              }}
            >
              <p className="font-mono text-sm text-brand-text">SYS.STATUS: OPTIMAL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}