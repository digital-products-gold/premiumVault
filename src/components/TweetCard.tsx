import React from 'react';
import { MessageCircle, Heart, Repeat, Share } from 'lucide-react';

interface TweetCardProps {
    name: string;
    handle: string;
    avatar: string;
    content: string;
    date: string;
    likes: string;
    replies: string;
}

export const TweetCard: React.FC<TweetCardProps> = ({
    name,
    handle,
    avatar,
    content,
    date,
    likes,
    replies
}) => {
    return (
        <div className="bg-[#15202b] rounded-xl p-6 border border-gray-800 min-w-[350px] max-w-[400px] flex-shrink-0 hover:border-gray-600 transition-colors">
            <div className="flex items-start gap-3 mb-4">
                <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
                <div>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-white">{name}</span>
                        <span className="text-gray-500">@{handle}</span>
                    </div>
                    <div className="text-gray-500 text-sm">{date}</div>
                </div>
            </div>

            <p className="text-gray-200 mb-4 whitespace-pre-wrap leading-relaxed">
                {content}
            </p>

            <div className="flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <MessageCircle className="w-4 h-4" />
                    <span>{replies}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-green-400 cursor-pointer">
                    <Repeat className="w-4 h-4" />
                    <span>24</span>
                </div>
                <div className="flex items-center gap-2 hover:text-pink-500 cursor-pointer">
                    <Heart className="w-4 h-4" />
                    <span>{likes}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                    <Share className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
};
