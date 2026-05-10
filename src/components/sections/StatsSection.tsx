"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: '📦', value: '40+', label: 'Projects Delivered' },
  { icon: '🤝', value: '99%', label: 'Client Satisfaction' },
  { icon: '🖥️', value: '5', label: 'Active SaaS Apps' },
  { icon: '⚡', value: '99.9%', label: 'System Uptime' },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-box',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-y-4 border-brand-text bg-[#f2f6e0] mb-12"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-box p-6 border-2 border-brand-text bg-brand-bg flex flex-col items-start gap-2"
              style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
            >
              <span
                className="text-[32px] text-brand-primary"
                style={{
                  filter: 'drop-shadow(2px 2px 0px #191d10)',
                }}
              >
                {stat.icon}
              </span>
              <h3 className="font-archivo text-[40px] font-extrabold leading-tight tracking-tight">
                {stat.value}
              </h3>
              <p className="font-space text-sm font-bold uppercase text-brand-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
