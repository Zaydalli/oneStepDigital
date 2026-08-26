"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    whatsapp: "",
    message: "",
    _honey: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._honey) return;

    setFormStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@onestepdigital.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Business: formData.businessName,
          WhatsApp: formData.whatsapp,
          Message: formData.message,
          _subject: `New Lead: ${formData.businessName} (${formData.name})`,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", businessName: "", whatsapp: "", message: "", _honey: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800/70 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Dominant CTA Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-semibold text-xs sm:text-sm mb-4 border border-primary/20">
            Nala Soo Xiriir
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary dark:text-white tracking-tight leading-[1.18]">
            Diyaar Ma U Tahay Inaad Ganacsigaaga Casriyeyso?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto">
            Nala soo xiriir maanta si aan kuugu samayno Demo toos ah, kaagana caawino nidaaminta dalabaadkaaga.
          </p>
        </div>

        {/* 2-Column Grid: Contact Info & Form */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a 
              href="https://wa.me/252615894875" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-6 rounded-[24px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-green-500/50 transition-all flex items-center gap-4 group"
            >
              <div className="w-13 h-13 rounded-2xl bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0 border border-green-200/60 dark:border-green-900/50 group-hover:scale-105 transition-transform">
                <MessageCircle size={24} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">WhatsApp Toos Ah</div>
                <div className="text-base sm:text-lg font-bold text-secondary dark:text-white group-hover:text-green-600 transition-colors">
                  +252 615 894875
                </div>
              </div>
            </a>

            <a 
              href="mailto:info@onestepdigital.co" 
              className="p-6 rounded-[24px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-primary/50 transition-all flex items-center gap-4 group"
            >
              <div className="w-13 h-13 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-105 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Email Rasmi Ah</div>
                <div className="text-base sm:text-lg font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">
                  info@onestepdigital.co
                </div>
              </div>
            </a>

            <div className="p-6 rounded-[24px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-200/60 dark:border-sky-900/50">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Xarunta Guud</div>
                <div className="text-base sm:text-lg font-bold text-secondary dark:text-white">
                  Mogadishu, Somalia
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[28px] shadow-xl shadow-slate-900/5 border border-slate-200/90 dark:border-slate-800/90"
          >
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6">Noo Soo Dir Fariin</h3>

            <AnimatePresence>
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-2xl flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium leading-relaxed">
                    Mahadsanid! Fariintaadu si guul leh ayay noogu soo gaartay. Waxaan kula soo xiriiri doonnaa waqti dhow.
                  </p>
                </motion.div>
              )}
              {formStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-2xl flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium leading-relaxed">
                    Waan ka xunnahay, khalad ayaa dhacay. Fadlan toos noogala soo xiriir WhatsApp: +252 615 894875.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="_honey" 
                style={{ display: "none" }} 
                value={formData._honey} 
                onChange={(e) => setFormData({ ...formData, _honey: e.target.value })} 
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-secondary dark:text-slate-200 mb-1.5">Magacaaga Buuxa *</label>
                  <input 
                    type="text" 
                    placeholder="Tusaale: Axmed Cali"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-secondary dark:text-slate-200 mb-1.5">Magaca Ganacsiga *</label>
                  <input 
                    type="text" 
                    placeholder="Tusaale: Safari Cafe"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-secondary dark:text-slate-200 mb-1.5">Number-ka WhatsApp-ka *</label>
                <input 
                  type="tel" 
                  placeholder="+252 61..."
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-secondary dark:text-slate-200 mb-1.5">Faahfaahinta Fariintaada *</label>
                <textarea 
                  placeholder="Noo sheeg adeegga aad u baahan tahay..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none dark:text-white text-sm sm:text-base"
                />
              </div>

              <button 
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white py-4 rounded-full font-bold text-base transition-all shadow-lg shadow-primary/25 hover:shadow-primary/35 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{formStatus === "submitting" ? "Fariinta waa la dirayaa..." : "Soo Dir Fariinta"}</span>
                {formStatus !== "submitting" && <Send size={18} />}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
