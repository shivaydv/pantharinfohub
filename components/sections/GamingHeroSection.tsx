'use client';

import React from "react";
import Image from "next/image";
import { motion, motionValue, useSpring, useTransform, MotionValue } from "motion/react";

interface FloatingAssetProps {
    src: string;
    alt: string;
    className: string;
    delay: number;
    startAnimation: boolean;
}

const FloatingAsset = ({ src, alt, className, delay, startAnimation, mouseX, mouseY, index }: FloatingAssetProps & { mouseX: MotionValue<number>, mouseY: MotionValue<number>, index: number }) => {
    const scale = useSpring(1, { stiffness: 200, damping: 15 });

    // Unique physics for each icon to break synchronicity
    const stiffness = 120 + (index % 3) * 40;
    const damping = 12 + (index % 2) * 8;

    const mouseXSpring = useSpring(mouseX, { stiffness, damping });
    const mouseYSpring = useSpring(mouseY, { stiffness, damping });

    // Individual tilt ranges (varies between 25 and 45 degrees)
    // const tiltRange = 25 + (index % 4) * 5;
    const tiltRange = 25;
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltRange, -tiltRange]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltRange, tiltRange]);

    // Varying parallax movement (varies between 10 and 25 pixels)
    const parallaxRange = 10 + (index % 3) * 7.5;
    const x = useTransform(mouseXSpring, [-0.5, 0.5], [parallaxRange, -parallaxRange]);
    const yOffset = useTransform(mouseYSpring, [-0.5, 0.5], [parallaxRange, -parallaxRange]);

    return (
        <motion.div
            className={`absolute ${className} z-20`}
            onMouseEnter={() => scale.set(1.15)}
            onMouseLeave={() => scale.set(1)}
            initial={{
                opacity: 0,
                scale: 0.5,
                y: 20,
            }}
            animate={startAnimation ? {
                opacity: 1,
                scale: 1,
                y: 0,
            } : {}}
            transition={{
                delay: delay,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            }}
            style={{
                rotateX,
                rotateY,
                x,
                y: yOffset,
                scale,
                transformStyle: "preserve-3d",
                perspective: 1000,
            }}
        >
            <motion.div
                className="relative w-full h-full"
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.5
                }}
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                <div
                    className="relative w-full h-full"
                    style={{
                        transform: "translateZ(20px)",
                    }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

const GamingHeroSection = ({ startAnimation = true }: { startAnimation?: boolean }) => {
    const mouseX = motionValue(0);
    const mouseY = motionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPct = (clientX / innerWidth) - 0.5;
        const yPct = (clientY / innerHeight) - 0.5;

        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const lines = [
        "JOIN THE",
        "NEW ERA OF",
        "Tech"
    ];

    // Text Reveal Animation Variants with Tilt-to-Normal Clockwise Rotation
    const lineVariants = {
        hidden: {
            y: "110%",
            rotateX: -10,
            rotateZ: -8, // Starting tilted
            opacity: 0,
            scale: 0.9
        },
        show: (i: number) => ({
            y: 0,
            rotateX: 0,
            rotateZ: 0, // Ending at normal (rotated clockwise from -10 to 0)
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.2 + i * 0.15,
                duration: 1.4,
                ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
            }
        })
    };

    // Assets arranged in a U-shape around the text
    const assets = [
        // Left Side
        { src: "/icons/figma 1.png", alt: "figma", className: "w-12 h-12 md:w-24 md:h-24 top-[20%] md:top-[45%] left-[12%] md:left-[5%]" },
        { src: "/icons/docker 1.png", alt: "docker", className: "w-10 h-10 md:w-24 md:h-24 top-[40%] md:top-[60%] left-6 md:left-[10%]" },
        { src: "/icons/kolin 1.png", alt: "kotlin", className: "w-10 h-10 md:w-24 md:h-24 bottom-[30%] md:bottom-[20%] left-[20%] md:left-[20%]" },

        // Bottom (The base of the U)
        { src: "/icons/android 1.png", alt: "android", className: "w-12 h-12 md:w-24 md:h-24 bottom-[18%] md:bottom-[10%] left-[60%] md:left-[35%]" },
        { src: "/icons/Next.js 1.png", alt: "nextjs", className: "w-12 h-12 md:w-24 md:h-24 bottom-[18%] md:bottom-[5%] right-[60%] md:right-[35%]" },

        // Right Side
        { src: "/icons/postgresql 1.png", alt: "postgresql", className: "w-10 h-10 md:w-24 md:h-24 bottom-[30%] md:bottom-[20%] right-[20%] md:right-[20%]" },
        { src: "/icons/Superbase 1.png", alt: "supabase", className: "w-10 h-10 md:w-24 md:h-24 top-[50%] md:top-[60%] right-6 md:right-[10%]" },
        { src: "/icons/Express.js 1.png", alt: "express", className: "w-12 h-12 md:w-24 md:h-24 top-[20%] md:top-[45%] right-[12%] md:right-[5%]" },
    ];

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden bg-white"
        >
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-7xl w-full  flex flex-col items-center justify-center">
                {/* Heading with Masking + Tilt Animation */}
                <div className="text-center relative z-10 space-y-2">
                    {lines.map((text, idx) => (
                        <div key={idx} className="overflow-visible py-2" style={{ clipPath: 'inset(-100% 0 -5% 0)' }}>
                            <motion.h1
                                custom={idx}
                                variants={lineVariants}
                                initial="hidden"
                                animate={startAnimation ? "show" : "hidden"}
                                className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-[1000] tracking-normal  leading-[0.9] text-black uppercase selection:bg-orange-500 selection:text-white"
                                style={{
                                    fontFamily: 'var(--font-tusker), sans-serif',
                                    perspective: "1200px",
                                    transformOrigin: "center center",
                                }}
                            >
                                {text}
                            </motion.h1>
                        </div>
                    ))}
                </div>

                {/* Assets in U-shape appearing after text reveal */}
                {assets.map((asset, i) => (
                    <FloatingAsset
                        key={i}
                        index={i}
                        {...asset}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        delay={0.5 + i * 0.06}
                        startAnimation={startAnimation}
                    />
                ))}

                {/* Subtle Glow */}
                <motion.div
                    className="absolute w-[50vw] h-[50vw] bg-linear-to-tr from-orange-100/30 to-blue-100/30 rounded-full blur-[140px] -z-10"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-slate-400">Discover More</span>
                <div className="w-px h-8 bg-linear-to-b from-slate-200 to-transparent" />
            </motion.div>
        </section>
    );
};

export default GamingHeroSection;
