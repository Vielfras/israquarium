interface JournalCardProps {
    title: string;
    coverImage: string;
    issn: string;
    issueNumber: string;
    year: string;
    articles: string[];
    pdfUrl: string;
}

export default function JournalCard({
    title,
    coverImage,
    issn,
    issueNumber,
    year,
    articles,
    pdfUrl,
}: JournalCardProps) {
    return (
        <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <img className="w-full h-64 object-cover" src={coverImage} alt={`${title} cover`} />

            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <p className="text-sm text-gray-500">ISSN: {issn}</p>
                <p className="text-sm text-gray-500">Issue {issueNumber}, {year}</p>

                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Highlights</h3>
                    <ul className="mt-2 list-disc list-inside text-gray-700">
                        {articles.slice(0, 3).map((article, index) => (
                            <li key={index}>{article}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6 flex justify-between items-center">
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        View PDF
                    </a>
                    <a href={pdfUrl} download className="text-gray-500 hover:text-gray-700">
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    );
}
