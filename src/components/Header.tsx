import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 font-heading">
                            P
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight font-heading">Premium Vault</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Features', 'Products', 'Showcase', 'Testimonials', 'Pricing', 'FAQ'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>



                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-400 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#020617] border-b border-white/10 p-4 animate-in slide-in-from-top-5">
                    <div className="flex flex-col gap-4">
                        {['Features', 'Products', 'Showcase', 'Testimonials', 'Pricing', 'FAQ'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-base font-medium text-gray-300 hover:text-white py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <div className="h-px bg-white/10 my-2" />

                    </div>
                </div>
            )}
        </header>
    );
};
