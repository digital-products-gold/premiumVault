import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ProductCard } from './ProductCard';
import { getAssetPath } from '../utils/assets';

export const BonusProducts: React.FC = () => {
    const bonuses = [
        {
            title: "Premium Supplier List",
            description: "Direct access to our vetted list of premium suppliers for your digital business needs.",
            image: getAssetPath("/images/bonus/premiumsupplierlist.webp"),
            salePrice: "Free Bonus",
            price: "$197",
            badge: "Bonus #1"
        },
        {
            title: "1000 Digital Product Ideas",
            description: "Never run out of inspiration with this massive list of profitable digital product ideas.",
            image: getAssetPath("/images/bonus/1000 Digital Product Ideas.webp"),
            salePrice: "Free Bonus",
            price: "$97",
            badge: "Bonus #2"
        },
        {
            title: "Money Mindset Journal",
            description: "Rewire your brain for success and abundance with this powerful guided journal.",
            image: getAssetPath("/images/bonus/moneymindsetjournal.webp"),
            salePrice: "Free Bonus",
            price: "$67",
            badge: "Bonus #3"
        },
        {
            title: "Digital Product Planner",
            description: "Map out your entire digital product creation process from concept to launch.",
            image: getAssetPath("/images/bonus/Digital Product Planner.webp"),
            salePrice: "Free Bonus",
            price: "$127",
            badge: "Bonus #4"
        },
        {
            title: "Online Shop Planner",
            description: "Organize every aspect of your online store for maximum efficiency and profit.",
            image: getAssetPath("/images/bonus/Online Shop Planner.webp"),
            salePrice: "Free Bonus",
            price: "$147",
            badge: "Bonus #5"
        },
        {
            title: "Fitness & Weight Loss Tracker",
            description: "Track your health journey alongside your business growth with this comprehensive tracker.",
            image: getAssetPath("/images/bonus/Fitness & Weight Loss Tracker.webp"),
            salePrice: "Free Bonus",
            price: "$47",
            badge: "Bonus #6"
        },
    ];

    return (
        <section className="py-20 bg-[#0f172a] relative border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6">
                <SectionHeading
                    badge="Limited Time Offer"
                    title="Oh Wait... We Almost Forgot!"
                    highlight="$682 Worth of Premium Bonuses"
                    subtitle="Get these exclusive bonuses for FREE when you join today."
                />

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {bonuses.map((bonus, i) => (
                        <ProductCard key={i} {...bonus} showAction={false} />
                    ))}
                </div>
            </div>
        </section>
    );
};
