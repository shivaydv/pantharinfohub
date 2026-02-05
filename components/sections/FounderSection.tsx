"use client";

import { Twitter, Instagram, Linkedin } from "lucide-react";
import FadedHeading from "../others/FadedHeading";
import { motion } from "motion/react";

const experience = [
    { position: "Founder at Agero", period: "2024-Now" },
    { position: "Brand Designer at Google", period: "2023-2024" },
    { position: "Web Designer at Shopify", period: "2018-2023" },
    { position: "Junior Designer at Meta", period: "2015-2018" },
];

export default function FounderSection() {
    return (
        <section className="w-full py-20 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <FadedHeading title="Meet Abhay" overlapClass="mt-4 md:-mt-8 lg:-mt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        {/* Left Side - Founder Image Card */}
                        <div className="relative flex justify-center items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.32, 0.72, 0, 1],
                                    delay: 0.1
                                }}
                                className="relative rounded-[2.5rem] overflow-hidden aspect-3/4 max-h-120 w-[min(100%,22.5rem)] group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] lg:translate-x-16"
                            >
                                {/* Founder Image */}
                                <div className="relative h-full w-full">
                                    <img
                                        src="/user/Abhay.png"
                                        alt="Founder"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                                </div>

                                {/* Social Icons */}
                                <div className="absolute bottom-8 left-8 flex gap-3">
                                    <motion.a
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 }}
                                        href="#"
                                        className="w-11 h-11 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 group/icon"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-4 h-4 text-white group-hover/icon:scale-110 transition-transform" />
                                    </motion.a>

                                    <motion.a
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 }}
                                        href="#"
                                        className="w-11 h-11 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 group/icon"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-4 h-4 text-white group-hover/icon:scale-110 transition-transform" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - Founder Info */}
                        <div className="space-y-8 lg:pl-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
                            >
                                <h2 className="text-4xl lg:text-5xl font-bold text-orange-500 mb-8 font-cal-sans tracking-tight leading-tight">The Founder</h2>
                                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed font-light">
                                    Abhay Namdev is a entrepreneur focused on building
                                    scalable, high-performance systems. He works with engineering teams and
                                    startups to architect robust platforms. He balances technical excellence with strategic vision
                                    — and enjoys exploring emerging technologies and open-source projects in
                                    his spare time.
                                </p>
                            </motion.div>

                            {/* Experience Timeline */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                                className="space-y-6 pt-10 border-t border-gray-100"
                            >
                                {experience.map((exp, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center group cursor-default"
                                    >
                                        <span className="text-base font-normal text-gray-900 group-hover:translate-x-1 transition-transform duration-300">{exp.position}</span>
                                        <span className="text-base font-light text-gray-500 tabular-nums">{exp.period}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </FadedHeading>
            </div>
        </section>
    );
}
