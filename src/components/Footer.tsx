"use client";

import Image from "next/image";

export default function Footer() {
  const description = "OneStep Digital waxay ganacsiyada u dhistaa nidaam dijitaal ah oo fududeynaya isku-xirka macaamiisha.";
  const servicesHeading = "Adeegyada";
  const services = ["Digital Starter", "Content Boost", "Growth Management", "Custom Services"];
  const companyHeading = "Shirkadda";
  const company = ["Ku Saabsan", "Nala Xiriir", "Qiimaha", "Hannaanka"];
  const rights = "\u00A9 2026 OneStep Digital. Dhammaan xuquuqdu way dhowran tahay.";
  const built = "Waxaa lagu sameeyay Soomaaliya";

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Socials (Col-span 2) */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <Image 
              src="/logo.webp" 
              alt="OneStep Digital Logo" 
              width={350} 
              height={118} 
              className="h-20 w-auto dark:hidden"
            />
            <Image 
              src="/dark mode logo.webp" 
              alt="OneStep Digital Logo Dark" 
              width={350} 
              height={118} 
              className="h-20 w-auto hidden dark:block"
            />
          </div>
          <p className="text-text/70 dark:text-gray-400 max-w-sm text-sm leading-relaxed">
            {description}
          </p>
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

      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text/60 dark:text-gray-500">
        <p>{rights}</p>
        <p>{built}</p>
      </div>
    </footer>
  );
}
