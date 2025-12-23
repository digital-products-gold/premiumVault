import React from 'react';
import { Heart } from 'lucide-react';

interface TweetCardProps {
    name: string;
    handle: string;
    avatar: string;
    content: string;
    date: string;
    likes: string;
}

export const TweetCard: React.FC<TweetCardProps> = ({
    name,
    handle,
    avatar,
    content,
    date,
    likes
}) => {
    return (
        <div className="bg-[#0f172a] rounded-xl p-6 border border-white/5 min-w-[350px] max-w-[400px] flex-shrink-0 hover:border-amber-500/30 transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-amber-500/5 group">
            <div className="flex items-start gap-4 mb-4">
                <img src={avatar} alt={name} className="w-12 h-12 rounded-full ring-2 ring-white/10 group-hover:ring-amber-500/50 transition-all" />
                <div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-white font-heading text-lg">{name}</span>
                        <div className="bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 flex items-center gap-1">
                            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wide">VERIFIED</span>
                        </div>
                    </div>
                    <div className="text-gray-500 text-sm">@{handle} • {date}</div>
                </div>
            </div>

            <p className="text-gray-300 mb-6 whitespace-pre-wrap leading-relaxed text-[15px]">
                {content}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Heart className="w-4 h-4 text-amber-500 fill-amber-500/10" />
                    <span className="group-hover:text-amber-500 transition-colors">{likes} Likes</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-400/80 text-xs font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    Verified Purchase
                </div>
            </div>
        </div>
    );
};
