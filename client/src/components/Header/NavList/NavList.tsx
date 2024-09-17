// NavList.tsx

import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguegePicker from '../LanguegePicker/LanguegePicker';

export default function NavList() {
    const location = useLocation();
    const { t } = useTranslation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-white md:flex-row gap-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <Link to="/"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavList.home')}
                </Link>
            </li>
            <li>
                <Link to="/fish-index"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/fish-index') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavList.fish')}
                </Link>
            </li>
            <li>
                <Link to="/plants"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/plants') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavList.plants')}
                </Link>
            </li>
            <li>
                <Link to="/shops"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/shops') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavList.shops')}
                </Link>
            </li>
            <li>
                <Link to="/publications"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/publications') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavList.publications')}
                </Link>
            </li>
            <li>
                <Link to="/about"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/about') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavList.about')}
                </Link>
            </li>
            <li className="block md:hidden">
                <LanguegePicker />
            </li>
        </ul>
    );
}
