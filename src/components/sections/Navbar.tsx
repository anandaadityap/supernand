"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#tech", label: "Tech" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight group"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-accent group-hover:text-accent-bright transition-colors">N</span>
          <span className="text-text group-hover:text-accent transition-colors">anda</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-accent transition-all duration-300 relative group"
            >
              {link.label}
              {/* Hover underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-bright group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(152,205,0,0.5)]" />
            </Link>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="glass-card-hover w-10 h-10 flex items-center justify-center rounded-full hover:bg-accent/20 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-accent" />
              ) : (
                <Moon size={18} className="text-text" />
              )}
            </button>
          )}
        </div>

        {/* Mobile: Theme Toggle + Menu */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="glass-card-hover w-10 h-10 flex items-center justify-center rounded-full hover:bg-accent/20 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-accent" />
              ) : (
                <Moon size={18} className="text-text" />
              )}
            </button>
          )}
          <button
            className="glass-card-hover p-2 text-text hover:text-accent transition-colors rounded-lg"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - enhanced glass */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden glass-card mt-3 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-text-muted hover:text-accent transition-colors relative group py-2"
                  onClick={() => setIsMobileOpen(false)}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 shadow-[0_0_6px_rgba(152,205,0,0.4)]" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}