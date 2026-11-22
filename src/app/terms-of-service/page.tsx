import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | OneStep Digital",
  description: "The terms and conditions governing the use of OneStep Digital's website and services.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen bg-gray-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-slate-800">
          <h1 className="text-4xl font-bold mb-8 text-secondary dark:text-white">Terms of Service</h1>
          <div className="prose dark:prose-invert max-w-none text-text/80 dark:text-gray-300">
            <p className="mb-4">Last updated: July 6, 2026</p>

            <p className="mb-6">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the OneStep Digital website and the
              services we provide. By accessing our website or engaging our services, you agree to these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">1. Our Services</h2>
            <p className="mb-6">
              OneStep Digital provides digital marketing services, including graphic design, AI and filmed video
              content, social media page and Meta ads management, website and app development, logo design, and related
              services. The specific scope of any engagement is defined by the package you select or the custom
              quote we agree with you.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">2. Quotes and Payment</h2>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Prices for our standard packages are shown on our website and may change over time.</li>
              <li>One-time packages are billed once; monthly packages are billed on a recurring monthly basis.</li>
              <li>Payment terms for custom projects will be agreed in writing before work begins.</li>
              <li>Advertising budgets (e.g. Meta Ads spend) are not included in our fees unless stated.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">3. Client Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Provide accurate information and any materials needed to deliver the service.</li>
              <li>Respond to requests for feedback and approvals in a timely manner.</li>
              <li>Ensure you have the rights to any content you provide to us.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">4. Revisions and Additional Work</h2>
            <p className="mb-6">
              After a project is handed over, any changes or additional work beyond the agreed scope will be
              quoted and charged separately.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">5. Intellectual Property</h2>
            <p className="mb-6">
              Upon full payment, deliverables created specifically for you become yours to use. We may display
              non-confidential work in our portfolio unless you ask us in writing not to.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">6. Third-Party Platforms</h2>
            <p className="mb-6">
              Our services may involve third-party platforms (such as Facebook, Instagram, TikTok, WhatsApp,
              and Google). We are not responsible for changes, outages, or policies of those platforms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">7. Limitation of Liability</h2>
            <p className="mb-6">
              We deliver our services with reasonable skill and care but do not guarantee specific results such
              as sales, reach, or follower growth. To the extent permitted by law, OneStep Digital is not liable
              for indirect or consequential losses arising from the use of our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">8. Changes to These Terms</h2>
            <p className="mb-6">
              We may update these Terms from time to time. The latest version will always be available on this
              page with an updated date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">9. Contact Us</h2>
            <p className="mb-2">Questions about these Terms? Contact us:</p>
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
