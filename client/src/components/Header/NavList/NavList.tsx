import { Link, useLocation } from 'react-router-dom';
import { useDirection } from '../../../context/ReadingDirectionContext';
import { useTranslation } from 'react-i18next';
import LanguegePicker from '../LanguegePicker/LanguegePicker';

export default function NavList() {
    const { direction } = useDirection();
    const location = useLocation();
    const { t } = useTranslation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <ul
            className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-white md:flex-row ${direction === 'rtl' ? 'space-x-reverse' : 'space-x-8'
                } md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
        >
            <li>
                <Link to="/"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavBar.home')}
                </Link>
            </li>
            <li>
                <Link to="/fish"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/fish') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavBar.fish')}
                </Link>
            </li>
            <li>
                <Link to="/plants"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/plants') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavBar.plants')}
                </Link>
            </li>
            <li>
                <Link to="/shops"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/shops') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavBar.shops')}
                </Link>
            </li>
            <li>
                <Link to="/articles"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/articles') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavBar.articles')}
                </Link>
            </li>
            <li>
                <Link to="/contact"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${isActive('/contact') ? 'text-blue-700 dark:text-blue-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    {t('NavBar.contact')}
                </Link>
            </li>
            <li className="block md:hidden">
                <LanguegePicker />
            </li>
        </ul>
    );
};
