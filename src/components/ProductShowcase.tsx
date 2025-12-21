import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ProductCard } from './ProductCard';
import { StartNowButton } from './StartNowButton';
import { products } from '../data/products';

export const ProductShowcase: React.FC = () => {

    return (
        <section id="products" className="py-20 lg:py-32 bg-[#030712] relative">
            <div className="container mx-auto px-4 sm:px-6">
                <SectionHeading
                    badge="Massive Library"
                    title="Everything"
                    highlight="Included"
                    subtitle="You don't need to choose. You get full access to every single category listed below."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <StartNowButton text="Get Full Access Now" className="w-full sm:w-auto" />
                </div>
            </div>
        </section>
    );
};
