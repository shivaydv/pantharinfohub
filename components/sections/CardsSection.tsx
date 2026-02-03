"use client";
import Image from "next/image";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import FadedHeading from "../others/FadedHeading";

const cards = [
    {
        id: 1,
        title: "Archin",
        description:
            "We've helped businesses across industries achieve their goals. Here are some of our selected works.",
        image: "/assets/project-showcase.png",
        year: "2025",
        role: "Lead Designer",
        services: ["Website Design", "Product Design", "Branding", "Development"],
        bgColor: "#1a1a1a",
    },
    {
        id: 2,
        title: "TechFlow",
        description:
            "Innovative solutions crafted with precision and creativity to drive digital transformation.",
        image: "/assets/footer-bg.avif",
        year: "2024",
        role: "Creative Director",
        services: ["UI/UX Design", "Branding", "Strategy", "Development"],
        bgColor: "#0f0f0f",
    },
    {
        id: 3,
        title: "Horizon",
        description:
            "Building exceptional digital experiences that connect brands with their audience.",
        image: "/service/design.png",
        year: "2024",
        role: "Full Stack Designer",
        services: ["Web Development", "Mobile App", "Design System", "Consulting"],
        bgColor: "#1a1a1a",
    },
    {
        id: 4,
        title: "Quantum",
        description:
            "Pushing boundaries in design and technology to create memorable user experiences.",
        image: "/service/discovery.png",
        year: "2023",
        role: "Product Designer",
        services: ["Product Design", "Prototyping", "User Research", "Testing"],
        bgColor: "#0f0f0f",
    },
];

export default function CardSection() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    // Balanced spring for responsiveness and smoothness
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div ref={container} className="relative h-[400vh] bg-white pt-12 pb-0 md:pt-16 md:pb-0">
            {/* Large Section Heading at the top (not sticky) */}
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 md:mb-12 transform transition-all duration-700"
            >
                <FadedHeading title="OUR WORK" theme="light" overlapClass="mt-6 md:-mt-8 lg:-mt-12">
                    <div className="relative w-full max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter font-cal-sans">
                            Our <span className="text-orange-500">Works.</span>
                        </h2>
                    </div>
                </FadedHeading>
            </motion.div>

            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Cards Container - Centered */}
                <div className="relative w-full h-full flex items-center justify-center z-10">
                    {cards.map((card, i) => (
                        <Card
                            key={card.id}
                            card={card}
                            progress={smoothProgress}
                            index={i}
                            total={cards.length}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

const Card = ({ card, progress, index, total }: { card: any; progress: any; index: number; total: number }) => {
    const isFirst = index === 0;
    const isLast = index === total - 1;

    // Use a wider range for transitions to make them feel more fluid
    // Optimized timing to eliminate dead scroll at the end
    const startBuffer = 0.05;
    const endBuffer = 1;
    const step = (endBuffer - startBuffer) / (total - 0.5);

    // Entry: when this card slides up
    // Wider entry range for smoothness
    const entryStart = startBuffer + (index - 0.8) * step;
    const entryEnd = startBuffer + index * step;

    // Exit: Starts exactly as the next card begins its main entry
    const exitStart = startBuffer + index * step;
    const exitEnd = startBuffer + (index + 1.2) * step;

    // Entry Animation (Y position)
    // Resting position at 0 (center of container)
    // Since container is items-end, 0 means bottom-aligned
    const y = useTransform(
        progress,
        [entryStart, entryEnd],
        [isFirst ? 0 : 1200, 0]
    );

    // Exit Animation (Scale, Opacity, Tilt)
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

    const rotateX = useTransform(
        progress,
        [exitStart, exitEnd],
        [0, isLast ? 0 : 15]
    );

    const rotateZ = useTransform(
        progress,
        [exitStart, exitEnd],
        [0, isLast ? 0 : -3]
    );

    const z = useTransform(
        progress,
        [exitStart, exitEnd],
        [0, isLast ? 0 : -200]
    );

    const blur = useTransform(
        progress,
        [exitStart, exitEnd],
        ["blur(0px)", isLast ? "blur(0px)" : "blur(12px)"]
    );

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
            <div className="relative w-full max-w-7xl h-[85vh] overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.18)] bg-[#0a0a0a]">
                {/* Card Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-40">
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover blur-3xl scale-110"
                        />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />
                    {/* Grain */}
                    <div
                        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                    />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 text-white z-10">
                    {/* Top */}
                    <div className="flex justify-between items-start">
                        <div className="max-w-sm">
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Year</p>
                            <p className="text-3xl md:text-4xl font-bold">{card.year}</p>
                        </div>
                    </div>

                    {/* Middle Image */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                            className="relative w-[300px] md:w-[450px] lg:w-[550px] aspect-4/5 md:aspect-16/10 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Image src={card.image} alt={card.title} fill className="object-cover" />
                        </motion.div>
                    </div>

                    {/* Bottom */}
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-gray-500 text-sm mb-2">0{index + 1} / 0{total}</p>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                                {card.title}
                            </h2>
                        </div>
                        <div className="text-right hidden md:block">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Services</p>
                            {card.services.map((s: string, i: number) => (
                                <p key={i} className="text-sm text-gray-300">{s}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
