
import React from 'react';
import { Package, Crown, Rocket, AlertTriangle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
    return (
        <section className="relative bg-[#030712] py-20 lg:py-32 overflow-hidden">
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
                            Finding Profitable Digital Products is
                            <span className="block mt-2 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-transparent bg-clip-text">
                                Getting Impossible
                            </span>
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            The harsh reality that's crushing dreams of <span className="text-amber-400 font-semibold">93% aspiring digital entrepreneurs.</span>
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 border border-white/5 p-8 lg:p-12">
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Card 1 */}
                                <div className="group relative rounded-xl p-8 border border-red-500/20 hover:border-red-500/40 bg-gradient-to-br from-red-950/30 to-orange-950/20 transition-all">
                                    <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-500/80 to-orange-600/80 mb-6 text-2xl">😰</div>
                                    <h4 className="text-xl font-bold mb-3 text-red-200">Market Research is Time-Consuming</h4>
                                    <p className="text-red-200/80 leading-relaxed">Wasting precious time researching niches that might never work. 87% of digital entrepreneurs fail due to poor market research.</p>
                                </div>

                                {/* Card 2 */}
                                <div className="group relative rounded-xl p-8 border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-br from-amber-950/30 to-yellow-950/20 transition-all">
                                    <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400/80 to-yellow-600/80 mb-6 text-2xl">😣</div>
                                    <h4 className="text-xl font-bold mb-3 text-amber-200">High Initial Investment</h4>
                                    <p className="text-amber-200/80 leading-relaxed">Burning through savings with expensive tools, designers, and developers. Most spend $5,000+ before making their first sale.</p>
                                </div>

                                {/* Card 3 */}
                                <div className="group relative rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/40 bg-gradient-to-br from-orange-950/30 to-red-950/20 transition-all">
                                    <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400/80 to-red-600/80 mb-6 text-2xl">😩</div>
                                    <h4 className="text-xl font-bold mb-3 text-orange-200">Development Takes Forever</h4>
                                    <p className="text-orange-200/80 leading-relaxed">Stuck in the endless cycle of creation while competitors take your market share. Average product development: 6+ months.</p>
                                </div>

                                {/* Card 4 */}
                                <div className="group relative rounded-xl p-8 border border-red-500/20 hover:border-red-500/40 bg-gradient-to-br from-red-950/30 to-orange-950/20 transition-all">
                                    <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-400/80 to-orange-600/80 mb-6 text-2xl">😢</div>
                                    <h4 className="text-xl font-bold mb-3 text-orange-200">Increasing Competition</h4>
                                    <p className="text-orange-200/80 leading-relaxed">Fighting against 300+ new competitors entering the market daily. 92% of new digital products fail to generate significant revenue.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Brutal Reality Stats */}
                    <div className="max-w-6xl mx-auto mt-20 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                            <span className="text-sm font-medium">The Brutal Reality</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
                            Time is Running Out.<br />
                            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-rose-400 text-transparent bg-clip-text">Your Revenue is at Stake...</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">Every day you delay, more dreams are crushed and opportunities slip away forever</p>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { val: "89%", label: "Dreams Shattered", desc: "89% of digital entrepreneurs quit in despair.", from: "#FF4D4D", to: "#FF1A1A" },
                                { val: "$12K", label: "Life Savings Lost", desc: "Average failed entrepreneur loses $12,000+.", from: "#FFB800", to: "#FF9500" },
                                { val: "2YRS", label: "Years Wasted", desc: "2+ years of life wasted chasing wrong products.", from: "#FF6B6B", to: "#FF4141" },
                                { val: "97%", label: "Total Failure", desc: "97% never make a single sale.", from: "#FF3333", to: "#FF0000" },
                            ].map((stat, i) => (
                                <div key={i} className="group relative h-full transform transition-all duration-300 hover:scale-105">
                                    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[${stat.from}] to-[${stat.to}] p-8 h-full flex flex-col items-center text-center`}>
                                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                                        <div className="relative z-10">
                                            <div className="text-5xl font-bold text-white mb-4">{stat.val}</div>
                                            <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                                            <p className="text-white/80 text-sm">{stat.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- SOLUTION SECTION --- */}
                <div className="relative py-12">
                    <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-violet-500/5 to-pink-500/5 blur-[100px] opacity-50" />

                    <div className="text-center mb-16 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 mb-6">
                            <Package className="w-4 h-4" />
                            <span className="text-sm font-medium">The Solution You've Been Waiting For</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            But Don't Worry<br />
                            <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
                                We Have The Solution For You
                            </span>
                        </h2>
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Create a Winning Digital
                            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-transparent bg-clip-text">
                                Product in 5 Minutes
                            </span>
                        </h3>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Stop struggling with endless development cycles. Get instant access to proven, ready-to-sell products.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
                        {/* Sol 1 */}
                        <div className="bg-white rounded-xl p-8 border border-pink-200/20 hover:border-pink-200/40 transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                                    <Package className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Products</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">Instantly access our complete collection of high-quality digital products, ready to sell with proven conversion rates.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sol 2 */}
                        <div className="bg-white rounded-xl p-8 border border-pink-200/20 hover:border-pink-200/40 transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                                    <Crown className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Full PLR Rights</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">Sell each product for $97-$297 and keep 100% of the profits. No recurring fees or commissions.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sol 3 */}
                        <div className="bg-white rounded-xl p-8 border border-pink-200/20 hover:border-pink-200/40 transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to Sell Today</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">Start selling immediately with our done-for-you packages. Just add your branding and launch.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
