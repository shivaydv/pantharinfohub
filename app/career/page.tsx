"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import CareerForm from "@/components/others/CareerForm"
import MagneticButton from "@/components/motion/MagneticButton"
import { CareerRoles } from "@/lib/data"
import { motion } from "motion/react"
import { ArrowUpRight, Clock, MapPin, Sparkles } from "lucide-react"

const CareerPage = () => {
    const yAnimation = {
        initial: { y: "40px", opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
    };

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <main className="flex flex-col w-full min-h-screen pt-[15vh] pb-36 px-6 bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto w-full flex flex-col gap-20">

                {/* Hero Section */}
                <div className="flex flex-col gap-8 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 w-fit"
                    >
                        <Sparkles size={12} className="text-orange-500" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Careers</span>
                    </motion.div>

                    <div className="space-y-4">
                        <div className="overflow-visible">
                            <motion.h1
                                initial="initial"
                                animate="animate"
                                variants={yAnimation}
                                className="text-5xl sm:text-[4rem] lg:text-[4.5rem] font-bold leading-[0.9] tracking-tighter text-slate-950 uppercase"
                                style={{ fontFamily: 'var(--cal-sans), sans-serif' }}
                            >
                                Build with <span className="text-orange-500">Purpose</span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg sm:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed"
                        >
                            Come for the opportunity, stay for the warmth, and grow in ways you never imagined. Your POTENTIAL is our MISSION.
                        </motion.p>
                    </div>
                </div>

                {/* Job Listings */}
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex flex-col w-full"
                >
                    {CareerRoles.map((career, i) => (
                        <Dialog key={i}>
                            <DialogTrigger asChild>
                                <motion.div
                                    variants={{
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 }
                                    }}
                                    className="group flex flex-col sm:flex-row sm:items-center justify-between py-10 border-b border-slate-100 cursor-pointer hover:px-4 transition-all duration-500 relative"
                                >
                                    {/* Hover Background */}
                                    <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-3xl" />

                                    <div className="flex flex-col gap-6">
                                        <div className="space-y-2">
                                            <h3 className="text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight group-hover:text-orange-500 transition-colors" style={{ fontFamily: 'var(--font-cal-sans)' }}>
                                                {career.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm sm:text-base max-w-md font-medium">
                                                {career.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                                                <MapPin className="size-3.5 text-orange-500" />
                                                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">{career.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                                                <Clock className="size-3.5 text-slate-400" />
                                                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">{career.type}</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 flex-wrap">
                                            {career.tag.map((tag) => (
                                                <span key={tag} className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md uppercase tracking-widest">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="sm:flex hidden mt-6 sm:mt-0">
                                        <MagneticButton>
                                            <div className="bg-slate-950 text-white w-32 h-32 rounded-full flex flex-col items-center justify-center gap-1 group-hover:bg-orange-500 transition-colors duration-500 group-hover:scale-110">
                                                <ArrowUpRight className="size-6" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Apply</span>
                                            </div>
                                        </MagneticButton>
                                    </div>

                                    {/* Mobile Apply Label */}
                                    <div className="sm:hidden mt-6 flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-xs">
                                        Apply Now <ArrowUpRight className="size-4" />
                                    </div>
                                </motion.div>
                            </DialogTrigger>
                            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[500px] p-0 overflow-hidden border-none rounded-[2rem] shadow-2xl">
                                <div className="p-8 sm:p-10 bg-white">
                                    <DialogHeader className="mb-8">
                                        <DialogTitle className="text-3xl font-bold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-cal-sans)' }}>
                                            Apply for <span className="text-orange-500 underline decoration-orange-500/20 underline-offset-8">{career.title}</span>
                                        </DialogTitle>
                                        <p className="text-slate-500 mt-2 font-medium italic">Join the next generation of innovators at Panthar.</p>
                                    </DialogHeader>
                                    <CareerForm career={career} />
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </motion.div>

                {/* Culture Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-10 p-12 bg-slate-950 rounded-[3rem] text-center space-y-6"
                >
                    <h2 className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-cal-sans)' }}>Don't see a fit?</h2>
                    <p className="text-slate-400 max-w-lg mx-auto font-medium leading-relaxed">
                        We're always looking for brilliant minds. Send your resume to <span className="text-orange-500">connect@pantharinfohub.com</span> and we'll keep you on our radar.
                    </p>
                </motion.div>
            </div>
        </main>
    )
}

export default CareerPage;
