import React from 'react';

/**
 * Timeline/Feed Ad V2 - 1080x1080px (1:1 Square)
 * Format: Facebook/Instagram Feed
 * Neuro Marketing: FOMO + Pain-Desire + Visual Contrast
 */
export const TimelineFeedAdV2: React.FC = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
            <div className="w-[540px] h-[540px] flex flex-col items-center justify-between p-8 relative">
                
                {/* Split Design - Problem vs Solution */}
                <div className="flex flex-col gap-6 w-full flex-1">
                    {/* Problem Half */}
                    <div className="bg-red-900/30 border border-red-600/50 rounded-2xl p-6 text-center space-y-3">
                        <div className="text-xl font-black text-red-400">MONTH 1-6</div>
                        <ul className="text-red-200 font-bold text-sm space-y-1">
                            <li>❌ Spending $4K+</li>
                            <li>❌ Waiting 6 months</li>
                            <li>❌ Getting beat by competition</li>
                        </ul>
                    </div>

                    {/* Solution Half */}
                    <div className="bg-green-900/30 border border-green-600/50 rounded-2xl p-6 text-center space-y-3">
                        <div className="text-xl font-black text-green-400">DAY 1</div>
                        <ul className="text-green-200 font-bold text-sm space-y-1">
                            <li>✓ Invest $19</li>
                            <li>✓ Launch instantly</li>
                            <li>✓ 200M assets ready</li>
                        </ul>
                    </div>
                </div>

                {/* Price & Main CTA */}
                <div className="w-full space-y-3 mt-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 text-center shadow-2xl">
                        <div className="text-gray-200 text-xs mb-1 line-through">Was $150</div>
                        <div className="text-5xl font-black text-white mb-2">$19</div>
                        <div className="bg-black/30 rounded-lg py-3 font-bold text-white text-sm">
                            UNLOCK EVERYTHING →
                        </div>
                    </div>
                    
                    {/* Social Proof */}
                    <div className="text-center text-xs text-gray-300">
                        ⭐ 50,000+ creators • 5 stars • 30-day guarantee
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
    );
};
