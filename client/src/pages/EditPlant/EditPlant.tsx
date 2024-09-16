import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { doGetPlantById, doUpdatePlant } from '../../services/PlantServices';
import { IPlant } from '../../interfaces/IPlant';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import InactivityWatchdog from '../../components/Access/InactivityWatchdog';

export default function EditPlant() {
  const { plantId } = useParams<{ plantId: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IPlant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeLangTab, setActiveLangTab] = useState<'en' | 'he' | 'ru'>('en');

  const localT = i18n.getFixedT(activeLangTab);

  useEffect(() => {
    const fetchPlantData = async () => {
      if (plantId) {
        // TODO - Remove the languege, GetPlantID Should work without a languege.
        const { error, result } = await doGetPlantById(plantId, 'en');
        if (error) {
          setError(error);
        } else if (result) {
          setFormData(result);
        }
        setLoading(false);
      }
    };
    fetchPlantData();
  }, [plantId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (formData) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleLanguageChange = (languageKey: keyof IPlant['languages']['en'], value: string) => {
    if (formData) {
      setFormData({
        ...formData,
        languages: {
          ...formData.languages,
          [activeLangTab]: {
            ...formData.languages[activeLangTab],
            [languageKey]: value,
          },
        },
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData && plantId) {
      const { error, result } = await doUpdatePlant(plantId, formData);
      if (error) {
        setError(error);
      } else if (result) {
        navigate(`/plants?plant-id=${plantId}`);
      }
    }
  };

  const getDirection = (lang: 'en' | 'he' | 'ru') => {
    return lang === 'he' ? 'rtl' : 'ltr';
  };

  if (loading) {
    return <div>{t('Loading...')}</div>;
  }

  if (error) {
    return <div>{t('Error')}: {error}</div>;
  }


  return (
    formData && (
      <div className="relative max-w-4xl mx-auto bg-green-50 p-6 rounded-lg shadow-lg">

        <InactivityWatchdog/>

        <h1 className="text-4xl font-bold text-center text-green-900 mb-6">{t('EditPlant.title')}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <DirectionProvider>
            {/* Grid for non-language fields */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-green-900">{t('EditPlant.name')}</label>
                <input type="text" name="name" value={formData.name}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                  required onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-green-900">{t('EditPlant.latinName')}</label>
                <input type="text" name="latinName" value={formData.latinName || ''}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-green-900">{t('EditPlant.sources')}</label>
                <input type="text" name="sources" value={formData.sources || ''}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                  onChange={handleInputChange}
                />
              </div>

              {['height', 'width', 'temperature', 'ph', 'hardness', 'light', 'growthRate', 'placement'].map((field) => (
                <div key={field}>
                  <label className="block text-lg font-semibold text-green-900">{t(`EditPlant.${field}`)}</label>
                  <input type="text" name={field} value={(formData as any)[field] || ''}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>
          </DirectionProvider>

          {/* Language tabs for language-specific fields */}
          <div className="mt-8">
            <div className="flex my-4 mt-12 space-x-4 justify-center">
              {(['en', 'he', 'ru'] as const).map((lang) => (
                <button key={lang} type="button"
                  className={`px-4 py-2 rounded-lg transition ${activeLangTab === lang
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-200 text-green-900 hover:bg-gray-300'
                    }`}
                  onClick={() => setActiveLangTab(lang)}
                >
                  {t(`EditPlant.languages.${lang}`)}
                </button>
              ))}
            </div>

            {/* Fields for the active language */}
            <div dir={getDirection(activeLangTab)}>
              {(['family', 'synonyms', 'etymology', 'distribution', 'notes', 'propagation'] as const).map((field) => (
                <div key={field} className="mb-4">
                  <label className="block text-lg font-semibold text-green-900">{localT(`EditPlant.languages.${field}`)}</label> {/* Use localT for selected language */}
                  <input type="text" value={formData.languages[activeLangTab][field] || ''}
                    onChange={(e) => handleLanguageChange(field, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-10">
            <button type="submit"
              className="w-1/3 py-3 mt-2 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 shadow-lg transition"
            >
              {t('EditPlant.submit')}
            </button>
          </div>
        </form>
      </div>
    )
  );
}
