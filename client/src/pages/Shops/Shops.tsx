import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { doGetAllCards } from '../../services/CardServices';
import BusinessCard from '../../components/Shop/BusinessCard/BusinessCard';
import { IBusinessCard } from '../../interfaces/IBusinessCard';
import { useTranslation } from 'react-i18next';
import Spinner from '../../components/Misc/Spinner/Spinner';

export default function Shops() {
  const [cards, setCards] = useState<IBusinessCard[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation();

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllCards = async () => {
      const { error, result } = await doGetAllCards();
      setLoading(false);

      if (error) {
        console.error(t('errorFetchingCards'), error);
        setError(error);
      } else if (result) {
        setCards(result);
      } else {
        setError(t('errorFetchingCards'));
      }
    };
    getAllCards();
  }, []);

  const goToCardDetails = (cardId: string) => {
    navigate(`/card-details/${cardId}`, { state: { cardId: cardId } });
  };

  const userId: string = auth?.userDetails?._id || '';

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-2 pb-3">
        <Link to={'/create-fish'} className="px-4 py-2 bg-blue-500 text-white rounded">Create Shop</Link>
      </div>

      <div>
        {error && <p className="p-4 text-red-500">{t('ShopsPage.errorFetchingCards')}<br />Error: {error}</p>}
      </div>
      {loading ? (<Spinner message={t('ShopsPage.loadingMessage')} />)
        : (
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
              <p className="mt-4 text-gray-500">{t('ShopsPage.noCardsAvailable')}</p>
            )}
          </>
        )}
    </div>
  );
}
