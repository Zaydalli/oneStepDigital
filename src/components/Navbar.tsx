"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Adeegyada", href: "#services" },
    { name: "Nidaamka", href: "#process" },
    { name: "Qiimaha", href: "#pricing" },
    { name: "Xalalka", href: "#about" },
    { name: "Xiriirka", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 sm:top-4 inset-x-0 z-50 max-w-6xl mx-auto px-4 sm:px-6">
        <div 
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-slate-900/5 rounded-2xl sm:rounded-full py-3 px-5 sm:px-7"
              : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 rounded-2xl sm:rounded-full py-3 sm:py-3.5 px-5 sm:px-7 shadow-sm"
          } flex items-center justify-between`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Image 
              src="/logo.webp" 
              alt="OneStep Digital Logo" 
              width={340} 
              height={115} 
              className="h-11 sm:h-13 w-auto dark:hidden transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <Image 
              src="/dark mode logo.webp" 
              alt="OneStep Digital Logo Dark" 
              width={340} 
              height={115} 
              className="h-11 sm:h-13 w-auto hidden dark:block transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#pricing"
              className="bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-primary/20 hover:shadow-primary/30 hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <span>Dalbo Xirmo</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2.5 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-secondary dark:text-white hover:text-primary transition-colors border border-slate-200/70 dark:border-slate-700/70"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Xir menu-ka" : "Fur menu-ka"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-md md:hidden flex flex-col justify-end"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="bg-white dark:bg-slate-900 rounded-t-[32px] border-t border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col gap-6 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Menu-ga Bogga</div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 text-secondary dark:text-white font-semibold text-lg transition-all"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  </a>
                ))}
              </div>

              {/* CTAs inside drawer */}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-primary hover:bg-blue-700 text-white text-center py-3.5 rounded-full font-bold text-base shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                >
                  <span>Dalbo Xirmo</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="https://wa.me/252615894875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-100 dark:bg-slate-800 text-secondary dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 text-center py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone size={15} className="text-green-500" />
                  <span>Toos noola hadal (+252 615 894875)</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
