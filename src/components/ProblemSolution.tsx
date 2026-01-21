
import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
    return (
        <section className="relative bg-[#020617] py-20 lg:py-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-900/50 blur-3xl opacity-50" />
            </div>

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-32">

                {/* --- PROBLEM SECTION --- */}
                <div className="space-y-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6">
                            <AlertTriangle className="w-4 h-4" />
                            <span className="text-sm font-medium">Your Business May Be at Risk</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
                            Creating Products From Scratch Is
                            <span className="block mt-2 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-transparent bg-clip-text">
                                A Trap For Beginners
                            </span>
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            The harsh truth: <span className="text-red-400 font-semibold">You cannot compete</span> by spending months building what your competitors launch in minutes.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Card 1: Search - Endless Research */}
                            <div className="group relative rounded-2xl bg-gray-900/60 border border-white/10 p-8 hover:border-red-500/30 transition-all duration-300">
                                {/* Visual: Failed Search */}
                                <div className="h-40 flex items-center justify-center mb-6 bg-black/40 rounded-xl border border-white/10 p-4">
                                    <div className="w-full max-w-[240px] space-y-3">
                                        <div className="h-2 w-1/3 bg-gray-600 rounded-full"></div>
                                        <div className="flex gap-2">
                                            <div className="flex-1 h-10 bg-gray-900 rounded-lg border border-gray-600 flex items-center px-3 text-sm text-gray-300 font-mono">
                                                Profitable Niche...
                                            </div>
                                            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-600/30">
                                                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-red-400 text-xs font-mono bg-red-500/10 py-1 px-2 rounded w-fit">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            0 Results Found
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Endless Analysis</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Hours spent searching for niches that don't exist. <span className="text-red-400 font-medium">87% quit here.</span></p>
                            </div>

                            {/* Card 2: Money - Negative Invoice */}
                            <div className="group relative rounded-2xl bg-gray-900/60 border border-white/10 p-8 hover:border-orange-500/30 transition-all duration-300">
                                {/* Visual: Invoice */}
                                <div className="h-40 flex items-center justify-center mb-6 bg-black/40 rounded-xl border border-white/10 p-4 relative overflow-hidden">
                                    <div className="w-[200px] bg-gray-900 rounded-lg border border-gray-700 p-4 font-mono text-xs shadow-xl">
                                        <div className="flex justify-between mb-2 pb-2 border-b border-gray-700 text-gray-300">
                                            <span>ITEM</span>
                                            <span>COST</span>
                                        </div>
                                        <div className="space-y-2 text-gray-200">
                                            <div className="flex justify-between">
                                                <span>Freelancer</span>
                                                <span>-$2,000</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Ads Setup</span>
                                                <span>-$1,500</span>
                                            </div>
                                            <div className="flex justify-between text-gray-400">
                                                <span>Tools</span>
                                                <span>-$490</span>
                                            </div>
                                            <div className="flex justify-between pt-2 border-t border-gray-700 font-bold text-red-400 mt-1">
                                                <span>TOTAL</span>
                                                <span>-$3,990</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Negative ROI</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Burning thousands on designers and tools before making a single sale.</p>
                            </div>

                            {/* Card 3: Time - Loading Bar */}
                            <div className="group relative rounded-2xl bg-gray-900/60 border border-white/10 p-8 hover:border-amber-500/30 transition-all duration-300">
                                {/* Visual: Slow Loading */}
                                <div className="h-40 flex items-center justify-center mb-6 bg-black/40 rounded-xl border border-white/10 p-4">
                                    <div className="w-full max-w-[240px] space-y-4">
                                        <div className="flex justify-between text-xs font-mono text-gray-300">
                                            <span>Development Status</span>
                                            <span className="text-amber-500">In Progress...</span>
                                        </div>
                                        <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full w-[30%] bg-amber-500/50 rounded-full relative">
                                                <div className="absolute inset-0 bg-white/20 animate-[shimmer_1s_infinite]"></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                                            <span>Start: Jan</span>
                                            <span>Est: 6 Months</span>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Speed to Market: Slow</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Months of coding and writing. By the time you launch, the trend is likely dead.</p>
                            </div>

                            {/* Card 4: Competition - The Dot Grid */}
                            <div className="group relative rounded-2xl bg-gray-900/60 border border-white/10 p-8 hover:border-blue-500/30 transition-all duration-300">
                                {/* Visual: Lost in Crowd */}
                                <div className="h-40 flex items-center justify-center mb-6 bg-black/40 rounded-xl border border-white/10 p-4 overflow-hidden relative">
                                    <div className="grid grid-cols-10 gap-3 opacity-80">
                                        {[...Array(50)].map((_, i) => (
                                            <div key={i} className={`w-2 h-2 rounded-full ${i === 24 ? 'bg-blue-500 animate-pulse scale-150 shadow-[0_0_10px_rgba(59,130,246,0.6)]' : 'bg-gray-600'}`}></div>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-center pb-4">
                                        <div className="text-xs bg-gray-900 border border-white/20 px-3 py-1.5 rounded text-white font-mono shadow-lg">
                                            1,000+ Similar Products
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Lost in the Noise</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Fighting against millions of AI-generated copies. Hard to stand out.</p>
                            </div>
                        </div>
                    </div>


                </div>

                {/* --- SOLUTION SECTION --- */}
                <div className="relative py-24">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-amber-500/5 to-blue-500/5 blur-[100px] opacity-30" />

                    <div className="text-center mb-20 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 mb-8 animate-fade-in-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-sm font-bold tracking-wide">THE SOLUTION IS HERE</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            But Don't Worry...<br />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 text-transparent bg-clip-text">
                                We Found The Shortcut
                            </span>
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
                            Skip the years of failure. We built the <span className="text-white font-medium">ultimate cheat code</span> to automate your digital empire.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
                        {/* Solution 1: Pre-Validated Library (Maps to Niche) */}
                        <div className="group relative rounded-2xl bg-gray-900/40 border border-white/5 p-6 hover:border-blue-500/30 transition-all duration-300">
                            <div className="absolute -inset-px bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                            <div className="h-40 mb-6 bg-black/40 rounded-xl border border-white/5 overflow-hidden relative flex flex-col">
                                {/* Search Header */}
                                <div className="h-8 border-b border-white/5 bg-gray-900/50 flex items-center px-3 gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
                                    <div className="ml-1 flex-1 h-4 bg-black/50 rounded flex items-center px-2">
                                        <div className="w-2 h-2 rounded-full border border-gray-600" />
                                        <div className="ml-1.5 w-10 h-0.5 bg-gray-700 rounded" />
                                    </div>
                                </div>
                                {/* Results */}
                                <div className="p-3">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[8px] text-gray-500">Results Found</span>
                                        <span className="text-[8px] text-blue-400 font-bold">200,000,000+</span>
                                    </div>
                                    <div className="space-y-2">
                                        {[1, 2].map((i) => (
                                            <div key={i} className="flex gap-2 p-1.5 rounded bg-white/5 border border-white/5">
                                                <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500/20 to-blue-500/20" />
                                                <div className="flex-1 space-y-1">
                                                    <div className="h-1 w-10 bg-gray-600 rounded" />
                                                    <div className="h-1 w-6 bg-gray-700 rounded" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Success overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                                        WINNER FOUND
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Pre-Validated Library</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">Skip the research. We curated the winners.</p>
                        </div>

                        {/* Solution 2: Zero Production Cost (Maps to Costs) */}
                        <div className="group relative rounded-2xl bg-gray-900/40 border border-white/5 p-6 hover:border-green-500/30 transition-all duration-300">
                            <div className="absolute -inset-px bg-gradient-to-b from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                            <div className="h-40 mb-6 bg-white rounded-xl border border-gray-200 overflow-hidden relative flex flex-col items-center p-4 shadow-inner transform group-hover:scale-[1.02] transition-transform">
                                <div className="w-full border-b border-dashed border-gray-300 pb-3 mb-3">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] text-gray-500 font-mono">INVOICE #001</span>
                                        <span className="text-[10px] text-gray-400">PAID</span>
                                    </div>
                                    <div className="h-2 w-16 bg-gray-200 rounded" />
                                </div>
                                <div className="w-full space-y-2">
                                    <div className="flex justify-between text-[10px] text-gray-600">
                                        <span>Development</span>
                                        <span className="line-through text-gray-300">$15,000</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-gray-600">
                                        <span>Design</span>
                                        <span className="line-through text-gray-300">$5,000</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-2 flex justify-between items-center mt-4">
                                        <span className="text-xs font-bold text-gray-900">Total</span>
                                        <span className="text-lg font-bold text-green-600">$0.00</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Zero Production Cost</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">Why pay developers? It's already built.</p>
                        </div>

                        {/* Solution 3: Instant Launch (Maps to Time) */}
                        <div className="group relative rounded-2xl bg-gray-900/40 border border-white/5 p-6 hover:border-amber-500/30 transition-all duration-300">
                            <div className="absolute -inset-px bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                            <div className="h-40 mb-6 bg-black/40 rounded-xl border border-white/5 overflow-hidden relative flex flex-col items-center justify-center p-4">
                                <div className="text-center space-y-3 relative z-10">
                                    <div className="w-12 h-12 rounded-full border-2 border-amber-500/30 border-t-amber-500 mx-auto animate-spin" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] flex items-center justify-center animate-pulse">
                                            <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="bg-gray-900/80 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur text-[10px] font-mono text-amber-400 mt-4">
                                        STATUS: READY TO SELL
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Instant Launch</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">From idea to income in minutes.</p>
                        </div>

                        {/* Solution 4: Unique Branding (Maps to Competition) */}
                        <div className="group relative rounded-2xl bg-gray-900/40 border border-white/5 p-6 hover:border-purple-500/30 transition-all duration-300">
                            <div className="absolute -inset-px bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                            <div className="h-40 mb-6 bg-black/40 rounded-xl border border-white/5 overflow-hidden relative flex flex-col items-center justify-center">
                                <div className="w-24 h-32 bg-gray-800 rounded border border-white/5 p-2 relative transform transition-transform duration-500 group-hover:rotate-y-180">
                                    <div className="h-2 mb-2 bg-gray-700/50 rounded" />
                                    <div className="h-16 mb-2 bg-white/5 rounded border border-white/5 flex items-center justify-center">
                                        <span className="text-[8px] text-gray-600">GENERIC</span>
                                    </div>

                                    {/* Overlay Toggle Switch */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900/90 backdrop-blur border border-white/10 p-2 rounded-lg shadow-xl flex flex-col items-center gap-2 w-28 z-20">
                                        <span className="text-[8px] text-gray-400 uppercase tracking-wider font-bold">White Label Mode</span>
                                        <div className="w-8 h-4 bg-purple-600 rounded-full relative shadow-inner">
                                            <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                                        </div>
                                    </div>

                                    {/* Rebranded Result (Hidden initially, implied by toggle) */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90 flex flex-col p-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                                            <span className="text-purple-600 font-bold text-xs">YOU</span>
                                        </div>
                                        <div className="text-[8px] text-white font-bold tracking-widest">YOUR BRAND</div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Unique Branding</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">Make it yours. Stand out instantly.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
