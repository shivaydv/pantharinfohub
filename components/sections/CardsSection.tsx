"use client";
import Image from "next/image";
import { useScroll, useTransform, motion, useSpring } from "motion/react";
import { useRef, useState } from "react";
import FadedHeading from "../others/FadedHeading";
import ProjectModal from "../ui/ProjectModal";

import { projects as AllProjects } from "@/lib/data";

export default function CardSection({ hideHeader = false }: { hideHeader?: boolean }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100, // Increased for better responsiveness
        damping: 30,
        restDelta: 0.001,
    });

    const projects = AllProjects.slice(0, 5);

    const [selectedProject, setSelectedProject] = useState<(typeof AllProjects)[number] | null>(null);

    return (
        <div ref={container} className="relative h-[700vh] bg-white pt-6 pb-0 md:pt-16 md:pb-0">
            {/* Large Section Heading at the top (not sticky) */}
            {!hideHeader && (
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-2 md:mb-12 transform transition-all duration-700"
                >
                    <FadedHeading title="OUR WORK" theme="light" overlapClass="mt-2 md:-mt-8 lg:-mt-12">
                        <div className="relative w-full max-w-7xl mx-auto px-6 text-center">
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter font-cal-sans">
                                Our <span className="text-orange-500">Works.</span>
                            </h2>
                        </div>
                    </FadedHeading>
                </motion.div>
            )}

            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center z-10">
                    {projects.map((project, i) => (
                        <Card
                            key={i}
                            project={project}
                            progress={smoothProgress}
                            index={i}
                            total={projects.length}
                            onCardClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Reusable Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
}

const Card = ({ project, progress, index, total, onCardClick }: { project: any; progress: any; index: number; total: number; onCardClick: () => void }) => {
    const isFirst = index === 0;
    const isLast = index === total - 1;

    const startBuffer = 0.05;
    const endBuffer = 1;
    const step = (endBuffer - startBuffer) / total;

    const entryStart = startBuffer + (index - 0.8) * step;
    const entryEnd = startBuffer + index * step;

    const exitStart = startBuffer + index * step;
    const exitEnd = startBuffer + (index + 1) * step;

    const y = useTransform(
        progress,
        [entryStart, entryEnd],
        [isFirst ? 0 : 1000, 0] // Reduced initial offset slightly
    );

    const scale = useTransform(
        progress,
        [exitStart, exitEnd],
        [1, isLast ? 1 : 0.88] // Slightly less dramatic scale for smoothness
    );

    const opacity = useTransform(
        progress,
        [exitStart, exitEnd],
        [1, isLast ? 1 : 0]
    );

    const rotateX = useTransform(progress, [exitStart, exitEnd], [0, isLast ? 0 : 10]); // Reduced rotation
    const rotateZ = useTransform(progress, [exitStart, exitEnd], [0, isLast ? 0 : -2]); // Reduced rotation
    const z = useTransform(progress, [exitStart, exitEnd], [0, isLast ? 0 : -100]); // Reduced z depth offset

    // Removed blur transform for significant performance boost

    return (
        <motion.div
            style={{
                y,
                scale,
                opacity,
                rotateX,
                rotateZ,
                z,
                perspective: 1200,
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
                willChange: "transform, opacity",
                zIndex: index,
            }}
            className="absolute inset-0 flex items-center justify-center p-4 md:p-8 "
        >
            <div
                onClick={onCardClick}
                className="relative w-full max-w-7xl h-[70vh] md:h-[85vh] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] bg-[#0a0a0a] group cursor-pointer border border-white/5"
            >
                <div className="absolute inset-0 transition-transform duration-700 ">
                    {/* Mobile Image */}
                    {project.mobileImage && (
                        <Image
                            src={project.mobileImage}
                            alt={project.title}
                            fill
                            className="object-cover block md:hidden"
                            sizes="(max-width: 768px) 100vw, 80vw"
                        />
                    )}
                    {/* Desktop Image */}
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover ${project.mobileImage ? "hidden md:block" : "block"}`}
                        sizes="100vw"
                        priority={index < 2}
                    />

                    {/* Depth Overlays */}
                    {/* 1. Subtle Vignette for depth */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* 2. Shine/Reflection effect */}
                    <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-white/10 opacity-50" />

                    {/* 3. Dark Bottom Gradient for Text contrast (if any) and depth */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    {/* Inner Rim Light */}
                    <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 pointer-events-none" />
                </div>

                {/* Optional: Title reveal on hover to add to the "on top of screen" feel */}
                <div className="absolute bottom-10 left-10 z-20   text-white font-cal-sans text-2xl md:text-4xl hidden md:block">
                    {project.title}
                </div>
            </div>
        </motion.div>
    );
};

