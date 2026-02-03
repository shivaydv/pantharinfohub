"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

const ServicesSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-52%"]);
  const xSpring = useSpring(x, { stiffness: 40, damping: 25, restDelta: 0.001 });

  return (
    <section ref={targetRef} className="relative h-[450vh] bg-white">
      <div className="sticky top-0 flex flex-col h-screen overflow-hidden justify-center items-center pt-24 md:pt-32">
        {/* Header - Refined Spacing */}
        <div className="w-full max-w-[1400px] px-8 md:px-24 mb-14 md:mb-20 z-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="text-left space-y-2">
              <h2 className="text-5xl md:text-[100px] font-normal tracking-[-0.05em] text-[#1a1a1a] leading-[0.85]">
                Quality Service
              </h2>
              <h2 className="text-5xl md:text-[100px] font-extralight tracking-[-0.05em] text-slate-300 leading-[0.85]">
                You Can Get
              </h2>
            </div>
            <p className="text-slate-500 text-sm md:text-lg font-normal max-w-[340px] text-left md:text-right leading-relaxed opacity-90">
              We provide a wide range of premium health and digital services. Covering all of your
              healthcare needs.
            </p>
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full relative flex items-center z-10">
          <motion.div style={{ x: xSpring }} className="flex gap-6 md:gap-10 px-8 md:px-24">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}

            {/* Final CTA Card - Refined Layout */}
            <div className="flex-shrink-0 w-[320px] md:w-[450px] aspect-[4/5] flex flex-col justify-center px-12 md:pl-20 border-l border-slate-100/50">
              <span className="text-orange-500 font-bold text-[10px] tracking-[0.4em] uppercase mb-8">
                Next Step
              </span>
              <h3 className="text-4xl md:text-6xl font-normal text-slate-900 mb-12 tracking-tighter leading-[1.05]">
                Ready to <br />
                level up <br />
                your brand?
              </h3>
              <button className="w-fit px-10 py-5 bg-black text-white rounded-full text-xs font-bold hover:bg-orange-500 transition-all duration-700 shadow-2xl flex items-center gap-3 group">
                Book a consultation
                <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-40">
          <div className="w-[1px] h-10 bg-gradient-to-b from-slate-200 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <motion.div className="relative flex-shrink-0 w-[300px] md:w-[420px] aspect-[10/13] bg-slate-50/50 border border-slate-100/80 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-11 overflow-hidden group transition-all duration-700 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)]">
      <div className="relative z-10 h-full flex flex-col items-start">
        {/* Label */}
        <div className="w-full mb-3">
          <span className="inline-block px-5 py-2.5 rounded-2xl border border-slate-100 text-[11px] font-bold tracking-[0.05em] text-slate-900 bg-white/95 backdrop-blur-sm shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all duration-700">
            {service.title}
          </span>
        </div>

        {/* Hero Image - Refined Scale */}
        <div className="flex-grow w-full flex items-center justify-center relative my-4">
          {service.image && (
            <div className="w-[105%] h-[105%] absolute pointer-events-none transition-all duration-1000 ease-in-out">
              {/* Soft Background glow */}
              <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-[0.23,1,0.32,1]"
              />
            </div>
          )}
        </div>

        {/* Content Footer */}
        <div className="mt-auto w-full">
          <p className="text-slate-700 text-lg md:text-xl font-normal tracking-tight leading-[1.3] max-w-[95%] mb-10 opacity-70 group-hover:opacity-100 transition-all duration-700">
            {service.description}
          </p>

          <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform duration-700">
            <div className="p-3.5 rounded-full bg-white border border-slate-100 text-slate-400 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-700 shadow-sm">
              <ArrowUpRight
                size={20}
                className="group-hover:rotate-45 transition-transform duration-700"
              />
            </div>
            <span className="text-[12px] font-bold text-slate-200 group-hover:text-slate-300 uppercase transition-colors tracking-widest">
              0{index + 1}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
