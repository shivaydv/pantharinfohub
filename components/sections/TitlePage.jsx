'use client'

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TitlePage = () => {
    const ref = useRef();
    const animateRef = useRef();
    const sectionRef = useRef();
    const inInView = useInView(ref)

    const { scrollYProgress } = useScroll({ target: animateRef, offset: ["start end", "0 0.6"] })
    const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(50%)", "inset(0%)"])

    // Additional scroll tracker for the entire section
    const { scrollYProgress: sectionProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
    const headingY = useTransform(sectionProgress, [0, 0.5, 1], [50, 0, -25]);
    const headingOpacity = useTransform(sectionProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.6]);
    const circlesY = useTransform(sectionProgress, [0, 0.5, 1], [40, 0, -15]);
    const circlesOpacity = useTransform(sectionProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);
    const variants = {
        initial: {
            opacity: "0",
            y: "100%",
        },
        animate: (i) => ({
            opacity: "1",
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: [0.65, 0, 0.35, 1],
            }
        }),
    }
    return (
        <section className="section_container mt-16 pt-[8vh] pb-[9rem] " ref={sectionRef}>
            <div className="relative" >
                <motion.div className="pb-5" style={{ y: headingY, opacity: headingOpacity }}>
                    <div className="flex gap-4 overflow-hidden flex-col sm:flex-row " >
                        <motion.div variants={variants} style={{ transformOrigin: "bottom center" }} initial="initial" whileInView="animate" className="overflow-hidden" >
                            <h2 className="title_heading" > Transforming </h2>
                        </motion.div>
                        <motion.div variants={variants} style={{ transformOrigin: "bottom center" }} initial="initial" whileInView="animate" >
                            <span className="text-gray-400 title_heading" > complexity </span>
                        </motion.div>
                    </div>

                    <div className="overflow-hidden mt-4 sm:mt-0" >
                        <motion.div variants={variants} style={{ transformOrigin: "bottom center" }} initial="initial" whileInView="animate" >
                            <h2 className="title_heading" > into simplicity </h2>
                        </motion.div>
                    </div>
                </motion.div>


                <motion.div className="flex sm:justify-between sm:items-center flex-col gap-y-12 sm:flex-row" style={{ y: circlesY, opacity: circlesOpacity }}>
                    <div className="flex" >
                        <div className="hero_circle bg-gray-400 flex-center" >
                            <div className="flex items-center justify-center flex-col" >
                                <div>
                                    <h3 className="text-xl leading-[150%] font-medium " > 70% </h3>
                                </div>
                                <div className="text-center text-xs leading-[150%] " >
                                    Boost in <br />
                                    Efficiency
                                </div>
                            </div>
                        </div>
                        <div className="hero_circle bg-orange-400 -left-3 relative flex-center" >
                            <div className="flex items-center justify-center flex-col" >
                                <div>
                                    <h3 className="text-xl leading-[150%] font-medium " > 50+ </h3>
                                </div>
                                <div className="text-center text-xs leading-[150%] " >
                                    Successfull <br />
                                    Projects
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* YELLOW BUTTON */}
                    <div ref={animateRef} className="overflow-hidden" >
                        <motion.div className="flex justify-center items-center relative w-[20rem] sm:w-[35rem] h-[10rem] sm:h-[12rem] rounded-[3rem] bg-orange-400  overflow-hidden  origin-bottom" style={{ clipPath: clipPath }} ref={ref} >
                            <motion.div className="relative text-nowrap flex " initial={{ x: 0 }} animate={inInView && { x: "-200%" }} transition={{ delay: 1, duration: 20, repeat: Infinity, ease: "linear" }} >
                                <h2 className="hero_heading pl-4" > Service Analytics - </h2>
                                <h2 className="absolute left-full hero_heading " > Service Analytics - </h2>
                                <h2 className="absolute left-[200%] hero_heading " > Service Analytics - </h2>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default TitlePage

