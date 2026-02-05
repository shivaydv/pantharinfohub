"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useRef } from "react"

export default function MagneticButton({ className, children }: { className?: string, children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)

        ref.current.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`
    }

    const resetPosition = () => {
        if (!ref.current) return;
        ref.current.style.transform = `translate(0px, 0px)`
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={resetPosition}
            className={cn("cursor-pointer", className)}
            transition={{ type: "spring", mass: 0.75, damping: 8, stiffness: 100 }}
        >
            {children}
        </motion.div>
    )
}
