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
        stiffness: 60,
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
        [isFirst ? 0 : 1200, 0]
    );

    const scale = useTransform(
        progress,
        [exitStart, exitEnd],
        [1, isLast ? 1 : 0.85]
    );

    const opacity = useTransform(
        progress,
        [exitStart, exitEnd],
        [1, isLast ? 1 : 0]
    );

    const rotateX = useTransform(progress, [exitStart, exitEnd], [0, isLast ? 0 : 15]);
    const rotateZ = useTransform(progress, [exitStart, exitEnd], [0, isLast ? 0 : -3]);
    const z = useTransform(progress, [exitStart, exitEnd], [0, isLast ? 0 : -200]);
    const blur = useTransform(progress, [exitStart, exitEnd], ["blur(0px)", isLast ? "blur(0px)" : "blur(5px)"]);

    return (
        <motion.div
            style={{
                y,
                scale,
                opacity,
                rotateX,
                rotateZ,
                z,
                filter: blur,
                perspective: 1200,
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
                willChange: "transform, opacity",
                zIndex: index,
            }}
            className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
        >
            <div
                onClick={onCardClick}
                className="relative w-full max-w-7xl h-[70vh] md:h-[85vh] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.18)] bg-[#0a0a0a] group cursor-pointer transition-transform duration-500 "
            >
                <div className="absolute inset-0">
                    {/* Mobile Image - shown on small screens */}
                    {project.mobileImage && (
                        <Image
                            src={project.mobileImage}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 block md:hidden"
                        />
                    )}
                    {/* Desktop Image - shown on medium+ screens (or as fallback if no mobileImage) */}
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-700 ${project.mobileImage ? "hidden md:block" : "block"}`}
                    />
                    <div className="absolute inset-0 bg-black/10  transition-colors duration-500" />
                </div>
            </div>
        </motion.div>
    );
};

