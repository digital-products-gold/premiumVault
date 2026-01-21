import React from 'react';

/**
 * Reels Ad V1 - 1080x1920px (9:16 Vertical)
 * Format: Instagram Reels, Facebook Reels, TikTok-style
 * Neuro Marketing: Shocking stat + Proof + Urgency
 * Designed to stop scrolling
 */
export const ReelsAdV1: React.FC = () => {
    return (
        <div className="w-full h-full bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden flex items-center justify-center">
            <div className="w-[540px] h-[960px] flex flex-col items-center justify-between p-8 relative">
                
                {/* Shocking Stat - Top (stops scrolling) */}
                <div className="absolute top-8 left-0 right-0 text-center space-y-2 z-20">
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 leading-tight">
                        $2.1M
                    </div>
                    <div className="text-white font-bold text-lg">
                        From 2 Templates
                    </div>
                    <div className="text-purple-300 text-sm">
                        (Not artificial intelligence, real people)
                    </div>
                </div>

                {/* Story/proof section - middle */}
                <div className="mt-48 text-center space-y-6 flex-1">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black text-white">
                            How They Did It:
                        </h2>
                        
                        <div className="space-y-3">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                <div className="text-2xl font-black text-white mb-1">1</div>
                                <p className="text-sm text-gray-200">Downloaded assets from Premium Vault</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                <div className="text-2xl font-black text-white mb-1">2</div>
                                <p className="text-sm text-gray-200">Customized with branding</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                <div className="text-2xl font-black text-white mb-1">3</div>
                                <p className="text-sm text-gray-200">Launched & earned 100% profit</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-400/50 rounded-2xl p-5">
                        <p className="text-white font-bold italic">
                            "Create once, sell forever"
                        </p>
                        <p className="text-purple-300 text-xs mt-2">They could've done this too...</p>
                    </div>
                </div>

                {/* CTA - Bottom */}
                <div className="w-full space-y-4">
                    <div className="bg-red-600 rounded-2xl p-6 text-center">
                        <div className="text-xs text-red-200 mb-1 font-bold">🔥 JUST $19 - 87% OFF</div>
                        <div className="text-4xl font-black text-white mb-3">CLAIM YOUR DEAL</div>
                        <div className="text-xs text-red-200 font-semibold">⏰ 24 Hours Left</div>
                    </div>

                    <div className="text-center text-gray-400 text-xs">
                        Join 50K+ creators | Money-back guarantee
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
    );
};
