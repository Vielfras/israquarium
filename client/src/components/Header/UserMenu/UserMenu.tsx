import { useState, useContext } from 'react';
import './UserMenu.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import defaultProfileImg from '../../../../public/images/default_profile_svg.svg'; // Import the SVG file

export default function UserMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const auth = useContext(AuthContext);

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
    }
  };

  const profileImage = auth?.userDetails?.image?.src || defaultProfileImg;
  const profileAlt = auth?.userDetails?.image?.alt || 'Default user avatar';

  return (
    <div className="relative flex items-center space-x-3 rtl:space-x-reverse">
      <button type="button" onClick={toggleDropdown} id="user-menu-button"
        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        aria-expanded={isDropdownOpen ? "true" : "false"} aria-controls="user-dropdown">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full"
          src={profileImage} 
          alt={profileAlt} />
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
                Guest
              </span>
            )}
          </div>
          <ul className="py-2 font-medium" role="none" aria-labelledby="user-menu-button">
            {auth?.userDetails ? (
              <>
                <li>
                  <Link to="/user-profile" onClick={closeDropdown}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    My Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    Sign out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/sign-in" onClick={closeDropdown}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/sign-up" onClick={closeDropdown}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    Register
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
