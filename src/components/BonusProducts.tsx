import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ProductCard } from './ProductCard';

export const BonusProducts: React.FC = () => {
    const bonuses = [
        {
            title: "Top 300 AI Tools",
            description: "The ultimate collection of AI tools to automate your business and 10x your productivity.",
            image: "/bonus_ai_tools.png",
            salePrice: "Free Bonus",
            price: "$197",
            badge: "Bonus #1"
        },
        {
            title: "Marketing Ideas Pack",
            description: "Never run out of marketing strategies again. Creative ideas to skyrocket your reach.",
            image: "/bonus_marketing_ideas.png",
            salePrice: "Free Bonus",
            price: "$97",
            badge: "Bonus #2"
        },
        {
            title: "Business Plan Pack",
            description: "Professional business plan templates to map out your road to specific financial goals.",
            image: "/bonus_business_plan.png",
            salePrice: "Free Bonus",
            price: "$297",
            badge: "Bonus #3"
        },
        {
            title: "Make Money Online Pack",
            description: "Proven strategies and blueprints for generating multiple streams of passive income online.",
            image: "/bonus_make_money_online.png",
            salePrice: "Free Bonus",
            price: "$497",
            badge: "Bonus #4"
        },
        {
            title: "750+ Traffic Boosting Ideas",
            description: "A massive vault of traffic generation secrets to flood your website with eager buyers.",
            image: "/bonus_traffic_boosting.png",
            salePrice: "Free Bonus",
            price: "$197",
            badge: "Bonus #5"
        },
        {
            title: "100 Awesome Sales Ideas",
            description: "Innovative sales tactics to close more deals and increase your conversion rates instantly.",
            image: "/bonus_sales_ideas.png",
            salePrice: "Free Bonus",
            price: "$147",
            badge: "Bonus #6"
        },
        {
            title: "1,000 Sales Copy Swipes",
            description: "High-converting copy templates for emails, ads, and sales pages. Fill-in-the-blank simple.",
            image: "/bonus_sales_copy_swipes.png",
            salePrice: "Free Bonus",
            price: "$397",
            badge: "Bonus #7"
        },
        {
            title: "Email Templates Pack",
            description: "Professionally written email sequences that build trust and sell your products on autopilot.",
            image: "/bonus_email_templates.png",
            salePrice: "Free Bonus",
            price: "$197",
            badge: "Bonus #8"
        },
        {
            title: "Coloring Books & Pages",
            description: "A huge library of beautiful coloring pages. Perfect for entering the booming low-content book market.",
            image: "/bonus_coloring_books.png",
            salePrice: "Free Bonus",
            price: "$97",
            badge: "Bonus #9"
        },

    ];

    return (
        <section className="py-20 bg-[#0f172a] relative border-t border-white/5">
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
