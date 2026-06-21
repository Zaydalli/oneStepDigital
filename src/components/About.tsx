"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Sparkles } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Creativity",
      description: "We bring fresh, innovative ideas to make your brand stand out in the crowded digital space."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Growth",
      description: "Data-driven strategies designed to scale your business and increase your bottom line."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-secondary" />,
      title: "Innovation",
      description: "Utilizing the latest technologies and trends to keep your business ahead of the curve."
    }
  ];

  return (
    <section id="about" className="py-[120px] bg-white dark:bg-slate-900">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">What is OneStep Digital?</h2>
          <p className="text-lg text-text/80 dark:text-gray-300">
            OneStep Digital helps businesses build their digital presence through creative marketing solutions, professional content creation, and growth strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[20px] shadow-sm hover:shadow-xl border border-gray-200 dark:border-slate-800/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">{feature.title}</h3>
              <p className="text-text/80 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
