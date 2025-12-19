import React from 'react';
import { StartNowButton } from './StartNowButton';
import { Check, Download, PenTool, DollarSign, Crown } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#030712]">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute top-20 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] animate-pulse delay-700" />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Social Proof Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 mx-auto lg:mx-0">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-5 h-5 rounded-full bg-gray-700 border border-[#030712] flex items-center justify-center text-[10px] overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-400">★★★★★</span>
                                <span className="font-medium">Trusted by 50,000+ creators</span>
                            </div>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                            Start Your Digital Business with
                            <span className="block mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 text-transparent bg-clip-text animate-gradient">
                                185 Million+ PLR Products
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-300">
                            Get instant access to the world's largest library of PLR (Private Label Rights) digital assets.
                            Rebrand, resell, and keep <span className="text-white font-semibold">100% of the profits</span>.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                            <StartNowButton text="Get Instant Access" className="w-full sm:w-auto" />
                            <StartNowButton text="View All Products" variant="secondary" className="w-full sm:w-auto" icon={false} />
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-9 duration-1000 delay-700">
                            {[
                                "One-Time Payment",
                                "No Hidden Fees",
                                "Commercial License Included"
                            ].map((feature) => (
                                <div key={feature} className="flex items-center gap-2 text-gray-400 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-green-500" />
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="relative hidden lg:block h-[600px] w-full animate-in fade-in zoom-in duration-1000 delay-500">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full max-w-lg">
                                <div className="absolute inset-0 bg-pink-500/20 blur-[100px] rounded-full" />
                                <img
                                    src="/images/il_1588xN.6816109940_q9bq.webp"
                                    alt="185 Million Digital Products Bundle"
                                    className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                                />

                                {/* Floating Badges */}
                                <div className="absolute -right-8 top-20 bg-[#0F172A]/90 backdrop-blur-md border border-pink-500/30 p-4 rounded-xl shadow-xl z-20 animate-float-slow">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-pink-500/20 p-2 rounded-lg">
                                            <Crown className="w-6 h-6 text-pink-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-pink-400 font-bold">PREMIUM BUNDLE</p>
                                            <p className="text-white font-bold">185 Million+ Assets</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -left-8 bottom-20 bg-[#0F172A]/90 backdrop-blur-md border border-violet-500/30 p-4 rounded-xl shadow-xl z-20 animate-float-delayed">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-violet-500/20 p-2 rounded-lg">
                                            <Download className="w-6 h-6 text-violet-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-violet-400 font-bold">INSTANT ACCESS</p>
                                            <p className="text-white font-bold">Review & Resell</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Your Digital Journey Section */}
                <div className="mt-24 pt-12 border-t border-white/10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                            </span>
                            How It Works
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Start Your Digital Journey With{' '}
                            <span className="bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
                                Confidence
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Three simple steps to launch your online business today.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-pink-500/20 via-violet-500/20 to-pink-500/20" />

                        {/* Step 1 */}
                        <div className="relative text-center group">
                            <div className="w-24 h-24 mx-auto bg-[#0F172A] rounded-2xl border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-pink-500/50 transition-colors duration-300 shadow-lg shadow-black/50">
                                <div className="absolute inset-0 bg-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Download className="w-10 h-10 text-pink-500" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-[#030712]">1</div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">Choose Product</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Browse our massive library and select high-demand products that fit your niche.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative text-center group">
                            <div className="w-24 h-24 mx-auto bg-[#0F172A] rounded-2xl border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-violet-500/50 transition-colors duration-300 shadow-lg shadow-black/50">
                                <div className="absolute inset-0 bg-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <PenTool className="w-10 h-10 text-violet-500" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-[#030712]">2</div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">Download & Rebrand</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Download the source files and easily customize them with your own branding.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative text-center group">
                            <div className="w-24 h-24 mx-auto bg-[#0F172A] rounded-2xl border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-pink-500/50 transition-colors duration-300 shadow-lg shadow-black/50">
                                <div className="absolute inset-0 bg-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <DollarSign className="w-10 h-10 text-pink-500" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-[#030712]">3</div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">Keep 100% Profits</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Sell the products on your own store or marketplace and keep every penny you earn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};
