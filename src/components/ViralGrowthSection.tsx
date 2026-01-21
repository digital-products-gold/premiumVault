import React from 'react';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Play, BarChart3, AlertCircle, DollarSign } from 'lucide-react';
import { SectionHeading } from './SectionHeading';


export const ViralGrowthSection: React.FC = () => {
    return (
        <section className="relative py-24 bg-[#020617] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">

                {/* 1. AGITATION (The Problem) - REDESIGNED */}
                <div className="relative max-w-5xl mx-auto text-center mb-24">
                    {/* Spotlight behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                            <AlertCircle className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">The "Low Views" Trap</span>
                        </div>

                        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-10 font-heading leading-tight">
                            Tired of Creating Content <br />
                            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text drop-shadow-sm">
                                That Nobody Sees?
                            </span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto text-left bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-sm hover:border-red-500/20 transition-colors duration-500">
                            {/* Visual Stat Card */}
                            <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 blur-xl rounded-full" />
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <Play className="w-3 h-3 fill-white/50 text-transparent" />
                                        </div>
                                        <span className="text-gray-400 text-sm font-medium">Recent Post</span>
                                    </div>
                                    <span className="text-xs font-mono text-red-400 bg-red-500/10 px-2 py-1 rounded">-98% Reach</span>
                                </div>

                                <div className="space-y-1 mb-6">
                                    <div className="text-5xl font-bold text-white tracking-tight">204</div>
                                    <div className="text-gray-500 text-sm">Total Views (7 Days)</div>
                                </div>

                                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <div className="bg-red-500 w-[5%] h-full rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                </div>
                                <div className="mt-2 text-xs text-red-400 text-right">Poor retention rate</div>
                            </div>

                            {/* Text Description */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">It's painful, isn't it?</h3>
                                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                    You spend <span className="text-white font-medium">hours editing</span> perfectly synced clips. You post it. You wait.
                                    <br /><br />
                                    And then... <span className="text-red-400 font-medium">Silence.</span>
                                </p>
                                <div className="mt-8 p-5 rounded-xl bg-amber-500/5 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)] text-left">
                                    <p className="text-gray-200 text-lg font-medium leading-relaxed">
                                        <span className="text-white font-bold block mb-1">The algorithm isn't broken.</span>
                                        Your content just lacks the <span className="text-amber-400 font-bold border-b border-amber-400/30 pb-0.5">psychological hooks</span> needed to stop the scroll.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. BENEFITS (The Result) */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                    <div>
                        <SectionHeading
                            title="The Viral Vault"
                            highlight="Unfair Advantage"
                            subtitle=""
                            align="left"
                        />
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Stop Guessing. <br />
                            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 text-transparent bg-clip-text">Start Trending.</span>
                        </h3>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                                    <TrendingUp className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Algorithm-Friendly Hooks</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        These aren't random videos. They are scientifically designed to hook viewers in the first 3 seconds.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                                    <Users className="w-6 h-6 text-orange-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Explode Your Reach</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        More retention = more push from Instagram & TikTok. Watch your follower count grow on autopilot.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0 border border-yellow-500/20">
                                    <BarChart3 className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Faceless & Ready</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        Don't want to show your face? Perfect. Thousands of high-end, faceless aesthetic clips are included.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 border border-green-500/20">
                                    <DollarSign className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">License to Print Money (MRR)</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        Stop building someone else's dream. You get full <span className="text-green-400 font-bold">Master Resell Rights</span>. Sell these videos as your own products and keep <span className="text-white font-bold">100% of the profit</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Visual - Mockup "Growth" */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-orange-500/10 rounded-3xl blur-2xl" />
                        <div className="relative bg-[#0f172a] border border-white/5 rounded-3xl p-8 overflow-hidden">
                            {/* Fake "Notification" Stack */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 animate-in slide-in-from-bottom-4 duration-700">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">Your reel is trending!</p>
                                        <p className="text-gray-400 text-xs">+15,400 views in the last hour</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 animate-in slide-in-from-bottom-4 duration-700 delay-150">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">New Followers</p>
                                        <p className="text-gray-400 text-xs">+843 followers today</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                        <DollarSign className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">New Sales</p>
                                        <p className="text-gray-400 text-xs">You made $1,240.00 today</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Graph */}
                            <div className="mt-8 pt-8 border-t border-white/5">
                                <div className="flex items-end justify-between gap-2 h-32">
                                    {[30, 45, 35, 60, 50, 80, 75, 90, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-full bg-gradient-to-t from-amber-500/20 to-orange-500/50 rounded-t-sm"
                                            initial={{ height: "10%" }}
                                            whileInView={{ height: `${h}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: i * 0.1 }}
                                        />
                                    ))}
                                </div>
                                <p className="text-center text-xs text-gray-500 mt-4 uppercase tracking-widest">30 Day Growth</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
