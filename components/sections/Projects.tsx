'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
    motion,
    useMotionValue,
    useSpring,
    AnimatePresence,
} from 'framer-motion';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/lib/data';
import ProjectModal from '../ui/ProjectModal';

/* ---------- Component ---------- */

export default function ProjectsList() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [modalProject, setModalProject] = useState<(typeof projects)[number] | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 35, stiffness: 300, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isMobile) return;

        const cardWidth = 384;
        const cardHeight = 256;
        const padding = 40;

        let x = e.clientX + 25;
        let y = e.clientY + 25;

        if (x + cardWidth + padding > window.innerWidth) x = e.clientX - cardWidth - 25;
        if (y + cardHeight + padding > window.innerHeight) y = e.clientY - cardHeight - 25;

        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full cursor-default bg-white py-8 md:py-12"
        >
            <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-16">
                <div className="flex flex-col border-t border-slate-100">
                    {projects.map((project, index) => (
                        <ProjectRow
                            key={project.id}
                            data={project}
                            index={index}
                            isActive={activeId === project.id}
                            setActiveId={setActiveId}
                            isMobile={isMobile}
                            isAnyActive={activeId !== null}
                            onOpenModal={() => setModalProject(project)}
                        />
                    ))}
                </div>
            </div>

            {!isMobile && (
                <motion.div
                    style={{
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        x: cursorX,
                        y: cursorY,
                        pointerEvents: 'none',
                        zIndex: 9999
                    }}
                    className="hidden lg:blockOutline"
                >
                    <AnimatePresence mode="wait">
                        {activeId && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="relative h-64 w-96 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
                            >
                                <Image
                                    src={projects.find((p) => p.id === activeId)?.image || ''}
                                    alt="Preview"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}

            {/* Reusable Project Modal */}
            <ProjectModal
                project={modalProject}
                isOpen={!!modalProject}
                onClose={() => setModalProject(null)}
            />
        </div>
    );
}

function ProjectRow({
    data,
    index,
    isActive,
    setActiveId,
    isMobile,
    isAnyActive,
    onOpenModal,
}: {
    data: any;
    index: number;
    isActive: boolean;
    setActiveId: (id: string | null) => void;
    isMobile: boolean;
    isAnyActive: boolean;
    onOpenModal: () => void;
}) {
    const isDimmed = isAnyActive && !isActive;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: isDimmed ? 0.3 : 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onMouseEnter={() => !isMobile && setActiveId(data.id)}
            onMouseLeave={() => !isMobile && setActiveId(null)}
            onClick={() => {
                if (isMobile) {
                    setActiveId(isActive ? null : data.id);
                } else {
                    onOpenModal();
                }
            }}
            className="group relative border-b border-slate-100 w-full cursor-pointer"
        >
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-8 md:py-14 lg:py-16 gap-4 sm:gap-6 transition-all duration-300">

                {/* Left side: Index + Title */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-14 lg:gap-20 flex-1 min-w-0">
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-slate-400 group-hover:text-orange-500 transition-colors shrink-0 w-6 sm:w-8">
                        0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-orange-500 font-cal-sans leading-tight md:leading-none truncate md:overflow-visible">
                        {data.title}
                    </h2>
                </div>

                {/* Right side: Meta Data + CTA Icon */}
                <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-10 lg:gap-16">
                    <div className="flex flex-col items-start md:items-end text-left md:text-right shrink-0">
                        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-500 group-hover:text-slate-900 transition-colors mb-0.5 sm:mb-1">
                            {data.role}
                        </span>
                        <span className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            {data.year}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Mobile indicator */}
                        <div className="block md:hidden text-slate-400">
                            <motion.div
                                animate={{ rotate: isActive ? 180 : 0 }}
                                className="size-8 sm:size-10 rounded-full border border-slate-100 flex items-center justify-center p-2"
                            >
                                {isActive ? <Minus size={16} /> : <Plus size={16} />}
                            </motion.div>
                        </div>

                        {/* Desktop and Tablet Arrow */}
                        <div
                            className="hidden md:flex size-10 sm:size-12 lg:size-14 rounded-full border border-slate-200 items-center justify-center text-slate-400 group-hover:text-orange-500 group-hover:border-orange-500 transition-all duration-500"
                        >
                            <ArrowUpRight className="size-5 sm:size-6" strokeWidth={1.5} />
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE ACCORDION CONTENT */}
            <AnimatePresence>
                {isMobile && isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 sm:pb-10 pl-10 sm:pl-14">
                            <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm">
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    className="object-cover"
                                    fill
                                />
                            </div>
                            <p className="mt-6 sm:mt-8 text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl">
                                {data.description}
                            </p>
                            <button
                                onClick={(e) => { e.stopPropagation(); onOpenModal(); }}
                                className="mt-6 sm:mt-8 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-orange-500 flex items-center gap-2 sm:gap-3 active:scale-95 transition-all"
                            >
                                Learn More <ArrowUpRight size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}