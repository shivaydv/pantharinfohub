'use client';

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    startAnimation: boolean;
}

const AnimatedText = ({ text, className = "", delay = 0, startAnimation }: AnimatedTextProps) => {
    const letters = Array.from(text);

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 8,
            scale: 1.05,
            filter: "blur(4px)",
        },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                delay: delay + i * 0.015,
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1] as const,
            },
        }),
    };

    return (
        <span className={className}>
            {letters.map((letter, index) => (
                <motion.span
                    key={`${text}-${index}`}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate={startAnimation ? "show" : "hidden"}
                    style={{ display: "inline-block" }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </span>
    );
};

const HeroSection = ({ startAnimation=true }: { startAnimation?: boolean }) => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-32 lg:pt-40 pb-20 px-6 overflow-hidden">
  
            <div className="max-w-7xl w-full flex flex-col items-center">
                {/* Trusted by founders */}
                <motion.div
                    className="flex items-center justify-center gap-2 mb-8 sm:mb-12 w-fit mx-auto px-4 py-2 rounded-full bg-slate-50/50 border border-slate-100 backdrop-blur-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.8,
                        ease: [0.32, 0.72, 0, 1],
                    }}
                >
                    <div className="flex -space-x-1.5">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-7 h-7 rounded-full border border-white bg-slate-200 overflow-hidden relative shadow-sm">
                                <Image
                                    src="/user/Abahy.jpg"
                                    alt="founder"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <span className="text-[13px] text-slate-500 font-semibold tracking-tight ml-1">
                        Trusted by industry leaders
                    </span>
                </motion.div>

                {/* Main Heading */}
                <div className="text-center mb-6 sm:mb-8 px-2 max-w-6xl">
                    <h1 className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.6rem] font-bold tracking-tight leading-[1.1] sm:leading-[1.1] text-slate-900 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1.5 sm:gap-x-4 lg:gap-x-5" style={{ fontFamily: 'var(--font-cal-sans)' }}>
                        <AnimatedText text="Engineering" className="text-gray-900" startAnimation={startAnimation} delay={0.2} />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
                            animate={startAnimation ? {
                                scale: 1,
                                opacity: 1,
                                rotate: 0,
                                y: [0, -10, 0],
                            } : {}}
                            whileHover={{ scale: 1.05, rotate: -1, zIndex: 10 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.8,
                                ease: [0.32, 0.72, 0, 1],
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.2
                                }
                            }}
                            className="hidden lg:flex w-24 h-16 relative shrink-0 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white cursor-pointer group/img"
                        >
                            <Image src="/service/design.png" alt="Engineering" fill className="object-cover transition-transform duration-700 group-hover/img:scale-110" />
                        </motion.div>

                        <AnimatedText text="the" startAnimation={startAnimation} delay={0.3} />
                        <AnimatedText text="Future" className="text-orange-500" startAnimation={startAnimation} delay={0.4} />
                        <AnimatedText text="of" startAnimation={startAnimation} delay={0.5} />
                        <AnimatedText text="Business" startAnimation={startAnimation} delay={0.55} />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, rotate: 2 }}
                            animate={startAnimation ? {
                                scale: 1,
                                opacity: 1,
                                rotate: 0,
                                y: [0, 10, 0],
                            } : {}}
                            whileHover={{ scale: 1.05, rotate: 1, zIndex: 10 }}
                            transition={{
                                delay: 0.6,
                                duration: 0.8,
                                ease: [0.32, 0.72, 0, 1],
                                y: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.4
                                }
                            }}
                            className="hidden lg:flex w-28 h-16 relative shrink-0 rounded-2xl overflow-hidden shadow-2xl shadow-slate-500/10 border border-white cursor-pointer group/img"
                        >
                            <Image src="/service/dev.jpg" alt="Business" fill className="object-cover transition-transform duration-700 group-hover/img:scale-110" />
                        </motion.div>

                        <AnimatedText text="with" startAnimation={startAnimation} delay={0.65} />
                        <AnimatedText text="Precision" startAnimation={startAnimation} delay={0.7} />
                        <AnimatedText text="Software" startAnimation={startAnimation} delay={0.75} />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 5 }}
                            animate={startAnimation ? {
                                scale: 1,
                                opacity: 1,
                                y: [-10, 0, -10],
                            } : {}}
                            whileHover={{ scale: 1.05, rotate: -2, zIndex: 10 }}
                            transition={{
                                delay: 0.8,
                                duration: 0.8,
                                ease: [0.32, 0.72, 0, 1],
                                y: {
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.6
                                }
                            }}
                            className="hidden lg:flex w-24 h-16 relative shrink-0 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10 border border-white cursor-pointer group/img"
                        >
                            <Image src="/service/discovery.png" alt="AI" fill className="object-cover transition-transform duration-700 group-hover/img:scale-110" />
                        </motion.div>

                        <AnimatedText text="&" startAnimation={startAnimation} delay={0.85} />
                        <AnimatedText text="AI." startAnimation={startAnimation} delay={0.9} />
                    </h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    className="text-center text-slate-500 text-[14px] sm:text-[17px] font-medium max-w-3xl mx-auto mb-10 sm:mb-14 px-4 leading-relaxed tracking-tight"
                    initial={{ opacity: 0, y: 15 }}
                    animate={startAnimation ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        delay: 1.1,
                        duration: 1,
                        ease: [0.32, 0.72, 0, 1],
                    }}
                >
                    5+ Years of Industry Excellence. From high-profile custom software to <br className="hidden md:block" /> cutting-edge AI and Cloud solutions—we turn your complex challenges into scalable digital realities.
                </motion.p>

                {/* CTA Group - Refined Luxury Sizes */}
                <motion.div
                    className="flex justify-center flex-wrap gap-5 px-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={startAnimation ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        delay: 1.3,
                        duration: 1,
                        ease: [0.32, 0.72, 0, 1],
                    }}
                >
                    {/* Primary "Explorer" Button */}
                    <button className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-orange-500 text-white font-bold rounded-[1.1rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] active:scale-95">
                        {/* Shimmer Sweep */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent" />

                        <span className="relative z-10 flex items-center gap-2.5 text-[14px] tracking-tight">
                            Get a Free Quote
                            <div className="relative w-4 h-4 flex items-center justify-center">
                                <ArrowRight className="absolute transition-all duration-500 group-hover:translate-x-full group-hover:opacity-0" size={16} />
                                <ArrowRight className="absolute -translate-x-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" size={16} />
                            </div>
                        </span>
                    </button>

                    {/* Secondary "Gallery" Button */}
                    <button className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-900 border border-slate-200 font-bold rounded-[1.1rem] transition-all duration-500 hover:border-orange-500 active:scale-95 shadow-sm overflow-hidden">
                        {/* Soft Hover Fill */}
                        <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <span className="relative z-10 flex items-center gap-2 text-[14px] tracking-tight">
                            View Our Portfolio
                            <div className="flex items-center justify-center w-4 h-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 group-hover:scale-[2.5] group-hover:opacity-0 transition-all duration-500" />
                                <ArrowRight className="absolute scale-0 group-hover:scale-100 transition-all duration-500 delay-100" size={14} />
                            </div>
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
