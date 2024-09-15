// FishSVG.tsx

interface IFishSVGProps {
    className?: string;
}

export default function FishSVG({ className }: IFishSVGProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 32"
            width="64"
            height="32"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M2,16 C10,0 54,0 62,16 C54,32 10,32 2,16 Z"
                fill="#3498db"
                stroke="#2980b9"
                strokeWidth="2"
            />
            <circle cx="50" cy="16" r="2" fill="#fff" />
        </svg>
    )
}