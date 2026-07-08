"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-slate-800 h-20"
          : "bg-transparent h-24"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/logo.webp" 
            alt="OneStep Digital Logo" 
            width={250} 
            height={85} 
            className="h-20 w-auto dark:hidden"
            priority
          />
          <Image 
            src="/dark mode logo.webp" 
            alt="OneStep Digital Logo Dark" 
            width={250} 
            height={85} 
            className="h-20 w-auto hidden dark:block"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text dark:text-gray-200 hover:text-primary transition-colors font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-2.5 rounded-xl font-medium hover:bg-primary/90 hover:scale-105 transition-all shadow-sm"
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-text dark:text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Xir menu-ka" : "Fur menu-ka"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text dark:text-gray-200 hover:text-primary transition-colors font-medium text-lg py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-white text-center px-6 py-3 rounded-xl font-medium mt-2 shadow-sm"
            >
              Get Started
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
