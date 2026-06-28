"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", businessName: "", whatsapp: "", message: "", _honey: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const heading = "Diyaar Ma U Tahay Inaad Nidaamiso Ganacsigaaga?";
  const description = "Soo buuxi foomkan kooban, kooxdeena ayaa kula soo xiriiri doonta si aan kuugu samayno bandhig toos ah (Live Demo).";
  const emailLabel = "Email";
  const whatsappLabel = "WhatsApp";
  const locationLabel = "Location";
  const formHeading = "Fariin Noo Soo Dir";
  const successMsg = "Fariintaada waa la diray!";
  const errorMsg = "Cilad ayaa dhacday. Fadlan mar kale isku day.";
  const fullNameLabel = "Magacaaga (Full Name)";
  const fullNamePlaceholder = "Gali magacaaga oo buuxa";
  const businessNameLabel = "Magaca Ganacsiga (Business Name)";
  const businessNamePlaceholder = "Gali magaca ganacsigaaga";
  const whatsappNumberLabel = "Lambarka WhatsApp-ka (WhatsApp Number)";
  const whatsappNumberPlaceholder = "Gali lambarkaaga WhatsApp-ka";
  const messageLabel = "Fariintaada (Message)";
  const messagePlaceholder = "Halkan ku qor fariintaada...";
  const sending = "Waa la dirayaa...";
  const send = "Dir Fariinta";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@onestepdigital.co", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            businessName: formData.businessName,
            whatsapp: formData.whatsapp,
            message: formData.message,
            _honey: formData._honey,
            _subject: `New Contact Form Submission from ${formData.name}`
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormStatus("success");
      setFormData({ name: "", businessName: "", whatsapp: "", message: "", _honey: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-[120px] bg-gray-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:pr-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary dark:text-white mb-6">{heading}</h2>
            <p className="text-lg text-text/80 dark:text-gray-300 mb-12 max-w-md">
              {description}
            </p>

            <div className="space-y-8">
              <a href="mailto:info@onestepdigital.co" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all text-primary border border-gray-200 dark:border-slate-800/50">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-text/60 dark:text-gray-400 mb-1">{emailLabel}</div>
                  <div className="text-lg font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">
                    info@onestepdigital.co
                  </div>
                </div>
              </a>

              <a href="https://wa.me/252615894875" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all text-green-500 border border-gray-200 dark:border-slate-800/50">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-sm text-text/60 dark:text-gray-400 mb-1">{whatsappLabel}</div>
                  <div className="text-lg font-bold text-secondary dark:text-white group-hover:text-green-500 transition-colors">
                    +252 615 894875
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm text-accent border border-gray-200 dark:border-slate-800/50">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-text/60 dark:text-gray-400 mb-1">{locationLabel}</div>
                  <div className="text-lg font-bold text-secondary dark:text-white">
                    Mogadishu, Somalia
                  </div>
                </div>
              </div>
            </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[24px] shadow-xl border border-gray-200 dark:border-slate-800/50"
          >
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6">{formHeading}</h3>
            
            <AnimatePresence>
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium leading-relaxed">{successMsg}</p>
                </motion.div>
              )}
              {formStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium leading-relaxed">{errorMsg}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="_honey" 
                style={{ display: "none" }} 
                value={formData._honey} 
                onChange={(e) => setFormData({ ...formData, _honey: e.target.value })} 
                tabIndex={-1}
                autoComplete="off"
              />
              <div>
                <label className="block text-sm font-medium text-secondary dark:text-gray-200 mb-2">{fullNameLabel}</label>
                <input 
                  type="text" 
                  placeholder={fullNamePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 dark:bg-background border border-gray-200 dark:border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary dark:text-gray-200 mb-2">{businessNameLabel}</label>
                <input 
                  type="text" 
                  placeholder={businessNamePlaceholder}
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 dark:bg-background border border-gray-200 dark:border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary dark:text-gray-200 mb-2">{whatsappNumberLabel}</label>
                <input 
                  type="tel" 
                  placeholder={whatsappNumberPlaceholder}
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 dark:bg-background border border-gray-200 dark:border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary dark:text-gray-200 mb-2">{messageLabel}</label>
                <textarea 
                  placeholder={messagePlaceholder}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 dark:bg-background border border-gray-200 dark:border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none dark:text-white"
                />
              </div>

              <button 
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? sending : send}
                {formStatus !== "submitting" && <Send size={18} />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
