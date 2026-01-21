import React from 'react';
import { motion } from 'framer-motion';
import {
    Brain,
    Code2,
    Coins,
    Megaphone,
    CheckCircle2,
    GraduationCap
} from 'lucide-react';
import { StartNowButton } from './StartNowButton';
import { SectionHeading } from './SectionHeading';

const courses = [
    {
        title: "Artificial Intelligence",
        icon: <Brain className="w-8 h-8 text-purple-400" />,
        skills: ["Prompt Engineering", "Midjourney Mastery", "ChatGPT & LLMs"],
        value: "$297.00",
        color: "purple"
    },
    {
        title: "Digital Marketing",
        icon: <Megaphone className="w-8 h-8 text-pink-400" />,
        skills: ["Social Media Growth", "Copywriting Secrets", "Paid Ads"],
        value: "$197.00",
        color: "pink"
    },
    {
        title: "Software Development",
        icon: <Code2 className="w-8 h-8 text-blue-400" />,
        skills: ["Web Development", "Python Automation", "No-Code Tools"],
        value: "$297.00",
        color: "blue"
    },
    {
        title: "Finance & Wealth",
        icon: <Coins className="w-8 h-8 text-amber-400" />,
        skills: ["Crypto Investing", "Business Scaling", "Passive Income"],
        value: "$197.00",
        color: "amber"
    }
];

export const CoursesSection: React.FC = () => {
    return (
        <section className="relative py-24 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <SectionHeading
                    title="Your Own Online University"
                    highlight="Included Free"
                    subtitle="Master high-income skills or sell these courses as your own products."
                    align="center"
                />

                <div className="flex flex-col lg:flex-row gap-12 items-start mt-16 max-w-7xl mx-auto">

                    {/* LEFT: The Courses Grid */}
                    <div className="w-full lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    {course.icon}
                                </div>

                                <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                    {course.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {course.skills.map((skill, i) => (
                                        <span key={i} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="text-sm text-gray-500">Real World Value</div>
                                    <div className="text-lg font-bold font-mono text-gray-300 line-through decoration-red-500/50 decoration-2">{course.value}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* RIGHT: Value Stack & Pitch */}
                    <div className="w-full lg:w-1/3 relative sticky top-24">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-3xl blur-xl" />
                        <div className="relative bg-[#0f172a] border border-amber-500/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
                            {/* "Included" Banner */}
                            <div className="absolute top-5 right-[-2.5rem] rotate-45 bg-amber-500 text-[#020617] font-bold text-xs py-1 px-12 shadow-lg z-20">
                                INCLUDED
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <GraduationCap className="w-6 h-6 text-amber-400" />
                                Value Stack
                            </h3>
                            <p className="text-gray-400 text-sm mb-6">If purchased separately:</p>

                            <div className="space-y-3 mb-8">
                                {courses.map((c, i) => (
                                    <div key={i} className="flex justify-between items-center text-sm">
                                        <span className="text-gray-300">{c.title}</span>
                                        <span className="text-gray-400 font-mono">{c.value}</span>
                                    </div>
                                ))}
                                <div className="h-px bg-white/10 my-4" />
                                <div className="flex justify-between items-center text-lg">
                                    <span className="font-bold text-white">Total Value</span>
                                    <span className="font-bold font-mono text-red-400 line-through decoration-white/50">$988.00</span>
                                </div>
                                <div className="flex justify-between items-center text-xl mt-2 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
                                    <span className="font-bold text-amber-400">Your Price</span>
                                    <span className="font-bold font-mono text-white">FREE</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 bg-green-500 rounded-full p-0.5">
                                            <CheckCircle2 className="w-3 h-3 text-[#020617]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm">100% Master Resell Rights</h4>
                                            <p className="text-green-400 text-xs mt-1">Sell these courses as your own. Keep every penny.</p>
                                        </div>
                                    </div>
                                </div>

                                <StartNowButton
                                    text="Unlock The University"
                                    className="w-full justify-center bg-white text-black hover:bg-gray-200 border-none"
                                    href="#pricing"
                                />
                                <p className="text-center text-xs text-gray-500">Instant Access • Lifetime Updates</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
