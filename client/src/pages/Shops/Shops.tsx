import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { doGetAllCards } from '../../services/CardServices';
import BusinessCard from '../../components/Shop/BusinessCard/BusinessCard';
import { IBusinessCard } from '../../interfaces/IBusinessCard';
import { useTranslation } from 'react-i18next';

export default function Shops() {
  const [cards, setCards] = useState<IBusinessCard[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation(); // Use the translation hook

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllCards = async () => {
      const { error, result } = await doGetAllCards();
      setLoading(false); 

      if (error) {
        console.error(t('errorFetchingCards'), error); // Use the localized error message
        setError(error);
      } else if (result) {
        setCards(result); 
      } else {
        setError(t('errorFetchingCards')); // Set a localized fallback error message
      }
    };
    getAllCards();
  }, [t]);

  const goToCardDetails = (cardId: string) => {
    navigate(`/card-details/${cardId}`, { state: { cardId: cardId } });
  };

  const userId: string = auth?.userDetails?._id || '';

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl font-bold">{t('ShopsPage.shopsTitle')}</h3>
      <br />
      <div>{error && <p className="text-red-500">{t('ShopsPage.errorFetchingCards')}<br />{error}</p>}</div>
      {loading ? (
        <div className="text-center">
          <svg
            className="animate-spin h-5 w-5 text-blue-500 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 100 8V4z"
            />
          </svg>
          <p>{t('ShopsPage.loadingCardsMessage')}</p>
        </div>
      ) : (
        <>
          {Array.isArray(cards) && cards.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cards.map((card) => (
                  <BusinessCard key={card._id} userId={userId} card={card} goToCardDetails={goToCardDetails} />
                ))}
              </div>
              <h5 className="mt-4 text-sm">{t('ShopsPage.totalCards', { count: cards.length })}</h5>
            </>
          ) : (
            <p className="text-gray-500">{t('ShopsPage.noCardsAvailable')}</p>
          )}
        </>
      )}
    </div>
  );
}
