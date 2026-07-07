import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | OneStep Digital",
  description: "How OneStep Digital collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen bg-gray-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-slate-800">
          <h1 className="text-4xl font-bold mb-8 text-secondary dark:text-white">Privacy Policy</h1>
          <div className="prose dark:prose-invert max-w-none text-text/80 dark:text-gray-300">
            <p className="mb-4">Last updated: July 6, 2026</p>

            <p className="mb-6">
              This Privacy Policy explains how OneStep Digital (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
              collects, uses, and protects the information you provide when you visit
              our website <a href="https://onestepdigital.co" className="text-primary hover:underline">onestepdigital.co</a>{" "}
              or contact us for our services. By using our website, you agree to the practices described below.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">1. Information We Collect</h2>
            <p className="mb-2">When you submit our contact form or reach out to us, we may collect:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Your full name</li>
              <li>Your business name</li>
              <li>Your WhatsApp number</li>
              <li>The message and any details you choose to share</li>
            </ul>
            <p className="mb-6">
              We also collect limited, non-identifying usage data (such as pages visited and general device
              information) through analytics to help us understand how our website is used.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>To respond to your enquiries and schedule live demos</li>
              <li>To provide and improve our digital marketing services</li>
              <li>To communicate with you about your project or requested packages</li>
              <li>To improve the performance and content of our website</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">3. How We Share Information</h2>
            <p className="mb-6">
              We do not sell or rent your personal information. Contact form submissions are processed through a
              third-party form delivery service (FormSubmit) so that your message reaches our team by email.
              We may also use trusted service providers (such as our hosting and analytics providers) who
              process data on our behalf under appropriate safeguards.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">4. Data Retention</h2>
            <p className="mb-6">
              We keep your information only for as long as needed to respond to your enquiry and provide our
              services, or as required by applicable law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">5. Your Rights</h2>
            <p className="mb-6">
              You may request access to, correction of, or deletion of the personal information we hold about
              you. To make a request, contact us using the details below.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">6. Security</h2>
            <p className="mb-6">
              We take reasonable measures to protect your information. However, no method of transmission over
              the internet is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">7. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with
              an updated &ldquo;Last updated&rdquo; date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">8. Contact Us</h2>
            <p className="mb-2">If you have any questions about this Privacy Policy, contact us:</p>
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
