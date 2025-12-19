import React from 'react';

const ProductItem = ({ image, title, description }: { image: string, title: string, description: string }) => (
    <div className="w-[280px] sm:w-[350px] flex-shrink-0 group cursor-pointer">
        <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 h-full">
            <div className="aspect-video relative overflow-hidden bg-gray-900/50">
                <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            </div>
            <div className="p-4 bg-gray-900/90 backdrop-blur-sm flex flex-col h-[140px]">
                <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors mb-2">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-4">{description}</p>
            </div>
        </div>
    </div>
);

export const InfiniteScroll: React.FC = () => {
    const products = [
        {
            title: "Automations",
            img: "/images/il_1588xN.7134082224_rakg.webp",
            desc: "Ready-made automation scripts and workflows for business efficiency. Includes Zapier templates, Python scripts, and no-code automation solutions for various platforms."
        },
        {
            title: "Adobe Suite Assets",
            img: "/images/il_1588xN.7134082166_7rv6.webp",
            desc: "Premium design assets for the entire Adobe Creative Suite. Includes templates, actions, brushes, patterns, and effects for professional graphic design projects."
        },
        {
            title: "Kids Coloring Books",
            img: "/images/il_1588xN.7133473609_r1nz.webp",
            desc: "Educational coloring pages and activity books for children of all ages. Includes themed collections, educational worksheets, puzzles, and developmental activities."
        },
        {
            title: "Presentations Pack",
            img: "/images/il_1588xN.7054134176_nl4u.webp",
            desc: "Professional PowerPoint and Keynote templates with modern designs. Includes business pitches, educational content, marketing presentations, and infographic slides."
        },
        {
            title: "Excel Templates",
            img: "/images/il_1588xN.6864099581_412w.webp",
            desc: "Comprehensive business and financial spreadsheet templates. Includes budgeting tools, project management trackers, inventory systems, and financial analysis dashboards."
        },
        {
            title: "HD Stock Videos",
            img: "/images/il_1588xN.6816109942_81fb.webp",
            desc: "High-quality 4K stock footage for commercial projects. Includes business, lifestyle, nature, and urban scenes with professional color grading and editing options."
        },
        {
            title: "Royalty Free Music",
            img: "/images/il_1588xN.6816109892_tv9a.webp",
            desc: "Professional music tracks for commercial use in videos, podcasts, and advertising. Various genres, moods, and lengths with full licensing documentation included."
        },
        {
            title: "Ebooks",
            img: "/images/il_1588xN.6816109888_xbiq.webp",
            desc: "Ready-to-sell ebooks on trending topics with full PLR rights. Includes self-help, business, health, and lifestyle titles with professional formatting and cover designs."
        },
        {
            title: "T-Shirt Designs",
            img: "/images/il_1588xN.7134082228_23pg.webp",
            desc: "Trendy and customizable t-shirt designs for print-on-demand businesses. Includes niche-specific designs, seasonal collections, and typography-based artwork in various styles."
        },
        {
            title: "Sales Funnels",
            img: "/images/il_1588xN.7134082718_5cvk.webp",
            desc: "High-converting sales funnel templates for multiple niches. Complete with landing pages, email sequences, upsell pages, and checkout optimization strategies."
        }
    ];

    return (
        <section className="py-20 bg-[#030712] overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl font-bold text-white">
                    Ready-to-Sell <span className="bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">185 Million+ Digital Products</span>
                </h2>
            </div>

            {/* Row 1 - Left */}
            <div className="mb-8 relative w-full overflow-hidden">
                <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused] w-max">
                    {[...products, ...products].map((p, i) => (
                        <ProductItem key={`row1-${i}`} image={p.img} title={p.title} description={p.desc} />
                    ))}
                </div>
            </div>

            {/* Row 2 - Right */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-6 animate-scroll-right hover:[animation-play-state:paused] w-max">
                    {[...products.reverse(), ...products].map((p, i) => (
                        <ProductItem key={`row2-${i}`} image={p.img} title={p.title} description={p.desc} />
                    ))}
                </div>
            </div>
        </section>
    );
};
