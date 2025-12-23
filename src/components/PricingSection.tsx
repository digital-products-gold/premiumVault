import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Check } from 'lucide-react';
import { StartNowButton } from './StartNowButton';

export const PricingSection: React.FC = () => {
    const [annual, setAnnual] = useState(true);

    return (
        <section id="pricing" className="py-20 lg:py-32 bg-[#020617] relative">
            <div className="container mx-auto px-4 sm:px-6">
                <SectionHeading
                    title="Start Your Digital Business"
                    highlight="With Confidence"
                    subtitle="Choose the plan that fits your goals. No hidden fees, cancel anytime."
                />

                <div className="mb-16"></div>

                <div className="grid md:grid-cols-2 max-w-4xl gap-8 mx-auto mt-12">
                    {/* Annual Plan */}
                    <div className="relative rounded-2xl border bg-white border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 font-heading">Annual</h3>
                            <p className="mt-2 text-sm text-gray-500 min-h-[3rem]">Simple Pricing. All Product Access</p>
                            <div className="mt-6">
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-gray-900 font-heading">$7</span>
                                    <span className="ml-2 text-gray-500">/month</span>
                                </div>
                                <div className="mt-1">
                                    <span className="text-sm text-gray-500">Per month billed yearly</span>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-start">
                                <div className="flex items-center gap-3">
                                    <button onClick={() => setAnnual(true)} className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${annual ? 'bg-green-500' : 'bg-gray-300'}`}>
                                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${annual ? 'translate-x-7' : 'translate-x-1'}`} />
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-700">Billed Yearly</span>
                                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full font-bold">Save 50%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className="mt-8 space-y-4 min-h-[16rem]">
                            {["PLR + MRR License", "Access to 1M+ PLR Products", "Commercial Usage Rights", "Unlimited Downloads", "Regular Updates", "Ready-to-Sell Templates"].map((f, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-500" />
                                    <span className="text-gray-600">{f}</span>
                                </li>
                            ))}
                        </ul>

                        <StartNowButton text="Get Instant Access" className="w-full justify-center mt-8 bg-[#0f172a] hover:bg-[#1e293b] text-white shadow-lg" />
                    </div>

                    {/* Lifetime Plan */}
                    <div className="relative rounded-2xl border bg-[#0f172a] border-amber-500/50 shadow-2xl shadow-amber-500/10 p-6 sm:p-8 scale-105 z-10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg tracking-wide uppercase">
                            Best Value • 50% Off
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white font-heading">Lifetime</h3>
                            <p className="mt-2 text-sm text-gray-400 min-h-[3rem]">Pay once, own it forever. <span className="text-amber-400 font-bold">No recurring fees.</span></p>
                            <div className="mt-6">
                                <div className="flex items-baseline">
                                    <span className="text-5xl font-bold text-white font-heading">$47</span>
                                    <span className="ml-2 text-gray-400">one-time</span>
                                </div>
                            </div>
                            {/* Spacer to align with toggle in first column */}
                            <div className="mt-6 h-[64px] hidden md:flex items-center">
                                <div className="text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/20 px-3 py-1 rounded bg-amber-500/10">
                                    Limited Time Offer
                                </div>
                            </div>
                        </div>

                        <ul className="mt-8 space-y-4 min-h-[16rem]">
                            {["PLR + MRR License", "Lifetime Updates Access", "White-Label Rights", "All Future Updates", "Premium Marketing Kit", "Business Analytics Tools"].map((f, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="bg-amber-500/20 rounded-full p-0.5">
                                        <Check className="w-4 h-4 flex-shrink-0 text-amber-500" />
                                    </div>
                                    <span className="text-gray-200">{f}</span>
                                </li>
                            ))}
                        </ul>

                        <StartNowButton text="Get Lifetime Access" className="w-full justify-center mt-8 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-amber-500/25 font-bold text-lg" />
                    </div>
                </div>

                <div className="mt-12 sm:mt-16 text-center">
                    <div className="flex justify-center items-center text-sm text-gray-500">
                        <div className="flex items-center divide-x divide-gray-800">
                            <div className="flex items-center gap-2 px-8"><span>Instant Access</span></div>
                            <div className="flex items-center gap-2 px-8"><span>Lifetime Updates</span></div>
                            <div className="flex items-center gap-2 px-8"><span>Premium Support</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
