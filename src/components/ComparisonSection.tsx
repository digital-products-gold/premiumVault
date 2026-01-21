
import React from 'react';
import { StartNowButton } from './StartNowButton';
import { Trophy, ArrowUp, Briefcase, Code, Bug } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#020617] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
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
                        The clearest path to the top is a straight line.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-slate-900/40 border border-white/5 rounded-3xl p-8 lg:p-12 relative overflow-hidden backdrop-blur-sm">

                    {/* The Penthouse (Goal) */}
                    <div className="flex justify-center mb-12 relative z-20">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 px-6 py-3 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                            <Trophy className="w-6 h-6 text-amber-400" />
                            <span className="text-white font-bold tracking-wide">THE GOAL: PROFITABLE BUSINESS</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
                        {/* Ground Floor Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

                        {/* LEFT: The Stairs (Hard Way) */}
                        <div className="relative pt-12">
                            <h3 className="text-center text-red-400 font-bold mb-8">The Hard Way (Stairs)</h3>

                            <div className="relative h-[400px] w-full max-w-[200px] mx-auto bg-slate-800/20 border-x border-slate-700/30">
                                {/* Floor Lines */}
                                <div className="absolute top-[25%] left-0 right-0 h-px bg-white/5" />
                                <div className="absolute top-[50%] left-0 right-0 h-px bg-white/5" />
                                <div className="absolute top-[75%] left-0 right-0 h-px bg-white/5" />

                                <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 200 400" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="concreteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#334155" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#1e293b" stopOpacity="0.4" />
                                        </linearGradient>
                                    </defs>

                                    {/* 1. The Concrete Mass (Solid Base) */}
                                    <path
                                        d="
                                            M 10 380 L 10 400 L 190 400 L 190 300 
                                            L 170 300 L 170 320 L 130 320 L 130 340 L 90 340 L 90 360 L 50 360 L 50 380 
                                            L 10 380 Z
                                            
                                            M 190 300 L 190 400 L 200 400 L 200 100 L 190 100 
                                            L 190 280 L 150 280 L 150 260 L 110 260 L 110 240 L 70 240 L 70 220 L 30 220 L 30 200 L 10 200
                                            L 10 400

                                            M 10 200 L 10 400 L 0 400 L 0 0 L 10 0
                                            L 10 180 L 50 180 L 50 160 L 90 160 L 90 140 L 130 140 L 130 120 L 170 120 L 170 100 
                                            L 190 100
                                        "
                                        fill="url(#concreteGradient)"
                                        stroke="none"
                                    />
                                    {/* Simplified Mass for better visual (Backdrop) */}
                                    <path
                                        d="
                                            M 10 380 
                                            L 50 380 L 50 360 L 90 360 L 90 340 L 130 340 L 130 320 L 170 320 L 170 300
                                            L 190 300 L 190 280
                                            L 150 280 L 150 260 L 110 260 L 110 240 L 70 240 L 70 220 L 30 220 L 30 200
                                            L 10 200 L 10 180
                                            L 50 180 L 50 160 L 90 160 L 90 140 L 130 140 L 130 120 L 170 120 L 170 100
                                            L 190 100 L 190 80
                                            L 150 80 L 150 60 L 110 60 L 110 40 L 70 40 L 70 20 L 30 20
                                            L 30 400 L 190 400 L 190 100
                                        "
                                        fill="#334155"
                                        fillOpacity="0.2"
                                        stroke="none"
                                    />

                                    {/* 2. The Steps Outline (White/Gray) */}
                                    <path
                                        d="
                                            M 10 380 
                                            L 50 380 L 50 360 L 90 360 L 90 340 L 130 340 L 130 320 L 170 320 L 170 300
                                            L 190 300 L 190 280
                                            L 150 280 L 150 260 L 110 260 L 110 240 L 70 240 L 70 220 L 30 220 L 30 200
                                            L 10 200 L 10 180
                                            L 50 180 L 50 160 L 90 160 L 90 140 L 130 140 L 130 120 L 170 120 L 170 100
                                            L 190 100 L 190 80
                                            L 150 80 L 150 60 L 110 60 L 110 40 L 70 40 L 70 20 L 30 20
                                        "
                                        fill="none"
                                        stroke="#94a3b8"
                                        strokeWidth="3"
                                        strokeLinecap="square"
                                        strokeLinejoin="miter"
                                    />

                                    {/* 3. The Railing (Thin line above) */}
                                    <path
                                        d="
                                            M 10 350 L 190 270
                                            M 190 270 L 10 170
                                            M 10 170 L 190 70
                                        "
                                        fill="none"
                                        stroke="#475569"
                                        strokeWidth="1"
                                        className="opacity-50"
                                    />

                                    {/* The Path Overlay (Red Dotted) */}
                                    <path
                                        d="
                                            M 10 380 
                                            L 50 380 L 50 360 L 90 360 L 90 340 L 130 340 L 130 320 L 170 320 L 170 300
                                            L 190 300 L 190 280
                                            L 150 280 L 150 260 L 110 260 L 110 240 L 70 240 L 70 220 L 30 220 L 30 200
                                            L 10 200 L 10 180
                                            L 50 180 L 50 160 L 90 160 L 90 140 L 130 140 L 130 120 L 170 120 L 170 100
                                            L 190 100 L 190 80
                                            L 150 80 L 150 60 L 110 60 L 110 40 L 70 40 L 70 20 L 30 20
                                        "
                                        fill="none"
                                        stroke="#ef4444"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                        className="opacity-60"
                                    />

                                    {/* Landings/Turns Markers */}
                                    <circle cx="190" cy="290" r="4" fill="#ef4444" />
                                    <circle cx="10" cy="190" r="4" fill="#ef4444" />
                                    <circle cx="190" cy="90" r="4" fill="#ef4444" />

                                    {/* Animated Emoji Climber */}
                                    <g className="animate-climb" style={{
                                        offsetPath: `path("M 10 380 L 50 380 L 50 360 L 90 360 L 90 340 L 130 340 L 130 320 L 170 320 L 170 300 L 190 300 L 190 280 L 150 280 L 150 260 L 110 260 L 110 240 L 70 240 L 70 220 L 30 220 L 30 200 L 10 200 L 10 180 L 50 180 L 50 160 L 90 160 L 90 140 L 130 140 L 130 120 L 170 120 L 170 100 L 190 100 L 190 80 L 150 80 L 150 60 L 110 60 L 110 40 L 70 40 L 70 20 L 30 20")`,
                                        offsetRotate: '0deg'
                                    }}>
                                        <foreignObject x="-15" y="-30" width="30" height="30">
                                            <div className="text-xl leading-none origin-bottom animate-wobble">🥵</div>
                                        </foreignObject>
                                    </g>
                                </svg>

                                {/* Info Tooltips (Absolute positioned over the SVG) */}
                                <div className="absolute left-2 top-[320px] bg-slate-900/90 border border-slate-700 px-2 py-1 rounded text-[10px] text-gray-400">
                                    Start Research
                                </div>

                                <div className="absolute right-2 top-[240px] bg-slate-900/90 border border-red-500/30 px-2 py-1 rounded text-[10px] text-red-300">
                                    <Briefcase className="w-3 h-3 inline mr-1" />
                                    Hiring
                                </div>

                                <div className="absolute left-2 top-[160px] bg-slate-900/90 border border-red-500/30 px-2 py-1 rounded text-[10px] text-red-300">
                                    <Code className="w-3 h-3 inline mr-1" />
                                    Coding
                                </div>

                                <div className="absolute right-2 top-[80px] bg-slate-900/90 border border-red-500/30 px-2 py-1 rounded text-[10px] text-red-300">
                                    <Bug className="w-3 h-3 inline mr-1" />
                                    Fixing
                                </div>
                            </div>

                            {/* Total Time Label */}
                            <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                                <div className="inline-block bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm border border-red-500/20">
                                    Total: 6+ Months
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: The Elevator (PLR Way) */}
                        <div className="relative pt-12">
                            <h3 className="text-center text-amber-400 font-bold mb-8">The Premium Vault (Elevator)</h3>

                            <div className="relative h-[400px] w-full max-w-[100px] mx-auto flex justify-center">
                                {/* Shaft */}
                                <div className="absolute inset-y-0 w-24 bg-slate-800/50 border-x border-slate-700/50 rounded-lg overflow-hidden">
                                    {/* Rails/Cables */}
                                    <div className="absolute left-6 inset-y-0 w-0.5 bg-slate-700" />
                                    <div className="absolute right-6 inset-y-0 w-0.5 bg-slate-700" />

                                    {/* The Beam */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-amber-500/20 to-amber-500/5 animate-pulse" />
                                </div>

                                {/* The Cabin */}
                                <div className="absolute bottom-0 w-20 h-24 bg-gradient-to-b from-amber-500 to-orange-600 rounded-lg shadow-[0_0_40px_rgba(245,158,11,0.6)] flex items-center justify-center border-t border-white/30 z-10 animate-rocket-launch">
                                    <div className="text-white flex flex-col items-center">
                                        <ArrowUp className="w-6 h-6 animate-bounce mb-1" />
                                        <span className="text-[10px] font-bold tracking-widest uppercase">Express</span>
                                    </div>
                                    {/* Sparkle effects */}
                                    <div className="absolute -inset-1 blur-md bg-amber-400/30 -z-10"></div>
                                </div>

                                {/* Callouts */}
                                <div className="absolute right-[-140px] bottom-[100px] text-left">
                                    <div className="bg-slate-900/80 border border-amber-500/30 p-3 rounded-xl backdrop-blur-sm -ml-4 flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-amber-500" />
                                        <div>
                                            <div className="text-amber-400 font-bold text-sm">Product Ready</div>
                                            <div className="text-gray-500 text-xs">Instantly</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Total Time Label */}
                                <div className="absolute bottom-[-40px] left-[-50px] right-[-50px] text-center">
                                    <div className="inline-block bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-sm border border-amber-500/20 font-bold shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                        Total: 25 Minutes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* End Grid */}
                </div> {/* End Max-W-5XL */}

                <div className="mt-24 flex justify-center">
                    <StartNowButton text="Step Into The Elevator" className="w-full sm:w-auto px-12 py-4 text-lg shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)]" href="#pricing" />
                </div>
            </div> {/* End Container */}

            <style>{`
                @keyframes rocket-launch {
                    0% { bottom: 0; opacity: 0; transform: scale(0.9); }
                    10% { opacity: 1; transform: scale(1); }
                    80% { bottom: 70%; }
                    100% { bottom: 75%; }
                }
                .animate-rocket-launch {
                    animation: rocket-launch 3s ease-out infinite;
                }

                @keyframes climb {
                    0% { offset-distance: 0%; }
                    100% { offset-distance: 100%; }
                }
                .animate-climb {
                    animation: climb 25s linear infinite;
                }
                
                @keyframes wobble {
                    0%, 100% { transform: rotate(-5deg); }
                    50% { transform: rotate(5deg); }
                }
                .animate-wobble {
                    animation: wobble 1s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};
