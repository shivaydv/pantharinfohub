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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const xSpring = useSpring(x, { stiffness: 50, damping: 25, restDelta: 0.001 });

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section ref={targetRef} className="relative h-[450vh] bg-white">
      <div className="sticky top-0 flex flex-col h-screen overflow-hidden justify-center pt-16 md:pt-28 pb-12">

        {/* Header Section */}
        <div className="mb-6 md:mb-16">
          <div className="container mx-auto px-6 md:px-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={headingVariants}
                className="max-w-2xl overflow-visible"
              >
                <motion.h2
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tighter font-cal-sans text-left leading-[1.1] md:leading-none"
                >
                  Elegant <span className="text-orange-500">Solutions</span>
                  <br /> For Bold Brands.
                </motion.h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-500 text-xs md:text-base font-medium max-w-[300px] leading-relaxed text-left md:text-right"
              >
                We blend strategic design with cutting-edge technology to craft digital experiences that resonate and convert.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Content */}
        <div className="w-full relative flex items-center overflow-visible">
          <motion.div style={{ x: xSpring }} className="flex gap-8 md:gap-12 px-6 md:px-24">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} total={services.length} />
            ))}

            {/* Final Luxury CTA Card */}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              href="/contact"
              className="shrink-0 w-[240px] md:w-[340px] lg:w-[380px] aspect-4/5 flex flex-col justify-end p-8 md:p-12 rounded-[2.5rem] bg-orange-500 text-white group cursor-pointer transition-transform duration-1000 hover:scale-[0.98]"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-auto">Next Phase</span>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 font-cal-sans leading-[0.9]">
                Bring Your <br />
                Vision To <br />
                Life.
              </h3>
              <div className="flex items-center gap-4 group/btn">
                <div className="size-14 rounded-full bg-white flex items-center justify-center text-orange-500 transition-transform duration-500 group-hover/btn:rotate-45">
                  <ArrowUpRight size={24} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Let's talk</span>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Progress Line */}
        <div className="absolute bottom-6 left-6 md:left-24 right-6 md:right-24 h-px bg-gray-100 overflow-hidden">
          <motion.div
            style={{ scaleX: scrollYProgress, originX: 0 }}
            className="absolute inset-0 bg-orange-500"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, total }: { service: any; index: number, total: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className="shrink-0 w-[240px] md:w-[340px] lg:w-[380px] aspect-4/5 bg-[#0a0a0a] rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 lg:p-12 overflow-hidden group relative flex flex-col justify-between transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Index & Number */}
      <div className="relative z-10 flex justify-between items-start">
        <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em]">
          Service / 0{index + 1}
        </span>
        <div className="size-10 md:size-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-orange-500/50 group-hover:text-orange-500 transition-all duration-500">
          <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
        </div>
      </div>

      {/* Main Illustration/Image area */}
      <div className="relative z-10 grow flex items-center justify-center my-6">
        {service.image && (
          <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            {/* Ambient Glow */}
            <div className="absolute size-40 bg-orange-500/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <Image
              src={service.image}
              alt={service.title}
              width={260}
              height={260}
              className="object-contain filter grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-1000 ease-[0.16,1,0.3,1]"
            />
          </div>
        )}
      </div>

      {/* Title & Description */}
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 tracking-tight group-hover:text-orange-500 transition-colors duration-500">
          {service.title}
        </h3>
        <p className="text-gray-400 text-xs md:text-sm lg:text-base leading-relaxed font-light tracking-wide line-clamp-2 group-hover:text-gray-200 transition-colors duration-500">
          {service.description}
        </p>
      </div>

      {/* Progress Track at bottom of card */}
      <div className="absolute bottom-0 left-0 h-1 bg-orange-500 w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
    </motion.div>
  );
};

export default ServicesSection;

