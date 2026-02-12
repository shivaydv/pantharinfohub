"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Sparkle } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "Panthar Infohub delivered a robust and scalable solution that perfectly matched our service requirements. Their execution and support were excellent.",
        company: "Pankhuri",
    },
    {
        id: 2,
        quote: "Panthar Infohub provided a seamless experience from concept to delivery. Their professionalism and technical expertise truly stand out.",
        company: "Sweet & Sour",
    },
    {
        id: 3,
        quote: "From UI/UX design to final deployment, Panthar Infohub handled everything professionally. The service quality was consistently high.",
        company: "Frame Finder",
    },
    {
        id: 4,
        quote: "Their end-to-end development services were smooth, efficient, and well-managed. We appreciated the clear communication at every stage.",
        company: "Less Pay",
    },
];

export default function TestimonialsEditorial() {
    const [active, setActive] = useState(0);

    const handleChange = (index: number) => {
        if (index === active) return;
        setActive(index);
    };

    const handlePrev = () => {
        const newIndex = active === 0 ? testimonials.length - 1 : active - 1;
        handleChange(newIndex);
    };

    const handleNext = () => {
        const newIndex = active === testimonials.length - 1 ? 0 : active + 1;
        handleChange(newIndex);
    };

    const current = testimonials[active];

    return (
        <section className="relative py-20 sm:py-28 lg:py-36 px-6 bg-white overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[24px_24px]" />

            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Sparkle className="size-4 text-orange-500 fill-orange-500" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-gray-400 uppercase">
                            Client Stories
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 font-cal-sans uppercase">
                        What <span className="text-orange-500">Clients Say</span>
                    </h2>
                </motion.div>

                {/* Testimonial Content */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Large Index Number */}
                        <motion.div
                            key={`index-${active}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-2 flex justify-center lg:justify-start"
                        >
                            <span
                                className="text-[120px] lg:text-[160px] font-light leading-none text-orange-500/10 select-none font-cal-sans"
                                style={{ fontFeatureSettings: '"tnum"' }}
                            >
                                {String(active + 1).padStart(2, "0")}
                            </span>
                        </motion.div>

                        {/* Quote Content */}
                        <div className="lg:col-span-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {/* Quote Icon */}
                                    <Quote className="w-12 h-12 text-orange-500/20 mb-6" />

                                    {/* Quote Text */}
                                    <blockquote className="text-2xl md:text-2xl font-normal leading-relaxed text-gray-900 tracking-tight mb-8">
                                        "{current.quote}"
                                    </blockquote>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-1 bg-orange-500 rounded-full" />
                                        <div className="flex flex-col">
                                            <p className="text-lg font-bold text-gray-900 leading-tight">
                                                {current.company}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-16 flex items-center justify-between border-t border-gray-100 pt-8"
                    >
                        {/* Progress Indicators */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleChange(index)}
                                        className="group relative py-3"
                                    >
                                        <span
                                            className={`block h-[2px] rounded-full transition-all duration-500 ease-out ${index === active
                                                ? "w-12 bg-orange-500"
                                                : "w-6 bg-gray-200 group-hover:w-8 group-hover:bg-orange-300"
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                            <span className="text-xs text-gray-400 tracking-widest uppercase font-bold">
                                {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Arrow Navigation */}
                        <div className="flex items-center gap-2">
                            <motion.button
                                whileHover={{ scale: 1.05, x: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handlePrev}
                                className="p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, x: 2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleNext}
                                className="p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
