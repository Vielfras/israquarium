import './UserProfile.css';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { DirectionProvider } from '../../context/ReadingDirectionContext';


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
            <>
              <div className="py-4">
                <div className="mb-4 text-lg">
                  <b>{t('UserProfile.email')}:</b> {auth.userDetails.email}
                </div>
                <div className="mb-4 text-lg">
                  <b>{t('UserProfile.name')}:</b> {auth.userDetails.name.first} {auth.userDetails.name.middle} {auth.userDetails.name.last}
                </div>
                <div className="mb-4 text-lg">
                  <b>{t('UserProfile.phone')}:</b> {auth.userDetails.phone}
                </div>
                <div className="flex justify-center mb-6">
                  <img className="rounded-full border-2 border-gray-300 dark:border-gray-600 w-32 h-32 object-cover"
                    src={auth.userDetails.image.url}
                    alt={auth.userDetails.image.alt}/>
                </div>
              </div>
              <div className="">
                <button type="button"
                  className="bg-red-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
                  onClick={() => auth.signOut()}>
                  {t('UserProfile.signOut')}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-lg">
                {t('UserProfile.signInRequired')}
              </p>
              <p className="text-xl mt-8 mb-2">
                <Link to="/signin" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t('UserProfile.signIn')}
                </Link>
                {' '} / {' '}
                <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
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
