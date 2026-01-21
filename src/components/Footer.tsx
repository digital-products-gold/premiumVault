import React from 'react';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#020617] border-t border-white/5 pt-16 pb-8 text-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#020617] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-7xl mx-auto space-y-12">

                    <div className="grid md:grid-cols-2 gap-12 text-gray-500">
                        <div>
                            <h3 className="font-semibold text-white mb-4 font-heading tracking-wide">Earnings & Income Disclaimer</h3>
                            <p className="leading-relaxed mb-4 text-gray-400">
                                Success in any business venture is not guaranteed and depends on many factors including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort.
                            </p>
                            <p className="leading-relaxed text-gray-400">
                                We make no claims about potential earnings or income. Testimonials shown are real experiences from paying customers, but results are not typical.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4 font-heading tracking-wide">Third-Party Disclaimer</h3>
                            <p className="leading-relaxed text-gray-400">
                                The assets, content, and products on this website are not part of, endorsed by, or affiliated with Meta, Google, Notion, or any other third-party companies mentioned. All product and company names are trademarks™ or registered® trademarks of their respective holders.
                            </p>

                            <div className="mt-8 flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                                    <Lock className="w-4 h-4 text-emerald-500" />
                                    <span>256-Bit SSL Secured</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                                    <span>Verified Business</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                                    <CreditCard className="w-4 h-4 text-purple-500" />
                                    <span>Secure Payment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <span className="font-bold text-white text-xl font-heading tracking-tight">Premium Vault</span>
                        </div>
                        <div className="text-gray-600">
                            © 2026 Premium Vault. All rights reserved.
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};
