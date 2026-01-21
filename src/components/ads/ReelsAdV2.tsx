import React from 'react';

/**
 * Reels Ad V2 - 1080x1920px (9:16 Vertical)
 * Format: Instagram Reels
 * Neuro Marketing: Contrast + Transformation + Aspiration
 */
export const ReelsAdV2: React.FC = () => {
    return (
        <div className="w-full h-full bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-950 relative overflow-hidden flex items-center justify-center">
            <div className="w-[540px] h-[960px] flex flex-col items-center justify-between p-8 relative">
                
                {/* Bold Hook - Stops scrolling */}
                <div className="text-center space-y-4 mt-12">
                    <div className="text-5xl font-black text-red-400 leading-tight">
                        STOP
                    </div>
                    <div className="text-4xl font-black text-white leading-tight">
                        If You're Making
                        <br/>
                        <span className="text-red-400">$0 Online</span>
                    </div>
                </div>

                {/* Middle section - Transformation */}
                <div className="flex-1 flex flex-col items-center justify-center gap-8 my-12">
                    
                    {/* Before */}
                    <div className="w-full space-y-2">
                        <div className="text-sm font-bold text-red-400">❌ BEFORE</div>
                        <div className="bg-red-950/40 border border-red-600/30 rounded-2xl p-5 space-y-2">
                            <p className="text-white font-bold text-sm">• Stuck in 9-to-5</p>
                            <p className="text-white font-bold text-sm">• Zero income online</p>
                            <p className="text-white font-bold text-sm">• No idea where to start</p>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-3xl">↓</div>

                    {/* After */}
                    <div className="w-full space-y-2">
                        <div className="text-sm font-bold text-green-400">✓ AFTER</div>
                        <div className="bg-green-950/40 border border-green-600/30 rounded-2xl p-5 space-y-2">
                            <p className="text-white font-bold text-sm">• Making money Day 1</p>
                            <p className="text-white font-bold text-sm">• 200M products to choose</p>
                            <p className="text-white font-bold text-sm">• 100% profit on resales</p>
                        </div>
                    </div>
                </div>

                {/* The Secret */}
                <div className="w-full bg-gradient-to-r from-blue-600/50 to-purple-600/50 border border-blue-400/50 rounded-2xl p-6 text-center my-6">
                    <div className="text-sm font-bold text-blue-300 mb-3">THE SECRET:</div>
                    <p className="text-white font-black text-lg">
                        Start with assets <br/> that already sell
                    </p>
                </div>

                {/* CTA - Bottom */}
                <div className="w-full space-y-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-center shadow-2xl">
                        <div className="text-xs text-green-100 mb-1 font-bold">NOW JUST</div>
                        <div className="text-5xl font-black text-white mb-3">$19</div>
                        <div className="bg-black/40 rounded-lg py-3 font-bold text-white">
                            START YOUR BUSINESS TODAY
                        </div>
                    </div>

                    <div className="text-center text-xs text-indigo-300">
                        30-day money back • No credit card needed after
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
        </div>
    );
};
