"use client";
import Link from "next/link";
import React from "react";
import { ArrowUp, Twitter, Instagram, Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Footer Links Data
const footerLinks = {
    company: {
        heading: "Company",
        links: [
            { label: "About Us", href: "/#about" },
            { label: "Our Team", href: "/team" },
            { label: "Careers", href: "/career" },
            { label: "Contact", href: "/#contact" },
        ],
    },
    services: {
        heading: "Services",
        links: [
            { label: "Web Development", href: "/#services" },
            { label: "App Development", href: "/#services" },
            { label: "UI/UX Design", href: "/#services" },
            { label: "Digital Marketing", href: "/#services" },
        ],
    },
    resources: {
        heading: "Resources",
        links: [
            { label: "Our Work", href: "/work" },
            { label: "Training", href: "/training" },
            { label: "Blog", href: "#" },
            { label: "Privacy Policy", href: "#" },
        ],
    },
};

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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
            <footer className="w-full h-[98vh] rounded-xl text-white relative bg-[#090909] overflow-hidden group">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-[url('/assets/footer-bg.avif')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="container mx-auto h-full flex flex-col justify-between py-20 px-8 sm:px-12 md:px-20 relative z-10"
                >
                    {/* Top Section: Branding and Minimal Fillers */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 sm:gap-16 pt-10">
                        <motion.div variants={itemVariants} className="max-w-md">
                            <div className="text-3xl font-bold font-cal-sans mb-10 tracking-tighter">
                                PANTHAR<span className="text-orange-500">.</span>
                            </div>
                            <div className="space-y-6">
                                <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                                    Strategic design and high-performance engineering for the next generation of digital products.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Contact</span>
                                    <Link href="mailto:hello@panthar.io" className="text-xl font-cal-sans hover:text-orange-500 transition-colors">
                                        hello@panthar.io
                                    </Link>
                                </div>
                                <div className="flex gap-5 pt-4">
                                    {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                                        <Link key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                                            <Icon className="size-5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col items-end gap-16 lg:mt-10"
                        >
                            <div className="text-right">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-8">Navigation</h3>
                                <ul className="space-y-4">
                                    {[...footerLinks.services.links, ...footerLinks.company.links].slice(0, 6).map((link, i) => (
                                        <li key={i}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-xl font-cal-sans"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                    
                        </motion.div>
                    </div>

                    {/* Bottom Bar */}
                    {/* <motion.div
                        variants={itemVariants}
                        className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                            <p className="text-gray-500 text-sm font-medium">
                                © {new Date().getFullYear()} Panthar. All rights reserved.
                            </p>
                            <div className="flex gap-6 text-xs uppercase tracking-widest text-gray-500">
                                <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                                <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                            </div>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-3 text-white font-bold group/top hover:text-orange-500 transition-colors"
                        >
                            <span className="uppercase tracking-[0.2em] text-[10px]">Back to top</span>
                            <div className="p-3 rounded-full border border-white/10 group-hover:border-orange-500 transition-colors">
                                <ArrowUp className="size-4" />
                            </div>
                        </button>
                    </motion.div> */}
                </motion.div>

                {/* Massive Watermark - Centered & Responsive */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none z-0 overflow-hidden">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 0.1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-[22vw] font-black font-cal-sans text-white leading-none translate-y-[20%] whitespace-nowrap"
                    >
                        PANTHAR
                    </motion.h2>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
