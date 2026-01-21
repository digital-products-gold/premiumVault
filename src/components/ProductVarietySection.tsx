import React from 'react';
import { motion } from 'framer-motion';
import {
    Database,
    BookOpen,
    Headphones,
    Check,
    X,
    ShieldCheck,
    FileSpreadsheet,
    Video,
    ShoppingBag,
    Printer,
    Bot
} from 'lucide-react';
import { StartNowButton } from './StartNowButton';
import { SectionHeading } from './SectionHeading';

const assetCategories = [
    {
        title: "Notion Systems",
        description: "Second Brains, Finance Trackers, & Life OS dashboards that sell for $50+.",
        icon: <Database className="w-6 h-6 text-blue-400" />,
        color: "blue"
    },
    {
        title: "Excel Business Vault",
        description: "Professional spreadsheets for finance, project management, and business tracking.",
        icon: <FileSpreadsheet className="w-6 h-6 text-green-400" />,
        color: "green"
    },
    {
        title: "Aesthetic Planners",
        description: "High-DPI digital planners designed for iPad & GoodNotes. Etsy bestsellers.",
        icon: <BookOpen className="w-6 h-6 text-pink-400" />,
        color: "pink"
    },
    {
        title: "Premium Audiobooks",
        description: "Self-help & business audio content. A massive untapped market.",
        icon: <Headphones className="w-6 h-6 text-amber-400" />,
        color: "amber"
    },
    {
        title: "Viral Video Assets",
        description: "Short-form content for TikTok & Reels. Explode your reach.",
        icon: <Video className="w-6 h-6 text-red-400" />,
        color: "red"
    },
    {
        title: "Print-on-Demand Empire",
        description: "T-Shirt designs & Anime art ready for Merch by Amazon.",
        icon: <ShoppingBag className="w-6 h-6 text-purple-400" />,
        color: "purple"
    },
    {
        title: "3D Printing Mastery",
        description: "High-quality STL files for figures, jewelry & collectibles.",
        icon: <Printer className="w-6 h-6 text-cyan-400" />,
        color: "cyan"
    },
    {
        title: "AI & Automation",
        description: "N8N workflows & prompts to automate your business.",
        icon: <Bot className="w-6 h-6 text-indigo-400" />,
        color: "indigo"
    }
];

export const ProductVarietySection: React.FC = () => {
    return (
        <section className="relative py-24 bg-[#020617] overflow-hidden">
            {/* Engineering Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#020617] to-transparent z-10" />

            <div className="container mx-auto px-4 sm:px-6 relative z-20">

                {/* 1. The "Anti-Junk" Statement */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 mb-6 backdrop-blur-sm">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Quality Guarantee</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
                        Most PLR Bundles Are <span className="text-red-500 line-through decoration-red-500/50">Digital Landfills.</span><br />
                        <span className="text-white">This Is a Vault.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We know you've been burned by "10,000 files" that turned out to be dusty PDFs from 2005.
                        We deleted the junk so you don't have to. These are <span className="text-white font-medium">products</span>, not just files.
                    </p>
                </div>

                {/* 2. The Comparison (Subtle) */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                    {/* The "Others" Card */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/5 grayscale opacity-70">
                        <h3 className="text-lg font-bold text-gray-400 mb-4 flex items-center gap-2">
                            <X className="w-5 h-5 text-red-500" />
                            The "Bargain Bin" PLR
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-gray-500 text-sm">
                                <X className="w-4 h-4 mt-0.5 shrink-0" /> Outdated marketing strategies from 2012
                            </li>
                            <li className="flex gap-3 text-gray-500 text-sm">
                                <X className="w-4 h-4 mt-0.5 shrink-0" /> Low-resolution, pixelated covers
                            </li>
                            <li className="flex gap-3 text-gray-500 text-sm">
                                <X className="w-4 h-4 mt-0.5 shrink-0" /> Text-heavy Word documents nobody reads
                            </li>
                        </ul>
                    </div>

                    {/* The "Vault" Card */}
                    <div className="relative p-8 rounded-2xl bg-zinc-900 border border-amber-500/20 shadow-2xl">
                        <div className="absolute -top-3 -right-3 bg-amber-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            VERIFIED FOR 2025
                        </div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            The Premium Vault
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-gray-300 text-sm">
                                <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /> <span className="text-white font-medium">Notion & Software</span> (High Value)
                            </li>
                            <li className="flex gap-3 text-gray-300 text-sm">
                                <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /> <span className="text-white font-medium">Modern Aesthetic</span> (Insta-Ready)
                            </li>
                            <li className="flex gap-3 text-gray-300 text-sm">
                                <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /> <span className="text-white font-medium">Video-First Content</span> (Reels/TikTok)
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 3. The Digital Assets Grid */}
                <div className="mb-24">
                    <SectionHeading
                        title="Real Business Products"
                        highlight="Not Just Ebooks"
                        subtitle="Diverse income streams waiting to be unlocked."
                        align="center"
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
                        {assetCategories.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-[#0f0f11] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all hover:-translate-y-1"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${item.color}-500/10 border border-${item.color}-500/20`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 4. The ROI Calculator (The "One Sale" Rule) */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-[#0a0a0a] border border-white/10 shadow-2xl">
                        {/* Background Splashes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px]" />

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-8 sm:p-12">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">The "One Sale" Rule</h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    We've priced this vault so low that you literally only need to sell <strong className="text-white">ONE</strong> planner or <strong className="text-white">ONE</strong> course to break even.
                                    <br /><br />
                                    Everything after that? <span className="text-green-400 font-bold underline decoration-green-500/30 underline-offset-4">100% Pure Profit.</span>
                                </p>
                                <StartNowButton text="Start Profiting Now" className="w-full sm:w-auto" href="#pricing" />
                            </div>

                            {/* Visual Math */}
                            <div className="bg-[#050505] rounded-xl p-6 border border-white/5 shadow-inner">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-gray-400 text-sm">
                                        <span>Cost of Vault</span>
                                        <span className="text-red-400">-$19.00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-white font-medium">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                            Sell 1 Planner
                                        </div>
                                        <span className="text-green-400">+$27.00</span>
                                    </div>
                                    <div className="h-px bg-white/10" />
                                    <div className="flex justify-between items-center">
                                        <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">Net Profit</span>
                                        <span className="text-2xl font-bold text-white">+$8.00</span>
                                    </div>
                                    <div className="text-center mt-4">
                                        <p className="text-xs text-gray-500 bg-white/5 py-2 rounded-lg">
                                            Congratulations! You are now profitable.
                                            <br />
                                            <span className="text-gray-400">Still have 9,999+ products left to sell.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
