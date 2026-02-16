export const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => {
            console.warn(`Failed to preload image: ${src}`);
            resolve(); // Still resolve to not block the preloader forever
        };
    });
};

export const preloadVideo = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = src;
        video.preload = 'auto';
        video.oncanplaythrough = () => resolve();
        video.onerror = () => {
            console.warn(`Failed to preload video: ${src}`);
            resolve();
        };
        video.load(); // Trigger loading immediately
        // Shorter timeout — video continues loading in background after preloader exits
        setTimeout(resolve, 1500);
    });
};

export const preloadAssets = async (assets: string[]) => {
    const promises = assets.map(src => {
        if (src.endsWith('.mp4') || src.endsWith('.webm')) {
            return preloadVideo(src);
        }
        return preloadImage(src);
    });
    return Promise.all(promises);
};
