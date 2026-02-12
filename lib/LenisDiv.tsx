'use client'
import Lenis from 'lenis'
import React, { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const LenisDiv = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
            duration: 1.2,
            smoothWheel: true,
        });
        lenisRef.current = lenis;

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
            lenisRef.current = null;
        }
    }, [])
    return (
        <>
            {children}
        </>
    )
}

export default LenisDiv
