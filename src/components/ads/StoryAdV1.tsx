import React from 'react';

/**
 * Story Ad - 1080x1920px (9:16)
 * Format: Instagram/Facebook Stories
 * Neuro Marketing: FOMO + Urgency + Social Proof
 */
export const StoryAdV1: React.FC = () => {
    return (
        <div className="w-full h-full bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden flex items-center justify-center">
            {/* Base dimensions for story */}
            <div className="w-[540px] h-[960px] flex flex-col items-center justify-between p-8 relative">
                
                {/* Top Urgency Badge */}
                <div className="absolute top-8 left-0 right-0 flex justify-center animate-pulse">
                    <div className="bg-red-600 text-white px-6 py-2 rounded-full text-center font-bold text-base shadow-lg">
                        ⏰ JUST 24 HOURS LEFT
                    </div>
                </div>

                {/* Main Headline - Large and Bold */}
                <div className="mt-20 text-center flex-1 flex flex-col justify-start gap-6">
                    <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 leading-tight">
                        START EARNING
                    </h1>
                    <h2 className="text-4xl font-black text-white leading-tight">
                        TODAY
                    </h2>
                    <div className="text-2xl font-bold text-yellow-300">
                        NO PRODUCT TO CREATE
                    </div>
                </div>

                {/* Social Proof Stats - Eye-catching */}
                <div className="flex flex-col gap-4 w-full my-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <div className="text-sm text-gray-300 mb-1">Trusted by</div>
                        <div className="text-3xl font-black text-white">50,000+ Creators</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <div className="text-sm text-gray-300 mb-1">Making money with</div>
                        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                            200M Assets
                        </div>
                    </div>
                </div>

                {/* Price & CTA - Bottom section */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 w-full text-center relative shadow-2xl">
                    <div className="text-gray-200 text-sm line-through mb-1">Was $150</div>
                    <div className="text-5xl font-black text-white mb-3">$19</div>
                    <div className="text-base font-bold text-white bg-black/30 rounded-lg py-3">
                        TAP FOR INSTANT ACCESS
                    </div>
                    <div className="text-xs text-white/80 mt-2">30-Day Money Back Guarantee</div>
                </div>
            </div>

            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
    );
};
