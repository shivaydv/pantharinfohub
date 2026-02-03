"use client";

import React from "react";
import ProjectsList from "@/components/sections/Projects";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

export default function ProjectsPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
        },
    };

    return (
        <main className="bg-white min-h-screen overflow-x-hidden">
            {/* Professional Minimal Hero Section */}
            <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
                <div className="max-w-[1400px] mx-auto sm:px-6 md:px-16">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="w-full"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                            <Sparkle className="size-3 sm:size-4 text-orange-500 fill-orange-500" />
                            <span className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 uppercase">
                                Selected Showcase
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.1] mb-8 sm:mb-12 max-w-4xl font-cal-sans"
                        >
                            Our Work and <br className="hidden sm:block" />
                            <span className="text-orange-500">Case Studies.</span>
                        </motion.h1>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 border-t border-slate-100 pt-10 sm:pt-16">
                            <motion.div variants={itemVariants} className="md:col-span-4">
                                <p className="text-[10px] sm:text-xs font-bold text-slate-900 uppercase tracking-tight leading-snug lg:max-w-xs">
                                    EXPLORE OUR PROJECTS ACROSS DESIGN, DEVELOPMENT, AND STRATEGY.
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="md:col-span-8">
                                <p className="text-slate-500 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-pretty max-w-2xl">
                                    We deliver exceptional digital experiences that push boundaries
                                    and create lasting impact. Each project is a testament to our
                                    commitment to engineering excellence.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Minimal Kinetic Row List */}
            <ProjectsList />
        </main>
    );
}
