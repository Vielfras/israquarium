// KebabMenu.tsx

import { useState, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../context/AuthContext';
import useClickOutside from '../../../hooks/useClickOutside';

interface KebabMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  onReport: () => void;
}

export default function KebabMenu({ onEdit, onDelete, onReport }: KebabMenuProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const auth = useContext(AuthContext);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };
  
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, handleClickOutside);
  
  return (
    <div className="relative" ref={containerRef}>
      <button onClick={handleMenuToggle}
        className="text-gray-600 hover:text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-125"
        aria-expanded={isMenuOpen ? "true" : "false"}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 24" strokeWidth={3.5} stroke="currentColor"
          className="w-6 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6h.01M12 12h.01M12 18h.01" />
        </svg>
      </button>

      {isMenuOpen && (
        <div style={{ top: '15%' }}
          className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10">
          <ul className="py-2 text-sm text-center text-gray-700">
            {auth?.userDetails?.isAdmin && (
              <>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onEdit}>
                  {t('PlantCard.KebabMenu.edit')}
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onDelete}>
                  {t('PlantCard.KebabMenu.delete')}
                </li>
              </>
            )}
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onReport}>
              {t('PlantCard.KebabMenu.report')}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
