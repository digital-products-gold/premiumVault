import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
    question: string;
    answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5 last:border-0">
            <button
                className="flex items-center justify-between w-full py-6 text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-medium transition-colors font-heading ${isOpen ? 'text-amber-400' : 'text-white group-hover:text-amber-400'}`}>
                    {question}
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const faqs = [
        { q: "What's included in the template package?", a: "You get instant access to our entire library of over 200 millions digital products, including Notion templates, Canva designs, ebooks, courses, and much more. Everything includes PLR/MMR rights." },
        { q: "Do I need technical skills to sell these products?", a: "Not at all. Most of our products are compatible with user-friendly platforms. We provide guides on how to edit and list them." },
        { q: "How much can I sell each product for?", a: "You have complete pricing freedom. Most of our members sell individual products for $20-$50, and bundles for $97+. You keep 100% of the profit." },
        { q: "Are there any recurring fees or royalties?", a: "No. You pay a one-time fee for lifestyle access (or the annual plan). There are no royalties, hidden fees, or profit splitting. What you make is yours." },
        { q: "How do I deliver the products to customers?", a: "You can host the files on Gumroad, Etsy, Google Drive, or your own website. We show you the best ways to automate delivery." },
        { q: "Can I modify and rebrand the products?", a: "Yes! That's the beauty of PLR/MMR (Private Label Rights). You can change colors, add your logo, edit the content, and claim full authorship." }
    ];

    return (
        <section id="faq" className="py-20 lg:py-32 bg-[#020617] relative">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 font-heading">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Questions</span></h2>
                    <p className="text-gray-400 text-lg">Everything you need to know about starting your digital product business.</p>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};
