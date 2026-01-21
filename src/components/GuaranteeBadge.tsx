import React from 'react';

export const GuaranteeBadge: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            viewBox="0 0 200 200"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                {/* Gold Gradient - Realistic Metallic */}
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FBF5B7" />
                    <stop offset="25%" stopColor="#BF953F" />
                    <stop offset="50%" stopColor="#B38728" />
                    <stop offset="75%" stopColor="#FBF5B7" />
                    <stop offset="100%" stopColor="#AA771C" />
                </linearGradient>

                {/* Darker Inner Shadow Gradient */}
                <linearGradient id="goldShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#B38728" />
                    <stop offset="100%" stopColor="#FBF5B7" />
                </linearGradient>

                <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
                </filter>
            </defs>

            {/* Outer Scalloped Edge (Wax Seal Shape) */}
            <path
                d="M100 0 
                   C105 0 109 5 113 5 S121 0 126 0 S134 5 138 5 S146 0 150 0 S158 5 162 5 S169 0 173 0 S180 5 183 8 S189 5 192 8 S197 9 198 12 S199 17 200 20
                   S195 24 195 28 S200 32 200 36 S195 40 195 44 S200 48 200 52 S195 56 195 60 S200 64 200 68 S195 72 195 76 S200 80 200 84
                   S195 88 195 92 S200 96 200 100 S195 104 195 108 S200 112 200 116 S195 120 195 124 S200 128 200 132 S195 136 195 140
                   S200 144 200 148 S195 152 193 155 S192 160 188 163 S183 166 183 170 S177 175 173 175 S168 180 162 180 S157 185 150 185
                   S145 190 138 190 S133 195 126 195 S120 195 113 195 S108 200 100 200 S92 195 87 195 S80 195 74 195 S67 190 62 190
                   S55 185 50 185 S43 180 38 180 S32 175 27 175 S23 166 23 162 S12 163 8 160 S5 152 7 148
                   S0 144 0 140 S5 136 5 132 S0 128 0 124 S5 120 5 116 S0 112 0 108 S5 104 5 100 S0 96 0 92 S5 88 5 84 S0 80 0 76 S5 72 5 68
                   S0 64 0 60 S5 56 5 52 S0 48 0 44 S5 40 5 36 S0 32 0 28 S5 24 0 20
                   S1 17 2 12 S3 9 8 8 S11 5 17 8 S20 5 27 0 S31 5 38 5 S42 0 50 0 S54 5 62 5 S66 0 74 0 S80 5 87 5 S91 0 100 0 Z"
                fill="url(#goldGradient)"
                filter="url(#dropShadow)"
            />

            {/* Inner Ring */}
            <circle cx="100" cy="100" r="75" stroke="#AA771C" strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="100" cy="100" r="70" stroke="#FBF5B7" strokeWidth="1" fill="none" opacity="0.8" />

            {/* Main Text Path */}
            <path id="textPathTop" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
            <path id="textPathBottom" d="M 35,100 A 65,65 0 0,0 165,100" fill="none" />

            {/* Text */}
            <text fill="#ffffff" fontSize="16" fontWeight="bold" letterSpacing="2" textAnchor="middle" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
                {/* @ts-ignore */}
                <textPath href="#textPathTop" startOffset="50%" side="left">
                    MONEY BACK
                </textPath>
            </text>

            <text fill="#ffffff" fontSize="14" fontWeight="bold" letterSpacing="2" textAnchor="middle" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
                {/* @ts-ignore */}
                <textPath href="#textPathBottom" startOffset="50%" side="right">
                    GUARANTEE
                </textPath>
            </text>

            {/* Center Content */}
            <circle cx="100" cy="100" r="45" fill="url(#goldShadow)" stroke="#BF953F" strokeWidth="1" />

            <text x="100" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="38" fontWeight="900" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>
                30
            </text>
            <text x="100" y="115" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" letterSpacing="1" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
                DAY
            </text>

            {/* Glossy Reflection */}
            <path d="M 70 80 Q 100 60 130 80" stroke="white" strokeWidth="3" opacity="0.4" fill="none" />
        </svg>
    );
};
