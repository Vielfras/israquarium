// AdminCard.tsx

import { IUserDetails } from '../../../interfaces/IUser';
import { useTranslation } from 'react-i18next';
import { IWebsiteStats } from '../../../interfaces/IWebSite';

interface IAdminCardProps {
  websiteStats: IWebsiteStats | null;
  users: IUserDetails[];
  handleSignOut: () => void;
}

export default function AdminCard({ websiteStats, users, handleSignOut }: IAdminCardProps) {
  const { t } = useTranslation();

  return (
    <div>
      {/* Website statistics */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold mb-4">{t('AdminProfile.websiteStats')}</h4>
        {websiteStats ? (
          <div>
            <p>{t('AdminProfile.totalUsers')}: {websiteStats.totalUsers}</p>
            <p>{t('AdminProfile.totalFish')}: {websiteStats.totalFish}</p>
            <p>{t('AdminProfile.totalPlants')}: {websiteStats.totalPlants}</p>
            <p>{t('AdminProfile.totalShops')}: {websiteStats.totalShops}</p>
          </div>
        ) : (
          <p>{t('AdminProfile.loading')}</p>
        )}
      </section>

      {/* Users management */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold mb-4">{t('AdminProfile.users')}</h4>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                {`${user.name.first} ${user.name.middle || ''} ${user.name.last}`} - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>{t('AdminProfile.noUsers')}</p>
        )}
      </section>

      {/* Sign out button */}
      <div className="mt-6">
        <button type="button" onClick={handleSignOut}
          className="bg-red-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
        >
          {t('UserProfile.signOut')}
        </button>
      </div>
    </div>
  );
}
