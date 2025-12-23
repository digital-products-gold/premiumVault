import React from 'react';

interface SectionHeadingProps {
    title: string;
    highlight?: string;
    subtitle?: string;
    badge?: string;
    align?: 'left' | 'center';
    light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    highlight,
    subtitle,
    badge,
    align = 'center',
    light = false
}) => {
    return (
        <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            {badge && (
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${light
                    ? 'bg-amber-100 border-amber-200 text-amber-700'
                    : 'bg-amber-500/10 border-amber-500/20 text-amber-500'
                    }`}>
                    {badge}
                </div>
            )}

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${light ? 'text-gray-900' : 'text-white'}`}>
                {title}
                {highlight && (
                    <span className="block mt-2 bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
                        {highlight}
                    </span>
                )}
            </h2>

            {subtitle && (
                <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed ${light ? 'text-gray-600' : 'text-gray-400'}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};
