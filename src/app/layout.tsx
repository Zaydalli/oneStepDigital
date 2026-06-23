import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneStep Digital | Digital Marketing Agency",
  description: "Hal tallaabo ku casriyee ganacsigaaga oo soo jiido macaamiil cusub. Waxaan bixinaa adeegyo suuqgeyn dhijitaal ah oo casri ah.",
  keywords: ["OneStep Digital", "Marketing Agency", "Somalia", "Digital Marketing", "Web Development", "Content Creation", "SEO", "Suuqgeyn"],
  openGraph: {
    title: "OneStep Digital | Digital Marketing Agency",
    description: "Hal tallaabo ku casriyee ganacsigaaga oo soo jiido macaamiil cusub.",
    url: "https://onestepdigital.co",
    siteName: "OneStep Digital",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "OneStep Digital Logo",
      },
    ],
    locale: "so_SO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneStep Digital | Marketing Agency",
    description: "Hal tallaabo ku casriyee ganacsigaaga oo soo jiido macaamiil cusub.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="so" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
