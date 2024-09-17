//  Publications.tsx

import { useState } from 'react';
import JournalMiniCard from '../../components/Journal/JournalMiniCard/JournalMiniCard';
import JournalCard from '../../components/Journal/JournalCard/JournalCard';


// TODO - Get these from the backend
const tempMyTropicalFishJournals = [
  {
    title: 'My Tropical Fish - Issue 1',
    coverImage: '/images/journal-issue-1.png',
    issn: '2079-4452',
    issueNumber: '1',
    year: '2009',
    articles: ['Macropodus', 'Introduction to Aquaristics', 'Cichlid Breeding Tips'],
    pdfUrl: '/pdfs/my-tropical-fish-1.pdf',
  },
  {
    title: 'My Tropical Fish - Issue 2',
    coverImage: '/images/journal-issue-2.png',
    issn: '2079-4452',
    issueNumber: '2',
    year: '2009',
    articles: ['Ramirezi Care', 'Understanding Aquascaping', 'Tetra Varieties'],
    pdfUrl: '/pdfs/my-tropical-fish-2.pdf',
  },
  // Add more journal entries up to issue 22...
  {
    title: 'My Tropical Fish - Issue 22',
    coverImage: '/images/journal-issue-22.png',
    issn: '2079-4452',
    issueNumber: '22',
    year: '2011',
    articles: ['Old Good Macropodus', 'Two Years with Ramirezi', 'Russian Aquaristics History'],
    pdfUrl: '/pdfs/my-tropical-fish-22.pdf',
  },
];

export default function Publications() {
  const [selectedJournal, setSelectedJournal] = useState<typeof tempMyTropicalFishJournals[0] | null>(null);

  const handleJournalSelect = (journal: typeof tempMyTropicalFishJournals[0]) => {
    setSelectedJournal(journal); // Set the selected journal to display its details
  };

  return (
    <div className="flex flex-col items-center justify-center w-full text-center py-10">
      {/* Show JournalMiniCards if no journal is selected */}
      {!selectedJournal && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-6xl">
          {tempMyTropicalFishJournals.map((journal, index) => (
            <JournalMiniCard key={index}
              title={journal.title} coverImage={journal.coverImage}
              onClick={() => handleJournalSelect(journal)} />
          ))}
        </div>
      )}

      {/* Show JournalCard if a journal is selected */}
      {selectedJournal && (
        <JournalCard title={selectedJournal.title}
          coverImage={selectedJournal.coverImage}
          issn={selectedJournal.issn} issueNumber={selectedJournal.issueNumber}
          year={selectedJournal.year} articles={selectedJournal.articles}
          pdfUrl={selectedJournal.pdfUrl} />
      )}

      {selectedJournal && (
        <button onClick={() => setSelectedJournal(null)}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back to Journals
        </button>
      )}
    </div>
  );
}
