"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-[120px] bg-gray-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-900 rounded-[32px] shadow-xl border border-gray-200 dark:border-slate-800 p-8 md:p-16 relative z-10"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent dark:bg-accent/20 dark:text-purple-300 font-semibold text-sm mb-6 border border-accent/20">
              Dhibaatada & Xalka
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary dark:text-white mb-6 leading-tight">
              Ganacsiyada Casriga Ah Uma Baahna Mashquul, Waxay U Baahan Yihiin <span className="text-primary">Nidaam</span>.
            </h2>
            
            <div className="text-lg md:text-xl text-text/80 dark:text-gray-300 mb-12 leading-relaxed space-y-6 text-left">
              <p>
                Muqdisho waa suuq si degdeg ah u kobcaya, halkaas oo xawaaruhu go’aamiyo guusha ganacsiga. Ku tiirsanaanta WhatsApp ama fariimo is dhex yaacsan waxay keeni kartaa luminta macaamiil iyo dakhli.              </p>
              <p>
                OneStep Digital waxay dhistaa Ordering Engine casri ah oo ka dhigaya dalabaadkaaga kuwo nidaamsan, laga bilaabo Menu-ga ilaa helitaanka dalabka.              </p>
              <p>
                Nidaamku wuxuu shaqeeyaa 24/7, wuxuuna yareeyaa khaladaadka, dedejiyaa adeegga, isla markaana kordhiya iibka adigoon shaqaale dheeraad ah u baahnayn.              </p>
            </div>
            
            <div className="inline-flex items-center justify-center px-8 py-6 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm w-full">
              <p className="text-xl md:text-2xl font-medium italic text-secondary dark:text-white">
                "Hadafkeenna waa inaan nidaam u beddelno mashquulkaaga, si adiguna aad diiradda u saarto kobcinta ganacsigaaga."
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
