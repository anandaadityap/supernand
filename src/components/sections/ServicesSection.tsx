"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Code, Server, Network, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Bespoke web applications built from the ground up for maximum performance and scalability. Utilizing modern frameworks and rigorous testing methodologies.',
    tags: ['React', 'Node.js', 'TypeScript'],
    highlight: false,
  },
  {
    icon: Server,
    title: 'SaaS Architecture',
    description: 'End-to-end design and implementation of multi-tenant SaaS platforms. Focusing on database design, API structures, and secure authentication flows.',
    tags: ['PostgreSQL', 'AWS', 'Docker'],
    highlight: true,
  },
  {
    icon: Network,
    title: 'System Integration',
    description: 'Seamlessly connecting disparate software systems. Building robust RESTful and GraphQL APIs to ensure reliable data flow across your technical ecosystem.',
    tags: ['REST', 'GraphQL', 'Webhooks'],
    highlight: false,
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
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
    <section id="services" className="max-w-[1440px] mx-auto px-4 md:px-16 py-12 md:py-16" ref={sectionRef}>
      {/* Header */}
      <div className="mb-12 flex justify-between items-end border-b-4 border-brand-text pb-4">
        <div>
          <h2 className="font-archivo text-[40px] font-extrabold uppercase">Core Services</h2>
          <p className="font-mono text-sm text-brand-muted mt-2">// ARCHITECTURE & DEVELOPMENT</p>
        </div>
        <button className="hidden md:flex bg-transparent border-2 border-brand-text font-space text-sm font-bold uppercase px-4 py-2 hover:bg-brand-primary transition-all items-center gap-2">
          View All Services <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className={`service-card border-4 border-brand-text p-8 relative group overflow-hidden ${
              service.highlight ? 'bg-brand-primary' : 'bg-brand-bg'
            }`}
            style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
          >
            {/* Hover Icon Corner */}
            <div
              className={`absolute top-0 right-0 p-4 transform translate-x-full group-hover:translate-x-0 transition-transform border-l-4 border-b-4 border-brand-text ${
                service.highlight ? 'bg-brand-bg' : 'bg-brand-primary'
              }`}
            >
              <service.icon size={24} />
            </div>

            <h3
              className={`font-archivo text-2xl font-bold uppercase mb-4 ${
                service.highlight ? 'text-[#4f6d00]' : ''
              }`}
            >
              {service.title}
            </h3>
            
            <p
              className={`font-inter text-base mb-6 ${
                service.highlight ? 'text-brand-text' : 'text-brand-muted'
              }`}
            >
              {service.description}
            </p>

            {/* Tech Tags */}
            <div className="flex gap-2 flex-wrap">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className={`border-2 border-brand-text px-2 py-1 font-mono text-xs uppercase ${
                    service.highlight ? 'bg-brand-bg' : 'bg-brand-surface'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}