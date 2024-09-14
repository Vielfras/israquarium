import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../context/AuthContext';
import { IUserDetails } from '../../../interfaces/IUser';
import { Link } from 'react-router-dom';

interface IUserCardProps {
    userDetails: IUserDetails;
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
                <img className="rounded-full border-2 border-gray-300 dark:border-gray-600 w-32 h-32 object-cover"
                    src={userDetails.image?.src || '/images/default_profile_svg.svg'}
                    alt={userDetails.image?.alt || t('UserProfile.defaultAltText')}
                />
            </div>

            {/* Sign out button */}
            <div className='flex gap-8 justify-center'>
                <button type="button" className="bg-red-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
                    onClick={handleSignOut}>
                    {t('UserProfile.signOut')}
                </button>

                {auth?.userDetails?.isAdmin && (
                    <Link to="admin-profile" type="button" className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-red-500"
                        onClick={handleSignOut}>
                        {t('UserProfile.adminDashboard')}
                    </Link>
                )}
            </div>

        </div>
    );
}
