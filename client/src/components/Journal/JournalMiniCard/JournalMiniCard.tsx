// JournalMiniCard.tsx

interface IJournalMiniCardProps {
    title: string;
    coverImage: string;
    onClick: () => void;
}

export default function JournalMiniCard({ title, coverImage, onClick }: IJournalMiniCardProps) {
    return (
        <div onClick={onClick}
            className="cursor-pointer p-4 bg-white shadow-md hover:shadow-lg rounded-lg flex flex-col items-center transition-shadow duration-200"
        >
            <img src={coverImage} alt={title} className="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
    );
}
