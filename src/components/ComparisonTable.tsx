import React from 'react';
import { Check, X } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const features = [
    { name: "Complete Sales Funnel", us: true, others: false },
    { name: "Keep 100% Profits", us: true, others: false },
    { name: "Professional Design", us: true, others: false },
    { name: "One-time Payment", us: true, others: false },
    { name: "Priority Support", us: true, others: false },

    { name: "White-Label Rights", us: true, others: false },
    { name: "200 Million Digital Products and Assets", us: true, others: false },
];

export const ComparisonTable: React.FC = () => {
    return (
        <section id="features" className="py-20 lg:py-32 bg-[#020617] relative">
            <div className="container mx-auto px-4 sm:px-6">
                <SectionHeading
                    title="Why We Are The"
                    highlight="Best Choice"
                    subtitle="Stop wasting time and money on incomplete solutions."
                />

                <div className="max-w-4xl mx-auto mt-16">
                    <div className="bg-slate-900/40 rounded-3xl border border-white/5 overflow-hidden backdrop-blur-sm">

                        {/* Header Row */}
                        <div className="grid grid-cols-3 p-6 border-b border-white/5 bg-white/5">
                            <div className="col-span-1 text-left font-bold text-gray-400">Features</div>
                            <div className="col-span-1 text-center font-bold text-amber-500 text-lg">Premium Vault</div>
                            <div className="col-span-1 text-center font-bold text-gray-400">Others</div>
                        </div>

                        {/* Rows */}
                        <div className="divide-y divide-white/5">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-3 p-6 items-center hover:bg-white/5 transition-colors ${index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}`}
                                >
                                    <div className="col-span-1 text-left font-medium text-gray-200 text-sm sm:text-base">
                                        {feature.name}
                                    </div>
                                    <div className="col-span-1 flex justify-center">
                                        <div className="bg-amber-500/20 p-1.5 rounded-full">
                                            <Check className="w-5 h-5 text-amber-500" />
                                        </div>
                                    </div>
                                    <div className="col-span-1 flex justify-center">
                                        <div className="bg-red-500/10 p-1.5 rounded-full">
                                            <X className="w-5 h-5 text-red-500/50" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
