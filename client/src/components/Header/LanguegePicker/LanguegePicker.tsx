import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import i18next from 'i18next';
import { US, RU, IL } from 'country-flag-icons/react/3x2';

export default function LanguegePicker() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState(<US title="United States" className="w-5 h-4" />);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const changeLanguage = (lng: string, flag: JSX.Element) => {
        i18next.changeLanguage(lng);
        setSelectedFlag(flag);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex items-center justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                {selectedFlag}
                <FiChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
                <div
                    className="absolute right-0 z-50 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                >
                    <ul className="py-2 font-medium" role="none">
                        <li>
                            <a
                                href="#"
                                onClick={() => changeLanguage('en', <US title="United States" className="w-5 h-4" />)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                            >
                                <div className="inline-flex items-center">
                                    <US title="United States" className="w-5 h-4 me-2" />
                                    English (US)
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => changeLanguage('ru', <RU title="Russia" className="w-5 h-4" />)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                            >
                                <div className="inline-flex items-center">
                                    <RU title="Russia" className="w-5 h-4 me-2" />
                                    Russian
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => changeLanguage('he', <IL title="Israel" className="w-5 h-4" />)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                            >
                                <div className="inline-flex items-center">
                                    <IL title="Israel" className="w-5 h-4 me-2" />
                                    Hebrew
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
