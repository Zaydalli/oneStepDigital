"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, ArrowDown, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-sky-600 dark:text-cyan-300 font-semibold text-xs sm:text-sm mb-4 border border-accent/20">
            <Sparkles size={14} />
            <span>Dhibaatada & Xalka</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary dark:text-white tracking-tight leading-[1.18]">
            Ganacsiyada Casriga Ah Uma Baahna Mashquul — Waxay U Baahan Yihiin <span className="text-primary">Nidaam</span>
          </h2>
        </div>

        {/* Visual Storytelling: Problem vs Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-12 sm:mb-16">
          
          {/* 01: The Problem Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-[28px] bg-red-50/50 dark:bg-slate-900/80 border border-red-200/60 dark:border-red-900/30 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wider mb-6">
                <AlertTriangle size={14} />
                <span>Dhibaatada Taagan</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4 leading-snug">
                Ku Tiirsanaanta Fariimo Is Dhex Yaacsan & Gaabis
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Muqdisho waa suuq si degdeg ah u kobcaya, halkaas oo xawaaruhu go’aamiyo guusha ganacsiga. Ku tiirsanaanta fariimaha WhatsApp-ka ee gacanta lagu maareeyo ama meelaha aan nidaamsanayn waxay keentaa dalabaad luma, macaamiil ka carara gaabiska, iyo dakhli lumay.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-red-200/50 dark:border-red-900/30 flex items-center gap-3 text-sm font-semibold text-red-600 dark:text-red-400">
              <span>Khaladaad badan & macaamiil lumin</span>
            </div>
          </motion.div>

          {/* 02: The Solution Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 sm:p-10 rounded-[28px] bg-blue-50/50 dark:bg-slate-900/80 border border-blue-200/60 dark:border-blue-900/30 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-primary dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-6">
                <CheckCircle size={14} />
                <span>Xalka OneStep Digital</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4 leading-snug">
                Nidaam Isku Xiran: QR Menu, Google Maps & WhatsApp
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                OneStep Digital waxay kuu dhiseysaa nidaam fudud oo toos ah oo isku xira QR Menu-gaaga, cinwaankaaga saxda ah ee Google Maps-ka, iyo nidaamka WhatsApp-ka. Macaamiishu waxay ku helayaan wax ka yar 3 ilbiriqsi, dalabkoodana toos buu kuu soo gaarayaa.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200/50 dark:border-blue-900/30 flex items-center gap-3 text-sm font-semibold text-primary dark:text-blue-400">
              <span>Adeeg degdeg ah & xirfad sare</span>
            </div>
          </motion.div>

        </div>

        {/* Highlighted Mission Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-8 sm:p-10 rounded-[28px] bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center relative max-w-4xl mx-auto shadow-sm"
        >
          <div className="text-3xl font-serif text-primary/30 dark:text-primary/40 leading-none mb-2">&ldquo;</div>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-secondary dark:text-white leading-snug mb-3">
            Hadafkeenna waa inaan nidaam u beddelno mashquulkaaga, si adiguna aad diiradda u saarto kobcinta ganacsigaaga.
          </p>
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400">
            OneStep Digital — Halbeegga Casriyeynta
          </div>
        </motion.div>

      </div>
    </section>
  );
}
