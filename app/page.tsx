"use client"
import Preloader from "@/components/others/Preloader";
import HeroSection from "@/components/sections/HeroSection";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react"
import { Header } from "@/components/others/Header";
import HeroCard from "@/components/sections/HeroCard";
import Achievement from "@/components/sections/Achievement";
import AboutSection from "@/components/sections/AboutSection";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [startMainContent, setStartMainContent] = useState(false);

  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          setStartMainContent(true);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <main className="relative min-h-screen bg-white font-sans">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Header startAnimation={startMainContent} />
      <HeroSection startAnimation={startMainContent} />
      <HeroCard />
      <Achievement />
      <AboutSection />
      <div className="h-screen   bg-slate-50"></div>
    </main>
  )
}

export default page