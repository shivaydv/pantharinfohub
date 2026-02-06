'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface LoadingContextType {
    isLoading: boolean;
    canStartAnimations: boolean;
    setIsLoading: (loading: boolean) => void;
    setCanStartAnimations: (start: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isHome = pathname === '/';

    // Default to false for non-home pages so they show immediately
    const [isLoading, setIsLoading] = useState(isHome);
    const [canStartAnimations, setCanStartAnimations] = useState(!isHome);

    // Reset states when navigating back to home or away from home
    useEffect(() => {
        if (isHome) {
            // If we navigate back to home, we might want to show preloader again?
            // For now, let's keep it consistent.
        } else {
            setIsLoading(false);
            setCanStartAnimations(true);
        }
    }, [pathname, isHome]);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading, canStartAnimations, setCanStartAnimations }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};
