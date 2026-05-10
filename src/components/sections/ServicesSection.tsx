"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Layers, Code2, MessageSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Layers,
    title: 'SaaS Development',
    description: 'We build custom Software-as-a-Service products from concept to launch. Full-stack solutions with scalable architecture.',
    features: ['Product Strategy', 'MVP Development', 'Payment Integration', 'User Authentication', 'Analytics Dashboard'],
  },
  {
    icon: Code2,
    title: 'Custom Projects',
    description: 'Full-stack web application development tailored to your specific needs. From internal tools to customer-facing platforms.',
    features: ['Custom Web Apps', 'API Development', 'Database Design', 'Performance Optimization', 'CI/CD Setup'],
  },
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Technical advisory and consultation for your existing projects. We help with architecture decisions and team augmentation.',
    features: ['Technical Audit', 'Architecture Review', 'Code Review', 'Team Training', 'Tech Strategy'],
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
    <section id="services" className="py-32 px-6 relative" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-mono text-accent uppercase tracking-widest mb-4 px-4 py-2 glass-subtle rounded-full">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text" style={{ fontFamily: "'Playfair Display', serif" }}>
            What We <span className="text-gradient-accent">Do</span>
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-4" />
          <p className="text-base text-text-muted font-mono">// Three core services</p>
        </div>

        {/* Service Cards - with enhanced glass effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card group relative glass-card-hover p-8 rounded-2xl cursor-pointer"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                transform: 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Glow orb on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent-bright/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-accent/30 group-hover:to-accent-bright/20 transition-all duration-300 border border-accent/20 group-hover:border-accent/40">
                <service.icon className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-text group-hover:text-accent transition-colors duration-300">{service.title}</h3>
              <p className="text-sm text-text-muted mb-6 leading-relaxed">{service.description}</p>

              {/* Feature list with lime accents */}
              <ul className="space-y-3">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-text-muted group-hover:text-text transition-colors">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent-bright group-hover:shadow-[0_0_8px_rgba(152,205,0,0.5)] transition-shadow duration-300" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover arrow indicator */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-accent/20 group-hover:border-accent/60 group-hover:bg-accent/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}