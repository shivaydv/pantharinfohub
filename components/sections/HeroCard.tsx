"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const HeroCard = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [48, 32, 56]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <div className="px-4" ref={ref}>
      <motion.div
        className="w-full h-[30vh] md:h-screen relative overflow-hidden"
        style={{ scale, borderRadius, y }}
      >
        <video
          src="/assets/showcase-video.mp4"
          autoPlay
          loop
          muted
          className="object-cover shadow-lg w-full h-full"
          style={{ borderRadius: "inherit" }}
        />
      </motion.div>
    </div>
  );
};

export default HeroCard;
