"use client";
import Preloader from "@/components/others/Preloader";
import HeroSection from "@/components/sections/HeroSection";
import GamingHeroSection from "@/components/sections/GamingHeroSection";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useLoading } from "@/lib/LoadingContext";
import { Header } from "@/components/others/Header";
import HeroCard from "@/components/sections/HeroCard";
import Achievement from "@/components/sections/Achievement";
import AboutSection from "@/components/sections/AboutSection";
import FounderSection from "@/components/sections/FounderSection";
import ParallaxStrips from "@/components/sections/Strips";
import CardSection from "@/components/sections/CardsSection";
import Footer from "@/components/others/Footer";
import TestimonialsEditorial from "@/components/sections/Testimonial";

const page = () => {
  const { isLoading, setIsLoading, setCanStartAnimations } = useLoading();
  const [startMainContent, setStartMainContent] = useState(false);

  useEffect(() => {
    // Only handle loading logic on Home page if it's the first load
    if (!isLoading) {
      setStartMainContent(true);
      return;
    }

    // Scroll to top on refresh
    window.scrollTo(0, 0);

    const criticalAssets = [
      "/icons/figma 1.png",
      "/icons/docker 1.png",
      "/icons/kolin 1.png",
      "/icons/android 1.png",
      "/icons/Next.js 1.png",
      "/icons/postgresql 1.png",
      "/icons/Superbase 1.png",
      "/icons/Express.js 1.png",
      "/user/Abhay.png",
      "/black_logo.png",
      "/assets/showcase-video.mp4",
    ];

    const preloadStartTime = Date.now();

    const handleLoad = async () => {
      try {
        const { preloadAssets } = await import("@/lib/preload");
        await preloadAssets(criticalAssets);
      } catch (error) {
        console.error("Error preloading assets:", error);
      }

      const elapsed = Date.now() - preloadStartTime;
      const minimumDisplayTime = 2500; // Increased slightly for smoother experience
      const remainingTime = Math.max(0, minimumDisplayTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
        // Wait for Preloader exit animation (0.8s in Preloader.tsx)
        setTimeout(() => {
          setStartMainContent(true);
          setCanStartAnimations(true);
        }, 500);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const fallback = setTimeout(handleLoad, 6000); // Slightly longer fallback
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <main className="relative min-h-screen bg-white font-sans">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <GamingHeroSection startAnimation={startMainContent} />
      <HeroCard />
      <Achievement />
      <AboutSection />
      <FounderSection />
      <TestimonialsEditorial />
      <ParallaxStrips />
      <CardSection />
    </main>
  );
};

export default page;
