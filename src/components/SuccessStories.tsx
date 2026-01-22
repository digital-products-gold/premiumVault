import React from 'react';
import { TweetCard } from './TweetCard';
import { SectionHeading } from './SectionHeading';
import { getAssetPath } from '../utils/assets';
import { useVideoLazyLoad } from '../hooks/useVideoLazyLoad';

const LazyShowcaseVideo: React.FC<{ src: string }> = ({ src }) => {
    const videoRef = useVideoLazyLoad({ rootMargin: '300px' });

    return (
        <div className="w-[300px] aspect-square rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-105 duration-300 bg-black/20">
            <video
                ref={videoRef}
                data-src={src}
                className="w-full h-full object-contain"
                muted
                loop
                playsInline
                preload="none"
            />
        </div>
    );
};

export const SuccessStories: React.FC = () => {
    const tweets = [
        {
            name: "Ben Lang",
            handle: "benln",
            avatar: "https://pbs.twimg.com/profile_images/1713995709916012544/GHmSl9EK_normal.jpg",
            content: "I just heard about someone selling Notion templates for high school coaches to manage their cheerleading teams. The template goes for $1,000. She's sold to 85 coaches in the past few months. All of her sales have come from cold calling.",
            date: "Apr 3, 2024",
            likes: "1.6K",
            replies: "31"
        },
        {
            name: "Pat Walls",
            handle: "thepatwalls",
            avatar: "https://pbs.twimg.com/profile_images/1442604184725901312/tbbsFD4-_normal.jpg",
            content: "Wow... this guy's made $2.1M selling TWO Notion templates:\n\n- Started from brand new channel\n- 8.7M total YT views\n- 49 videos\n- $120K/mo\n- Makes ~$0.24/view (crazy)\n- Sold $88K with only 3,000 email subs\n- Gives away 99% of content FREE\n- Cost: $0 to create\n- Create once, sell",
            date: "Dec 21, 2023",
            likes: "808",
            replies: "15"
        },
        {
            name: "James Ebringer",
            handle: "JamesEbringer",
            avatar: "https://pbs.twimg.com/profile_images/1870467441756622848/rAs-7AWl_normal.jpg",
            content: "$30K selling Notion templates\n\n\"But you can't make money from digital products\"\n\nYes, you're right, you can't",
            date: "Dec 16, 2024",
            likes: "4",
            replies: "3"
        },
        {
            name: "Solt Wagner",
            handle: "soltwagner",
            avatar: "https://pbs.twimg.com/profile_images/1621609082271440898/mGAOizaG_normal.jpg",
            content: "I hit $80K on Gumroad selling Notion templates and other digital products.\n\nI began my digital creator journey in January 2023 🙌",
            date: "Nov 2, 2024",
            likes: "158",
            replies: "9"
        },
        {
            name: "Pascio",
            handle: "IAmPascio",
            avatar: "https://pbs.twimg.com/profile_images/1508150740077920270/QShT-iO7_normal.jpg",
            content: "Most underrated business model?\n\nNotion templates.\n\nWhy?\n- Build once, sell forever\n- 100M+ users to sell to\n- People pay for good systems\n\nWhat else would you add?",
            date: "Sep 26, 2024",
            likes: "32",
            replies: "9"
        }
    ];

    const showcaseVideos = [
        getAssetPath("/images/products/videos/0821_jrdfyv.mp4"),
        getAssetPath("/images/products/videos/aweh3wie2n0x4l3uimau.mp4"),
        getAssetPath("/images/products/videos/anime.mp4"),
        getAssetPath("/images/products/videos/kis-education-bundle.mp4"),
        getAssetPath("/images/products/videos/minecraft.mp4"),
        getAssetPath("/images/products/videos/n8n.mp4"),
        getAssetPath("/images/products/videos/nanobanana.mp4"),

        getAssetPath("/images/products/videos/Untitled_design_5_eexpij.mp4"),
        getAssetPath("/images/products/videos/9millionplr.mp4")
    ];

    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-[#020617] relative overflow-hidden">
            {/* Scrolling Showcase */}
            <div className="mb-24">
                <SectionHeading
                    title="See What's Possible"
                    highlight="Real examples of what you can build."
                />

                <div className="relative w-full overflow-hidden mt-12 group">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>

                    <div className="flex gap-8 animate-scroll-left hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
                        {[...showcaseVideos, ...showcaseVideos].map((video, i) => (
                            <LazyShowcaseVideo key={i} src={video} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Social Proof Tweets */}
            <div className="container mx-auto px-4 sm:px-6">
                <SectionHeading
                    title="Real Success Stories"
                    highlight="From The Market"
                    subtitle="The digital product revolution is making people wealthy. Don't get left behind."
                />

                <div className="relative w-full overflow-hidden mt-12 pb-10">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#020617] to-transparent z-20"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#020617] to-transparent z-20"></div>

                    <div className="flex gap-6 animate-scroll-right hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
                        {[...tweets, ...tweets].map((tweet, i) => (
                            <TweetCard key={i} {...tweet} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

