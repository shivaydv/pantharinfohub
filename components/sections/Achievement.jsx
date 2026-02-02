"use client"
import { animate, motion, useInView, useMotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import useMeasure from "react-use-measure";

const Achievement = () => {
    const Dref = useRef();
    const animateRef = useRef();
    const inInView = useInView(Dref)

    const images = [
        { src: "/ach/image1.png" },
        { src: "/ach/image2.webp" },
        { src: "/ach/image3.png" },
        { src: "/ach/image4.jpg" },
        { src: "/ach/image5.jpg" },
        { src: "/ach/image6.jpg" },
        { src: "/ach/image7.png" },
    ]
    let [ref, { width }] = useMeasure()
    const xTranslation = useMotionValue(0)


    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width])

    return (
        <>
            <div ref={animateRef} className="overflow-hidden   py-6 container mx-auto" >
                <motion.div className="flex relative w-full h-48 overflow-hidden  origin-bottom" ref={Dref} >

                    {/* fade effect on side */}
                    <div className="absolute left-0 top-0 h-full w-32 z-20 pointer-events-none bg-linear-to-r from-white to-transparent" ></div>
                    <div className="absolute right-0 top-0 h-full w-32 z-20 pointer-events-none bg-linear-to-l from-white to-transparent" ></div>

                    {/* <motion.div className="relative flex w-full items-center justify-center" initial={{ x: 0 }} animate={inInView && { x: "-150%" }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} > */}

                    <motion.div className=" flex absolute left-0 gap-4" ref={ref} style={{ x: xTranslation }} >
                        {[...images, ...images].map((image, i) => (
                            <div key={i} className="relative overflow-hidden h-[200px] min-w-[200px] flex justify-center items-center cursor-pointer hover:scale-[0.95] transition-all duration-200 ease-in-out  ">
                                <Image src={image.src} alt="image" className="h-full w-full object-contain" fill />
                            </div>

                        ))}
                    </motion.div>

                    {/* </motion.div> */}
                </motion.div>
            </div>
        </>
    )
}

export default Achievement
