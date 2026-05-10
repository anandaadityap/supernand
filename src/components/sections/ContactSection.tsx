"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SubtleGlassCard } from '@/components/ui/SubtleGlassCard';
import { Mail, MapPin, Phone, Send, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-mono text-accent uppercase tracking-widest mb-4 px-4 py-2 glass-subtle rounded-full">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let's <span className="text-gradient-accent">Talk</span>
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-4" />
          <p className="text-base text-text-muted font-mono">// Have a project in mind?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info - enhanced glass cards with glow on hover */}
          <div className="lg:col-span-2 space-y-6">
            <div className="contact-content group glass-card-hover flex items-center gap-4 p-6 rounded-2xl cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent-bright/10 flex items-center justify-center flex-shrink-0 border border-accent/30 group-hover:border-accent/60 group-hover:scale-110 transition-all duration-300">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest mb-1 font-mono">Email</p>
                <a href="mailto:hello@supernand.com" className="text-base hover:text-accent transition-colors group-hover:text-accent">
                  hello@supernand.com
                </a>
              </div>
              {/* Glow indicator */}
              <div className="absolute right-6 w-2 h-2 rounded-full bg-accent/50 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(152,205,0,0.5)] transition-all duration-300" />
            </div>

            <div className="contact-content group glass-card-hover flex items-center gap-4 p-6 rounded-2xl cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent-bright/10 flex items-center justify-center flex-shrink-0 border border-accent/30 group-hover:border-accent/60 group-hover:scale-110 transition-all duration-300">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest mb-1 font-mono">Phone</p>
                <a href="tel:+6281234567890" className="text-base hover:text-accent transition-colors group-hover:text-accent">
                  +62 812 3456 7890
                </a>
              </div>
              <div className="absolute right-6 w-2 h-2 rounded-full bg-accent/50 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(152,205,0,0.5)] transition-all duration-300" />
            </div>

            <div className="contact-content group glass-card-hover flex items-center gap-4 p-6 rounded-2xl cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent-bright/10 flex items-center justify-center flex-shrink-0 border border-accent/30 group-hover:border-accent/60 group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest mb-1 font-mono">Location</p>
                <p className="text-base">Jakarta, Indonesia</p>
              </div>
              <div className="absolute right-6 w-2 h-2 rounded-full bg-accent/50 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(152,205,0,0.5)] transition-all duration-300" />
            </div>
          </div>

          {/* Contact Form - enhanced glass card */}
          <div className="lg:col-span-3 contact-content">
            <SubtleGlassCard className="relative overflow-hidden">
              {/* Inner gradient glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/10 blur-[60px] pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="relative group">
                  <label className="block text-xs text-text-muted uppercase tracking-widest mb-2 font-mono">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-bg/50 border border-accent/20 rounded-xl text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(152,205,0,0.15)] transition-all duration-300 text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-xs text-text-muted uppercase tracking-widest mb-2 font-mono">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-bg/50 border border-accent/20 rounded-xl text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(152,205,0,0.15)] transition-all duration-300 text-base"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-xs text-text-muted uppercase tracking-widest mb-2 font-mono">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-bg/50 border border-accent/20 rounded-xl text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(152,205,0,0.15)] transition-all duration-300 text-base resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full group py-4 bg-accent text-bg font-semibold rounded-xl hover:bg-accent-bright transition-all duration-300 flex items-center justify-center gap-2 glow-accent hover:scale-[1.02]"
                >
                  {submitted ? (
                    <>
                      <Zap size={18} className="animate-pulse" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </SubtleGlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}