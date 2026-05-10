'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SubtleGlassCard } from '@/components/ui/SubtleGlassCard';
import { Github, Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const skills = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Framer Motion'],
  'Backend': ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Linux'],
  'Tools': ['Git', 'Figma', 'Notion', 'Linear', 'VS Code', 'Three.js/WebGL'],
};

const experience = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Super Nand',
    period: '2022 - Present',
    description: 'Leading development of SaaS products and custom web applications. Building scalable solutions with modern tech stacks.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Tech Innovators Indonesia',
    period: '2020 - 2022',
    description: 'Developed enterprise-grade web applications for clients across various industries. Specialized in React and Node.js ecosystems.',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Creative Agency',
    period: '2018 - 2020',
    description: 'Built responsive, performant user interfaces for multiple client projects. Implemented design systems and component libraries.',
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Universitas Indonesia',
    period: '2014 - 2018',
    gpa: '3.8/4.0',
  },
];

const projects = [
  {
    name: 'CloudPOS',
    description: 'Point-of-sale system for SMEs with real-time inventory management and multi-branch support.',
  },
  {
    name: 'TaskFlow',
    description: 'Project management tool with Kanban boards, team collaboration, and automated workflows.',
  },
  {
    name: 'EduPlatform',
    description: 'Learning management system with video courses, quizzes, and progress tracking.',
  },
];

export default function CVPage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cv-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top 80%',
          }
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-20 px-6" ref={mainRef}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="cv-content mb-8">
          <SubtleGlassCard>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ananda Aditya Putra
                </h1>
                <p className="text-lg text-text-muted">
                  Senior Full-Stack Developer
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-accent" />
                  <span>ananda@supernand.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-accent" />
                  <span>+62 812 3456 7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-accent" />
                  <a href="https://github.com" className="hover:text-accent transition-colors">github.com/ananda</a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={16} className="text-accent" />
                  <a href="https://linkedin.com" className="hover:text-accent transition-colors">linkedin.com/in/ananda</a>
                </div>
              </div>
            </div>
          </SubtleGlassCard>
        </div>

        {/* Summary */}
        <div className="cv-content mb-8">
          <SubtleGlassCard>
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <p className="text-text-muted leading-relaxed">
              5+ years of experience building scalable web applications and SaaS products. 
              Passionate about clean code, user experience, and delivering solutions that make an impact. 
              Strong background in full-stack development with expertise in React, Next.js, Node.js, 
              and cloud technologies. Proven track record of leading projects from concept to deployment.
            </p>
          </SubtleGlassCard>
        </div>

        {/* Experience */}
        <div className="cv-content mb-8">
          <SubtleGlassCard>
            <h2 className="text-xl font-semibold mb-6">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className={i !== experience.length - 1 ? 'pb-6 border-b border-white/5' : ''}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-base font-semibold">{exp.role}</h3>
                    <span className="text-sm text-text-muted">{exp.period}</span>
                  </div>
                  <p className="text-accent text-sm font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-text-muted">{exp.description}</p>
                </div>
              ))}
            </div>
          </SubtleGlassCard>
        </div>

        {/* Skills */}
        <div className="cv-content mb-8">
          <SubtleGlassCard>
            <h2 className="text-xl font-semibold mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-medium text-accent mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="px-3 py-1 text-xs rounded-full bg-surface/50 text-text-muted">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SubtleGlassCard>
        </div>

        {/* Projects */}
        <div className="cv-content mb-8">
          <SubtleGlassCard>
            <h2 className="text-xl font-semibold mb-6">Key Projects</h2>
            <div className="space-y-4">
              {projects.map((project, i) => (
                <div key={i} className={i !== projects.length - 1 ? 'pb-4 border-b border-white/5' : ''}>
                  <h3 className="text-base font-semibold mb-1">{project.name}</h3>
                  <p className="text-sm text-text-muted">{project.description}</p>
                </div>
              ))}
            </div>
          </SubtleGlassCard>
        </div>

        {/* Education */}
        <div className="cv-content mb-8">
          <SubtleGlassCard>
            <h2 className="text-xl font-semibold mb-6">Education</h2>
            <div>
              <h3 className="text-base font-semibold mb-1">{education[0].degree}</h3>
              <p className="text-accent text-sm font-medium">{education[0].school}</p>
              <p className="text-sm text-text-muted">{education[0].period} · GPA: {education[0].gpa}</p>
            </div>
          </SubtleGlassCard>
        </div>

        {/* Back to Home */}
        <div className="cv-content text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-text-muted rounded-xl hover:border-accent hover:text-accent transition-all duration-200 text-sm font-mono"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}