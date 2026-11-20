"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import ServiceArt from "./ServiceArt";

export default function CustomServices() {
  return (
    <section className="py-20 lg:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 text-cyan-300 font-semibold text-xs uppercase tracking-wider mb-4 border border-primary/30">
                Xalal Gaar Ah
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Ma U Baahan Tahay Adeeg Khaas Ah?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Haddii baahidaada aysan ku jirin xirmooyinka kor ku xusan, waxaan kuu dhiseynaa qorshe gaar ah oo la jaanqaadaya miisaaniyaddaada iyo hadafkaaga.
              </p>
            </div>

            {/* 4 Custom Offerings Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ServiceArt kind="website" compact />
                <h3 className="text-lg font-bold mb-2 text-white">Website Development</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Websites degdeg ah, casri ah, loona habeeyay mobaylada si ay macaamiil cusub kuugu keenaan.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ServiceArt kind="logo" compact />
                <h3 className="text-lg font-bold mb-2 text-white">Logo & Brand Identity</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Naqshado calaamad (Logo) iyo aqoonsi shirkadeed oo xirfadeysan oo suuqa kugu dhex muujiya.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ServiceArt kind="ads" compact />
                <h3 className="text-lg font-bold mb-2 text-white">Meta Ads & Scaling</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Xayeysiisyada Facebook & Instagram ee tooska ugu bartilmaameedsada macaamiisha wax iibsanaya.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ServiceArt kind="event" compact />
                <h3 className="text-lg font-bold mb-2 text-white">Event & Video Coverage</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Duubista munaasabadaha iyo soo-bandhigidda alaabaha cusub oo leh tayo cinematic ah.</p>
              </motion.div>

            </div>

            {/* Bottom Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <MessageSquare className="text-primary" size={24} />
                <span className="text-sm sm:text-base font-semibold text-slate-200">
                  Kala hadal kooxdayada qorshe kuu gaar ah
                </span>
              </div>
              <a
                href="https://wa.me/252615894875?text=Asc%20OneStep%20Digital,%20waxaan%20rabaa%20adeeg%20gaar%20ah%20(Custom%20Service)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-blue-600 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 shrink-0"
              >
                <span>Dalbo Xigasho Gaar Ah</span>
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
