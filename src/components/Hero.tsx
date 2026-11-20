"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-white dark:bg-slate-950">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] bg-gradient-to-b from-primary/15 via-accent/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        
        {/* Eyebrow / Social Proof Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-sm mb-6 sm:mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold text-secondary dark:text-slate-200">
            Digital Marketing Studio <span className="text-primary font-bold">Muqdisho</span>
          </span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold text-secondary dark:text-white tracking-tight leading-[1.12] mb-6 max-w-4xl"
        >
          Jooji Luminta Macaamiisha. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Nidaami Dalabaadkaaga.
          </span>
        </motion.h1>

        {/* Supporting Short Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal"
        >
          Macaamiishu ma sugaan adeeg gaabis ah. OneStep Digital waxay ganacsigaaga u dhisaysaa nidaam dijitaal ah oo dedejiya dalabaadka, yareeya khaladaadka, kana dhiga ganacsigaaga mid fudud oo xirfadaysan.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto"
        >
          <a 
            href="https://wa.me/252615894875" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Dalbo Demo Toos Ah</span>
            <ArrowRight size={18} />
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto flex items-center justify-center bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-secondary dark:text-white px-8 py-4 rounded-full font-semibold text-base border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
          >
            Eeg Adeegyadeena
          </a>
        </motion.div>

        {/* Quick Highlights Band */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-primary" />
            <span>Setup Degdeg Ah</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-primary" />
            <span>QR & Menu Dijitaal Ah</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-primary" />
            <span>Taageero Joogto Ah</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
