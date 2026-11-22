"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Video, Clapperboard, Code2, Palette, Target, Camera, MessageCircle, CheckCircle2, ArrowRight, Sparkles, X, type LucideIcon } from "lucide-react";
import ServiceArt, { type Kind } from "./ServiceArt";

type Service = {
  key: string;
  art: Kind;
  recommended?: boolean;
  title: string;
  icon: LucideIcon;
  pkg: { name: string; price?: string; period?: string; tag: string; features: string[]; note?: string };
};

// Prices and contents follow the OneStep rate card. Packages share the "included" list below.
const services: Service[] = [
  { key: "digital", art: "digital", title: "Digital", icon: Wand2, pkg: { name: "Digital", price: "$150", period: "bishii", tag: "Naqshado & muuqaallo AI ah", features: ["6 naqshadood", "2 muuqaal oo AI ah"], note: "Waxaan adeegsannaa sawirrada alaabtaada iyo goobtaada." } },
  { key: "duubis", art: "duubis", recommended: true, title: "Duubis", icon: Video, pkg: { name: "Duubis", price: "$225", period: "bishii", tag: "Duubis goobta ah & naqshado", features: ["6 naqshadood", "2 muuqaal oo goobta lagu duubo"], note: "Hal booqasho duubis bishii, hal goob oo magaalada ah." } },
  { key: "plus", art: "plus", title: "Duubis Plus", icon: Clapperboard, pkg: { name: "Duubis Plus", price: "$300", period: "bishii", tag: "Duubis, AI & naqshado", features: ["10 naqshadood", "2 muuqaal oo goobta lagu duubo", "2 muuqaal oo AI ah"], note: "4 muuqaal bishii: 2 duubis ah iyo 2 AI ah." } },
  { key: "web", art: "website", title: "Website & Apps", icon: Code2, pkg: { name: "Website & Apps", tag: "Adeeg dheeri ah", features: ["Naqshadaynta iyo dhisidda website-yada", "Dhisidda apps u gaar ah ganacsiga"] } },
  { key: "logo", art: "logo", title: "Logo & Branding", icon: Palette, pkg: { name: "Logo & Branding", tag: "Adeeg dheeri ah", features: ["Logo iyo aqoonsiga ganacsiga"] } },
  { key: "ads", art: "ads", title: "Ololayaasha Meta", icon: Target, pkg: { name: "Ololayaasha Meta", tag: "Adeeg dheeri ah", features: ["Maamulka iyo qorshaynta ololayaasha Meta (Facebook & Instagram)"] } },
  { key: "extra", art: "event", title: "Duubis & Muuqaallo Dheeri", icon: Camera, pkg: { name: "Duubis & Muuqaallo Dheeri", tag: "Adeeg dheeri ah", features: ["Duubista munaasabadaha", "Naqshado iyo muuqaallo dheeraad ah", "Samaynta muuqaallada AI"] } },
  { key: "connect", art: "connect", title: "QR Menu, WhatsApp & Maps", icon: MessageCircle, pkg: { name: "QR Menu, WhatsApp & Google Maps", tag: "Adeeg dheeri ah", features: ["QR menu", "Habaynta WhatsApp Business", "Ku darista iyo habaynta ganacsiga Google Maps"] } },
];

const included = ["Qorshaha nuxurka bisha", "Fikradaha iyo qoraalka muuqaallada", "Tafatir iyo cod-sharraxaad haddii loo baahdo", "Qorista qoraallada baraha bulshada", "Daabacaadda Facebook, Instagram iyo TikTok", "Maamulka xayeysiisyada Facebook iyo Instagram", "Warbixinta waxqabadka bisha"];

const order = (s: Service) => `https://wa.me/252615894875?text=${encodeURIComponent(`Salaan OneStep, waxaan xiiseynayaa ${s.pkg.name}${s.pkg.price ? ` (${s.pkg.price} ${s.pkg.period})` : ""}.`)}`;

/** Round icon badge with a curved "stand" underneath. */
function Badge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32">
      <div className="absolute inset-x-2 top-0 bottom-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg shadow-blue-900/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 flex items-center justify-center">
        <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-white" strokeWidth={1.75} />
      </div>
      <svg viewBox="0 0 120 40" className="absolute inset-x-0 bottom-0 w-full" aria-hidden="true">
        <path d="M14 14 Q60 46 106 14" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
        <circle cx="14" cy="14" r="8" fill="#0ea5e9" /><circle cx="106" cy="14" r="8" fill="#0ea5e9" />
      </svg>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!active) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; lastTrigger.current?.focus(); };
  }, [active]);

  return (
    <section id="services" className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-semibold text-xs sm:text-sm mb-4">
            <Sparkles size={14} /><span>Adeegyada Aan Bixinno</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary dark:text-white tracking-tight leading-[1.18]">Adeegyadeenna</h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">Riix xirmo ama adeeg si aad u aragto qiimaha iyo waxa ku jira.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-14">
          {services.map((s, i) => (
            <motion.div key={s.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="w-1/2 md:w-1/4 px-2 sm:px-4">
              <button type="button" onClick={e => { lastTrigger.current = e.currentTarget; setActive(s); }} className="group w-full rounded-3xl py-3 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-haspopup="dialog">
                <div className="relative"><Badge icon={s.icon} />{s.recommended && <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-amber-950 shadow">Lagu Taliyay</span>}</div>
                <h3 className="mt-5 text-base sm:text-lg font-bold text-blue-900 dark:text-blue-200 leading-snug">{s.title}</h3>
                <span className="mt-1 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary opacity-80 group-hover:opacity-100">
                  {s.pkg.price ? `${s.pkg.price} · ${s.pkg.period}` : "Qiime gaar ah"} <ArrowRight size={14} />
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-slate-950/60 backdrop-blur-sm p-0 sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby="pkg-title" onClick={e => e.stopPropagation()} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.25 }}
              className="w-full sm:max-w-lg max-h-[90dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-primary dark:bg-slate-800 dark:text-blue-300">{active.pkg.tag}</span>
                  <h3 id="pkg-title" className="mt-3 text-2xl font-bold text-secondary dark:text-white">{active.pkg.name}</h3>
                </div>
                <button ref={closeRef} type="button" onClick={() => setActive(null)} aria-label="Xir" className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><X size={20} /></button>
              </div>
              <ServiceArt kind={active.art} compact={!active.pkg.price} />
              <p className="mb-5 text-3xl font-extrabold text-secondary dark:text-white">
                {active.pkg.price ?? "Qiime gaar ah"} {active.pkg.period && <span className="text-base font-semibold text-slate-500">/ {active.pkg.period}</span>}
              </p>
              <ul className="space-y-3 mb-5">
                {active.pkg.features.map(f => <li key={f} className="flex items-start gap-2.5 text-sm text-secondary dark:text-slate-200 font-medium"><CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />{f}</li>)}
              </ul>
              {active.pkg.price && <div className="mb-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Sidoo kale waxaa ku jira</p>
                <ul className="grid gap-1.5 text-xs text-slate-600 dark:text-slate-300">{included.map(x => <li key={x}>• {x}</li>)}</ul>
                <p className="mt-3 text-xs font-semibold text-primary dark:text-blue-300">+ $50 xayeysiis Meta ah · Muuqaal kasta ≤ 60 ilbiriqsi</p>
              </div>}
              {active.pkg.note && <p className="mb-5 rounded-xl bg-amber-50 dark:bg-amber-900/20 px-4 py-3 text-xs text-amber-800 dark:text-amber-200">{active.pkg.note}</p>}
              <a href={order(active)} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-full font-bold flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white shadow-lg shadow-primary/25 transition-colors">
                {active.pkg.price ? "Dalbo Xirmadan" : "Codso Qiime"} <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
