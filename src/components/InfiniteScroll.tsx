import React from 'react';

const ProductItem = ({ image, title, description }: { image: string, title: string, description: string }) => (
    <div className="w-[280px] sm:w-[350px] flex-shrink-0 group cursor-pointer">
        <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 h-full">
            <div className="aspect-video relative overflow-hidden bg-gray-900/50">
                <img src={image} alt={title} className="absolute inset-0 w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            </div>
            <div className="p-4 bg-gray-900/90 backdrop-blur-sm flex flex-col h-[140px]">
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors mb-2">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-4">{description}</p>
            </div>
        </div>
    </div>
);

import { products } from '../data/products';

export const InfiniteScroll: React.FC = () => {

    return (
        <section className="py-20 bg-[#030712] overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl font-bold text-white">
                    Ready-to-Sell <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 text-transparent bg-clip-text">200 Million Digital Products and Assets</span>
                </h2>
            </div>

            {/* Row 1 - Left */}
            <div className="mb-8 relative w-full overflow-hidden">
                <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused] w-max">
                    {[...products, ...products].map((p, i) => (
                        <ProductItem key={`row1-${i}`} image={p.image} title={p.title} description={p.description} />
                    ))}
                </div>
            </div>

            {/* Row 2 - Right */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-6 animate-scroll-right hover:[animation-play-state:paused] w-max">
                    {[...products.reverse(), ...products].map((p, i) => (
                        <ProductItem key={`row2-${i}`} image={p.image} title={p.title} description={p.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};
