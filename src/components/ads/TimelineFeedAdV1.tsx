import React from 'react';

/**
 * Timeline/Feed Ad V1 - 1080x1080px (1:1 Square)
 * Format: Facebook/Instagram Feed, Carousel
 * Neuro Marketing: Curiosity + Contrast + Simplicity
 * Mobile First - Clear hierarchy
 */
export const TimelineFeedAdV1: React.FC = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-[#0f2438] to-[#1a3a52] relative overflow-hidden flex items-center justify-center">
            <div className="w-[540px] h-[540px] flex flex-col items-center justify-center p-8 relative gap-6">
                
                {/* Top Alert Badge */}
                <div className="bg-yellow-500 text-gray-900 px-4 py-1.5 rounded-full font-black text-sm">
                    🔥 87% OFF TODAY ONLY
                </div>

                {/* Main Headline - Large contrast */}
                <div className="text-center space-y-3">
                    <h1 className="text-5xl font-black text-white leading-tight">
                        $19 TO START
                    </h1>
                    <p className="text-2xl font-bold text-yellow-300">
                        Your Digital Business
                    </p>
                </div>

                {/* Value proposition - Simple & Clear */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 w-full text-center">
                    <div className="text-sm text-gray-300 mb-3 font-semibold">
                        GET INSTANT ACCESS TO:
                    </div>
                    <ul className="space-y-2 text-white font-bold">
                        <li>✓ 200 Million Digital Products</li>
                        <li>✓ PLR + MRR License (Resell 100%)</li>
                        <li>✓ Lifetime Access</li>
                    </ul>
                </div>

                {/* Urgency */}
                <div className="w-full text-center">
                    <div className="text-red-400 font-black text-base">
                        ⏰ ONLY 24H LEFT
                    </div>
                    <div className="text-gray-400 text-xs">50,000+ creators already started</div>
                </div>

                {/* CTA - Strong & Bold */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-4 w-full text-center font-black text-white text-lg shadow-lg">
                    GET MY $19 DEAL
                </div>

                {/* Guarantee at bottom */}
                <div className="text-center text-gray-300 text-xs">
                    30-Day Money Back Guarantee • No Questions Asked
                </div>
            </div>

            {/* Accent lights */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
        </div>
    );
};
