'use client'
import { mainProjects } from "@/lib/data"
import { motion, useAnimation, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Plus } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const MainProjects = () => {
  const variants = {
    initial: {
      opacity: "0",
      y: "100%",
    },
    animate: {
      opacity: "1",
      y: 0,
      transition: {
        duration: 1,
        ease: [0.65, 0, 0.35, 1],
      }
    },
  }
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  // Scroll-driven transforms for subheader text
  const textY = useTransform(scrollYProgress, [0, 0.4, 1], [60, 0, -20]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0.6]);

  // Scroll-driven transforms for cards column
  const cardsX = useTransform(scrollYProgress, [0, 0.3, 1], [-30, 0, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);

  return (
    <section className='bg-gray-100 rounded-3xl overflow-hidden' >
      <motion.div className="section_container pt-[8rem] lg:pt-[12rem] relative" ref={ref} >

        <div className="py-6 relative" >
          <motion.div style={{ y: textY, opacity: textOpacity }}>
            <div>
              <h2 className='subheader' > Turning data into real </h2>
            </div>
            <div>
              <h2 className='subheader' >  action and ideas</h2>
            </div>
          </motion.div>

          {/* MOCK UP PIC MOBILE */}
          <motion.div style={{ y }} className={` w-[12rem] md:w-[16rem] lg:w-[20rem] mx-auto aspect-[22.5/46.8] absolute top-[19%] left-[6%] right-auto lg:inset-x-0  rounded-3xl z-[100]`} >
            <Image src="/service/home.png" fill className="w-full h-full" alt="mockup" quality={100} />
          </motion.div>

          <motion.div className={` w-[30rem] top-[15%] -right-1/2 lg:w-[50rem] aspect-[6.2/4.7] absolute lg:top-[4%] md:right-[-10%] bottom-auto left-auto rounded-3xl z-50`} >
            <Image src="/service/ipadmockup.png" fill className="w-full h-full" alt="mockup" quality={100} />
          </motion.div>

          <motion.div className=' w-full lg:w-[25rem] flex flex-col gap-8 pt-[90vh] lg:pt-20' style={{ x: cardsX, opacity: cardsOpacity }}>
            {mainProjects?.slice(0, 3)?.map((project, i) => {
              return (
                < Card key={i} i={i} project={project} />
              )
            })}

          </motion.div>
        </div>

        {/* PANTHAR TEXT */}
        <div className="aspect-[4/1.55] flex justify-center items-end w-full relative overflow-hidden pt-24 pb-8 sm:pb-12" >
          <div
            className='bg-grid absolute inset-0 z-0'
            style={{
              maskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)'
            }}
          />
          <div className="z-50 flex" >
            <motion.div variants={variants} style={{ transformOrigin: "bottom center" }} initial="initial" whileInView="animate" className="text-orange-500 text-[4.2rem] md:text-[12rem] lg:text-[22rem] font-bold leading-[100%]" > Panthar </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default MainProjects

const Card = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-6 w-full relative rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-500 ${isHovered ? "shadow-2xl border-orange-200 z-50 scale-[1.02]" : "shadow-md z-10"}`}
    >
      <div className="relative w-full flex justify-between items-center" >
        <h2 className='text-xl font-semibold text-gray-900' > {project.title} </h2>
        <motion.div
          className='size-8 bg-gray-100 rounded-full flex items-center justify-center'
          animate={{ rotate: isHovered ? 135 : 0, backgroundColor: isHovered ? "#FF5C00" : "#f3f4f6" }}
        >
          <Plus className={`size-4 transition-colors ${isHovered ? "text-white" : "text-gray-600"}`} />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className='overflow-hidden'
          >
            <div className="pt-6 mt-4 border-t border-gray-100 flex flex-col gap-4" >
              <p className="text-base font-medium text-orange-600" > {project.role || "Digital Solution"} </p>
              <p className="text-sm text-gray-600 leading-relaxed" > {project.description} </p>

              {/* {project.link && (
                <Button className="w-full bg-[#FF5C00] hover:bg-orange-600 text-white rounded-xl mt-2 transition-transform active:scale-95" asChild>
                  <Link href={project.link} target="_blank"  >
                    {project.btn?.text || "View Project"} <Plus className="ml-2 size-4 rotate-[-45deg]" />
                  </Link>
                </Button>
              )} */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div >
  )
}