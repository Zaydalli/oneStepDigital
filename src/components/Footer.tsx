"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const description = "OneStep Digital waxay ganacsiyada u dhistaa nidaam dijitaal ah oo fududeynaya isku-xirka macaamiisha.";
  const servicesHeading = "Adeegyada";
  const services = ["Digital Starter", "Content Boost", "Growth Management", "Custom Services"];
  const companyHeading = "Shirkadda";
  const company = ["Ku Saabsan", "Nala Xiriir", "Qiimaha", "Hannaanka"];
  const rights = "\u00A9 2026 OneStep Digital";
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
          <p className="text-text/70 dark:text-gray-400 max-w-sm text-sm leading-relaxed mb-6">
            {description}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/share/1EmiJsmLUa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-text/70 dark:text-gray-400 hover:bg-[#1877F2] hover:text-white dark:hover:bg-[#1877F2] dark:hover:text-white transition-all shadow-sm">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/onestepdigital.co?igsh=dWF6NG14emFuaDEy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-text/70 dark:text-gray-400 hover:bg-[#E4405F] hover:text-white dark:hover:bg-[#E4405F] dark:hover:text-white transition-all shadow-sm">
              <Instagram size={18} />
            </a>
            <a href="https://www.tiktok.com/@onestepdigital.co?_r=1&_t=ZS-98CGZNbD8sP" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-text/70 dark:text-gray-400 hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg>
            </a>
            <a href="https://www.threads.com/@onestepdigital.co" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-text/70 dark:text-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 192 192">
                <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/>
              </svg>
            </a>
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

      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text/60 dark:text-gray-500">
        <p>{rights}</p>
        <p>{built}</p>
      </div>
    </footer>
  );
}
