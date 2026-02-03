"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Teams, users } from "@/lib/data";
import { Sparkle, ArrowUpRight } from "lucide-react";

const TeamSection = () => {
  // Combine users (founders) and Teams for a full list
  const fullTeam = [
    ...users.map((u) => ({ ...u, isFounder: true })),
    ...Teams.map((t) => ({ ...t, isFounder: false })),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="bg-white min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 px-6 md:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-[1400px] mx-auto"
      >
        {/* Top Badge */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-10"
        >
          <Sparkle className="size-4 text-orange-500 fill-orange-500" />
          <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
            MEET THE VISIONARIES
          </span>
        </motion.div>

        {/* Header Content */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-[80px] font-normal tracking-[-0.04em] text-black leading-[0.9] mb-12 max-w-3xl"
        >
          A TEAM OF <br />
          <span className="text-orange-500">DIGITAL EXPERTS.</span>
        </motion.h2>

        {/* Description Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 border-t border-slate-100 pt-16 mb-24">
          <motion.div variants={itemVariants} className="md:col-span-4">
            <p className="text-sm font-bold text-black uppercase tracking-tight leading-snug lg:max-w-xs">
              WE ARE A COLLECTIVE OF THINKERS, DESIGNERS AND ENGINEERS DEDICATED TO EXCELLENCE.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-8">
            <p className="text-slate-500 text-lg md:text-xl font-normal leading-relaxed text-pretty max-w-2xl">
              From our humble beginnings to becoming a leading digital hub, our mission remains the
              same: empowering businesses through uncompromising innovation and precision.
            </p>
          </motion.div>
        </div>

        {/* Team Cards Grid - Changed to 2 columns on mobile, 4 on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
          {fullTeam.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const TeamMemberCard = ({ member, index }: { member: any; index: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: (index % 4) * 0.1,
            ease: [0.16, 1, 0.3, 1] as const
          }
        },
      }}
      className="group flex flex-col"
    >
      {/* Image Container - Subtle height reduce on hover */}
      <div className="relative aspect-10/11 md:aspect-10/12 bg-gray-50 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-700 ease-[0.16,1,0.3,1] md:group-hover:aspect-10/11 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
        <Image
          src={member.icon}
          alt={member.name}
          fill
          className="object-cover transition-colors duration-500"
        />

        {/* Founder Badge (Inside Image) */}
        {member.isFounder && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-[8px] font-black tracking-widest uppercase">
              Founder
            </span>
          </div>
        )}
      </div>

      {/* Footer info (outside card) */}
      <div className="mt-5 flex flex-col px-1">
        <div className="flex justify-between items-start mb-0.5">
          <h4 className="text-lg md:text-xl font-medium text-black tracking-tight">
            {member.name}
          </h4>
          <span className="text-[10px] font-bold text-orange-500 md:text-gray-200 md:group-hover:text-orange-500 transition-colors duration-500">
            _{index < 9 ? `0${index + 1}` : index + 1}
          </span>
        </div>

        <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-3">
          {member.role}
        </p>

        {/* Socials - Visible on mobile, hover on desktop */}
        <div className="flex md:justify-end gap-2 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          {member.socials?.map((social: any, i: number) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="size-7 rounded-full bg-black flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300"
            >
              <div className="scale-[0.55]">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSection;

