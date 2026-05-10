"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
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
    <section id="portfolio" className="bg-[#e1e5cf] border-y-4 border-brand-text py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-archivo text-[40px] font-extrabold uppercase mb-2">Featured Projects</h2>
          <p className="font-mono text-sm text-brand-muted">// RECENT DEPLOYMENTS & SAAS PRODUCTS</p>
        </div>

        {/* SaaS Products */}
        <div className="mb-16">
          <div className="inline-block border-b-4 border-brand-text pb-2 mb-6">
            <h3 className="font-archivo text-2xl font-bold uppercase">SaaS Products</h3>
          </div>
          
          <div className="space-y-12">
            {/* Nexus Analytics */}
            <div className="project-card border-4 border-brand-text bg-brand-bg flex flex-col md:flex-row" style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}>
              {/* Image & Info */}
              <div 
                className="md:w-1/2 p-8 flex flex-col justify-between border-b-4 md:border-b-0 md:border-r-4 border-brand-text relative bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')" }}
              >
                <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-md" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-block border-2 border-brand-text bg-brand-primary px-3 py-1 font-space text-sm font-bold uppercase">
                    Data Visualization
                  </div>
                  <h3 className="font-archivo text-[40px] font-extrabold uppercase leading-tight">Nexus Analytics Platform</h3>
                  <p className="font-inter text-base font-medium">A high-performance analytics dashboard processing real-time data streams for enterprise clients. Built with a focus on speed and clarity.</p>
                  <div className="flex gap-2 flex-wrap pt-2">
                    {['Go', 'Clickhouse', 'React'].map(tech => (
                      <span key={tech} className="border-2 border-brand-text px-2 py-1 font-mono text-xs uppercase bg-[#e6ead5] font-bold">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 mt-8">
                  <button className="bg-brand-bg text-brand-text border-2 border-brand-text font-space text-sm font-bold uppercase px-6 py-3 hover:bg-brand-primary transition-all flex items-center gap-2" style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}>
                    View Case Study <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="md:w-1/2 bg-[#f2f6e0] p-8 grid grid-cols-2 gap-4 content-center">
                {[
                  { value: '10M+', label: 'Rows Processed/Day' },
                  { value: '<50ms', label: 'Event Processing' },
                  { value: '99.99%', label: 'System Uptime' },
                  { value: '50k+', label: 'Active Users' }
                ].map((metric) => (
                  <div key={metric.label} className="border-2 border-brand-text bg-brand-bg p-4 text-center">
                    <span className="block font-archivo text-2xl font-bold text-brand-primary mb-1" style={{ WebkitTextStroke: '1px #191d10', textShadow: '2px 2px 0px #191d10' }}>{metric.value}</span>
                    <span className="font-mono text-xs text-brand-muted">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SuperHRM */}
            <div className="project-card border-4 border-brand-text bg-brand-bg flex flex-col md:flex-row-reverse" style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}>
              {/* Image & Info */}
              <div 
                className="md:w-1/2 p-8 flex flex-col justify-between border-b-4 md:border-b-0 md:border-l-4 border-brand-text relative bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')" }}
              >
                <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-md" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-block border-2 border-brand-text bg-brand-primary px-3 py-1 font-space text-sm font-bold uppercase">
                    Human Resources
                  </div>
                  <h3 className="font-archivo text-[40px] font-extrabold uppercase leading-tight">SuperHRM</h3>
                  <p className="font-inter text-base font-medium">A unified personnel management suite designed to handle enterprise-scale organizations with zero friction and maximum security.</p>
                  <div className="flex gap-2 flex-wrap pt-2">
                    {['Node.js', 'PostgreSQL', 'Redis'].map(tech => (
                      <span key={tech} className="border-2 border-brand-text px-2 py-1 font-mono text-xs uppercase bg-[#e6ead5] font-bold">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 mt-8">
                  <button className="bg-brand-bg text-brand-text border-2 border-brand-text font-space text-sm font-bold uppercase px-6 py-3 hover:bg-brand-primary transition-all flex items-center gap-2" style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}>
                    View Case Study <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="md:w-1/2 bg-[#f2f6e0] p-8 grid grid-cols-2 gap-4 content-center">
                {[
                  { value: '1M+', label: 'Events/Min' },
                  { value: '<100ms', label: 'API Response' },
                  { value: '99.95%', label: 'System Uptime' },
                  { value: '100k+', label: 'Active Users' }
                ].map((metric) => (
                  <div key={metric.label} className="border-2 border-brand-text bg-brand-bg p-4 text-center">
                    <span className="block font-archivo text-2xl font-bold text-brand-primary mb-1" style={{ WebkitTextStroke: '1px #191d10', textShadow: '2px 2px 0px #191d10' }}>{metric.value}</span>
                    <span className="font-mono text-xs text-brand-muted">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client Deployments */}
        <div>
          <div className="inline-block border-b-4 border-brand-text pb-2 mb-6">
            <h3 className="font-archivo text-2xl font-bold uppercase">Client Deployments</h3>
          </div>
          
          <div className="space-y-12">
            {/* AeroCart Engine */}
            <div className="project-card border-4 border-brand-text bg-brand-bg flex flex-col md:flex-row" style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}>
              {/* Image & Info */}
              <div 
                className="md:w-1/2 p-8 flex flex-col justify-between border-b-4 md:border-b-0 md:border-r-4 border-brand-text relative bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80')" }}
              >
                <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-md" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-block border-2 border-brand-text bg-brand-primary px-3 py-1 font-space text-sm font-bold uppercase">
                    E-Commerce Engine
                  </div>
                  <h3 className="font-archivo text-[40px] font-extrabold uppercase leading-tight">AeroCart Engine</h3>
                  <p className="font-inter text-base font-medium">A headless e-commerce backend designed for rapid deployment and immense scalability, featuring robust inventory syncing.</p>
                </div>
                <div className="relative z-10 mt-8">
                  <button className="bg-brand-bg text-brand-text border-2 border-brand-text font-space text-sm font-bold uppercase px-6 py-3 hover:bg-brand-primary transition-all flex items-center gap-2" style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}>
                    View Case Study <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="md:w-1/2 bg-[#f2f6e0] p-8 grid grid-cols-2 gap-4 content-center">
                {[
                  { value: '$2M+', label: 'Monthly GMV Processed' },
                  { value: 'PCI-DSS', label: 'Compliance Met' },
                  { value: '<200ms', label: 'Inventory Sync Speed' },
                  { value: '99.99%', label: 'Checkout Success' }
                ].map((metric) => (
                  <div key={metric.label} className="border-2 border-brand-text bg-brand-bg p-4 text-center">
                    <span className="block font-archivo text-2xl font-bold text-brand-primary mb-1" style={{ WebkitTextStroke: '1px #191d10', textShadow: '2px 2px 0px #191d10' }}>{metric.value}</span>
                    <span className="font-mono text-xs text-brand-muted">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}