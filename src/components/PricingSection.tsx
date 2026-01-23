import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Check } from 'lucide-react';
import { StartNowButton } from './StartNowButton';
import { GuaranteeBadge } from './GuaranteeBadge';

export const PricingSection: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://digitalstoregames.pythonanywhere.com/createStripeLink?sid=50&storeid=5');
            const data = await response.json();
            if (data.checkout_url) {
                window.open(data.checkout_url, '_blank');
            } else {
                console.error("No checkout URL found");
            }
        } catch (error) {
            console.error("Error creating checkout link:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="pricing" className="py-20 lg:py-32 bg-[#020617] relative">
            <div className="container mx-auto px-4 sm:px-6">
                <SectionHeading
                    title="Start Your Digital Business"
                    highlight="With Confidence"
                    subtitle="One huge library. One tiny price. No hidden fees."
                />

                <div className="mb-16"></div>

                <div className="max-w-xl mx-auto mt-12">
                    {/* Single Lifetime Plan */}
                    <div className="relative rounded-2xl border bg-[#0f172a] border-amber-500/50 shadow-2xl shadow-amber-500/10 p-8 sm:p-10 transform hover:scale-[1.02] transition-transform duration-300 z-10">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-rose-600 text-white px-6 py-2 rounded-full text-base font-bold shadow-lg tracking-wide uppercase whitespace-nowrap animate-pulse">
                            🔥 Special Promotion • 87% OFF
                        </div>

                        <div className="mb-10 text-center">
                            <h3 className="text-3xl font-bold text-white font-heading mb-4">Lifetime Access</h3>
                            <p className="text-gray-400">Pay once, profit forever. <span className="text-amber-400 font-bold">No recurring fees.</span></p>

                            <div className="mt-8 flex flex-col items-center justify-center">
                                <div className="text-gray-500 text-xl font-medium line-through mb-1">Was $150</div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-7xl font-bold text-white font-heading tracking-tight">$19</span>
                                    <span className="text-gray-400 font-medium">one-time</span>
                                </div>
                                <div className="mt-3 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-1.5">
                                    <span className="text-amber-500 text-sm font-bold">⚠️ Limited Time Offer</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-10">
                            {/* Feature Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {["PLR + MRR License", "LifeTime Access", "200 Million Digital Products and Assets", "White-Label Rights", "Unlimited Downloads", "Priority Support"].map((f, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="bg-green-500/20 rounded-full p-1 mt-0.5">
                                            <Check className="w-3 h-3 flex-shrink-0 text-green-500" />
                                        </div>
                                        <span className="text-gray-200 text-sm font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Guarantee Badge - NEW SVG VERSION */}
                        <div className="flex items-center gap-4 bg-slate-900/50 border border-amber-500/20 rounded-xl p-4 mb-8 group hover:border-amber-500/40 transition-colors">
                            <GuaranteeBadge className="w-20 h-20 flex-shrink-0 drop-shadow-lg" />
                            <div>
                                <h4 className="text-amber-400 font-bold text-sm uppercase tracking-wide">30-Day Money Back Guarantee</h4>
                                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                                    If you're not 100% satisfied with the quality of these assets, we'll refund your $19. No questions asked.
                                </p>
                            </div>
                        </div>

                        <StartNowButton
                            text={loading ? "Processing..." : "Claim Deal for $19"}
                            className="w-full justify-center py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-amber-500/25 font-bold text-xl rounded-xl"
                            onClick={handleCheckout}
                            disabled={loading}
                        />

                        <p className="text-center text-xs text-gray-500 mt-4">
                            30-Day Money-Back Guarantee. Secure Checkout.
                        </p>
                    </div>
                </div>

                <div className="mt-12 sm:mt-16 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            <span>Instant Access</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            <span>Lifetime Updates</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            <span>Secure SSL Payment</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
