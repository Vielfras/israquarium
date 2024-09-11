import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../context/AuthContext';

interface IUserCardProps {
    userDetails: {
        name: { first: string; middle?: string; last: string };
        email: string;
        phone: string;
        image: { url: string; alt: string };
    };
}

export default function UserCard({ userDetails }: IUserCardProps) {
    const { t } = useTranslation();
    const auth = useContext(AuthContext);

    const handleSignOut = async () => {
        if (auth) {
            await auth.signOut();
        }
    };

    return (
        <div className="py-4">
            {/* User Details */}
            <div className="mb-4 text-lg">
                <b>{t('UserProfile.email')}:</b> {userDetails.email}
            </div>
            <div className="mb-4 text-lg">
                <b>{t('UserProfile.name')}:</b>
                {`${userDetails.name.first} ${userDetails.name.middle || ''} ${userDetails.name.last}`}
            </div>
            <div className="mb-4 text-lg">
                <b>{t('UserProfile.phone')}:</b> {userDetails.phone}
            </div>
            <div className="flex justify-center mb-6">
                <img
                    className="rounded-full border-2 border-gray-300 dark:border-gray-600 w-32 h-32 object-cover"
                    src={userDetails.image.url}
                    alt={userDetails.image.alt}
                />
            </div>

            {/* Sign out button */}
            <div>
                <button
                    type="button"
                    className="bg-red-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
                    onClick={handleSignOut}
                >
                    {t('UserProfile.signOut')}
                </button>
            </div>
        </div>
    );
}
