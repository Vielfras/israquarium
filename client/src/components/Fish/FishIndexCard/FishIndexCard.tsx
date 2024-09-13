import { useTranslation } from 'react-i18next';
import { DirectionProvider } from '../../../context/ReadingDirectionContext';

interface FishIndexCardProps {
  fishIndexKey: string;
}

export default function FishIndexCard({ fishIndexKey }: FishIndexCardProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'he' | 'ru';

  const title = t(`FishIndex.${fishIndexKey}.title`);
  const subtitle = t(`FishIndex.${fishIndexKey}.subtitle`);
  const content = t(`FishIndex.${fishIndexKey}.content`);

  // Parse content into sections
  const contentSections = parseContent(content);

  return (
    <DirectionProvider>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-5xl w-full mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-4">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-2xl font-semibold text-center text-blue-500 dark:text-blue-300 mb-6">
            {subtitle}
          </h2>
        )}

        <main className={`space-y-8 ${currentLang === 'he' || currentLang === 'ru' ? 'text-right' : 'text-left'}`}>
          {contentSections.map((section, index) => (
            <section key={index}>
              {section.heading && (
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {section.heading}
                </h3>
              )}
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </main>
      </div>
    </DirectionProvider>
  );
}

function parseContent(content: string) {
  // Split content into sections based on headings
  const lines = content.split('\n');
  const sections = [];
  let currentSection = { heading: '', content: '' };

  lines.forEach((line) => {
    line = line.trim();
    if (line.endsWith(':')) {
      // Save previous section
      if (currentSection.content) {
        sections.push({ ...currentSection });
      }
      // Start new section
      currentSection = { heading: line.slice(0, -1), content: '' };
    } else if (line) {
      // Append to current section content
      currentSection.content += line + '\n';
    }
  });

  // Add the last section
  if (currentSection.content) {
    sections.push({ ...currentSection });
  }

  return sections;
}
