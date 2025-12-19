import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ShoppingBag, Store, Globe, Share2, Rocket, Users } from 'lucide-react';

export const SalesChannels: React.FC = () => {
    const channels = [
        {
            icon: <ShoppingBag />,
            name: "Gumroad",
            description: "Perfect for digital creators with instant payouts and flexible pricing",
            features: [
                "No monthly fees - only pay when you make a sale",
                "Built-in email marketing tools",
                "Automated delivery & licensing",
                "Custom checkout experience"
            ],
            guide: [
                "Create a Gumroad account (free)",
                "Upload your template bundle with professional thumbnails",
                "Set tiered pricing (Basic/Pro/Agency)",
                "Enable affiliate program to boost sales"
            ]
        },
        {
            icon: <Store />,
            name: "Etsy",
            description: "Tap into a massive marketplace of buyers looking for digital products",
            features: [
                "Access to 90M+ active buyers",
                "Built-in SEO and traffic",
                "High trust factor with buyers",
                "Multiple payment options"
            ],
            guide: [
                "Open your Etsy shop ($0.20/listing)",
                "Create detailed product listings with keywords",
                "Add multiple template variations",
                "Offer bundle deals for higher AOV"
            ]
        },
        {
            icon: <Globe />,
            name: "Your Website",
            description: "Maximum control and profits with your own branded platform",
            features: [
                "Keep 100% of revenue",
                "Full control over branding",
                "Build your email list",
                "Create custom bundles"
            ],
            guide: [
                "Set up a professional landing page",
                "Connect payment processor (Stripe)",
                "Install analytics tracking",
                "Create content to drive organic traffic"
            ]
        },
        {
            icon: <Share2 />,
            name: "Social Platforms",
            description: "Leverage your existing audience on Twitter, LinkedIn & Instagram",
            features: [
                "Direct access to your audience",
                "Organic reach potential",
                "Build authority in your niche",
                "Real-time market feedback"
            ],
            guide: [
                "Create platform-specific content",
                "Share template previews & results",
                "Engage with potential customers",
                "Use platform-specific CTAs"
            ]
        },
        {
            icon: <Rocket />,
            name: "Course Platforms",
            description: "Bundle templates with courses for higher ticket sales",
            features: [
                "Higher perceived value",
                "Recurring revenue potential",
                "Built-in audience",
                "Enhanced credibility"
            ],
            guide: [
                "Create a mini-course around your templates",
                "Price premium ($497-$997)",
                "Offer implementation support",
                "Create student success stories"
            ]
        },
        {
            icon: <Users />,
            name: "Partnerships",
            description: "Scale through strategic partnerships and affiliates",
            features: [
                "Rapid audience growth",
                "Shared credibility",
                "Multiple revenue streams",
                "Network effect"
            ],
            guide: [
                "Identify potential partners",
                "Create attractive commission structure",
                "Provide marketing materials",
                "Track & optimize performance"
            ]
        }
    ];

    return (
        <section className="relative bg-[#030712] py-20 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-violet-500/5 to-pink-500/10 blur-[100px] opacity-30" />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6">
                <SectionHeading
                    badge="Multiple Revenue Streams"
                    title="Sell Everywhere Your"
                    highlight="Customers Are"
                    subtitle="Don't limit yourself to one platform. Create multiple revenue streams and maximize your earnings."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {channels.map((c, i) => (
                        <div key={i} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
                                        {React.cloneElement(c.icon as React.ReactElement, { className: "w-6 h-6 text-pink-400" })}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">
                                            {c.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4">
                                            {c.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 mt-6">
                                    {c.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                            <div className="w-5 h-5 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-pink-500/10">
                                    <h4 className="text-sm font-medium text-pink-400 mb-2">Quick Start Guide:</h4>
                                    <ol className="space-y-2">
                                        {c.guide.map((step, idx) => (
                                            <li key={idx} className="text-sm text-gray-400 flex gap-2">
                                                <span className="text-pink-400">{idx + 1}.</span>
                                                {step}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
