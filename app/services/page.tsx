"use client";

import { Header } from "@/components/others/Header";
import Footer from "@/components/others/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import { useEffect, useState } from "react";
import Preloader from "@/components/others/Preloader";
import { AnimatePresence } from "motion/react";

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main className="relative min-h-screen bg-white font-sans">
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>

      <Header startAnimation={!isLoading} />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
}
