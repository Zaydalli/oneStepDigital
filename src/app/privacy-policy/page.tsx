import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen bg-gray-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-slate-800">
          <h1 className="text-4xl font-bold mb-8 text-secondary dark:text-white">Privacy Policy</h1>
          <div className="prose dark:prose-invert max-w-none text-text/80 dark:text-gray-300">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              This is a placeholder for the Privacy Policy. We take your privacy seriously and are committed to protecting your personal information.
            </p>
            {/* Add more content here as needed */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
