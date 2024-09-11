import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import UserCard from '../../components/User/UserCard/UserCard';

export default function UserProfile() {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);

  return (
    <div className="UserProfile Page flex justify-center">
      <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center text-gray-700 dark:text-gray-300 mb-4">
        <h3 className="text-center text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 tracking-wide">
          {t('UserProfile.title')}
        </h3>

        <DirectionProvider>
          {auth?.userDetails ? (
            <UserCard userDetails={auth.userDetails} />
          ) : (
            <>
              {/* Display this if the user is not logged in */}
              <p className="text-lg">{t('UserProfile.signInRequired')}</p>
              <p className="text-xl mt-8 mb-2">
                <Link to="/sign-in" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t('UserProfile.signIn')}
                </Link>{' '}
                /{' '}
                <Link to="/sign-up" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t('UserProfile.signUp')}
                </Link>
              </p>
            </>
          )}
        </DirectionProvider>
      </div>
    </div>
  );
}
