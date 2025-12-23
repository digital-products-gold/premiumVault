import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { cn } from '../utils/cn';

interface ProductCardProps {
    image: string;
    title: string;
    price?: string;
    salePrice?: string;
    description: string;
    badge?: string;
    rating?: number;
    reviews?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    price,
    salePrice,
    description,
    badge,
    rating = 5,
    reviews = 120
}) => {
    return (
        <div className="group relative bg-[#0f172a] rounded-2xl border border-white/5 overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col h-full">
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden bg-gray-900 relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                {badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                        {badge}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("w-3 h-3 text-amber-400 fill-current", i >= rating && "text-gray-700")} />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">({reviews})</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors font-heading">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    {(price || salePrice) && (
                        <>
                            <div className="flex flex-col">
                                {price && <span className="text-gray-500 text-xs line-through">{price}</span>}
                                <span className="text-amber-400 font-bold text-lg">{salePrice || 'Free Updates'}</span>
                            </div>

                            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300">
                                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
