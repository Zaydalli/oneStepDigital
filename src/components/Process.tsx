"use client";

import { motion } from "framer-motion";
import { MessageSquare, Target, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Wadatashi (Consultation)",
      description: "Waan ku dhagaysanaynaa si aan u fahamno ganacsigaaga, yoolkaaga iyo waxa aad higsanayso.",
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      gradient: "from-primary/20 to-transparent",
      borderColor: "border-primary/30"
    },
    {
      id: "02",
      title: "Qorsheyn (Strategy)",
      description: "Waxaan si taxadar leh u dajinaynaa qorshe suuqgeyn oo casri ah oo ku habboon baahidaada gaarka ah.",
      icon: <Target className="w-6 h-6 text-accent" />,
      gradient: "from-accent/20 to-transparent",
      borderColor: "border-accent/30"
    },
    {
      id: "03",
      title: "Fulin & Korriin (Launch & Grow)",
      description: "Waan fulinaynaa qorshihii iyadoo tayadiisu sarreyso, waxaana la soconaynaa isbedelka si aad natiijo u aragto.",
      icon: <Rocket className="w-6 h-6 text-green-500" />,
      gradient: "from-green-500/20 to-transparent",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <section id="process" className="py-[120px] bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-semibold text-sm mb-6 border border-primary/20">
              Sida Aan U Shaqayno
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary dark:text-white mb-6">
              Sedex Tallaabo oo Fudud
            </h2>
            <p className="text-lg text-text/80 dark:text-gray-300">
              Kaliya waqti yar na sii, annaguna waxaan diyaarinaynaa waddo kasta oo uu ganacsigaagu ku koro.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className={`bg-white dark:bg-slate-900 rounded-[24px] p-8 shadow-xl border ${step.borderColor} relative h-full hover:-translate-y-2 transition-transform duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-b ${step.gradient} rounded-[24px] opacity-50`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center border border-gray-100 dark:border-slate-700">
                      {step.icon}
                    </div>
                    <span className="text-5xl font-black text-gray-300 dark:text-slate-700">
                      {step.id}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-text/80 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
