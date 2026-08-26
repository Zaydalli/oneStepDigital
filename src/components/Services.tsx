"use client";

import { QrCode, Video, Share2, Palette, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-semibold text-xs sm:text-sm mb-4 border border-primary/20">
            <Sparkles size={14} />
            <span>Adeegyada Aan Bixinno</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary dark:text-white tracking-tight leading-[1.18]">
            Adeegyadeenna
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            Xalal dijitaal ah oo casri ah, loona habeeyey inay fududeeyaan shaqada ganacsigaaga, kordhiyaan muuqaalkaaga, kaana caawinayaan inaad gaarto macaamiil badan.
          </p>
        </div>

        {/* Editorial Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Service 01: Digital Starter */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-slate-900/5 hover:border-slate-300 dark:hover:border-slate-700"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center">
                    <QrCode size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Basic Setup
                  </span>
                </div>
                <span className="text-2xl font-mono font-black text-slate-300 dark:text-slate-700">01</span>
              </div>

              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6 tracking-tight">
                Digital Starter
              </h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>QR / Digital Catalog Setup</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>WhatsApp Business Setup & Optimization</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Google Maps Setup + Photos</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>5 QR Stands / Display Cards</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>100 Logo Stickers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>1 Welcome / Offer Post</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Final QR, Link & WhatsApp Test</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/252615894875"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all bg-slate-100 hover:bg-primary hover:text-white dark:bg-slate-800 dark:hover:bg-primary text-secondary dark:text-white"
            >
              <span>Dalbo Adeeggan</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Service 02: Content Boost */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[28px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 bg-white dark:bg-slate-900 border-2 border-primary shadow-xl shadow-primary/10 relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 text-accent flex items-center justify-center">
                    <Video size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Engaging Visuals
                  </span>
                </div>
                <span className="text-2xl font-mono font-black text-slate-300 dark:text-slate-700">02</span>
              </div>

              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6 tracking-tight">
                Content Boost
              </h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>2 Short Reels per month</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>2 Hours Flexible Filming</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Editing & Text Captions</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Ready-to-Post Files</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/252615894875"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all bg-primary hover:bg-blue-700 text-white shadow-md shadow-primary/25"
            >
              <span>Dalbo Adeeggan</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Service 03: Growth Management */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[28px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-slate-900/5 hover:border-slate-300 dark:hover:border-slate-700"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center">
                    <Share2 size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Page Management
                  </span>
                </div>
                <span className="text-2xl font-mono font-black text-slate-300 dark:text-slate-700">03</span>
              </div>

              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6 tracking-tight">
                Growth Management
              </h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>6 Posts / Designs per month</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>2 Short Reels per month</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Posting (Facebook / Instagram / TikTok)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Content Plan & Monthly Report</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/252615894875"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all bg-slate-100 hover:bg-primary hover:text-white dark:bg-slate-800 dark:hover:bg-primary text-secondary dark:text-white"
            >
              <span>Dalbo Adeeggan</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Service 04: Custom Services */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-[28px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-slate-900/5 hover:border-slate-300 dark:hover:border-slate-700"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 dark:bg-slate-800 text-secondary dark:text-white flex items-center justify-center">
                    <Palette size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Tailored Solutions
                  </span>
                </div>
                <span className="text-2xl font-mono font-black text-slate-300 dark:text-slate-700">04</span>
              </div>

              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6 tracking-tight">
                Custom Services
              </h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Website Development</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Logo Design</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Meta Ads Management</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Event Coverage</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/252615894875"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all bg-slate-100 hover:bg-primary hover:text-white dark:bg-slate-800 dark:hover:bg-primary text-secondary dark:text-white"
            >
              <span>Dalbo Adeeggan</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
