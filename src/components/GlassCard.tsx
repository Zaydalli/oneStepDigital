import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  /**
   * Content inside the glass card
   */
  children?: ReactNode;
  /**
   * Additional tailwind classes for the outer container
   */
  className?: string;
  /**
   * Gradient color for the glow effect. 
   * Example: 'from-blue-500/30 to-purple-500/30'
   */
  glowColor?: string;
  /**
   * Optional title string
   */
  title?: string;
  /**
   * Optional description string
   */
  description?: string;
  /**
   * Optional icon component
   */
  icon?: ReactNode;
}

export const GlassCard = ({
  children,
  className = '',
  glowColor = 'from-blue-500/30 to-purple-500/30',
  title,
  description,
  icon,
}: GlassCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative group w-full ${className}`}
    >
      {/* Background Glow Effect */}
      <div
        className={`absolute -inset-[1px] bg-gradient-to-r ${glowColor} rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out`}
        aria-hidden="true"
      />

      {/* Main Glass Content Container */}
      <div className="relative h-full w-full bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:border-white/40 dark:group-hover:border-white/20 z-10 overflow-hidden flex flex-col">
        
        {/* Decorative inner light reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

        {/* Card Header Section */}
        {(icon || title || description) && (
          <div className="mb-6 relative z-20 flex flex-col items-start">
            {icon && (
              <div className="w-12 h-12 mb-5 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/20 dark:border-white/10 shadow-inner">
                {icon}
              </div>
            )}
            {title && (
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Card Main Content */}
        {children && (
          <div className="relative z-20 flex-grow flex flex-col">
            {children}
          </div>
        )}
      </div>
    </motion.div>
  );
};
