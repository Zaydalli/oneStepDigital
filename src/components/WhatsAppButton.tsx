"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-[320px] sm:w-[350px] bg-white dark:bg-slate-900 rounded-[24px] shadow-2xl border border-gray-200 dark:border-slate-800/50 origin-bottom-right p-6 relative"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-text/40 hover:text-text/80 transition-colors bg-gray-50 dark:bg-slate-800 hover:bg-gray-50 dark:bg-slate-800/80 w-8 h-8 rounded-full flex items-center justify-center"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6 pt-2">
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                <WhatsAppIcon className="text-white" size={26} />
              </div>
              <div>
                <h3 className="font-bold text-secondary dark:text-white text-lg leading-tight">OneStep Digital</h3>
                <p className="text-sm text-text/50 dark:text-gray-400">Typically replies instantly</p>
              </div>
            </div>

            {/* Chat Bubble */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 dark:bg-slate-800 rounded-[20px] p-5 mb-6 text-text/80 dark:text-gray-300 text-[15px] leading-relaxed"
            >
              <p className="font-medium text-secondary dark:text-white mb-2 text-base">Assalamu Alaikum! &#x1F44B;</p>
              <p>
                Ma u baahan tahay caawimaad? Nala soo xiriir si aan kaaga caawinno kobcinta ganacsigaaga dijitaalka ah!
              </p>
            </motion.div>

            {/* Start Chat Button */}
            <a 
              href="https://wa.me/252615894875"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-[16px] flex items-center justify-center gap-2 font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              <WhatsAppIcon size={24} />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow border-2 border-white relative z-10"
        aria-label="Toggle WhatsApp Chat"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {isOpen ? <X size={30} /> : <WhatsAppIcon size={38} className="text-white" />}
          </motion.div>
        </AnimatePresence>
        
        {!isOpen && (
          <span className="absolute -z-10 inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping duration-1000"></span>
        )}
      </motion.button>
    </div>
  );
}
