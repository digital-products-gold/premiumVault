import React from 'react';

/**
 * Story Ad V3 - 1080x1920px (9:16)
 * Format: Instagram/Facebook Stories
 * Neuro Marketing: Social Proof + Aspiration + Scarcity
 */
export const StoryAdV3: React.FC = () => {
    return (
        <div className="w-full h-full bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden flex items-center justify-center">
            <div className="w-[540px] h-[960px] flex flex-col items-center justify-between p-8 relative">
                
                {/* Social Proof at top */}
                <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-2">
                    <div className="text-yellow-300 text-2xl font-black">⭐⭐⭐⭐⭐</div>
                    <div className="text-white text-sm font-bold">50,000+ Creators Earning</div>
                </div>

                {/* Success Stories Display */}
                <div className="mt-24 text-center flex-1 flex flex-col justify-start gap-6">
                    <h1 className="text-4xl font-black text-white leading-tight">
                        REAL PEOPLE
                    </h1>
                    <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
                        REAL EARNINGS
                    </h2>

                    {/* Success stats */}
                    <div className="space-y-4 my-4">
                        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-4 border border-pink-400/30">
                            <div className="text-2xl font-black text-pink-300">$80K+</div>
                            <div className="text-sm text-white/80">on Gumroad in months</div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 border border-blue-400/30">
                            <div className="text-2xl font-black text-blue-300">$30K+</div>
                            <div className="text-sm text-white/80">from Notion templates</div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 my-4">
                        <p className="text-white font-bold text-sm leading-relaxed">
                            "These guys sold $2.1M with just 2 templates. Cost: $0 to create"
                        </p>
                        <p className="text-purple-300 text-xs mt-2 font-semibold">— Pat Walls</p>
                    </div>
                </div>

                {/* Scarcity alert */}
                <div className="bg-red-600/90 rounded-xl p-3 w-full mb-4 text-center">
                    <div className="text-white font-black text-sm">⏰ ENDS IN 24 HOURS</div>
                    <div className="text-red-100 text-xs">87% OFF • $19 (Was $150)</div>
                </div>

                {/* CTA Button */}
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 w-full text-center shadow-2xl">
                    <div className="text-5xl font-black text-white mb-3">$19</div>
                    <div className="text-base font-bold text-white bg-black/40 rounded-lg py-3">
                        JOIN THEM TODAY →
                    </div>
                    <div className="text-xs text-white/80 mt-2">Money Back Guarantee</div>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
    );
};
