"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import CustomServices from "@/components/CustomServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Pricing />
        <CustomServices />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
