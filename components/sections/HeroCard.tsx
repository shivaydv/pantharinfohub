"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const HeroCard = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth spring to prevent jitter — GPU-only transforms, no borderRadius animation
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);
  const rawY = useTransform(scrollYProgress, [0, 1], [60, -30]);

  const scale = useSpring(rawScale, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const y = useSpring(rawY, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div className="px-4" ref={ref}>
      <motion.div
        className="w-full h-[30vh] md:h-screen relative overflow-hidden rounded-4xl"
        style={{
          scale,
          y,
          willChange: "transform",
        }}
      >
        <video
          src="/assets/showcase-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-4xl object-cover shadow-lg w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default HeroCard;
