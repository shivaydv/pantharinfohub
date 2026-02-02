"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ---------------- CONTENT ---------------- */

const ORANGE_ITEMS = ["Website Design", "Brand Design", "Logo Design"];

const BLACK_ITEMS = ["Senior Designer", "10 Years of Experience", "Over 100 Customers"];

/* ---------------- MAIN ---------------- */

export default function ParallaxStrips() {
  return (
    <section className="relative overflow-hidden py-32 min-h-75 flex items-center justify-center ">
      {/* BLACK STRIP - moves right to left */}
      <AutoScrollStrip
        items={BLACK_ITEMS}
        bg="bg-black text-white"
        direction="left"
        rotate={-6}
        z="z-10"
      />
      {/* ORANGE STRIP - moves left to right */}
      <AutoScrollStrip
        items={ORANGE_ITEMS}
        bg="bg-orange-500 text-white"
        direction="right"
        rotate={6}
        z="z-20"
      />
    </section>
  );
}

/* ---------------- STRIP ---------------- */

function AutoScrollStrip({ items, bg, direction, rotate, z }:{
  items: string[];
  bg: string;
  direction: "left" | "right";
  rotate: number;
  z: string;
}) {
  const isLeft = direction === "left";

  return (
    <div
      className={`absolute left-1/2 top-1/2 ${z} w-[200%]`}
      style={{
        transform: `translateX(-50%) translateY(-50%) rotate(${rotate}deg)`,
        transformOrigin: "center center",
      }}
    >
      <div className={`overflow-hidden py-4 ${bg}`}>
        <motion.div
          animate={{ x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {/* Multiply enough to cover width plus some more for seamless loop */}
          <Marquee items={items} />
          <Marquee items={items} />
          <Marquee items={items} />
          <Marquee items={items} />
          <Marquee items={items} />
          <Marquee items={items} />
          <Marquee items={items} />
          <Marquee items={items} />
          <Marquee items={items} />
          <Marquee items={items} />
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------- MARQUEE ---------------- */

function Marquee({ items }: { items: string[] }) {
  return (
    <div className="flex items-center gap-8 px-8">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="text-xl sm:text-2xl font-semibold leading-none">{item}</span>
          <span className="text-xl sm:text-2xl opacity-60">*</span>
        </span>
      ))}
    </div>
  );
}
