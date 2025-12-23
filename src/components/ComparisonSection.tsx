
import React from 'react';
import { StartNowButton } from './StartNowButton';
import { X, Check, Search, Code, Bug, Megaphone, DollarSign, Rocket, Download, Edit } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#020617] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Why Take the <span className="text-red-500 line-through decoration-red-500/50">Stairs</span>?
                        <br />
                        <span className="text-amber-400">Take the Elevator.</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        See exactly how we cut 6 months of work down to 25 minutes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Center Divider styling (Desktop only) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-800 to-transparent -translate-x-1/2 z-0" />

                    {/* LEFT SIDE: The Old Way (Flux Diagram - Complex) */}
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-12 justify-center lg:justify-start">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                <X className="w-5 h-5 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-300">The Hard Way</h3>
                        </div>

                        {/* Complexity Visualization */}
                        <div className="relative pl-8 lg:pl-4 space-y-12 border-l-2 border-dashed border-slate-800 ml-4 lg:ml-0">

                            {/* Step 1: Research (Wasted Time) */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] lg:-left-[25px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 ring-4 ring-[#020617]">
                                    <Search className="h-4 w-4 text-gray-500" />
                                </span>
                                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl relative hover:border-red-500/30 transition-colors">
                                    <h4 className="text-lg font-bold text-gray-300 mb-2">Market Research</h4>
                                    <p className="text-sm text-gray-500 mb-3">Spending weeks analyzing trends that might fade.</p>
                                    <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 bg-red-500/5 px-2 py-1 rounded">
                                        ⏱️ 3 Weeks Lost
                                    </div>
                                    {/* Chaos Line SVG */}
                                    <svg className="absolute -right-8 top-1/2 w-8 h-12 text-slate-800 hidden lg:block" fill="none" viewBox="0 0 32 48">
                                        <path d="M0 24 C 16 24, 16 24, 32 48" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                                    </svg>
                                </div>
                            </div>

                            {/* Step 2: Dev (Expensive) */}
                            <div className="relative group ml-8 lg:ml-12">
                                <span className="absolute -left-[73px] lg:-left-[73px] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 ring-4 ring-[#020617]">
                                    <Code className="h-4 w-4 text-gray-500" />
                                </span>
                                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl relative hover:border-red-500/30 transition-colors">
                                    <h4 className="text-lg font-bold text-gray-300 mb-2">Development Hell</h4>
                                    <p className="text-sm text-gray-500 mb-3">Hiring freelancers, bugs, delays, and budget overruns.</p>
                                    <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 bg-red-500/5 px-2 py-1 rounded">
                                        💸 -$5,000 Cost
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: Testing (Frustrating) */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] lg:-left-[25px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 ring-4 ring-[#020617]">
                                    <Bug className="h-4 w-4 text-gray-500" />
                                </span>
                                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl relative hover:border-red-500/30 transition-colors">
                                    <h4 className="text-lg font-bold text-gray-300 mb-2">Testing & Fixing</h4>
                                    <p className="text-sm text-gray-500 mb-3">More delays. The product still isn't ready to sell.</p>
                                    <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 bg-red-500/5 px-2 py-1 rounded">
                                        🛑 Delayed Launch
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Result: Failure */}
                        <div className="mt-12 p-6 bg-red-950/20 border border-red-500/20 rounded-xl text-center">
                            <h4 className="text-red-400 font-bold text-lg mb-1">Result: Burnout</h4>
                            <p className="text-red-300/60 text-sm">6 Months Wasted. 0 Sales.</p>
                        </div>
                    </div>

                    {/* RIGHT SIDE: The PLR Way (Flux Diagram - Direct) */}
                    <div className="relative">
                        {/* Glowing Line */}
                        <div className="absolute left-[27px] lg:left-[27px] top-20 bottom-24 w-1 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] z-0 rounded-full" />

                        <div className="flex items-center gap-3 mb-12 justify-center lg:justify-start relative z-10">
                            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                                <Check className="w-6 h-6 text-black stroke-[3]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">The PLR Way</h3>
                        </div>

                        <div className="space-y-6 relative z-10 pl-14">
                            {/* Step 1: Download */}
                            <div className="relative group">
                                <span className="absolute -left-[45px] top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border-2 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)] z-10">
                                    <Download className="h-4 w-4 text-amber-400" />
                                </span>
                                <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-amber-500/20 p-5 rounded-xl flex items-center justify-between group-hover:border-amber-500/50 transition-all hover:translate-x-1 duration-300">
                                    <div>
                                        <h4 className="text-white font-bold">Download</h4>
                                        <p className="text-gray-400 text-sm">Instant access to proven products.</p>
                                    </div>
                                    <div className="text-amber-400 font-bold font-mono text-sm">1 Min</div>
                                </div>
                            </div>

                            {/* Step 2: Rebrand */}
                            <div className="relative group">
                                <span className="absolute -left-[45px] top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border-2 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)] z-10">
                                    <Edit className="h-4 w-4 text-amber-400" />
                                </span>
                                <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-amber-500/20 p-5 rounded-xl flex items-center justify-between group-hover:border-amber-500/50 transition-all hover:translate-x-1 duration-300">
                                    <div>
                                        <h4 className="text-white font-bold">Rebrand</h4>
                                        <p className="text-gray-400 text-sm">Add your logo. Make it yours.</p>
                                    </div>
                                    <div className="text-amber-400 font-bold font-mono text-sm">10 Mins</div>
                                </div>
                            </div>

                            {/* Step 3: Launch */}
                            <div className="relative group">
                                <span className="absolute -left-[45px] top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border-2 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)] z-10">
                                    <Rocket className="h-4 w-4 text-amber-400" />
                                </span>
                                <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-amber-500/20 p-5 rounded-xl flex items-center justify-between group-hover:border-amber-500/50 transition-all hover:translate-x-1 duration-300">
                                    <div>
                                        <h4 className="text-white font-bold">Launch</h4>
                                        <p className="text-gray-400 text-sm">Start selling immediately.</p>
                                    </div>
                                    <div className="text-amber-400 font-bold font-mono text-sm">14 Mins</div>
                                </div>
                            </div>
                        </div>

                        {/* Result: Success */}
                        <div className="mt-12 p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-amber-500/5 animate-pulse-slow"></div>
                            <h4 className="text-white font-bold text-2xl mb-1 relative z-10">Result: Profit 💰</h4>
                            <p className="text-amber-200/80 text-sm relative z-10">Total Time: 25 Minutes</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex justify-center">
                    <StartNowButton text="Take The Shortcut Now" className="w-full sm:w-auto px-12 py-4 text-lg shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] animate-pulse-slow" />
                </div>
            </div>
        </section>
    );
};
