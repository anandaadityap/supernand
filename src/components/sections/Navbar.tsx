"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home", isHome: true },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return null;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/60 backdrop-blur-md border-b-2 border-brand-text h-20 flex items-center transition-all duration-300"
      style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-16 flex items-center justify-between">
        {/* Logo - SUPERNAND */}
        <Link
          href="/"
          className="text-2xl font-archivo font-black tracking-tighter text-brand-text"
        >
          SUPERNAND
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-space text-sm font-bold uppercase tracking-widest transition-all duration-200 px-2 py-1 ${
                link.isHome
                  ? 'text-brand-secondary border-b-2 border-brand-secondary'
                  : 'text-brand-muted hover:bg-brand-primary hover:text-brand-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hire Me Button */}
        <Link
          href="/#contact"
          className="hidden md:block bg-brand-primary text-brand-text border-2 border-brand-text font-space text-sm font-bold uppercase px-6 py-2 transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]"
          style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
        >
          Hire Me
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="w-10 h-10 border-2 border-brand-text flex items-center justify-center text-brand-text hover:border-brand-primary hover:text-brand-primary transition-all duration-200 md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-20 left-0 right-0 bg-brand-bg/95 backdrop-blur-sm border-2 border-brand-text border-t-0"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-mono font-bold uppercase text-brand-muted hover:text-brand-primary transition-colors duration-200 py-2 border-b border-brand-text/20 last:border-0"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="bg-brand-primary text-brand-text border-2 border-brand-text font-space text-sm font-bold uppercase px-6 py-3 text-center mt-2"
                style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
                onClick={() => setIsMobileOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}