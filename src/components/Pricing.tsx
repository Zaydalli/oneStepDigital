"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  subtitle?: string;
  period: string;
  features: string[];
  supportNote: string;
  noteLabel: string;
  price: string;
  recommended: boolean;
}

export default function Pricing() {
  const heading = "Qiimo Fudud oo Cad";
  const description = "Dooro xirmada kugu habboon si aad u dardar geliso kobocaaga dijitaalka ah. Ma jiraan lacago qarsoon.";
  const button = "Dalbo Xirmadan";
  const customHeading = "Ma U Baahan Tahay Adeegyo Gaar Ah?";
  const customDescription = "Dhisidda Website-yada, Naqshadaynta Logo-da, Maareynta Meta Ads, Muuqaallada Xayeysiiska AI iyo in ka badan. Aan kuu samayno xirmo si buuxda ugu habboon baahidaada gaarka ah.";
  const customButton = "Dalbo Qiimeyn Gaar ah";

  const plansData = [
    {
      name: "DIGITAL STARTER",
      subtitle: "Basic Setup",
      period: "One Time",
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
      noteLabel: "Shuruudda Taageerada:"
    },
    {
      name: "CONTENT BOOST",
      subtitle: "Engaging Visuals",
      period: "Monthly",
      features: [
        "2 Short Reels per month",
        "2 Hours Flexible Filming",
        "Editing & Text Captions",
        "Ready-to-Post Files"
      ],
      supportNote: "Xirmadani waa abuuris muuqaal keliya. Macmiilka ayaa la wareegaya oo isagu post-gareynaya.",
      noteLabel: "FG:"
    },
    {
      name: "GROWTH MANAGEMENT",
      subtitle: "Continuous Page Management",
      period: "Monthly",
      features: [
        "6 Posts / Designs per month",
        "2 Short Reels per month",
        "Posting (Facebook / Instagram / TikTok)",
        "Content Plan & Monthly Report"
      ],
      supportNote: "Xirmadani kuma jirto bixinta lacagta Meta Ads-ka iyo u jawaabidda farriimaha (DMs/Comments).",
      noteLabel: "FG:"
    }
  ];

  const planBase = [
    { price: "$120", recommended: true },
    { price: "$150", recommended: false },
    { price: "$200", recommended: false }
  ];

  const plans: Plan[] = plansData.map((plan, index) => ({
    ...plan,
    ...planBase[index]
  }));

  return (
    <section id="pricing" className="py-[120px] bg-white dark:bg-slate-900">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">{heading}</h2>
          <p className="text-lg text-text/80 dark:text-gray-300">
            {description}
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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide whitespace-nowrap">
                  Ugu Habboon Billowga
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-secondary dark:text-white mb-1">{plan.name}</h3>
                {plan.subtitle && (
                  <p className="text-sm text-text/60 dark:text-gray-400 mb-4">{plan.subtitle}</p>
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

              {plan.supportNote && (
                <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl mb-8 border border-gray-100 dark:border-slate-800">
                  <p className="text-xs text-text/70 dark:text-gray-400 leading-relaxed">
                    <span className="font-semibold text-secondary dark:text-white">{plan.noteLabel}</span> {plan.supportNote}
                  </p>
                </div>
              )}

              <a 
                href={`https://wa.me/252615894875?text=${encodeURIComponent(`Asc, waxaan rabaa ${plan.name} plan (${plan.price}). Magacaygu waa ___, ganacsigayguna waa ___.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-4 rounded-xl font-medium transition-all ${
                  plan.recommended
                    ? "bg-primary text-white hover:bg-primary/90 shadow-md"
                    : "bg-gray-50 dark:bg-slate-800 text-secondary dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-800"
                }`}
              >
                {button}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Services CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-2">{customHeading}</h3>
            <p className="text-text/80 dark:text-gray-300">
              {customDescription}
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            {customButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
