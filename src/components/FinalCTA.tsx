import React from 'react';
import { DollarSign, Zap, Target, Clock } from 'lucide-react';
import { StartNowButton } from './StartNowButton';

export const FinalCTA: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-[#020617] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#020617] pointer-events-none" />

            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative mx-auto px-4 sm:px-6 text-center z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6 text-sm font-medium">
                    <Zap className="w-4 h-4" /> Limited Time Opportunity
                </div>

                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight font-heading">
                    Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Success Story</span>
                    <br />Starts Here
                </h2>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Join our community of entrepreneurs building sustainable digital businesses with premium templates.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                    {[
                        { icon: <DollarSign />, label: "Build Recurring Revenue" },
                        { icon: <Zap />, label: "Start Your Journey Today" },
                        { icon: <Target />, label: "Premium Market Position" },
                        { icon: <Clock />, label: "Lifetime Updates" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 shadow-lg hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                                {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                            </div>
                            <span className="font-medium text-gray-300 text-sm text-left">{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <StartNowButton text="Get Instant Access" className="!px-12 !py-6 !text-xl shadow-2xl shadow-amber-500/20" />
                </div>
            </div>
        </section>
    );
};
