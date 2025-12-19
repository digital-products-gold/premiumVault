import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ProductCard } from './ProductCard';
import { StartNowButton } from './StartNowButton';

export const ProductShowcase: React.FC = () => {
    const products = [
        {
            title: "All-In-One Bundle",
            description: "Get every single template, course, and asset in our library. The ultimate starter pack for digital entrepreneurs.",
            image: "/images/il_1588xN.6816109940_q9bq.webp",
            price: "$9,997",
            salePrice: "$197",
            badge: "Best Value"
        },
        {
            title: "Notion Templates",
            description: "Professional Notion dashboards for productivity, finance, and life management. Highly customizable.",
            image: "/images/il_1588xN.7134082224_rakg.webp",
            price: "$497",
            salePrice: "$47"
        },
        {
            title: "Canva Templates",
            description: "Beautifully designed social media kits, presentations, and marketing materials ready to edit.",
            image: "/images/il_1588xN.7134082166_7rv6.webp",
            price: "$297",
            salePrice: "$37"
        },
        {
            title: "Video Courses",
            description: "Full white-label video courses you can sell as your own. Includes masterclasses and tutorials.",
            image: "/images/il_1588xN.7134082228_23pg.webp",
            price: "$997",
            salePrice: "$97"
        },
        {
            title: "Reels & TikToks",
            description: "Viral short-form video content templates. Hook libraries, editing assets, and more.",
            image: "/images/il_1588xN.6864099581_412w.webp",
            price: "$197",
            salePrice: "$27"
        },
        {
            title: "ChatGPT Prompts",
            description: "Advanced prompt engineering libraries for marketing, coding, and business strategy.",
            image: "/images/il_1588xN.6816109942_81fb.webp",
            price: "$147",
            salePrice: "$17"
        },
        {
            title: "Sales Funnels",
            description: "High-converting ClickFunnels and System.e templates. Plug-and-play sales machines.",
            image: "/images/il_1588xN.7134082718_5cvk.webp",
            price: "$397",
            salePrice: "$47"
        },
        {
            title: "T-Shirt Designs",
            description: "Trendy vector graphics for print-on-demand businesses. Merch by Amazon ready.",
            image: "/images/il_1588xN.7134082228_23pg.webp",
            price: "$197",
            salePrice: "$27"
        },
        {
            title: "Ebooks",
            description: "Professionally written non-fiction books in profitable niches. Full edit rights.",
            image: "/images/il_1588xN.6816109888_xbiq.webp",
            price: "$147",
            salePrice: "$17"
        },
        {
            title: "Royalty Free Music",
            description: "Studio-quality audio tracks for videos, podcasts, and commercials.",
            image: "/images/il_1588xN.6816109892_tv9a.webp",
            price: "$297",
            salePrice: "$37"
        },
        {
            title: "HD Stock Videos",
            description: "Cinematic 4K stock footage for content creators and video editors.",
            image: "/images/il_1588xN.6816109942_81fb.webp",
            price: "$497",
            salePrice: "$47"
        },
        {
            title: "Excel Templates",
            description: "Complex spreadsheets and financial models turned into simple user-friendly tools.",
            image: "/images/il_1588xN.6864099581_412w.webp",
            price: "$197",
            salePrice: "$27"
        },
        {
            title: "Presentation Packs",
            description: "PowerPoint and Keynote slide decks for pitches, webinars, and lectures.",
            image: "/images/il_1588xN.7054134176_nl4u.webp",
            price: "$147",
            salePrice: "$17"
        },
        {
            title: "Kids Coloring Books",
            description: "Ready-to-print coloring pages and activity books for the booming KDP market.",
            image: "/images/il_1588xN.7133473609_r1nz.webp",
            price: "$97",
            salePrice: "$17"
        },
        {
            title: "Adobe Assets",
            description: "Premium Brushes, Gradients, and Presets for Photoshop, Illustrator, and Lightroom.",
            image: "/images/il_1588xN.7134082166_7rv6.webp",
            price: "$197",
            salePrice: "$27"
        },
        {
            title: "Automations",
            description: "Zapier workflows and Python scripts to automate boring business tasks.",
            image: "/images/il_1588xN.7134082224_rakg.webp",
            price: "$297",
            salePrice: "$37"
        },
        {
            title: "Faceless Blueprints",
            description: "Complete guides to building anonymous cash cow channels and brands.",
            image: "/images/il_1588xN.6816109942_81fb.webp",
            price: "$197",
            salePrice: "$27"
        }
    ];

    return (
        <section id="products" className="py-20 lg:py-32 bg-[#030712] relative">
            <div className="container mx-auto px-4 sm:px-6">
                <SectionHeading
                    badge="Ready To Sell"
                    title="Our Top Selling"
                    highlight="Products"
                    subtitle="Choose from our most popular categories and start your digital product shop today."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <StartNowButton text="View All Products" className="w-full sm:w-auto" />
                </div>
            </div>
        </section>
    );
};
