import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="mb-6">
            <Image 
              src="/logo.jpg.png" 
              alt="OneStep Digital Logo" 
              width={240} 
              height={80} 
              className="h-20 w-auto"
            />
          </div>
          <p className="text-text/50 dark:text-gray-400 max-w-sm">
            Hal tallaabo ku casriyee ganacsigaaga oo soo jiido macaamiil cusub. Waxaan nahay xalkaaga dhanka dijitaalka ah.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-secondary dark:text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {["Home", "Services", "Pricing", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-text/80 dark:text-gray-300 hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold text-secondary dark:text-white mb-4">Follow Us</h3>
          <ul className="flex flex-col gap-3">
            {["Facebook", "Instagram", "TikTok", "LinkedIn"].map((platform) => (
              <li key={platform}>
                <a href="#" className="text-text/80 dark:text-gray-300 hover:text-primary transition-colors">
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text/60 dark:text-gray-500">
        <p>© 2026 OneStep Digital. All Rights Reserved.</p>
        <p>Designed with excellence.</p>
      </div>
    </footer>
  );
}
