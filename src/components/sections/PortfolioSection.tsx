"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowRight, Folder } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'CloudPOS',
    description: 'Point-of-sale system for SMEs with real-time inventory, multi-branch support, and analytics dashboard.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    title: 'TaskFlow',
    description: 'Project management tool with Kanban boards, team collaboration, and automated workflows.',
    tech: ['React', 'GraphQL', 'MongoDB', 'AWS'],
  },
  {
    title: 'EduPlatform',
    description: 'Learning management system with video courses, quizzes, progress tracking, and certification.',
    tech: ['Next.js', 'Python', 'Redis', 'Cloudflare'],
  },
  {
    title: 'HealthTrack',
    description: 'Health monitoring app with wearables integration, appointment booking, and telemedicine features.',
    tech: ['React Native', 'Firebase', 'TensorFlow', 'Twilio'],
  },
];

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
    <section id="portfolio" className="py-32 px-6 relative" ref={sectionRef}>
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-bright/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-mono text-accent uppercase tracking-widest mb-4 px-4 py-2 glass-subtle rounded-full">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-gradient-accent">Work</span>
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-4" />
          <p className="text-base text-text-muted font-mono">// Selected projects</p>
        </div>

        {/* Project Grid - glass cards with hover glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="project-card group relative glass-subtle p-8 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Project thumbnail area with folder icon */}
              <div className="h-40 rounded-xl bg-surface flex items-center justify-center mb-6 border border-accent/10 group-hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Folder className="w-16 h-16 text-accent/30 group-hover:text-accent/60 group-hover:scale-110 transition-all duration-300 relative z-10" />
              </div>

              <div className="mb-4 relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-text group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{project.description}</p>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs rounded-full bg-surface border border-accent/20 text-text-muted font-mono group-hover:border-accent/40 group-hover:text-text transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* View project link */}
              <div className="flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 pt-4 border-t border-accent/10">
                <span className="font-mono font-semibold tracking-wider">VIEW PROJECT</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <button className="group glass-subtle px-8 py-4 text-text-muted rounded-xl hover:border-accent/50 hover:text-accent transition-all duration-300 font-mono text-sm inline-flex items-center gap-3 hover:scale-105">
            VIEW ALL PROJECTS
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}