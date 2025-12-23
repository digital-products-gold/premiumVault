import React from 'react';
import { StartNowButton } from './StartNowButton';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-[#020617] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0f172a] shadow-2xl">
                        {/* Header */}
                        <div className="grid grid-cols-2">
                            <div className="bg-slate-800 p-6 flex items-center justify-center gap-3">
                                <X className="w-5 h-5 text-gray-500" />
                                <h3 className="text-lg sm:text-2xl font-bold text-gray-400">The Hard Way</h3>
                            </div>
                            <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 flex items-center justify-center gap-3 relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/10 animate-pulse-slow"></div>
                                <Check className="w-6 h-6 text-white relative z-10" />
                                <h3 className="text-lg sm:text-2xl font-bold text-white relative z-10">The PLR Way</h3>
                            </div>
                        </div>

                        {/* Row 1: Market Research */}
                        <div className="grid grid-cols-2 border-t border-white/5 divide-x divide-white/5">
                            <div className="bg-[#0f172a]/50 p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold text-gray-500">1</div>
                                    <h4 className="font-semibold text-gray-300 text-base sm:text-lg">Market Research</h4>
                                </div>
                                <div className="pl-11 space-y-1">
                                    <p className="text-sm text-gray-500">Analyze trends & competition</p>
                                    <div className="text-sm font-bold text-red-400">2-3 Weeks</div>
                                </div>
                            </div>
                            <div className="bg-[#1e293b]/50 p-6 sm:p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-sm font-bold text-amber-500">1</div>
                                        <h4 className="font-semibold text-white text-base sm:text-lg">Pick a Winner</h4>
                                    </div>
                                    <div className="pl-11 space-y-1">
                                        <p className="text-sm text-gray-400">Choose from proven bestsellers</p>
                                        <div className="text-sm font-bold text-amber-400">5 Minutes</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Product Development */}
                        <div className="grid grid-cols-2 border-t border-white/5 divide-x divide-white/5">
                            <div className="bg-[#0f172a]/50 p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold text-gray-500">2</div>
                                    <h4 className="font-semibold text-gray-300 text-base sm:text-lg">Creation</h4>
                                </div>
                                <div className="pl-11 space-y-1">
                                    <p className="text-sm text-gray-500">Write, design, record content</p>
                                    <div className="text-sm font-bold text-red-400">3-6 Months</div>
                                </div>
                            </div>
                            <div className="bg-[#1e293b]/50 p-6 sm:p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-sm font-bold text-amber-500">2</div>
                                        <h4 className="font-semibold text-white text-base sm:text-lg">Rebrand It</h4>
                                    </div>
                                    <div className="pl-11 space-y-1">
                                        <p className="text-sm text-gray-400">Add your logo & name</p>
                                        <div className="text-sm font-bold text-amber-400">15 Minutes</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Tech Setup */}
                        <div className="grid grid-cols-2 border-t border-white/5 divide-x divide-white/5">
                            <div className="bg-[#0f172a]/50 p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold text-gray-500">3</div>
                                    <h4 className="font-semibold text-gray-300 text-base sm:text-lg">Tech Setup</h4>
                                </div>
                                <div className="pl-11 space-y-1">
                                    <p className="text-sm text-gray-500">Build website & funnels</p>
                                    <div className="text-sm font-bold text-red-400">1-2 Months</div>
                                </div>
                            </div>
                            <div className="bg-[#1e293b]/50 p-6 sm:p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-sm font-bold text-amber-500">3</div>
                                        <h4 className="font-semibold text-white text-base sm:text-lg">Instant Sales</h4>
                                    </div>
                                    <div className="pl-11 space-y-1">
                                        <p className="text-sm text-gray-400">Use our pre-built funnels</p>
                                        <div className="text-sm font-bold text-amber-400">2 Minutes</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Total Row */}
                        <div className="grid grid-cols-2 border-t border-white/5 divide-x divide-white/5">
                            <div className="bg-[#0f172a] p-6 text-center">
                                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Time to First Dollar</div>
                                <div className="text-xl sm:text-2xl font-bold text-red-400 font-mono">6+ MONTHS</div>
                            </div>
                            <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 p-6 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-amber-500/10 animate-pulse-slow"></div>
                                <div className="relative z-10">
                                    <div className="text-xs text-amber-400 uppercase tracking-wider mb-1">Time to First Dollar</div>
                                    <div className="text-xl sm:text-2xl font-bold text-white font-mono">TODAY</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <StartNowButton text="Start Your Empire Today" className="w-full sm:w-auto px-12 py-4 text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

