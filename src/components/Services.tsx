"use client";

import { motion } from "framer-motion";
import { QrCode, Video, Share2, Palette, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Digital Starter",
      icon: <QrCode className="w-6 h-6 text-primary" />,
      features: [
        "QR / Digital Catalog Setup",
        "WhatsApp Business Setup",
        "Google Maps Setup",
        "QR Display Cards"
      ],
      gradient: "from-primary to-accent"
    },
    {
      title: "Content Boost",
      icon: <Video className="w-6 h-6 text-accent" />,
      features: [
        "Short Reels",
        "Video Editing",
        "Ready-to-Post Content"
      ],
      gradient: "from-accent to-purple-500"
    },
    {
      title: "Growth Management",
      icon: <Share2 className="w-6 h-6 text-primary" />,
      features: [
        "Social Media Posts",
        "Content Planning",
        "Monthly Reports"
      ],
      gradient: "from-purple-500 to-primary"
    },
    {
      title: "Custom Services",
      icon: <Palette className="w-6 h-6 text-secondary" />,
      features: [
        "Website Development",
        "Logo Design",
        "Meta Ads Management",
        "Event Coverage"
      ],
      gradient: "from-secondary to-gray-600"
    }
  ];

  return (
    <section id="services" className="py-[120px] bg-gray-50 dark:bg-slate-800">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">Our Services</h2>
          <p className="text-lg text-text/80 dark:text-gray-300">
            Comprehensive digital marketing solutions designed to elevate your brand and drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 rounded-[20px] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-800/50 relative"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${service.gradient}`} />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary dark:text-white">{service.title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-text/80 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
