"use client";

import { QrCode, Video, TrendingUp, Settings, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
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
            Adeegyo Dijitaal Ah Oo Loo Habeeyay Ganacsigaaga
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            Dooro xalka ku habboon heerka uu ganacsigaagu maanta joogo.
          </p>
        </div>

        {/* Editorial Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Service 01 */}
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
                    Diyaarinta Nidaamka
                  </span>
                </div>
                <span className="text-2xl font-mono font-black text-slate-300 dark:text-slate-700">01</span>
              </div>

              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3 tracking-tight">
                Digital Starter (QR & Catalog)
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                U beddel meheraddaada mid casri ah oo leh QR Menu dijitaal ah oo toos ugu xiran WhatsApp iyo cinwaan Google Maps ah oo la xaqiijiyay.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Digital Menu & QR Code casri ah</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Google Maps & Xogta Meheradda</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>WhatsApp Direct Ordering Setup</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Tababar iyo wareejin buuxda</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/252615894875"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all bg-slate-100 hover:bg-primary hover:text-white dark:bg-slate-800 dark:hover:bg-primary text-secondary dark:text-white"
            >
              <span>Dalbo Digital Starter</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Service 02 - Featured */}
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
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center">
                    <Video size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Soo Jiidashada Macaamiisha
                  </span>
                </div>
                <span className="text-2xl font-mono font-black text-slate-300 dark:text-slate-700">02</span>
              </div>

              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3 tracking-tight">
                Content Boost (Reels & TikTok)
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Muuqaallo tayo sare leh oo loogu talagalay TikTok & Instagram Reels si ganacsigaaga looga dhex arko suuqa oo dhan loona keeno iib toos ah.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>8 Muuqaal (Reels/TikTok) bishii</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Qorista Fikradda & Script-ka</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Duubis & Editing xirfad sare leh</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Dhisidda sumcadda baraha bulshada</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/252615894875"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all bg-primary hover:bg-blue-700 text-white shadow-md shadow-primary/25"
            >
              <span>Dalbo Content Boost</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Service 03 */}
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
                    <TrendingUp size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Kobcin & Maamul Joogto Ah
                  </span>
                </div>
                <span className="text-2xl font-mono font-black text-slate-300 dark:text-slate-700">03</span>
              </div>

              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3 tracking-tight">
                Growth Management (Bogagga & Xayeysiiska)
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Maareynta buuxda ee dhammaan barahaaga bulshada, xayeysiisyada Meta Ads ee dakhliga kordhiya, iyo la-socodka fariimaha macaamiisha.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Maamulka Facebook & Instagram</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Posting & Engagement joogto ah</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Xayeysiisyada Meta Ads Management</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Warbixin bille ah oo faahfaahsan</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/252615894875"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all bg-slate-100 hover:bg-primary hover:text-white dark:bg-slate-800 dark:hover:bg-primary text-secondary dark:text-white"
            >
              <span>Dalbo Growth Management</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Service 04 */}
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
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center">
                    <Settings size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Xalka Gaarka Ah
                  </span>
                </div>
                <span className="text-2xl font-mono font-black text-slate-300 dark:text-slate-700">04</span>
              </div>

              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3 tracking-tight">
                Custom Services (Xalal Khaas Ah)
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Mashruucyo gaar ah oo loogu talagalay ganacsiyada u baahan Website xirfadaysan, Logo & Brand Identity, ama Event Coverage.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Website Development & Landing Pages</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Logo & Brand Identity Design</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Meta Ads & Campaign Scaling</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary dark:text-slate-200 font-medium">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>Duubista Munaasabadaha (Events)</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/252615894875"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all bg-slate-100 hover:bg-primary hover:text-white dark:bg-slate-800 dark:hover:bg-primary text-secondary dark:text-white"
            >
              <span>La Tasho Kooxda</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
