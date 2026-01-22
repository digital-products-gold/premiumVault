import { useEffect, useRef } from 'react';

interface UseVideoLazyLoadOptions {
    rootMargin?: string;
    threshold?: number;
}

/**
 * Custom hook for lazy loading videos with viewport-based autoplay
 * Only loads and plays videos when they're near the viewport
 */
export const useVideoLazyLoad = (options: UseVideoLazyLoadOptions = {}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { rootMargin = '200px', threshold = 0.1 } = options;

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Load video if src is not set (data-src pattern)
                        const dataSrc = video.getAttribute('data-src');
                        if (dataSrc && !video.src) {
                            video.src = dataSrc;
                        }

                        // Try to play when visible
                        video.play().catch(() => {
                            // Autoplay prevented, user interaction needed
                            // This is expected on some browsers
                        });
                    } else {
                        // Pause when out of viewport to save resources
                        video.pause();
                    }
                });
            },
            {
                rootMargin,
                threshold,
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, [rootMargin, threshold]);

    return videoRef;
};
