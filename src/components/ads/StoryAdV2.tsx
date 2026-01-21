import React from 'react';

/**
 * Story Ad V2 - 1080x1920px (9:16)
 * Format: Instagram/Facebook Stories
 * Neuro Marketing: Curiosity + Pain Point + Solution
 */
export const StoryAdV2: React.FC = () => {
    return (
        <div className="w-full h-full bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
            <div className="w-[540px] h-[960px] flex flex-col items-center justify-between p-8 relative">
                
                {/* Problem badge - Top */}
                <div className="absolute top-8 left-0 right-0 flex justify-center">
                    <div className="bg-red-600/90 text-white px-5 py-2 rounded-full text-sm font-bold">
                        🚫 STILL CREATING FROM SCRATCH?
                    </div>
                </div>

                {/* Main Problem/Solution messaging */}
                <div className="mt-16 text-center flex-1 flex flex-col justify-start gap-8">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold text-red-400">
                            ❌ 6 months to build
                        </h1>
                        <h1 className="text-2xl font-bold text-red-400">
                            ❌ $3,990 in costs
                        </h1>
                        <h1 className="text-2xl font-bold text-red-400">
                            ❌ Losing to competitors
                        </h1>
                    </div>

                    <div className="border-t border-b border-white/20 py-8">
                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400 mb-2">
                            ✓ BETTER WAY
                        </div>
                        <p className="text-white font-bold text-xl">
                            Start Today With
                            <br/>
                            <span className="text-green-300">200M Ready-Made Assets</span>
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-white font-semibold">
                            <span className="text-2xl">✓</span>
                            <span>No creation needed</span>
                        </div>
                        <div className="flex items-center gap-3 text-white font-semibold">
                            <span className="text-2xl">✓</span>
                            <span>Resell 100% profit</span>
                        </div>
                        <div className="flex items-center gap-3 text-white font-semibold">
                            <span className="text-2xl">✓</span>
                            <span>Lifetime access</span>
                        </div>
                    </div>
                </div>

                {/* Price & CTA */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 w-full text-center shadow-2xl">
                    <div className="text-white/80 text-sm mb-2">NOW JUST</div>
                    <div className="text-5xl font-black text-white mb-3">$19</div>
                    <div className="text-base font-bold text-white bg-black/30 rounded-lg py-3">
                        GET INSTANT ACCESS →
                    </div>
                    <div className="text-xs text-white/80 mt-2">87% OFF | Limited Time</div>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>
    );
};
