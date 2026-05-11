"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#hero", label: "Home", section: "hero" },
  { href: "/#services", label: "Services", section: "services" },
  { href: "/#portfolio", label: "Projects", section: "portfolio" },
  { href: "/#about", label: "About", section: "about" },
  { href: "/#process", label: "Process", section: "process" },
  { href: "/#contact", label: "Contact", section: "contact" },
];

// Smooth scroll to section function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = 80; // navbar height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navHeight,
      behavior: "smooth",
    });
  }
};

// Handle link click for hash navigation
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("/#")) {
    e.preventDefault();
    const sectionId = href.replace("/#", "");
    scrollToSection(sectionId);
  }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();

  useEffect(() => {
    // Store section positions at page load and on resize
    let sectionPositions: { id: string; top: number; bottom: number }[] = [];

    const updateSectionPositions = () => {
      sectionPositions = [
        { id: "hero", top: 0, bottom: 0 },
        { id: "services", top: 0, bottom: 0 },
        { id: "portfolio", top: 0, bottom: 0 },
        { id: "about", top: 0, bottom: 0 },
        { id: "process", top: 0, bottom: 0 },
        { id: "contact", top: 0, bottom: 0 },
      ];
      
      sectionPositions.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          section.top = window.scrollY + rect.top;
          section.bottom = window.scrollY + rect.bottom;
        }
      });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollY = window.scrollY;
      const viewportMid = scrollY + 200; // Use midpoint of viewport for detection

      // Find the section we're currently in based on viewport midpoint
      let active = "hero";
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (viewportMid >= sectionPositions[i].top) {
          active = sectionPositions[i].id;
          break;
        }
      }
      
      setActiveSection(active);
    };

    const handleResize = () => {
      updateSectionPositions();
    };

    // Initialize
    updateSectionPositions();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle initial hash on page load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, []);

  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return null;

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/60 backdrop-blur-md border-b-4 border-brand-text h-20 flex items-center transition-all duration-300"
      style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-16 flex items-center justify-between">
        {/* Logo - SUPERNAND */}
        <Link
          href="/#hero"
          onClick={(e) => {
            handleNavClick(e, "/#hero");
          }}
          className="text-2xl font-archivo font-black tracking-tighter text-brand-text"
        >
          SUPERNAND EDITED
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-space text-sm font-bold uppercase tracking-widest transition-all duration-200 px-3 py-2 ${
                activeSection === link.section
                  ? 'bg-brand-primary text-brand-text border-2 border-brand-text'
                  : 'text-brand-muted hover:bg-brand-primary hover:text-brand-text hover:border-2 hover:border-brand-text'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="/#contact"
          onClick={(e) => handleNavClick(e, "/#contact")}
          className="hidden md:block bg-brand-primary text-brand-text border-4 border-brand-text font-space text-sm font-bold uppercase px-6 py-3 transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]"
          style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="w-10 h-10 border-4 border-brand-text flex items-center justify-center text-brand-text hover:border-brand-primary hover:text-brand-primary transition-all duration-200 md:hidden"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-20 left-0 right-0 bg-brand-bg/95 backdrop-blur-sm border-4 border-t-0 border-brand-text"
            style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    closeMobileMenu();
                  }}
                  className={`text-base font-space font-bold uppercase py-3 px-4 transition-all duration-200 ${
                    activeSection === link.section
                      ? 'bg-brand-primary text-brand-text border-2 border-brand-text'
                      : 'text-brand-muted hover:bg-brand-surface hover:text-brand-text border-2 border-transparent'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={(e) => {
                  handleNavClick(e, "/#contact");
                  closeMobileMenu();
                }}
                className="bg-brand-primary text-brand-text border-4 border-brand-text font-space text-base font-bold uppercase px-6 py-4 text-center mt-4"
                style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}