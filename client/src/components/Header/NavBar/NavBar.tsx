import './NavBar.scss';
import LanguegePicker from '../LanguegePicker/LanguegePicker';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import UserMenu from '../UserMenu/UserMenu';
import DarkLightToggle from '../DarkLightToggle/DarkLightToggle';
import { useTranslation } from 'react-i18next'; 
import { DirectionProvider} from '../../../context/ReadingDirectionContext';
import NavList from '../NavList/NavList';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation(); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="hidden lg:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Israquarium
                    </span>
                </a>
                <div className="flex items-center md:hidden">
                    <DarkLightToggle />
                    <UserMenu />
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">{t('NavBar.openMenu')}</span>
                        {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                    </button>
                </div>
                <div className={`w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-menu">
                    <DirectionProvider>
                            <NavList />
                    </DirectionProvider>
                </div>

                <div className="hidden md:flex md:order-2 space-x-1">
                    <DarkLightToggle />
                    <LanguegePicker />
                    <UserMenu />
                </div>
            </div>
        </nav>
    );
}
