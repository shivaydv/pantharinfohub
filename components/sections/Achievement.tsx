"use client"
import { animate, motion, useInView, useMotionValue, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import useMeasure from "react-use-measure";

interface AchievementLogo {
    src: string;
}

const Achievement = () => {
    const Dref = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const inInView = useInView(Dref);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const sectionY = useTransform(scrollYProgress, [0, 1], [20, -20]);
    const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

    const images: AchievementLogo[] = [
        { src: "/ach/alpharule.svg" },
        { src: "/ach/citimaster.svg" },
        { src: "/ach/emify.svg" },
        { src: "/ach/giveat.svg" },
        { src: "/ach/image2.webp" },
        { src: "/ach/image1.png" },
        { src: "/ach/kavach.svg" },
        { src: "/ach/lesspay.svg" },
        { src: "/ach/news18.svg" },
        { src: "/ach/pankhuri.svg" },
        { src: "/ach/image3.png" },
        { src: "/ach/sweetnsour.svg" },
        { src: "/ach/velvet.svg" },
    ];

    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        if (width === 0) return;

        let finalPosition = -width / 2 - 16; // Adjusting for gap

        const controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 20, // Slower, more elegant scroll
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width]);

    return (
        <motion.section
            className="py-12 bg-white/50 backdrop-blur-sm overflow-hidden"
            id="achievements"
            ref={sectionRef}
            style={{ y: sectionY, opacity: sectionOpacity }}
        >

            <div className="relative flex overflow-hidden py-4" ref={Dref}>
                {/* Fade effect on sides */}
                <div className="absolute left-0 top-0 h-full w-24 md:w-48 z-20 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
                <div className="absolute right-0 top-0 h-full w-24 md:w-48 z-20 pointer-events-none bg-linear-to-l from-white to-transparent"></div>

                <motion.div
                    className="flex gap-12 items-center whitespace-nowrap"
                    ref={ref}
                    style={{ x: xTranslation }}
                >
                    {[...images, ...images].map((image, i) => (
                        <div
                            key={i}
                            className="relative shrink-0 w-32 h-32 md:w-32 md:h-32 flex justify-center items-center   opacity-100 transition-all duration-500 ease-in-out  group"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={image.src}
                                    alt="Client Logo"
                                    className="object-contain filter transition-all duration-500"
                                    fill
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Achievement;
