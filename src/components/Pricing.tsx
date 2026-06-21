"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "DIGITAL STARTER",
      subtitle: "Nidaamka aasaasiga",
      price: "$120",
      period: "Hal Mar",
      features: [
        "QR / Digital Catalog Setup",
        "WhatsApp Business Setup & Optimization",
        "Google Maps Setup + Photos",
        "5 QR Stands / Display Cards",
        "100 Logo Stickers",
        "1 Welcome / Offer Post",
        "Final QR, Link & WhatsApp Test"
      ],
      supportNote: "Wareejinta shaqada kadib, wixii wax ka beddel ah ama shaqo dheeri ah si gaar ah ayaa loo xisaabinayaa.",
      noteLabel: "Shuruudda Taageerada:",
      recommended: false
    },
    {
      name: "CONTENT BOOST",
      subtitle: "Muuqaallo Soo Jiita Macaamiisha",
      price: "$150",
      period: "Bishii",
      features: [
        "2 Short Reels bishii",
        "2 Saacadood oo Duubis Flexible ah",
        "Editing & Text Captions",
        "Ready-to-Post Files"
      ],
      supportNote: "Xirmadani waa abuuris muuqaal keliya. Macmiilka ayaa la wareegaya oo isagu post-gareynaya.",
      noteLabel: "FG:",
      recommended: false
    },
    {
      name: "GROWTH MANAGEMENT",
      subtitle: "Maamulka Joogtada ah ee Bogagga",
      price: "$200",
      period: "Bishii",
      features: [
        "6 Posts / Designs bishii",
        "2 Short Reels bishii",
        "Posting (Facebook / Instagram / TikTok)",
        "Content Plan & Monthly Report"
      ],
      supportNote: "Xirmadani kuma jirto bixinta lacagta Meta Ads-ka iyo u jawaabidda farriimaha (DMs/Comments).",
      noteLabel: "FG:",
      recommended: true
    }
  ];

  return (
    <section id="pricing" className="py-[120px] bg-white dark:bg-slate-900">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-text/80 dark:text-gray-300">
            Choose the perfect plan to accelerate your digital growth. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-white dark:bg-slate-900 rounded-[20px] p-8 transition-all duration-300 ${
                plan.recommended 
                  ? "border-2 border-primary shadow-xl scale-105 z-10" 
                  : "border border-gray-200 dark:border-slate-800/50 shadow-sm hover:shadow-xl hover:scale-105"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                  PREMIUM
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-secondary dark:text-white mb-1">{plan.name}</h3>
                {(plan as any).subtitle && (
                  <p className="text-sm text-text/60 dark:text-gray-400 mb-4">{(plan as any).subtitle}</p>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-secondary dark:text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-text/60 dark:text-gray-400 mb-1">/{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 shrink-0 mt-1 ${plan.recommended ? "text-primary" : "text-primary"}`} />
                    <span className="text-sm text-text/80 dark:text-gray-300 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {(plan as any).supportNote && (
                <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl mb-8 border border-gray-100 dark:border-slate-800">
                  <p className="text-xs text-text/70 dark:text-gray-400 leading-relaxed">
                    <span className="font-semibold text-secondary dark:text-white">{(plan as any).noteLabel}</span> {(plan as any).supportNote}
                  </p>
                </div>
              )}

              <a 
                href={`https://wa.me/252687683651?text=Hi, I'm interested in the ${plan.name} plan.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-4 rounded-xl font-medium transition-all ${
                  plan.recommended
                    ? "bg-primary text-white hover:bg-primary/90 shadow-md"
                    : "bg-gray-50 dark:bg-slate-800 text-secondary dark:text-white hover:bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-800"
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
