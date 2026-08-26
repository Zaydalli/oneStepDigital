"use client";

import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "DIGITAL STARTER",
      subtitle: "Basic Setup",
      badge: "Ugu Habboon Billowga",
      price: "$120",
      period: "One Time",
      features: [
        "QR / Digital Catalog Setup",
        "WhatsApp Business Setup & Optimization",
        "Google Maps Setup + Photos",
        "5 QR Stands / Display Cards",
        "100 Logo Stickers",
        "1 Welcome / Offer Post",
        "Final QR, Link & WhatsApp Test",
      ],
      supportNote: "Wareejinta shaqada kadib, wixii wax ka beddel ah ama shaqo dheeri ah si gaar ah ayaa loo xisaabinayaa.",
      noteLabel: "Shuruudda Taageerada:",
      recommended: true,
      buttonText: "Dalbo Xirmadan",
    },
    {
      name: "CONTENT BOOST",
      subtitle: "Engaging Visuals",
      badge: "Visuals",
      price: "$150",
      period: "Monthly",
      features: [
        "2 Short Reels per month",
        "2 Hours Flexible Filming",
        "Editing & Text Captions",
        "Ready-to-Post Files",
      ],
      supportNote: "Xirmadani waa abuuris muuqaal keliya. Macmiilka ayaa la wareegaya oo isagu post-gareynaya.",
      noteLabel: "FG:",
      recommended: false,
      buttonText: "Dalbo Xirmadan",
    },
    {
      name: "GROWTH MANAGEMENT",
      subtitle: "Continuous Page Management",
      badge: "Maamul",
      price: "$200",
      period: "Monthly",
      features: [
        "6 Posts / Designs per month",
        "2 Short Reels per month",
        "Posting (Facebook / Instagram / TikTok)",
        "Content Plan & Monthly Report",
      ],
      supportNote: "Xirmadani kuma jirto bixinta lacagta Meta Ads-ka iyo u jawaabidda farriimaha (DMs/Comments).",
      noteLabel: "FG:",
      recommended: false,
      buttonText: "Dalbo Xirmadan",
    },
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
            Dooro xirmada kugu habboon si aad u dardar geliso kobocaaga dijitaalka ah. Ma jiraan lacago qarsoon.
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
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary dark:text-white mb-1">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">{plan.subtitle}</p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-4xl sm:text-5xl font-black text-secondary dark:text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    /{plan.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
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

                {/* Support Note */}
                {plan.supportNote && (
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl mb-8 border border-slate-200/60 dark:border-slate-700/60">
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      <strong className="text-secondary dark:text-white font-semibold">{plan.noteLabel}</strong> {plan.supportNote}
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
