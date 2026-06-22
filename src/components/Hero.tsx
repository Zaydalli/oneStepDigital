"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-semibold text-sm mb-6 border border-primary/20">
            Digital Marketing Studio
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary dark:text-white leading-[1.1] mb-6">
            Hal tallaabo ku <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-cyan-300">casriyee</span> ganacsigaaga oo soo jiido macaamiil cusub.
          </h1>
          
          <p className="text-lg text-text/80 dark:text-gray-300 mb-8 leading-relaxed">
            We help businesses build a modern digital presence and reach more customers effectively.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25">
              Get Started
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="flex items-center justify-center bg-white dark:bg-slate-900 text-secondary dark:text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-800 transition-all">
              Request a Quote
            </a>
          </div>
        </motion.div>

        {/* Right Content - Abstract Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full hidden lg:flex items-center justify-center"
        >
          <img 
            src="/screen.webp" 
            alt="Marketing Dashboard" 
            className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-800"
          />
        </motion.div>
      </div>
    </section>
  );
}
