// UserProfile.tsx

import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import UserCard from '../../components/User/UserCard/UserCard';
import InactivityWatchdog from '../../components/Access/InactivityWatchdog';

export default function UserProfile() {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const { userDetails } = auth || {};

  const handleSignOut = async () => {
    if (auth) {
      await auth.signOut();
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center p-4">

      <InactivityWatchdog />

      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-gray-700 dark:text-gray-300">
        <h3 className="text-center text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          {t('UserProfile.title')}
        </h3>

        <DirectionProvider>
          {userDetails ? (
            <>
              {/* User Card */}
              <UserCard userDetails={userDetails} />

              {/* Action Buttons */}
              <div className='flex gap-4 justify-center mt-6'>
                {/* Update Profile Button */}
                <Link to="/edit-profile" type="button" className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700">
                  {t('UserProfile.updateProfileButton')}
                </Link>

                {/* Admin Dashboard Button (Visible Only to Admins) */}
                {userDetails.isAdmin && (
                  <Link to="/admin-profile" type="button" className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700">
                    {t('UserProfile.adminDashboard')}
                  </Link>
                )}
              </div>

              {/* Sign Out Button */}
              <div className='mt-4 text-center'>
                <button
                  type="button"
                  className="bg-red-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-700"
                  onClick={handleSignOut}
                >
                  {t('UserProfile.signOut')}
                </button>
              </div>
            </>
          ) : (
            <div className='text-center' >
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
            </div>
          )}
        </DirectionProvider>
      </div>
    </div>
  );
}
