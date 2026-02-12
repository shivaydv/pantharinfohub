"use client"
import { animate, motion, useInView, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import useMeasure from "react-use-measure";

interface AchievementLogo {
    src: string;
}

const Achievement = () => {
    const Dref = useRef<HTMLDivElement>(null);
    const inInView = useInView(Dref);

    const images: AchievementLogo[] = [
        { src: "/ach/alpharule.png" },
        { src: "/ach/citimaster.png" },
        { src: "/ach/emify.png" },
        { src: "/ach/frame-finder.png" },
        { src: "/ach/giveat.png" },
        { src: "/ach/google.png" },
        { src: "/ach/gov.webp" },
        { src: "/ach/kavach.png" },
        { src: "/ach/lesspay.png" },
        { src: "/ach/news18.png" },
        { src: "/ach/pankhuri.png" },
        { src: "/ach/rise.png" },
        { src: "/ach/sweetnsour.png" },
        { src: "/ach/velvet.png" },
    ];

    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        if (width === 0) return;

        let finalPosition = -width / 2 - 16; // Adjusting for gap

        const controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 35, // Slower, more elegant scroll
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width]);

    return (
        <section className="py-12 bg-white/50 backdrop-blur-sm overflow-hidden" id="achievements">

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
                            className="relative shrink-0 w-44 h-44 md:w-40 md:h-40 flex justify-center items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer group"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={image.src}
                                    alt="Client Logo"
                                    className="object-contain filter transition-all duration-500"
                                    fill
                                    // width={24}
                                    // height={24}
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Achievement;
