import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { DirectionProvider } from '../../context/ReadingDirectionContext';
import { IWebsiteStats } from '../../interfaces/IWebSite';
import { IUserDetails } from '../../interfaces/IUser';
import AdminCard from '../../components/User/AdminCard/AdminCard';

export default function AdminProfile() {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);

  // State definitions
  const [websiteStats, setWebsiteStats] = useState<IWebsiteStats | null>(null);
  const [users, setUsers] = useState<IUserDetails[]>([]);

  // Fetch data for admin
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

  // Ensure only admins can access this page
  if (!auth?.userDetails?.isAdmin) {
    return (
      <div className="AdminProfile Page flex justify-center">
        <p>{t('UserProfile.signInRequired')}</p>
        <Link to="/sign-in">{t('UserProfile.signIn')}</Link>
      </div>
    );
  }

  return (
    <div className="AdminProfile Page flex justify-center">
      <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center text-gray-700 dark:text-gray-300 mb-4">
        <h3 className="text-center text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 tracking-wide">
          {t('AdminProfile.title')}
        </h3>

        <DirectionProvider>
          {/* Admin Card */}
          <AdminCard websiteStats={websiteStats} users={users} handleSignOut={handleSignOut}
          />
        </DirectionProvider>
      </div>
    </div>
  );
}
