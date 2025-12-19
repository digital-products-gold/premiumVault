import React from 'react';
import { StartNowButton } from './StartNowButton';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-[#030712] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-6">
                            The Brutal Reality
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Finding Profitable <br />
                            <span className="text-gray-500">Digital Products Is</span> <br />
                            Getting Impossible
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Most entrepreneurs fail not because they lack skill, but because they run out of time and money before they even launch their first product.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 bg-red-500/5 border border-red-500/10 rounded-xl">
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                    <X className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">89% Dreams Shattered</div>
                                    <div className="text-gray-400 text-sm">Of new creators quit within 3 months</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-red-500/5 border border-red-500/10 rounded-xl">
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                    <X className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">$12K Average Loss</div>
                                    <div className="text-gray-400 text-sm">Wasted on freelancers and tools</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Comparison Table */}
                    <div className="mt-12 lg:mt-0">
                        <div className="relative overflow-hidden rounded-xl border border-pink-500/20 bg-gray-900/50 backdrop-blur-sm">
                            {/* Header */}
                            <div className="grid grid-cols-2">
                                <div className="bg-red-600/90 p-4 flex items-center justify-center gap-2">
                                    <X className="w-5 h-5 text-white" />
                                    <h3 className="text-sm sm:text-xl font-bold text-white">The Old Way</h3>
                                </div>
                                <div className="bg-emerald-600/90 p-4 flex items-center justify-center gap-2 border-l border-emerald-500">
                                    <Check className="w-5 h-5 text-white" />
                                    <h3 className="text-sm sm:text-xl font-bold text-white">The PLR Way</h3>
                                </div>
                            </div>

                            {/* Row 1: Market Research */}
                            <div className="grid grid-cols-2 border-t border-pink-500/20">
                                <div className="bg-white p-4 relative">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="hidden sm:flex w-6 h-6 rounded-full bg-red-500/20 items-center justify-center text-xs font-bold text-red-500">1</div>
                                        <h4 className="font-semibold text-red-600 text-sm sm:text-base">Market Research</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1 pl-0 sm:pl-8">Spend weeks analyzing trends</p>
                                    <div className="text-xs sm:text-sm font-bold text-red-500 pl-0 sm:pl-8">2-3 weeks</div>
                                </div>
                                <div className="bg-white p-4 relative border-l border-pink-500/20">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="hidden sm:flex w-6 h-6 rounded-full bg-emerald-500/20 items-center justify-center text-xs font-bold text-emerald-500">1</div>
                                        <h4 className="font-semibold text-emerald-600 text-sm sm:text-base">Choose Product</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1 pl-0 sm:pl-8">Browse proven sellers</p>
                                    <div className="text-xs sm:text-sm font-bold text-emerald-500 pl-0 sm:pl-8">5 mins</div>
                                </div>
                            </div>

                            {/* Row 2: Product Development */}
                            <div className="grid grid-cols-2 border-t border-pink-500/20">
                                <div className="bg-white p-4 relative">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="hidden sm:flex w-6 h-6 rounded-full bg-red-500/20 items-center justify-center text-xs font-bold text-red-500">2</div>
                                        <h4 className="font-semibold text-red-600 text-sm sm:text-base">Development</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1 pl-0 sm:pl-8">Hire designers & devs</p>
                                    <div className="text-xs sm:text-sm font-bold text-red-500 pl-0 sm:pl-8">3-6 months</div>
                                </div>
                                <div className="bg-white p-4 relative border-l border-pink-500/20">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="hidden sm:flex w-6 h-6 rounded-full bg-emerald-500/20 items-center justify-center text-xs font-bold text-emerald-500">2</div>
                                        <h4 className="font-semibold text-emerald-600 text-sm sm:text-base">Customize</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1 pl-0 sm:pl-8">Add your branding</p>
                                    <div className="text-xs sm:text-sm font-bold text-emerald-500 pl-0 sm:pl-8">15 mins</div>
                                </div>
                            </div>

                            {/* Row 3: Testing */}
                            <div className="grid grid-cols-2 border-t border-pink-500/20">
                                <div className="bg-white p-4 relative">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="hidden sm:flex w-6 h-6 rounded-full bg-red-500/20 items-center justify-center text-xs font-bold text-red-500">3</div>
                                        <h4 className="font-semibold text-red-600 text-sm sm:text-base">Testing</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1 pl-0 sm:pl-8">Iterations & beta testing</p>
                                    <div className="text-xs sm:text-sm font-bold text-red-500 pl-0 sm:pl-8">1-2 months</div>
                                </div>
                                <div className="bg-white p-4 relative border-l border-pink-500/20">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="hidden sm:flex w-6 h-6 rounded-full bg-emerald-500/20 items-center justify-center text-xs font-bold text-emerald-500">3</div>
                                        <h4 className="font-semibold text-emerald-600 text-sm sm:text-base">Preview</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1 pl-0 sm:pl-8">Instant preview</p>
                                    <div className="text-xs sm:text-sm font-bold text-emerald-500 pl-0 sm:pl-8">2 mins</div>
                                </div>
                            </div>

                            {/* Row 4: Marketing */}
                            <div className="grid grid-cols-2 border-t border-pink-500/20">
                                <div className="bg-white p-4 relative">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="hidden sm:flex w-6 h-6 rounded-full bg-red-500/20 items-center justify-center text-xs font-bold text-red-500">4</div>
                                        <h4 className="font-semibold text-red-600 text-sm sm:text-base">Marketing</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1 pl-0 sm:pl-8">Create sales funnels</p>
                                    <div className="text-xs sm:text-sm font-bold text-red-500 pl-0 sm:pl-8">2-4 weeks</div>
                                </div>
                                <div className="bg-white p-4 relative border-l border-pink-500/20">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="hidden sm:flex w-6 h-6 rounded-full bg-emerald-500/20 items-center justify-center text-xs font-bold text-emerald-500">4</div>
                                        <h4 className="font-semibold text-emerald-600 text-sm sm:text-base">Download</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1 pl-0 sm:pl-8">Get all materials</p>
                                    <div className="text-xs sm:text-sm font-bold text-emerald-500 pl-0 sm:pl-8">1 min</div>
                                </div>
                            </div>

                            {/* Row 5: Launch */}
                            <div className="grid grid-cols-2 border-t border-pink-500/20">
                                <div className="bg-white p-4 relative">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="hidden sm:flex w-6 h-6 rounded-full bg-red-500/20 items-center justify-center text-xs font-bold text-red-500">5</div>
                                        <h4 className="font-semibold text-red-600 text-sm sm:text-base">Launch Prep</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1 pl-0 sm:pl-8">Setup payment systems</p>
                                    <div className="text-xs sm:text-sm font-bold text-red-500 pl-0 sm:pl-8">1-2 weeks</div>
                                </div>
                                <div className="bg-white p-4 relative border-l border-pink-500/20">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="hidden sm:flex w-6 h-6 rounded-full bg-emerald-500/20 items-center justify-center text-xs font-bold text-emerald-500">5</div>
                                        <h4 className="font-semibold text-emerald-600 text-sm sm:text-base">Start Selling</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1 pl-0 sm:pl-8">Upload & sell</p>
                                    <div className="text-xs sm:text-sm font-bold text-emerald-500 pl-0 sm:pl-8">2 mins</div>
                                </div>
                            </div>

                            {/* Total Row */}
                            <div className="grid grid-cols-2 border-t border-pink-500/20">
                                <div className="bg-red-600 p-4 text-center text-white font-bold text-sm sm:text-base">
                                    Total: 4-6 Months
                                </div>
                                <div className="bg-emerald-600 p-4 text-center text-white font-bold text-sm sm:text-base border-l border-emerald-500">
                                    Total: 25 Minutes
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <StartNowButton text="Get All Premium Products" className="w-full sm:w-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

