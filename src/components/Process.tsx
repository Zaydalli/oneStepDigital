"use client";

import { Search, PenTool, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-sky-600 dark:text-cyan-300 font-semibold text-xs sm:text-sm mb-4 border border-accent/20">
            Sidee U Shaqeynaa?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary dark:text-white tracking-tight leading-[1.18]">
            3 Tallaabo Oo Fudud Oo Loo Maro Guusha
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            Nidaam hufan oo laga bilaabo la-tashiga koowaad ilaa kobcinta joogtada ah.
          </p>
        </div>

        {/* Visual Timeline Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Step 01 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-[28px] bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-8 sm:p-9 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl sm:text-5xl font-black font-mono text-primary/30 dark:text-primary/40">
                  01
                </span>
                <div className="w-13 h-13 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-700/60 text-primary flex items-center justify-center">
                  <Search size={24} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3">
                Baaris & Qorsheyn
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Waxaan u kuurgalnaa meheraddaada, suuqa aad ku jirto iyo macaamiishaada si aan u dhisno qorshe suuqgeyn oo ku habboon kobacaaga.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-primary">
              <span>Tallaabada 1-aad</span>
              <ArrowRight size={14} />
            </div>
          </motion.div>

          {/* Step 02 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative rounded-[28px] bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-8 sm:p-9 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl sm:text-5xl font-black font-mono text-primary/30 dark:text-primary/40">
                  02
                </span>
                <div className="w-13 h-13 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-700/60 text-primary flex items-center justify-center">
                  <PenTool size={24} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3">
                Hirgelin & Naqshadeyn
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Waxaan diyaarinaa nidaamkaaga (QR Menu, Maps), duubnaa muuqaallada (Reels), una habeynaa xayeysiisyada si xirfadeysan.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-primary">
              <span>Tallaabada 2-aad</span>
              <ArrowRight size={14} />
            </div>
          </motion.div>

          {/* Step 03 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-[28px] bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-8 sm:p-9 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl sm:text-5xl font-black font-mono text-primary/30 dark:text-primary/40">
                  03
                </span>
                <div className="w-13 h-13 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-700/60 text-primary flex items-center justify-center">
                  <Rocket size={24} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3">
                Daahfur & Kobcin
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Waxaan hawada galinaa nidaamka iyo xayeysiisyada, anagoo si joogto ah ula socona natiijada iyo dakhliga soo xaroonaya.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-primary">
              <span>Tallaabada 3-aad</span>
              <ArrowRight size={14} />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
