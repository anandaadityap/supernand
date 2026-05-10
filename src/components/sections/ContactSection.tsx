"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
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
      {/* Background geometric accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-surface/50 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="border-2 border-brand-text px-3 py-1 font-mono text-xs uppercase tracking-widest mb-4 inline-block shadow-brutal-sm">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-archivo font-extrabold uppercase mb-4 text-brand-text">
            Let's Talk
          </h2>
          <div className="w-12 h-1 bg-brand-primary mx-auto mb-4" />
          <p className="text-base text-brand-muted font-mono">// Have a project in mind?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info - Brutalist Sharp Boxes */}
          <div className="lg:col-span-2 space-y-6">
            <div className="contact-content group p-6 border-4 border-brand-text shadow-brutal-sm hover:shadow-brutal transition-all duration-200 flex items-center gap-4">
              <div className="w-14 h-14 border-4 border-brand-text bg-brand-surface flex items-center justify-center flex-shrink-0 group-hover:border-brand-primary transition-colors duration-200">
                <Mail className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-widest mb-1 font-mono">Email</p>
                <a href="mailto:hello@supernand.com" className="text-base text-brand-text hover:text-brand-primary transition-colors duration-200">
                  hello@supernand.com
                </a>
              </div>
            </div>

            <div className="contact-content group p-6 border-4 border-brand-text shadow-brutal-sm hover:shadow-brutal transition-all duration-200 flex items-center gap-4">
              <div className="w-14 h-14 border-4 border-brand-text bg-brand-surface flex items-center justify-center flex-shrink-0 group-hover:border-brand-primary transition-colors duration-200">
                <Phone className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-widest mb-1 font-mono">Phone</p>
                <a href="tel:+6281234567890" className="text-base text-brand-text hover:text-brand-primary transition-colors duration-200">
                  +62 812 3456 7890
                </a>
              </div>
            </div>

            <div className="contact-content group p-6 border-4 border-brand-text shadow-brutal-sm hover:shadow-brutal transition-all duration-200 flex items-center gap-4">
              <div className="w-14 h-14 border-4 border-brand-text bg-brand-surface flex items-center justify-center flex-shrink-0 group-hover:border-brand-primary transition-colors duration-200">
                <MapPin className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-widest mb-1 font-mono">Location</p>
                <p className="text-base text-brand-text">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Contact Form - Sharp bordered card */}
          <div className="lg:col-span-3 contact-content">
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 border-4 border-brand-text bg-brand-surface flex items-center justify-center">
                  <Zap className="w-4 h-4 text-brand-primary" />
                </div>
                <h3 className="text-xl font-space font-bold uppercase">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative group">
                  <label className="block text-xs text-brand-muted uppercase tracking-widest mb-2 font-mono">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-surface border-2 border-brand-text text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-primary transition-all duration-200 text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-xs text-brand-muted uppercase tracking-widest mb-2 font-mono">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-surface border-2 border-brand-text text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-primary transition-all duration-200 text-base"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-xs text-brand-muted uppercase tracking-widest mb-2 font-mono">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-surface border-2 border-brand-text text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-primary transition-all duration-200 text-base resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full" type="submit">
                  {submitted ? (
                    <>
                      <Zap size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}