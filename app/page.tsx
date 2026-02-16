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
import TitlePage from "@/components/sections/TitlePage";
import MainProjects from "@/components/sections/MainProjects";
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
      const minimumDisplayTime = 1200;
      const remainingTime = Math.max(0, minimumDisplayTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
        // Use rAF for smoother handoff — lets browser paint the exit animation
        // before triggering main content animations
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setStartMainContent(true);
            setCanStartAnimations(true);
          });
        });
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const fallback = setTimeout(handleLoad, 4000);
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
      <ParallaxStrips />
      <TitlePage />
      <MainProjects />
      <TestimonialsEditorial />
      <CardSection />
    </main>
  );
};

export default page;
