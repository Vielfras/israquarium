import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import { IWebsiteStats } from '../../interfaces/IWebSite';
import { IUserDetails } from '../../interfaces/IUser';
import AdminCard from '../../components/User/AdminCard/AdminCard';
import InactivityWatchdog from '../../components/Access/InactivityWatchdog';

export default function AdminProfile() {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);

  const [websiteStats, setWebsiteStats] = useState<IWebsiteStats | null>(null);
  const [users, setUsers] = useState<IUserDetails[]>([]);

  useEffect(() => {
    if (auth?.userDetails?.isAdmin) {
      fetchWebsiteStats();
      fetchUsers();
    }
  }, [auth]);

  const fetchWebsiteStats = async () => {
    const stats: IWebsiteStats = await fetch('/api/admin/stats').then(res => res.json());
    setWebsiteStats(stats);
  };

  const fetchUsers = async () => {
    const userList: IUserDetails[] = await fetch('/api/admin/users').then(res => res.json());
    setUsers(userList);
  };

  const handleSignOut = async () => {
    if (auth) {
      await auth.signOut();
    }
  };

  return (
    <div className="flex justify-center">

      <InactivityWatchdog />

      <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center text-gray-700 dark:text-gray-300 mb-4">
        <h3 className="text-center text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 tracking-wide">
          {t('AdminProfile.title')}
        </h3>

        <DirectionProvider>
          {auth?.userDetails?.isAdmin ? (
            <>
              <div className="flex justify-center rtl:space-x-reverse space-x-4 mb-6">
                <Link to="/create-fish" className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700">
                  {t('AdminProfile.createFish')}
                </Link>
                <Link to="/create-plant" className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700">
                  {t('AdminProfile.createPlant')}
                </Link>
              </div>

              <AdminCard websiteStats={websiteStats} users={users} handleSignOut={handleSignOut} />
            </>
          ) : (
            <>
              <p className="text-lg">{t('AdminProfile.signInRequired')}</p>
              <p className="text-xl mt-8 mb-2">
                <Link to="/sign-in" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {t('AdminProfile.signIn')}
                </Link>{' '}
              </p>
            </>
          )}
        </DirectionProvider>
      </div>
    </div>
  );
}
