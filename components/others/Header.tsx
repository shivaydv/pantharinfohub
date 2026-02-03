"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { name: "Projects", href: "/projects", description: "Our latest case studies" },
  { name: "Services", href: "/services", description: "Expert AI & Software solutions" },
  { name: "Team", href: "/team", description: "The team behind Panthar" },
  { name: "About", href: "/about", description: "About Panthar" },
];

const Header = ({ startAnimation }: { startAnimation: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Disable scroll when menu is open
  React.useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      body.style.overflow = "";
      body.style.touchAction = "";
    }
    return () => {
      body.style.overflow = "";
      body.style.touchAction = "";
    };
  }, [isOpen]);

  // Emil Kowalski Easing: [0.32, 0.72, 0, 1]
  const transition = { duration: 0.8, ease: [0.32, 0.72, 0, 1] as const };

  const menuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.4, ease: [0.32, 0.72, 0, 1] as const },
        opacity: { duration: 0.2 },
      },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.6, ease: [0.32, 0.72, 0, 1] as const },
        opacity: { duration: 0.4 },
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] as const },
    },
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-100">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={startAnimation ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={transition}
        className={cn(
          "w-full flex flex-col items-center transition-colors duration-300",
          isOpen ? "bg-white" : "bg-transparent",
        )}
      >
        <div className="w-full max-w-7xl grid lg:grid-cols-3 grid-cols-2 items-center px-6 h-16">
          {/* Logo Section - Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                src="/black_logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Simple Links - Center */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[13px] font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side: CTA & Mobile Toggle - Right */}
          <div className="flex items-center justify-end gap-6 text-right">
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full border border-black font-bold text-[12.5px] transition-all duration-300 hover:shadow-lg hover:shadow-black/5 active:scale-95"
              >
                <div className="inline-flex h-9 translate-y-0 items-center justify-center px-6 bg-black text-white transition duration-500 group-hover:-translate-y-[150%]">
                  Contact Us
                </div>
                <div className="absolute inline-flex h-9 w-full translate-y-full items-center justify-center text-black transition duration-500 group-hover:translate-y-0">
                  <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-white transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                  <span className="z-10">Let&apos;s Talk</span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-all active:scale-90"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Integrated Mobile Menu Expansion - Refined Sizes */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full lg:hidden overflow-hidden"
            >
              <div className="px-6 pb-8 flex flex-col gap-6">
                <div className="space-y-3">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] px-2 block pt-4">
                    Navigation
                  </span>
                  <ul className="flex flex-col gap-1">
                    {menuItems.map((item) => (
                      <motion.li key={item.name} variants={itemVariants}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-all"
                        >
                          <div className="flex flex-col">
                            <span className="text-base font-bold text-slate-900">{item.name}</span>
                            <span className="text-[10px] font-medium text-slate-400">
                              {item.description}
                            </span>
                          </div>
                          <ArrowRight
                            size={16}
                            className="text-slate-300 opacity-0 group-hover:opacity-100 transition-all"
                          />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div variants={itemVariants} className="pt-4 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="group relative inline-flex w-full h-14 items-center justify-center overflow-hidden rounded-md border border-black font-bold text-base transition-all duration-300 active:scale-95"
                  >
                    <div className="inline-flex h-14 translate-y-0 items-center justify-center w-full bg-black text-white transition duration-500 group-hover:-translate-y-[150%]">
                      Contact Us
                    </div>
                    <div className="absolute inline-flex h-14 w-full translate-y-full items-center justify-center text-black transition duration-500 group-hover:translate-y-0">
                      <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-white transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                      <span className="z-10">Let&apos;s Talk</span>
                    </div>
                  </Link>
                  {/* <Link href="/login" className="text-center text-[13px] font-bold text-slate-500 hover:text-slate-900 py-2">Account Login</Link> */}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Global Backdrop for Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-white/40 backdrop-blur-md -z-10 lg:hidden"
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export { Header };
