import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const META_PIXEL_ID = "29151464267851295";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://onestepdigital.co"),
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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="so" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
`}</Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
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
