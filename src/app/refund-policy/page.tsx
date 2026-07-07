import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Refund Policy | OneStep Digital",
  description: "OneStep Digital's policy on deposits, refunds, and cancellations.",
};

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen bg-gray-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-slate-800">
          <h1 className="text-4xl font-bold mb-8 text-secondary dark:text-white">Refund Policy</h1>
          <div className="prose dark:prose-invert max-w-none text-text/80 dark:text-gray-300">
            <p className="mb-4">Last updated: July 6, 2026</p>

            <p className="mb-6">
              We want you to be satisfied with our work. This Refund Policy explains when refunds may or may not
              apply to the services provided by OneStep Digital.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">1. Nature of Our Services</h2>
            <p className="mb-6">
              Most of our services are custom, time-based creative and technical work (such as content creation,
              design, setup, and page management). Once work has started, the time and resources committed to
              your project cannot be recovered.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">2. Deposits</h2>
            <p className="mb-6">
              Deposits paid to reserve a project or begin work are generally non-refundable, as they cover
              planning and scheduling. If we are unable to start your project, your deposit will be refunded in
              full.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">3. Work Already Delivered</h2>
            <p className="mb-6">
              Payments for work that has already been completed or delivered are non-refundable. If a project is
              cancelled midway, any refund will be based on the portion of work not yet performed.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">4. Monthly Packages</h2>
            <p className="mb-6">
              Monthly packages (such as Content Boost and Growth Management) can be cancelled for the next
              billing cycle. Fees for the current month are non-refundable once the work for that month has
              begun.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">5. Advertising Budgets</h2>
            <p className="mb-6">
              Money spent on third-party advertising platforms (such as Meta Ads) is paid directly to those
              platforms and is not refundable by OneStep Digital.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">6. How to Request a Refund</h2>
            <p className="mb-6">
              If you believe you are entitled to a refund, please contact us within 7 days of the relevant
              payment or delivery, explaining your concern. We will review each request fairly and respond as
              soon as possible.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary dark:text-white">7. Contact Us</h2>
            <p className="mb-2">To discuss a refund or cancellation, contact us:</p>
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
