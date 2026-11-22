"use client";

import { ArrowRight, MessageSquare, Code2, Smartphone, Palette, Camera, Images, Wand2, Target, MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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
                Adeegyo Dheeri Ah
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Adeegyo Dheeri Ah
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Si gooni ah u dalbo ama ku dar xirmadaada. Xirmo gaar ah ma rabtaa? Noo sheeg adeegyada iyo tirada aad u baahan tahay. Qiimaha waxaa lagu saleeyaa shaqada iyo tirada aad dalbato.
              </p>
            </div>

            {/* Extra services (rate card) */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
              {[
                { icon: Code2, label: "Naqshadaynta iyo dhisidda website-yada" },
                { icon: Smartphone, label: "Dhisidda apps u gaar ah ganacsiga" },
                { icon: Palette, label: "Logo iyo aqoonsiga ganacsiga" },
                { icon: Camera, label: "Duubista munaasabadaha" },
                { icon: Images, label: "Naqshado iyo muuqaallo dheeraad ah" },
                { icon: Wand2, label: "Samaynta muuqaallada AI" },
                { icon: Target, label: "Maamulka iyo qorshaynta ololayaasha Meta" },
                { icon: MessageCircle, label: "Habaynta WhatsApp Business" },
                { icon: MapPin, label: "Ku darista iyo habaynta ganacsiga Google Maps" },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/40">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">{label}</h3>
                </motion.div>
              ))}
            </div>

            {/* Bottom Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <MessageSquare className="text-primary" size={24} />
                <span className="text-sm sm:text-base font-semibold text-slate-200">
                  Xirmo gaar ah ma rabtaa? Noo sheeg adeegyada iyo tirada aad u baahan tahay.
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
