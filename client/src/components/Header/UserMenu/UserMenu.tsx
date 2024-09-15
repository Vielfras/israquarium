import { useState, useContext } from 'react';
import './UserMenu.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { useTranslation } from 'react-i18next';

export default function UserMenu() {
  const auth = useContext(AuthContext);
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleSignOut = async () => {
    if (auth?.signOut) {
      await auth.signOut();
      closeDropdown();
      window.location.reload();
    }
  };

  return (
    <div className="relative flex items-center space-x-3 rtl:space-x-reverse">
      <button type="button" onClick={toggleDropdown} id="user-menu-button"
        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        aria-expanded={isDropdownOpen ? "true" : "false"} aria-controls="user-dropdown">
        <span className="sr-only">{t('UserMenu.defaultAltText')}</span>
        <img className="w-8 h-8 rounded-full"
          src={auth?.userDetails?.image?.src || '/images/default_profile_svg.svg'}
          alt={auth?.userDetails?.image?.alt || t('UserMenu.defaultAltText')} />
      </button>

      {isDropdownOpen && (
        <div
          className="absolute right-0 z-50 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
          style={{ top: '50%' }}>
          <div className="px-4 py-3">
            {auth?.userDetails ? (
              <>
                <span className="block text-sm text-gray-900 dark:text-white">
                  {auth.userDetails.name.first} {auth.userDetails.name.last}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {auth.userDetails.email}
                </span>
              </>
            ) : (
              <span className="block text-sm text-gray-900 dark:text-white">
                {t('UserMenu.guest')}
              </span>
            )}
          </div>
          <ul className="py-2 font-medium" role="none" aria-labelledby="user-menu-button">
            {auth?.userDetails ? (
              <>
                <li>
                  <Link to="/my-aquarium" onClick={closeDropdown}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    {t('UserMenu.myAquarium')}
                  </Link>
                </li>
                <li>
                  <Link to="/user-profile" onClick={closeDropdown}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    {t('UserMenu.myProfile')}
                  </Link>
                </li>
                <li>
                  <button onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    {t('UserMenu.signOut')}
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/sign-in" onClick={closeDropdown}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    {t('UserMenu.signIn')}
                  </Link>
                </li>
                <li>
                  <Link to="/sign-up" onClick={closeDropdown}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    {t('UserMenu.register')}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
