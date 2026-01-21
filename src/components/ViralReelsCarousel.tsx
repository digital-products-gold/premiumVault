import React from 'react';

const reels = [
    { src: "/images/products/reels/2000_Luxury_Hotel_Reels_MP4_zk8hbm.mp4", thumb: "/images/products/reels/2000_Luxury_Hotel_Reels_MP4_zk8hbm_thumb.webp" },
    { src: "/images/products/reels/di4k8pjihv7a3a21hru6.mp4", thumb: "/images/products/reels/di4k8pjihv7a3a21hru6_thumb.webp" },
    { src: "/images/products/reels/dtws2szoiecjv25soryx.mp4", thumb: "/images/products/reels/dtws2szoiecjv25soryx_thumb.webp" },
    { src: "/images/products/reels/intro_mld3as.mp4", thumb: "/images/products/reels/intro_mld3as_thumb.webp" },
    { src: "/images/products/reels/mc7jrczvqdzr0mmborg6.mp4", thumb: "/images/products/reels/mc7jrczvqdzr0mmborg6_thumb.webp" },
    { src: "/images/products/reels/new_video_for_viral_bundle_x0jkdn.mp4", thumb: "/images/products/reels/new_video_for_viral_bundle_x0jkdn_thumb.webp" },
    { src: "/images/products/reels/sowar_satisefying.pdf_htv71z.mp4", thumb: "/images/products/reels/sowar_satisefying.pdf_htv71z_thumb.webp" }
];

export const ViralReelsCarousel: React.FC = () => {
    return (
        <section id="showcase" className="bg-[#020617] pb-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
                    <div>
                        <h4 className="text-white font-bold text-2xl">Sneak Peek: Inside the Collection</h4>
                        <p className="text-gray-400 text-sm mt-1">A tiny glimpse of the 200,000+ premium reels included</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs text-red-400 font-mono font-bold">LIVE PREVIEW</span>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex gap-4 animate-scroll-left hover:[animation-play-state:paused] w-max">
                        {[...reels, ...reels, ...reels].map((reel, i) => (
                            <div key={i} className="flex-shrink-0 w-[140px] sm:w-[160px]">
                                <div className="aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-black relative group shadow-lg shadow-black/50 hover:border-amber-500/30 transition-colors">
                                    <video
                                        src={reel.src}
                                        poster={reel.thumb}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="auto"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
