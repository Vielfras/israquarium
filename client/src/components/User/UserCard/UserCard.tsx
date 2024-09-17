// UserCard.tsx

import { useTranslation } from 'react-i18next';
import { IUserDetails } from '../../../interfaces/IUser';

interface IUserCardProps {
    userDetails: IUserDetails;
}

export default function UserCard({ userDetails }: IUserCardProps) {
    const { t } = useTranslation();

    return (
        <div className="py-4">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
                <img className="rounded-full border-2 border-gray-300 dark:border-gray-600 w-32 h-32 object-cover"
                    src={userDetails.image?.src || '/images/default_profile_svg.svg'}
                    alt={userDetails.image?.alt || t('UserProfile.defaultAltText')}
                />
            </div>

            {/* User Name */}
            <h2 className="text-2xl font-semibold text-center mb-4">
                {`${userDetails.name.first} ${userDetails.name.middle || ''} ${userDetails.name.last}`}
            </h2>

            {/* User Details */}
            <div className="space-y-2">
                {/* Email */}
                <div className="flex justify-between">
                    <span className="font-medium">{t('UserProfile.emailLabel')}:</span>
                    <span>{userDetails.email}</span>
                </div>

                {/* Phone Number */}
                <div className="flex justify-between">
                    <span className="font-medium">{t('UserProfile.phoneLabel')}:</span>
                    <span>{userDetails.phone || t('UserProfile.notProvided')}</span>
                </div>

                {/* Address */}
                <div className="flex justify-between">
                    <span className="font-medium">{t('UserProfile.addressLabel')}:</span>
                    <span>
                        {`${userDetails.address.street} ${userDetails.address.houseNumber}, ${userDetails.address.city}, ${userDetails.address.country} ${userDetails.address.zip}`}
                    </span>
                </div>

                {/* Business Status */}
                <div className="flex justify-between">
                    <span className="font-medium">{t('UserProfile.businessStatusLabel')}:</span>
                    <span>{userDetails.isBusiness ? t('UserProfile.businessYes') : t('UserProfile.businessNo')}</span>
                </div>

                {/* Account Creation Date */}
                <div className="flex justify-between">
                    <span className="font-medium">{t('UserProfile.createdAtLabel')}:</span>
                    <span>{new Date(userDetails.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}
