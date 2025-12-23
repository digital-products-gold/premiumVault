import React from 'react';
import { StartNowButton } from './StartNowButton';
import { Check, Download, PenTool, DollarSign, Crown } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020617]">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
                    {/* Gold Glow */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" />
                    {/* Blue Glow */}
                    <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
                </div>
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Social Proof Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-sm text-blue-200 mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 mx-auto lg:mx-0">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-5 h-5 rounded-full bg-gray-700 border border-[#020617] flex items-center justify-center text-[10px] overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-amber-400">★★★★★</span>
                                <span className="font-medium text-gray-300">Trusted by 50,000+ creators</span>
                            </div>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 font-heading">
                            Start Your Digital Business with
                            <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 text-transparent bg-clip-text animate-gradient pb-2">
                                185 Million+ Assets
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-7 font-body">
                            Get instant access to the world's largest <span className="text-white font-semibold">Premium Vault</span> of PLR products.
                            Rebrand, resell, and keep <span className="text-amber-400 font-semibold">100% of the profits</span>.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                            <StartNowButton text="Get Instant Access" className="w-full sm:w-auto" />
                            <StartNowButton text="View The Vault" variant="secondary" className="w-full sm:w-auto bg-[#0f172a] border-gray-800 hover:border-amber-500/50 hover:bg-[#1e293b]" icon={false} />
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-9 duration-1000 delay-700">
                            {[
                                "One-Time Payment",
                                "No Hidden Fees",
                                "Commercial License"
                            ].map((feature) => (
                                <div key={feature} className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-blue-400" />
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
                                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
                                <img
                                    src="/hero_vault.png"
                                    alt="Premium Digital Asset Vault"
                                    className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 object-contain rounded-2xl border border-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.2)]"
                                />

                                {/* Floating Badges */}
                                <div className="absolute -right-4 top-20 bg-[#0F172A]/90 backdrop-blur-md border border-amber-500/20 p-4 rounded-xl shadow-2xl shadow-black/50 z-20 animate-float-slow">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                                            <Crown className="w-6 h-6 text-amber-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-amber-500 font-bold tracking-wider uppercase">PREMIUM VAULT</p>
                                            <p className="text-white font-bold text-sm">185 Million+ Assets</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -left-4 bottom-20 bg-[#0F172A]/90 backdrop-blur-md border border-blue-500/20 p-4 rounded-xl shadow-2xl shadow-black/50 z-20 animate-float-delayed">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-500/10 p-2 rounded-lg border border-blue-500/20">
                                            <Download className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-blue-400 font-bold tracking-wider uppercase">INSTANT DOWNLOAD</p>
                                            <p className="text-white font-bold text-sm">Ready to Resell</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Your Digital Journey Section */}
                <div className="mt-24 pt-12 border-t border-white/5">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/10 text-amber-500 text-sm mb-6 font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            Simple 3-Step Process
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
                            Launch Your Business With{' '}
                            <span className="bg-gradient-to-r from-amber-300 to-orange-500 text-transparent bg-clip-text">
                                Authority
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
                            Follow this proven path to start generating income immediately.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-amber-500/10" />

                        {/* Step 1 */}
                        <div className="relative text-center group">
                            <div className="w-24 h-24 mx-auto bg-[#0f172a] rounded-2xl border border-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:border-amber-500/50 transition-colors duration-500 shadow-xl shadow-black/20">
                                <div className="absolute inset-0 bg-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Download className="w-8 h-8 text-amber-500" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#1e293b] rounded-full flex items-center justify-center text-amber-500 font-bold border border-white/10 shadow-lg text-sm">1</div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Access The Vault</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Enter the members area and download high-demand products instantly.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative text-center group">
                            <div className="w-24 h-24 mx-auto bg-[#0f172a] rounded-2xl border border-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-500/50 transition-colors duration-500 shadow-xl shadow-black/20">
                                <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <PenTool className="w-8 h-8 text-blue-500" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#1e293b] rounded-full flex items-center justify-center text-blue-500 font-bold border border-white/10 shadow-lg text-sm">2</div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Rebrand as Yours</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Add your logo and price. You have full Private Label Rights to almost everything.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative text-center group">
                            <div className="w-24 h-24 mx-auto bg-[#0f172a] rounded-2xl border border-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:border-green-500/50 transition-colors duration-500 shadow-xl shadow-black/20">
                                <div className="absolute inset-0 bg-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <DollarSign className="w-8 h-8 text-green-500" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#1e293b] rounded-full flex items-center justify-center text-green-500 font-bold border border-white/10 shadow-lg text-sm">3</div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">Sell for 100% Profit</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Keep every dollar you make. No royalties, no commission split. Pure profit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
