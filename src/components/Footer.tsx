import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#030712] border-t border-white/5 pt-16 pb-8 text-sm">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-7xl mx-auto space-y-12">

                    <div className="grid md:grid-cols-2 gap-12 text-gray-500">
                        <div>
                            <h3 className="font-semibold text-white mb-4">Earnings & Income Disclaimer</h3>
                            <p className="leading-relaxed mb-4">
                                Success in any business venture is not guaranteed and depends on many factors including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort.
                            </p>
                            <p className="leading-relaxed">
                                We make no claims about potential earnings or income. Testimonials shown are real experiences from paying customers, but results are not typical.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">Third-Party Disclaimer</h3>
                            <p className="leading-relaxed">
                                The assets, content, and products on this website are not part of, endorsed by, or affiliated with Meta, Google, Notion, or any other third-party companies mentioned. All product and company names are trademarks™ or registered® trademarks of their respective holders.
                            </p>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <span className="font-bold text-white text-lg">PLRMRR</span>
                            <div className="flex flex-wrap justify-center gap-6 text-gray-500">
                                <a href="#" className="hover:text-white transition-colors">Terms</a>
                                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                                <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Contact</a>
                            </div>
                        </div>
                        <div className="text-gray-600">
                            © 2024 Coaching Marketing Kit LLC. All rights reserved.
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};
