// LanguagePicker.tsx

import { useState, useRef } from 'react';
import { US, RU, IL } from 'country-flag-icons/react/3x2';
import { FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useClickOutside from '../../../hooks/useClickOutside';

export default function LanguagePicker() {
    const { i18n } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const containerRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
        setIsDropdownOpen(false);
    };

    const renderFlag = (language: string) => {
        switch (language) {
            case 'ru':
                return <RU className="w-5 h-5" />;
            case 'he':
                return <IL className="w-5 h-5" />;
            default:
                return <US className="w-5 h-5" />;
        }
    };

    useClickOutside(containerRef, () => {
        if (isDropdownOpen) {
            setIsDropdownOpen(false);
        }
    });

    return (
        <div className="relative" ref={containerRef}>
            <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                {renderFlag(selectedLanguage)}
                <FiChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
                <div
                    className="absolute right-0 z-50 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                >
                    <ul className="py-2 font-medium" role="none">
                        <li>
                            <button
                                onClick={() => changeLanguage('en')}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                            >
                                <div className="inline-flex items-center">
                                    <US className="h-3.5 w-3.5 me-2" />
                                    {i18n.t('Language.en')}
                                </div>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => changeLanguage('ru')}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                            >
                                <div className="inline-flex items-center">
                                    <RU className="h-3.5 w-3.5 me-2" />
                                    {i18n.t('Language.ru')}
                                </div>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => changeLanguage('he')}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                            >
                                <div className="inline-flex items-center">
                                    <IL className="h-3.5 w-3.5 me-2" />
                                    {i18n.t('Language.he')}
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
