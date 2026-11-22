"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Layers, MapPin } from "lucide-react";

export default function Stats() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center mb-3">
              <ShieldCheck size={20} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white tracking-tight">
              100%
            </div>
            <div className="text-sm font-semibold text-secondary dark:text-slate-200 mt-0.5">
              Nidaam Dijitaal Ah
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Social Media, Ads & WhatsApp isku xiran
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center mb-3">
              <Clock size={20} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white tracking-tight">
              24/7
            </div>
            <div className="text-sm font-semibold text-secondary dark:text-slate-200 mt-0.5">
              Taageero & La-talin
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Caawin joogto ah oo toos ah
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center mb-3">
              <Layers size={20} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white tracking-tight">
              3 Tallaabo
            </div>
            <div className="text-sm font-semibold text-secondary dark:text-slate-200 mt-0.5">
              Habka Shaqada
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Baaris, Hirgelin & Daahfur
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center mb-3">
              <MapPin size={20} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white tracking-tight">
              Muqdisho
            </div>
            <div className="text-sm font-semibold text-secondary dark:text-slate-200 mt-0.5">
              Xarunta Ganacsiga
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Khibrad suuqa gudaha ah
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
