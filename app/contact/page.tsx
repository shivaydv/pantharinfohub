"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    const [selectedServices, setSelectedServices] = useState<string[]>(["App design"]);

    const services = [
        "App design",
        "Dashboard design",
        "Web design",
        "SaaS design"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        },
    };

    return (
        <main className="bg-white min-h-screen selection:bg-orange-100 selection:text-orange-600">

            {/* 1. CENTERED HEADER SECTION */}
            <section className="pt-40 pb-20 px-6 md:px-16 bg-white text-center">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                            <Sparkle className="size-4 text-orange-500 fill-orange-500" />
                            <span className="text-[10px] font-black tracking-[0.4em] text-gray-400 uppercase">
                                Work with us
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-gray-900 leading-[1.1] font-cal-sans uppercase mb-6"
                        >
                            Let&apos;s collaborate on <br />
                            your <span className="text-orange-500">projects.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-400 font-normal leading-relaxed max-w-xl mx-auto"
                        >
                            Have a project in mind? We bridge the gap between imagination and engineering.
                            Fill out the form below to start our journey.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. CENTERED FORM SECTION - Gray Background */}
            <section className="bg-gray-50 py-24 px-6 md:px-16 border-y border-gray-100">
                <div className="max-w-[900px] mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="w-full"
                    >
                        <form className="space-y-12 md:space-y-16">
                            {/* Row 1: Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                <motion.div variants={itemVariants} className="flex flex-col gap-4">
                                    <label className="text-2xl font-bold text-gray-900 tracking-tight">Full name*</label>
                                    <div className="border-b border-gray-200 pb-2 focus-within:border-orange-500 transition-all">
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full bg-transparent border-none outline-none text-gray-600 placeholder:text-gray-300 text-lg py-2"
                                        />
                                    </div>
                                </motion.div>
                                <motion.div variants={itemVariants} className="flex flex-col gap-4">
                                    <label className="text-2xl font-bold text-gray-900 tracking-tight">Email adress*</label>
                                    <div className="border-b border-gray-200 pb-2 focus-within:border-orange-500 transition-all">
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full bg-transparent border-none outline-none text-gray-600 placeholder:text-gray-300 text-lg py-2"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Row 2: Services & Budget */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                <motion.div variants={itemVariants} className="flex flex-col gap-6">
                                    <label className="text-2xl font-bold text-gray-900 tracking-tight">Services</label>
                                    <div className="flex flex-wrap gap-2">
                                        {services.map((s) => (
                                            <button
                                                key={s}
                                                type="button"
                                                onClick={() => setSelectedServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])}
                                                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 border ${selectedServices.includes(s)
                                                    ? "bg-gray-900 text-white border-gray-900"
                                                    : "bg-white text-gray-400 border-gray-200 hover:border-gray-400"
                                                    }`}
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                                <motion.div variants={itemVariants} className="flex flex-col gap-4">
                                    <label className="text-2xl font-bold text-gray-900 tracking-tight">Budget</label>
                                    <div className="border-b border-gray-200 pb-2 focus-within:border-orange-500 transition-all">
                                        <input
                                            type="text"
                                            placeholder="Enter your budget"
                                            className="w-full bg-transparent border-none outline-none text-gray-600 placeholder:text-gray-300 text-lg py-2"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Row 3: Message */}
                            <motion.div variants={itemVariants} className="flex flex-col gap-4">
                                <label className="text-2xl font-bold text-gray-900 tracking-tight">Message</label>
                                <div className="border-b border-gray-200 pb-2 focus-within:border-orange-500 transition-all">
                                    <textarea
                                        placeholder="Write your message here..."
                                        rows={1}
                                        className="w-full bg-transparent border-none outline-none text-gray-600 placeholder:text-gray-300 text-lg py-2 resize-none overflow-hidden min-h-[48px]"
                                    />
                                </div>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div variants={itemVariants} className="pt-4 flex justify-center md:justify-start">
                                <motion.button
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-12 py-5 bg-orange-500 text-white rounded-[2rem] font-bold text-lg flex items-center justify-center gap-4 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all"
                                >
                                    Send Message <ArrowRight size={20} />
                                </motion.button>
                            </motion.div>
                        </form>

                        {/* Bottom Details */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-gray-200">
                            {[
                                { icon: Mail, label: "Email", value: "hello@panthar.io" },
                                { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                                { icon: MapPin, label: "Studio", value: "Global / Remote" }
                            ].map((item, i) => (
                                <motion.div key={i} variants={itemVariants} className="flex flex-col gap-1">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.label}</p>
                                    <p className="text-base font-bold text-gray-900">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. CENTERED FOOTER FINALE */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-normal tracking-[-0.05em] text-gray-100 font-cal-sans uppercase select-none leading-none">
                            PANTHAR INFOHUB 
                        </h2>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <p className="text-[12px] font-black tracking-[1.2em] text-orange-500 uppercase">Designing the Future</p>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
