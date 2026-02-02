"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { TimelineContent } from "../motion/TimelineAnimation";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

/**
 * Replayable Counter Component - Resets when out of view
 */
const Counter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2,
                ease: [0.32, 0.72, 0, 1],
                onUpdate: (latest) => setCount(Math.floor(latest)),
            });
            return () => controls.stop();
        } else {
            setCount(0);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="flex flex-col gap-1.5">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tighter flex items-baseline gap-0.5" style={{ fontFamily: 'var(--font-cal-sans)' }}>
                <span>{count}</span>
                <span className="text-orange-500 text-xl sm:text-2xl">{suffix}</span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase tracking-[0.15em] leading-tight max-w-[120px]">{label}</div>
        </div>
    );
};

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { amount: 0.2, once: true });

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1] as const,
            },
        }),
        hidden: {
            filter: "blur(8px)",
            y: 20,
            opacity: 0,
        },
    };

    const stats = [
        { value: 5, label: "Years in Industry", suffix: "+" },
        { value: 50, label: "Projects Delivered", suffix: "+" },
        { value: 98, label: "Client Retention", suffix: "%" },
        { value: 10, label: "Strategic Partners", suffix: "+" },
    ];

    return (
        <section className="relative py-20 sm:py-28 lg:py-36 px-6 bg-white overflow-hidden" ref={sectionRef}>
            {/* Background Grain/Grid for texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[24px_24px]" />

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Vision & Heading */}
                    <div className="lg:col-span-7 flex flex-col relative z-10">
                        <TimelineContent
                            as="div"
                            animationNum={0}
                            timelineRef={sectionRef}
                            customVariants={revealVariants}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-8 w-fit"
                        >
                            <Sparkles size={12} className="text-orange-500" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">About Panthar</span>
                        </TimelineContent>

                        <TimelineContent
                            as="h2"
                            animationNum={1}
                            timelineRef={sectionRef}
                            customVariants={revealVariants}
                            className="text-[2.6rem] sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-8"
                            style={{ fontFamily: 'var(--font-cal-sans)' }}
                        >
                            5 Years. <br />
                            <span className="text-orange-500">Countless Milestones.</span> <br />
                            One Mission.
                        </TimelineContent>

                        <TimelineContent
                            as="p"
                            animationNum={2}
                            timelineRef={sectionRef}
                            customVariants={revealVariants}
                            className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-xl mb-12"
                        >
                            At Panthar, we don&apos;t just build software; we <span className="text-slate-900 font-semibold underline decoration-orange-500/20 underline-offset-4">engineer evolution</span>.
                            Our team blends technical mastery with deep strategic insights to deliver scalable digital infrastructure.
                        </TimelineContent>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                            {stats.map((stat, idx) => (
                                <TimelineContent
                                    key={stat.label}
                                    as="div"
                                    animationNum={3 + idx}
                                    timelineRef={sectionRef}
                                    customVariants={revealVariants}
                                >
                                    <Counter value={stat.value} label={stat.label} suffix={stat.suffix} />
                                </TimelineContent>
                            ))}
                        </div>

                        <TimelineContent
                            as="div"
                            animationNum={8}
                            timelineRef={sectionRef}
                            customVariants={revealVariants}
                            className="mt-14"
                        >
                            <button className="group relative border border-slate-950 inline-flex items-center justify-center overflow-hidden px-8 py-3.5 bg-slate-950 text-white rounded-2xl font-bold text-[14px] transition-all duration-500 hover:bg-white active:scale-95 shadow-xl shadow-slate-950/10">
                                <div className='inline-flex translate-y-0 items-center justify-center gap-3 transition duration-500 group-hover:-translate-y-[150%]'>
                                    Get a Free Quote
                                    <ArrowRight size={18} />
                                </div>
                                <div className='absolute inline-flex h-full w-full translate-y-full items-center justify-center text-slate-950 transition duration-500 group-hover:translate-y-0'>
                                    <span className='inline-flex items-center gap-3'>
                                        Let&apos;s Start
                                        <ArrowRight size={18} />
                                    </span>
                                </div>
                            </button>
                        </TimelineContent>
                    </div>

                    {/* Right Column: Orbiting Brand Experience (No Card) */}
                    <div className="lg:col-span-5 h-[400px] lg:h-[550px] relative flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">

                            {/* Central Aura */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? {
                                    scale: [1, 1.1, 1],
                                    opacity: [0.15, 0.25, 0.15]
                                } : { opacity: 0 }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute w-64 h-64 bg-orange-500 rounded-full blur-[80px]"
                            />

                            {/* Center Logo - Reveals when in view */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
                                animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.32, 0.72, 0, 1],
                                    delay: 0.2
                                }}
                                className="relative z-20 w-24 h-24 rounded-3xl bg-slate-950 shadow-2xl flex items-center justify-center border border-white/10 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-linear-to-tr from-orange-500/20 to-transparent" />
                                <div className="relative w-12 h-12 z-10">
                                    <Image
                                        src="/logo.png"
                                        alt="Panthar Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* Orbiting Orbs System - Reveals and starts when in view */}
                            {[
                                { radius: 140, duration: 25, size: 8, delay: 0 },
                                { radius: 190, duration: 40, size: 12, delay: -5 },
                                { radius: 250, duration: 55, size: 10, delay: -10 },
                            ].map((orbit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 1, delay: 0.4 + (i * 0.1) }}
                                    className="absolute border border-slate-200/80 rounded-full"
                                    style={{
                                        width: orbit.radius * 2,
                                        height: orbit.radius * 2,
                                    }}
                                >
                                    <motion.div
                                        className="absolute top-0 left-1/2 -ml-1.5 -mt-1.5"
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: orbit.duration,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: orbit.delay
                                        }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            transformOrigin: '50% 50%',
                                            position: 'absolute'
                                        }}
                                    >
                                        <div
                                            className="bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                                            style={{
                                                width: orbit.size,
                                                height: orbit.size,
                                                transform: `translateY(${orbit.size / 2}px)`
                                            }}
                                        />
                                    </motion.div>

                                    <motion.div
                                        className="absolute top-0 left-1/2 -ml-1.5 -mt-1.5"
                                        animate={{ rotate: -360 }}
                                        transition={{
                                            duration: orbit.duration * 1.5,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: orbit.delay - 15
                                        }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            transformOrigin: '50% 50%',
                                            position: 'absolute'
                                        }}
                                    >
                                        <div
                                            className="bg-slate-200 rounded-full"
                                            style={{
                                                width: orbit.size - 2,
                                                height: orbit.size - 2,
                                                transform: `translateY(${orbit.size / 2}px)`
                                            }}
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}

                            {/* Floating Tech Labels - Reveals when in view */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? {
                                    opacity: 1,
                                    x: 0,
                                    y: [0, -10, 0]
                                } : {}}
                                transition={{
                                    opacity: { duration: 0.8, delay: 0.8 },
                                    x: { duration: 0.8, delay: 0.8 },
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute top-1/4 -right-4 bg-white/80 backdrop-blur-md border border-slate-100 px-4 py-2 rounded-xl shadow-lg shadow-slate-200/50"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Scalable System</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? {
                                    opacity: 1,
                                    x: 0,
                                    y: [0, 10, 0]
                                } : {}}
                                transition={{
                                    opacity: { duration: 0.8, delay: 1 },
                                    x: { duration: 0.8, delay: 1 },
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute bottom-1/4 -left-8 bg-white/80 backdrop-blur-md border border-slate-100 px-4 py-2 rounded-xl shadow-lg shadow-slate-200/50"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Enterprise Cloud</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
