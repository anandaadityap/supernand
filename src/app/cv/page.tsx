import Link from 'next/link';
import { Mail, Link as LinkIcon, User, MapPin, Globe, Smartphone, Briefcase, ChevronRight, Code, Award } from 'lucide-react';

export const metadata = {
  title: 'CV | Ananda Aditya Putra',
  description: 'Curriculum Vitae of Ananda Aditya Putra, System Architect and Founder of Supernand.',
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-24">
      <main className="max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col gap-12">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b-4 border-brand-text pb-8">
          <div>
            <h1 className="font-archivo text-5xl md:text-7xl font-extrabold text-brand-text mb-2 uppercase tracking-tight">Ananda Aditya Putra</h1>
            <h2 className="font-archivo text-2xl font-bold text-brand-secondary">Founder of Supernand & System Architect</h2>
          </div>
          <div className="flex gap-4">
            <a 
              className="p-3 border-2 border-brand-text bg-brand-surface flex items-center justify-center hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform" 
              href="mailto:hello@supernand.com"
              style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
            >
              <Mail className="text-brand-text" />
            </a>
            <a 
              className="p-3 border-2 border-brand-text bg-brand-surface flex items-center justify-center hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform" 
              href="https://supernand.com"
              style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
            >
              <LinkIcon className="text-brand-text" />
            </a>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Profile / Intro */}
          <section 
            className="col-span-1 md:col-span-8 p-8 border-4 border-brand-text flex flex-col gap-6"
            style={{ 
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
              backgroundColor: 'rgba(255, 250, 220, 0.6)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div className="flex items-center gap-2 mb-2 border-b-2 border-brand-text pb-2 w-max">
              <User className="text-brand-secondary" />
              <h3 className="font-archivo text-2xl font-bold text-brand-text uppercase">Profile</h3>
            </div>
            <p className="font-inter text-lg text-brand-muted leading-relaxed">
              A dedicated and innovative System Architect with experience leading the development of scalable technology infrastructure. As the founder of Supernand, I combine technical vision with precise design execution to create solutions that are not only architecturally robust but also deliver an exceptional user experience. My approach is always rooted in efficiency, clarity, and the "transparent machine" aesthetic.
            </p>
          </section>

          {/* Contact Quick Info */}
          <section 
            className="col-span-1 md:col-span-4 bg-brand-primary border-4 border-brand-text p-8 flex flex-col gap-6 justify-center"
            style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
          >
            <div className="flex items-center gap-3">
              <MapPin className="text-[#4f6d00]" />
              <span className="font-inter text-base text-[#4f6d00] font-bold">Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-[#4f6d00]" />
              <span className="font-inter text-base text-[#4f6d00] font-bold">supernand.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="text-[#4f6d00]" />
              <span className="font-inter text-base text-[#4f6d00] font-bold">+62 812 3456 7890</span>
            </div>
          </section>

          {/* Experience */}
          <section 
            className="col-span-1 md:col-span-12 p-8 border-4 border-brand-text mt-4"
            style={{ 
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
              backgroundColor: 'rgba(255, 250, 220, 0.6)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div className="flex items-center gap-2 mb-8 border-b-2 border-brand-text pb-2 w-max">
              <Briefcase className="text-brand-secondary" />
              <h3 className="font-archivo text-2xl font-bold text-brand-text uppercase">Experience</h3>
            </div>
            
            <div className="flex flex-col gap-10">
              {/* Job 1 */}
              <div className="border-l-4 border-brand-secondary pl-6 relative">
                <div className="absolute w-4 h-4 bg-brand-secondary border-2 border-brand-text -left-[10px] top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="font-archivo text-2xl font-bold text-brand-text">Founder & System Architect</h4>
                  <span className="font-space text-sm font-bold text-brand-muted bg-brand-surface px-3 py-1 border-2 border-brand-text mt-2 md:mt-0">2020 - Present</span>
                </div>
                <h5 className="font-inter text-lg text-brand-secondary mb-4 font-bold">Supernand</h5>
                <ul className="list-none font-inter text-base text-brand-muted space-y-2">
                  <li className="flex gap-2 items-start"><ChevronRight className="w-5 h-5 shrink-0 mt-0.5 text-brand-text" /> Designed high-level system architecture for enterprise clients.</li>
                  <li className="flex gap-2 items-start"><ChevronRight className="w-5 h-5 shrink-0 mt-0.5 text-brand-text" /> Led development teams in implementing cloud-native solutions.</li>
                  <li className="flex gap-2 items-start"><ChevronRight className="w-5 h-5 shrink-0 mt-0.5 text-brand-text" /> Integrated Neo-Brutalism design principles into internal SaaS products.</li>
                </ul>
              </div>
              
              {/* Job 2 */}
              <div className="border-l-4 border-brand-outline pl-6 relative">
                <div className="absolute w-4 h-4 bg-brand-surface border-2 border-brand-text -left-[10px] top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="font-archivo text-2xl font-bold text-brand-text">Senior Backend Engineer</h4>
                  <span className="font-space text-sm font-bold text-brand-muted bg-brand-surface px-3 py-1 border-2 border-brand-text mt-2 md:mt-0">2017 - 2020</span>
                </div>
                <h5 className="font-inter text-lg text-brand-secondary mb-4 font-bold">TechNesia Corp</h5>
                <ul className="list-none font-inter text-base text-brand-muted space-y-2">
                  <li className="flex gap-2 items-start"><ChevronRight className="w-5 h-5 shrink-0 mt-0.5 text-brand-text" /> Developed microservices APIs handling 1M+ requests/day.</li>
                  <li className="flex gap-2 items-start"><ChevronRight className="w-5 h-5 shrink-0 mt-0.5 text-brand-text" /> Optimized database queries to reduce latency by up to 40%.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section 
            className="col-span-1 md:col-span-6 bg-[#f2f6e0] border-4 border-brand-text p-8 mt-4 flex flex-col gap-6"
            style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
          >
            <div className="flex items-center gap-2 mb-2 border-b-2 border-brand-text pb-2 w-max">
              <Code className="text-brand-secondary" />
              <h3 className="font-archivo text-2xl font-bold text-brand-text uppercase">Technical Skills</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-space text-sm font-bold text-brand-text">System Architecture</span>
                  <span className="font-mono text-sm text-brand-secondary font-bold">95%</span>
                </div>
                <div className="w-full h-4 border-2 border-brand-text bg-brand-bg">
                  <div className="h-full bg-brand-primary border-r-2 border-brand-text" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-space text-sm font-bold text-brand-text">Cloud Infrastructure (AWS/GCP)</span>
                  <span className="font-mono text-sm text-brand-secondary font-bold">85%</span>
                </div>
                <div className="w-full h-4 border-2 border-brand-text bg-brand-bg">
                  <div className="h-full bg-brand-primary border-r-2 border-brand-text" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-space text-sm font-bold text-brand-text">Go / Python / Node.js</span>
                  <span className="font-mono text-sm text-brand-secondary font-bold">90%</span>
                </div>
                <div className="w-full h-4 border-2 border-brand-text bg-brand-bg">
                  <div className="h-full bg-brand-primary border-r-2 border-brand-text" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </section>

          {/* Education & Cert */}
          <section 
            className="col-span-1 md:col-span-6 p-8 border-4 border-brand-text mt-4 flex flex-col gap-6"
            style={{ 
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
              backgroundColor: 'rgba(255, 250, 220, 0.6)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div className="flex items-center gap-2 mb-2 border-b-2 border-brand-text pb-2 w-max">
              <Award className="text-brand-secondary" />
              <h3 className="font-archivo text-2xl font-bold text-brand-text uppercase">Education & Certifications</h3>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="border-2 border-brand-text p-4 bg-brand-bg">
                <h4 className="font-space text-sm font-bold text-brand-text mb-1">Bachelor of Computer Science</h4>
                <p className="font-inter text-base text-brand-muted">Indonesia University of Technology (2013 - 2017)</p>
              </div>
              
              <div className="border-2 border-brand-text p-4 bg-brand-bg flex items-center justify-between">
                <div>
                  <h4 className="font-space text-sm font-bold text-brand-text mb-1">AWS Certified Solutions Architect</h4>
                  <p className="font-inter text-base text-brand-muted">Amazon Web Services</p>
                </div>
                <Award className="text-brand-secondary" />
              </div>
              
              <div className="border-2 border-brand-text p-4 bg-brand-bg flex items-center justify-between">
                <div>
                  <h4 className="font-space text-sm font-bold text-brand-text mb-1">Certified Kubernetes Administrator</h4>
                  <p className="font-inter text-base text-brand-muted">Cloud Native Computing Foundation</p>
                </div>
                <Award className="text-brand-secondary" />
              </div>
            </div>
          </section>
          
        </div>
      </main>
    </div>
  );
}