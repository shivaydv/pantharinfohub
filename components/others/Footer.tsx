"use client";
import Link from "next/link";
import React from "react";
import { ArrowUp, Twitter, Instagram, Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { siteConfig } from "@/lib/metadata";

const FooterLinks = [
    { label: "About Us", href: "/#about" },
    { label: "Projects", href: "/projects" },
    { label: "Our Team", href: "/team" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    {label:"Career", href:"/career"},
]


const Footer = () => {
    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1] as any
            }
        }
    };

    return (
        <div className="w-full p-2 pb-2">
            <footer className="w-full min-h-[90vh] lg:h-[98vh] rounded-xl text-white relative bg-[#090909] overflow-hidden group flex flex-col justify-between">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-[url('/assets/footer-bg.avif')] bg-cover bg-center opacity-40 lg:opacity-60 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-black" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="container mx-auto grow flex flex-col justify-between py-12 px-6 sm:px-12 md:px-20 relative z-10"
                >
                    {/* Top Section: Branding and Minimal Fillers */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 sm:gap-16 pt-10">
                        <motion.div variants={itemVariants} className="max-w-md w-full">
                            <div className="text-3xl font-bold font-cal-sans mb-8 tracking-tighter">
                                PANTHAR<span className="text-orange-500">.</span>
                            </div>
                            <div className="space-y-6">
                                <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                                    Strategic design and high-performance engineering for the next generation of digital products.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Contact</span>
                                    <Link href={`mailto:${siteConfig.contact.email}`} className="text-xl font-cal-sans hover:text-orange-500 transition-colors">
                                        {siteConfig.contact.email}
                                    </Link>
                                </div>
                                <div className="flex gap-5 pt-4">
                                    {[
                                        { Icon: Instagram, href: siteConfig.socials.instagram },
                                        { Icon: Linkedin, href: siteConfig.socials.linkedin },
                                    ].map(({ Icon, href }, i) => (
                                        <Link key={i} href={href} target="_blank" className="text-gray-500 hover:text-white transition-colors">
                                            <Icon className="size-5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col items-start lg:items-end gap-12 lg:gap-16 lg:mt-10"
                        >
                            <div className="text-left lg:text-right">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-8">Navigation</h3>
                                <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4">
                                    {FooterLinks.map((link, i) => (
                                        <li key={i}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-lg lg:text-xl font-cal-sans"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Massive Watermark - Centered & Responsive */}
                <div className="relative pointer-events-none select-none z-0 overflow-hidden flex items-end justify-center h-24 sm:h-32 lg:h-auto mt-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 0.1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-[25vw] sm:text-[22vw] font-black font-cal-sans text-white leading-none translate-y-[10%] lg:translate-y-[20%] whitespace-nowrap"
                    >
                        PANTHAR
                    </motion.h2>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
