interface IFishSVGProps {
    className?: string;
}

export default function FishSVG({ className }: IFishSVGProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 120 60"
            width="120"
            height="60"
            aria-hidden="true"
        >
            {/* Fish body */}
            <ellipse cx="60" cy="30" rx="45" ry="20" fill="url(#fishBodyGradient)" stroke="#2980b9" strokeWidth="2" />

            {/* Tail with animation */}
            <path
                className="animate-tail"
                d="M15,30 L3,18 C7,25 7,35 3,42 L15,30 Z"
                fill="url(#fishTailGradient)"
                stroke="#2980b9"
                strokeWidth="2"
            />

            {/* Fins with animation */}
            <path
                className="animate-fin"
                d="M65,10 Q80,20 65,30"
                fill="url(#finGradient)"
                stroke="#2471a3"
                strokeWidth="2"
            />
            <path
                className="animate-fin"
                d="M35,25 Q30,10 25,25"
                fill="url(#finGradient)"
                stroke="#2471a3"
                strokeWidth="2"
            />

            {/* Gills */}
            <path
                d="M55,25 Q53,22 55,20"
                stroke="#2c3e50"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M52,27 Q50,24 52,22"
                stroke="#2c3e50"
                strokeWidth="1.5"
                fill="none"
            />

            {/* Eye */}
            <circle cx="85" cy="20" r="5" fill="#fff" />
            <circle cx="85" cy="20" r="2" fill="#000" />

            {/* Gradient Definitions */}
            <defs>
                <linearGradient id="fishBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#4fc3f7", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#0277bd", stopOpacity: 1 }} />
                </linearGradient>

                <linearGradient id="fishTailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#81d4fa", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#0288d1", stopOpacity: 1 }} />
                </linearGradient>

                <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#4db6ac", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#00796b", stopOpacity: 1 }} />
                </linearGradient>
            </defs>
        </svg>
    );
}
