"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-4 border-brand-text bg-[#e1e5cf] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 px-4 md:px-16 py-12 mt-auto">
      <div className="font-archivo text-2xl font-black text-brand-text uppercase tracking-tight">
        SUPERNAND
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 font-inter text-base text-brand-muted">
        <Link className="hover:text-brand-primary transition-colors font-bold underline" href="/cv">Download CV</Link>
        <a className="hover:text-brand-primary transition-colors" href="#">LinkedIn</a>
        <a className="hover:text-brand-primary transition-colors" href="#">GitHub</a>
        <a className="hover:text-brand-primary transition-colors" href="#">Contact</a>
      </div>
      
      <div className="font-mono text-sm text-brand-muted uppercase">
        © {currentYear} SUPERNAND. ALL SYSTEMS OPERATIONAL.
      </div>
    </footer>
  );
}