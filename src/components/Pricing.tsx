"use client";

import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      badge: "One-Time Setup",
      price: "$120",
      period: "mar kaliya",
      description: "Ku habboon ganacsiyada cusub ee raba in ay nidaamsadaan dalabaadka iyo cinwaanka Google Maps-ka.",
      features: [
        "Digital Menu & QR Code casri ah",
        "WhatsApp Direct Ordering Setup",
        "Google Maps Profile Setup & Optimization",
        "1 Bil oo Taageero Farsamo ah",
      ],
      recommended: false,
      buttonText: "Dalbo Starter",
    },
    {
      name: "Content Boost",
      badge: "Ugu Caansan",
      price: "$150",
      period: "bishii",
      description: "Xirmo loogu talagalay meheradaha raba muuqaallo (Reels) joogto ah oo soo jiita macaamiil cusub.",
      features: [
        "8 Muuqaal (Reels) bishii",
        "Qorista Script-ka & Duubista Muuqaallada",
        "Editing & Graphic Design heersare ah",
        "La-socodka Natiijooyinka iyo Daawashada",
      ],
      recommended: true,
      buttonText: "Dalbo Content Boost",
    },
    {
      name: "Growth Management",
      badge: "Maamul Dhameystiran",
      price: "$200",
      period: "bishii",
      description: "Xalka ugu buuxa ee ganacsiyada raba in dhammaan baraha bulshada iyo xayeysiisyada loo maareeyo.",
      features: [
        "Maamulka Bogagga (Facebook, Instagram & TikTok)",
        "Posting Joogto Ah & Jawaabaha Macaamiisha",
        "Meta Ads Management & Targeted Campaigns",
        "Warbixin Bille Ah & La-talin joogto ah",
      ],
      recommended: false,
      buttonText: "Dalbo Growth Management",
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-semibold text-xs sm:text-sm mb-4 border border-primary/20">
            <Sparkles size={14} />
            <span>Xirmooyinka & Qiimaha</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary dark:text-white tracking-tight leading-[1.18]">
            Xirmooyin Hufan Oo Aan Qarsoodi Lahayn
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            Dooro qorshaha ku habboon baahida ganacsigaaga.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-[28px] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                plan.recommended
                  ? "bg-white dark:bg-slate-900 border-2 border-primary shadow-2xl shadow-primary/15 lg:-translate-y-2"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-slate-900/5 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-secondary dark:text-white">{plan.name}</h3>
                  {!plan.recommended && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-4xl sm:text-5xl font-black text-secondary dark:text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    /{plan.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card CTA */}
              <a
                href={`https://wa.me/252615894875?text=${encodeURIComponent(`Asc, waxaan rabaa ${plan.name} plan (${plan.price}). Magacaygu waa ___, ganacsigayguna waa ___.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all ${
                  plan.recommended
                    ? "bg-primary hover:bg-blue-700 text-white shadow-lg shadow-primary/25"
                    : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-secondary dark:text-white"
                }`}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
