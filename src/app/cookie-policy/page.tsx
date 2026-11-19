import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cookie Policy | OneStep Digital",
  description: "How OneStep Digital uses cookies and similar technologies on its website.",
};

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen bg-gray-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-slate-800">
          <h1 className="text-4xl font-bold mb-8 text-secondary dark:text-white">Cookie Policy</h1>
          <div className="prose dark:prose-invert max-w-none text-text/80 dark:text-gray-300">
            <p className="mb-4">Last updated: November 19, 2026</p>

            <p className="mb-6">
              This Cookie Policy explains how OneStep Digital uses cookies and similar technologies when you
              visit our website <a href="https://onestepdigital.co" className="text-primary hover:underline">onestepdigital.co</a>.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">1. What Are Cookies?</h2>
            <p className="mb-6">
              Cookies are small text files stored on your device when you visit a website. They help websites
              function properly, remember your preferences, and understand how the site is used.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">2. How We Use Cookies</h2>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>
                <strong>Essential:</strong> to remember basic preferences such as your light or dark theme
                choice so the site works as expected.
              </li>
              <li>
                <strong>Analytics:</strong> to collect aggregated, non-identifying data about how visitors use
                our website so we can improve it.
              </li>
              <li>
                <strong>Advertising:</strong> the Meta Pixel (Facebook) records visits to our pages so we can measure
                and improve our Facebook and Instagram ads and show ads to people who visited our website.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">3. Third-Party Tools</h2>
            <p className="mb-6">
              We use analytics provided by our hosting platform to measure website traffic and performance, and
              the Meta Pixel from Meta Platforms (Facebook/Instagram) to measure our advertising.
              These tools may set their own cookies or use similar technologies, subject to their own privacy
              practices.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">4. Managing Cookies</h2>
            <p className="mb-6">
              You can control or delete cookies through your browser settings. Most browsers let you block or
              remove cookies, though disabling essential cookies may affect how the website works.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">5. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Cookie Policy from time to time. The latest version will always be available on
              this page with an updated date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">6. Contact Us</h2>
            <p className="mb-2">Questions about our use of cookies? Contact us:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Email: <a href="mailto:info@onestepdigital.co" className="text-primary hover:underline">info@onestepdigital.co</a></li>
              <li>WhatsApp: <a href="https://wa.me/252615894875" className="text-primary hover:underline">+252 615 894875</a></li>
              <li>Location: Mogadishu, Somalia</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
