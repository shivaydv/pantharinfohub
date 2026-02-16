"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, animate, useScroll, useTransform } from "motion/react";
import { TimelineContent } from "../motion/TimelineAnimation";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Scroll-driven parallax for left column (content rises as you scroll)
    const leftY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -40]);
    const leftOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);

    // Scroll-driven parallax for right column (counter movement for depth)
    const rightY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
    const rightScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.9, 1, 1, 0.95]);
    const rightOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0.5]);

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
        <section id="about" className="relative py-20 sm:py-28 lg:py-36 px-6 bg-white overflow-hidden" ref={sectionRef}>
            {/* Background Grain/Grid for texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[24px_24px]" />

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Vision & Heading */}
                    <motion.div className="lg:col-span-7 flex flex-col relative z-10" style={{ y: leftY, opacity: leftOpacity }}>
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
                            <Link href={"/contact"} className="group relative border border-slate-950 inline-flex items-center justify-center overflow-hidden px-8 py-3.5 bg-slate-950 text-white rounded-2xl font-bold text-[14px] transition-all duration-500 hover:bg-white active:scale-95 shadow-xl shadow-slate-950/10">
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
                            </Link>
                        </TimelineContent>
                    </motion.div>

                    {/* Right Column: Orbiting Brand Experience (No Card) */}
                    <motion.div className="lg:col-span-5 h-[400px] lg:h-[550px] relative flex items-center justify-center" style={{ y: rightY, scale: rightScale, opacity: rightOpacity }}>
                        <div className="relative w-full h-full flex items-center justify-center">

                            {/* Central Aura */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? {
                                    scale: [1, 1.1, 1],
                                    opacity: [0.05, 0.1, 0.05]
                                } : { opacity: 0 }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute w-80 h-80 bg-slate-400 rounded-full blur-[100px]"
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
                                className="relative z-20 w-28 h-28 rounded-[2rem] flex items-center justify-center  overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent" />
                                <div className="relative w-20 h-20 z-10">
                                    <Image
                                        src="/black_logo.png"
                                        alt="Panthar Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* Orbiting Logo System - Reveals and starts when in view */}
                            {[
                                { radius: 140, duration: 25, size: 60, delay: 0, img: "/logo/lesspay.webp" },
                                { radius: 190, duration: 40, size: 60, delay: -25, img: "/logo/giveat.jpeg" },
                                { radius: 250, duration: 55, size: 60, delay: -80, img: "/logo/logo.webp" },
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
                                    {/* Rotating Logo Wrapper */}
                                    <motion.div
                                        className="absolute inset-0"
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: orbit.duration,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: orbit.delay
                                        }}
                                        style={{ transformOrigin: '50% 50%' }}
                                    >
                                        <div
                                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
                                            style={{
                                                width: orbit.size,
                                                height: orbit.size,
                                            }}
                                        >
                                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-slate-50 p-2 transform transition-transform duration-500 group-hover:scale-110">
                                                <Image
                                                    src={orbit.img}
                                                    alt="Partner Logo"
                                                    fill
                                                    className="object-cover p-1"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Secondary Decorative Particle (Replaces Secondary Slate Orb) */}
                                    <motion.div
                                        className="absolute inset-0"
                                        animate={{ rotate: -360 }}
                                        transition={{
                                            duration: orbit.duration * 2,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: orbit.delay - 10
                                        }}
                                        style={{ transformOrigin: '50% 50%' }}
                                    >
                                        <div
                                            className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-slate-200 rounded-full -translate-x-1/2 -translate-y-1/2"
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
