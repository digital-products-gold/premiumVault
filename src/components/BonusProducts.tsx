import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ProductCard } from './ProductCard';

export const BonusProducts: React.FC = () => {
    const bonuses = [
        {
            title: "Sales Funnel Templates",
            description: "High-converting sales pages, upsell flows, and checkout pages. Just plug and play.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a1f504ae1348a10467.jpeg",
            salePrice: "Free Bonus",
            price: "$997",
            badge: "Bonus #1"
        },
        {
            title: "Email Marketing Sequences",
            description: "Pre-written email campaigns for welcome series, abandoned cart, and product launches.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a139379aa8a101867c.jpeg",
            salePrice: "Free Bonus",
            price: "$497",
            badge: "Bonus #2"
        },
        {
            title: "Social Media Toolkit",
            description: "Content calendars, hashtag strategies, and engagement scripts for all platforms.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a19044f77431b21a60.jpeg",
            salePrice: "Free Bonus",
            price: "$297",
            badge: "Bonus #3"
        },
        {
            title: "Ads Templates",
            description: "Tested ad copy and creative templates for Facebook, Instagram, and Google Ads.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a1019de023ba66bae5.jpeg",
            salePrice: "Free Bonus",
            price: "$497",
            badge: "Bonus #4"
        },
        {
            title: "Launch Checklist",
            description: "Step-by-step roadmap to launching your digital product business in 30 days.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a19044f77431b21a60.jpeg",
            salePrice: "Free Bonus",
            price: "$197",
            badge: "Bonus #5"
        },
        {
            title: "Branding Guide",
            description: "How to build a memorable brand identity that attracts premium customers.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a1019de023ba66bae5.jpeg",
            salePrice: "Free Bonus",
            price: "$197",
            badge: "Bonus #6"
        },
        {
            title: "Reseller Agreements",
            description: "Legal templates to protect your business and define rights for your customers.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a139379aa8a101867c.jpeg",
            salePrice: "Free Bonus",
            price: "$297",
            badge: "Bonus #7"
        },
        {
            title: "Copywriting Guide",
            description: "Psychological triggers and formulas to write words that sell.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a1f504ae1348a10467.jpeg",
            salePrice: "Free Bonus",
            price: "$297",
            badge: "Bonus #8"
        },
        {
            title: "Pricing Strategy",
            description: "How to price your products for maximum profit while keeping customers happy.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a19044f77431b21a60.jpeg",
            salePrice: "Free Bonus",
            price: "$147",
            badge: "Bonus #9"
        },
        {
            title: "SEO Guide",
            description: "Drive free organic traffic to your store with search engine optimization secrets.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a1019de023ba66bae5.jpeg",
            salePrice: "Free Bonus",
            price: "$197",
            badge: "Bonus #10"
        },
        {
            title: "Upsell Playbook",
            description: "Strategies to increase your average order value with upsells and cross-sells.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a139379aa8a101867c.jpeg",
            salePrice: "Free Bonus",
            price: "$297",
            badge: "Bonus #11"
        },
        {
            title: "Affiliate Starter Kit",
            description: "How to recruit and manage affiliates to promote your products for you.",
            image: "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67ef50a1f504ae1348a10467.jpeg",
            salePrice: "Free Bonus",
            price: "$297",
            badge: "Bonus #12"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-[#030712] to-[#0f172a] relative border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6">
                <SectionHeading
                    badge="Limited Time Offer"
                    title="Oh Wait... We Almost Forgot!"
                    highlight="$5,364 Worth of Premium Bonuses"
                    subtitle="Get these exclusive bonuses for FREE when you join today."
                />

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {bonuses.map((bonus, i) => (
                        <ProductCard key={i} {...bonus} />
                    ))}
                </div>
            </div>
        </section>
    );
};
