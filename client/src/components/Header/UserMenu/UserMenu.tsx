import { useState } from 'react';
import './UserMenu.scss';
import { Link } from 'react-router-dom';

export default function UserMenu() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative flex items-center space-x-3 rtl:space-x-reverse">
            <button type="button" onClick={toggleDropdown} id="user-menu-button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded={isDropdownOpen ? "true" : "false"} aria-controls="user-dropdown">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="user photo"/>
            </button>

            {isDropdownOpen && (
                <div
                    className="absolute right-0 z-50 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                    style={{ top: '50%' }}>
                    <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white">Admin Adminson</span>
                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">admin@israquarium.co.il</span>
                    </div>
                    <ul className="py-2 font-medium" role="none" aria-labelledby="user-menu-button">
                        <li>
                            <button onClick={closeDropdown}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                My Aquarium
                            </button>
                        </li>
                        <li>
                            <button onClick={closeDropdown}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                Settings
                            </button>
                        </li>
                        <li>
                            <button onClick={closeDropdown}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                Register
                            </button>
                        </li>
                        <li>
                            <Link to="/signIn" onClick={closeDropdown}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <button onClick={closeDropdown}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                Sign out
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
