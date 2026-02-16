"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, ArrowUpRight, Calendar, Layers } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
    project: {
        title: string;
        image: string;
        mobileImage?: string;
        link?: string;
        year?: string;
        service?: string;
        description?: string;
    } | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({
    project,
    isOpen,
    onClose,
}: ProjectModalProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <motion.div
                    className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6 md:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-[0_60px_140px_-30px_rgba(0,0,0,0.25)] border border-slate-100"
                        initial={{ opacity: 0, scale: 0.88, y: 40, filter: "blur(8px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.92, y: 30, filter: "blur(6px)" }}
                        transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ scrollbarWidth: "none" }}
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 size-10 md:size-12 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-500 hover:text-orange-500 hover:border-orange-300 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X className="size-4 md:size-5" strokeWidth={2} />
                        </motion.button>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-16/10 md:aspect-video overflow-hidden rounded-t-[1.5rem] md:rounded-t-[2rem] bg-[#0a0a0a]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                            {/* Floating Title on Image */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                                <motion.h2
                                    className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight font-cal-sans leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    {project.title}
                                </motion.h2>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-10">
                            {/* Meta Tags */}
                            <motion.div
                                className="flex flex-wrap gap-3 mb-8"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {project.year && (
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-600">
                                        <Calendar className="size-3.5 text-orange-500" />
                                        {project.year}
                                    </span>
                                )}
                                {project.service && (
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[11px] font-bold uppercase tracking-[0.15em] text-orange-600">
                                        <Layers className="size-3.5" />
                                        {project.service}
                                    </span>
                                )}
                            </motion.div>

                            {/* Description */}
                            {project.description && (
                                <motion.div
                                    className="mb-8"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3">
                                        About the Project
                                    </h3>
                                    <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                                        {project.description}
                                    </p>
                                </motion.div>
                            )}

                            {/* Divider */}
                            <motion.div
                                className="h-px bg-slate-100 my-6"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                style={{ transformOrigin: "left" }}
                            />

                            {/* CTA */}
                            <motion.div
                                className="flex items-center justify-between"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="flex items-center gap-3">
                                    {/* <div className="size-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                                        {project.link ? "Live Project" : "Coming Soon"}
                                    </span> */}
                                </div>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-orange-500 transition-all duration-500"
                                    >
                                        Visit Project
                                        <ArrowUpRight className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                                    </a>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
