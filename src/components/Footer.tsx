"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Github, Youtube } from "lucide-react";

export default function Footer() {
  const description = "OneStep Digital helps businesses build their digital presence through creative marketing solutions, professional content creation, and growth strategies.";
  const servicesHeading = "Services";
  const services = ["Digital Starter", "Content Boost", "Growth Management", "Custom Services"];
  const companyHeading = "Company";
  const company = ["About Us", "Contact", "Pricing", "Process"];
  const legalHeading = "Legal";
  const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"];
  const rights = "© 2026 OneStep Digital. All rights reserved.";
  const built = "Proudly built in Somalia";

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        {/* Brand & Socials (Col-span 2) */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <Image 
              src="/logo.webp" 
              alt="OneStep Digital Logo" 
              width={300} 
              height={100} 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-text/70 dark:text-gray-400 max-w-sm mb-8 text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-secondary dark:text-white mb-6">{servicesHeading}</h3>
          <ul className="flex flex-col gap-4">
            {services.map((link) => (
              <li key={link}>
                <a href="#services" className="text-sm text-text/70 dark:text-gray-400 hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-secondary dark:text-white mb-6">{companyHeading}</h3>
          <ul className="flex flex-col gap-4">
            {company.map((link, idx) => {
              const refs = ["#about", "#contact", "#pricing", "#process"];
              return (
                <li key={link}>
                  <a href={refs[idx]} className="text-sm text-text/70 dark:text-gray-400 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-secondary dark:text-white mb-6">{legalHeading}</h3>
          <ul className="flex flex-col gap-4">
            {legal.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-text/70 dark:text-gray-400 hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text/60 dark:text-gray-500">
        <p>{rights}</p>
        <p>{built}</p>
      </div>
    </footer>
  );
}
