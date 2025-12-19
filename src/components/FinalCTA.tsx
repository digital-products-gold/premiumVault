import React from 'react';
import { DollarSign, Zap, Target, Clock } from 'lucide-react';
import { StartNowButton } from './StartNowButton';

export const FinalCTA: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-pink-50 opacity-50"></div>

            <div className="container relative mx-auto px-4 sm:px-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-600 mb-6 text-sm font-medium">
                    <Zap className="w-4 h-4" /> Limited Time Opportunity
                </div>

                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                    Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">Success Story</span>
                    <br />Starts Here
                </h2>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                    Join our community of entrepreneurs building sustainable digital businesses with premium templates.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                    {[
                        { icon: <DollarSign />, label: "Build Recurring Revenue" },
                        { icon: <Zap />, label: "Start Your Journey Today" },
                        { icon: <Target />, label: "Premium Market Position" },
                        { icon: <Clock />, label: "Lifetime Updates" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500">
                                {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                            </div>
                            <span className="font-medium text-gray-700 text-sm text-left">{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <StartNowButton text="Get Instant Access" className="shadow-xl shadow-pink-500/30 !px-12 !py-6 !text-xl" />
                </div>
            </div>
        </section>
    );
};
