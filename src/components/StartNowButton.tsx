import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn'; // Need to create this utility or just inline clsx

interface StartNowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    icon?: boolean;
}

export const StartNowButton: React.FC<StartNowButtonProps & { href?: string }> = ({
    text = "Get All Templates",
    variant = 'primary',
    className,
    icon = true,
    href,
    ...props
}) => {
    const baseStyles = "group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-lg font-medium transition-all duration-300 pointer-events-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

    const variants = {
        primary: "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:from-amber-600 hover:to-orange-700",
        secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
        outline: "border border-amber-500/20 text-amber-500 hover:border-amber-500/40 hover:bg-amber-500/10"
    };

    if (href) {
        return (
            <a
                href={href}
                className={cn(baseStyles, variants[variant], className)}
            >
                {text}
                {icon && (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                )}
            </a>
        );
    }

    return (
        <button
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {text}
            {icon && (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            )}
        </button>
    );
};
