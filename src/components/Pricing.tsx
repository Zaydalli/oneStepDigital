"use client";

import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "DIGITAL",
      subtitle: "Naqshado & muuqaallo AI ah",
      badge: "",
      price: "$150",
      period: "bishii",
      features: ["6 naqshadood", "2 muuqaal oo AI ah"],
      supportNote: "Waxaan adeegsannaa sawirrada alaabtaada iyo goobtaada.",
      noteLabel: "FG:",
      recommended: false,
      buttonText: "Dalbo Xirmadan",
    },
    {
      name: "DUUBIS",
      subtitle: "Duubis goobta ah & naqshado",
      badge: "Lagu Taliyay",
      price: "$225",
      period: "bishii",
      features: ["6 naqshadood", "2 muuqaal oo goobta lagu duubo"],
      supportNote: "Hal booqasho duubis bishii, hal goob oo magaalada ah.",
      noteLabel: "FG:",
      recommended: true,
      buttonText: "Dalbo Xirmadan",
    },
    {
      name: "DUUBIS PLUS",
      subtitle: "Duubis, AI & naqshado",
      badge: "",
      price: "$300",
      period: "bishii",
      features: ["10 naqshadood", "2 muuqaal oo goobta lagu duubo", "2 muuqaal oo AI ah"],
      supportNote: "4 muuqaal bishii: 2 duubis ah iyo 2 AI ah.",
      noteLabel: "FG:",
      recommended: false,
      buttonText: "Dalbo Xirmadan",
    },
  ];

  const included = [
    "Qorshaha nuxurka bisha",
    "Fikradaha iyo qoraalka muuqaallada",
    "Tafatir iyo cod-sharraxaad haddii loo baahdo",
    "Qorista qoraallada baraha bulshada",
    "Jadwalaynta iyo daabacaadda qoraallada Facebook, Instagram iyo TikTok",
    "Maamulka xayeysiisyada Facebook iyo Instagram",
    "Warbixinta waxqabadka bisha",
  ];

  return (
    <section id="pricing" className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-semibold text-xs sm:text-sm mb-4 border border-primary/20">
            <Sparkles size={14} />
            <span>Qiimo Fudud oo Cad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary dark:text-white tracking-tight leading-[1.18]">
            Xirmooyinka & Qiimaha
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            OneStep waxay kuu samaysaa naqshado iyo muuqaallo xirfad leh, waxayna kuu maamushaa baraha bulshada iyo xayeysiisyada si macaamiishu toos kuugala soo xiriiraan WhatsApp.
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
                  ? "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white border-2 border-blue-400/60 shadow-2xl shadow-blue-700/30 lg:-translate-y-3 lg:scale-[1.03]"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-slate-900/5 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${plan.recommended ? "text-white" : "text-secondary dark:text-white"}`}>{plan.name}</h3>
                  <p className={`text-xs sm:text-sm font-medium ${plan.recommended ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>{plan.subtitle}</p>
                </div>

                {/* Price Display */}
                <div className={`flex items-baseline gap-1.5 mb-6 pb-6 border-b ${plan.recommended ? "border-white/20" : "border-slate-100 dark:border-slate-800"}`}>
                  <span className={`text-4xl sm:text-5xl font-black tracking-tight ${plan.recommended ? "text-white" : "text-secondary dark:text-white"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm font-semibold ${plan.recommended ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                    / {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.recommended ? "bg-white/20 text-white" : "bg-primary/10 dark:bg-primary/20 text-primary"}`}>
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-medium leading-relaxed ${plan.recommended ? "text-white" : "text-slate-700 dark:text-slate-200"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Support Note */}
                {plan.supportNote && (
                  <div className={`p-3.5 rounded-xl mb-8 border ${plan.recommended ? "bg-white/10 border-white/20" : "bg-slate-50 dark:bg-slate-800/60 border-slate-200/60 dark:border-slate-700/60"}`}>
                    <p className={`text-xs leading-relaxed ${plan.recommended ? "text-blue-50" : "text-slate-600 dark:text-slate-400"}`}>
                      <strong className={`font-semibold ${plan.recommended ? "text-white" : "text-secondary dark:text-white"}`}>{plan.noteLabel}</strong> {plan.supportNote}
                    </p>
                  </div>
                )}
              </div>

              {/* Card CTA */}
              <a
                href={`https://wa.me/252615894875?text=${encodeURIComponent(`Asc, waxaan rabaa ${plan.name} plan (${plan.price}). Magacaygu waa ___, ganacsigayguna waa ___.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all ${
                  plan.recommended
                    ? "bg-white hover:bg-blue-50 text-blue-800 shadow-lg shadow-blue-950/30"
                    : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-secondary dark:text-white"
                }`}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Shared by every package */}
        <div className="mt-10 rounded-[28px] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 p-7 sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-secondary dark:text-white">Xirmo kasta waxaa kale oo ku jira</h3>
            <span className="rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-1.5 text-sm font-bold text-primary dark:text-blue-300">+ $50 xayeysiis Meta ah</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {included.map(item => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5"><Check size={13} strokeWidth={3} /></div>
                <span className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">Xirmo kasta waxaa ku jira $50 oo xayeysiiska Meta ah. Muuqaal kasta: ugu badnaan 60 ilbiriqsi.</p>
        </div>

      </div>
    </section>
  );
}
