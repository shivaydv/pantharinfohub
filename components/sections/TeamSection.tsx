"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Teams, users } from "@/lib/data";
import { Sparkle } from "lucide-react";

const TeamSection = () => {
  // Combine users (founders) and Teams for a full list
  const fullTeam = [
    ...users.map((u) => ({ ...u, isFounder: true })),
    ...Teams.map((t) => ({ ...t, isFounder: false })),
  ];

  return (
    <section className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <Sparkle className="size-4 text-slate-400 fill-slate-400" />
          <div className="flex gap-2">
            {["OUR", "CREATIVE", "TEAM"].map((word) => (
              <span
                key={word}
                className="px-4 py-1.5 border border-slate-100 rounded-full text-[10px] font-bold tracking-widest text-slate-400 uppercase"
              >
                {word}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Main Title - Refined */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="text-4xl md:text-[80px] font-normal tracking-[-0.04em] text-slate-900 leading-[0.9] mb-12 max-w-3xl"
        >
          A TEAM OF <br />
          <span className="text-slate-300">DIGITAL EXPERTS.</span>
        </motion.h2>

        {/* Description Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 border-t border-slate-100 pt-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-4"
          >
            <p className="text-sm font-bold text-slate-900 uppercase tracking-tight leading-snug lg:max-w-xs">
              WE ARE A COLLECTIVE OF THINKERS, DESIGNERS AND ENGINEERS DEDICATED TO EXCELLENCE.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-8"
          >
            <p className="text-slate-500 text-lg md:text-xl font-normal leading-relaxed text-pretty max-w-2xl">
              From our humble beginnings to becoming a leading digital hub, our mission remains the
              same: empowering businesses through uncompromising innovation and precision.
            </p>
          </motion.div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {fullTeam.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member, index }: { member: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
      className="group relative flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[10/14] bg-slate-50 rounded-[2.5rem] overflow-hidden group transition-all duration-700 shadow-[0_0_0_1px_rgba(0,0,0,0.03)]">
        <Image
          src={member.icon}
          alt={member.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-110"
        />

        {/* Info Overlay (links show) */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.32, 0.72, 0, 1] z-20">
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl flex flex-col items-center gap-4 border border-white/20">
            <div className="flex gap-3">
              {member.socials?.map((social: any, i: number) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 rounded-full text-white hover:bg-orange-500 transition-all duration-500"
                >
                  {/* We handle Lucide icons here if passed as components or strings */}
                  {React.isValidElement(social.icon) ? social.icon : null}
                </a>
              ))}
            </div>
            <p className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
              Connect with {member.name.split(" ")[0]}
            </p>
          </div>
        </div>

        {/* Darkened Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Footer info (outside image) */}
      <div className="mt-6 flex justify-between items-start px-2">
        <div>
          <h4 className="text-xl md:text-2xl font-normal text-slate-900 tracking-[-0.03em]">
            {member.name}
          </h4>
          <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase mt-1">
            {member.role}
          </p>
        </div>
        {member.isFounder && (
          <span className="text-[9px] font-bold tracking-[0.2em] text-orange-600 border border-orange-100 px-3 py-1 rounded-full bg-orange-50/50">
            FOUNDER
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default TeamSection;
