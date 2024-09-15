// src/pages/EditUser/EditUser.tsx

import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate, useParams } from 'react-router-dom';
import FormField from '../../components/Form/FormField/FormField';
import { useTranslation } from 'react-i18next';
import { fetchUserDetails, fetchUserById, updateUser } from '../../services/UserServices';
import { IUserDetails } from '../../interfaces/IUser';
import { DirectionProvider } from '../../context/ReadingDirectionContext';

export default function EditUser() {
  const { t } = useTranslation();
  const { userId } = useParams<{ userId: string }>();
  
  // State variables for user details
  const [firstName, setFirstName] = useState<string>('');
  const [middleName, setMiddleName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [houseNumber, setHouseNumber] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [isBusiness, setIsBusiness] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageAlt, setImageAlt] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false); // New state for isAdmin
  const [isBusy, setIsBusy] = useState<boolean>(false);

  const auth = useContext(AuthContext);
  const toasts = useContext(ToastsContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserData = async () => {
      // Ensure the user is authenticated
      if (!auth?.userDetails) {
        toasts?.addToast('Error', t('EditUser.notAuthenticated'), t('EditUser.mustBeLoggedIn'), 'danger');
        navigate('/sign-in');
        return;
      }

      let targetUserId = userId;

      // If no userId is provided, default to current user
      if (!targetUserId) {
        targetUserId = auth.userDetails._id;
      }

      // If editing another user's profile, ensure the current user is admin
      if (targetUserId !== auth.userDetails._id && !auth.userDetails.isAdmin) {
        toasts?.addToast('Error', t('EditUser.permissionDenied'), t('EditUser.noPermission'), 'danger');
        navigate(`/profile/${auth.userDetails._id}`);
        return;
      }

      try {
        let userData: IUserDetails | undefined;

        if (targetUserId === auth.userDetails._id) {
          // Fetch current user's details
          const { error, result } = await fetchUserDetails();
          if (error) {
            toasts?.addToast('Error', t('EditUser.fetchError'), error, 'danger');
            return;
          }
          userData = result;
        } else if (auth.userDetails.isAdmin && targetUserId) {
          // Fetch another user's details (admin)
          const { error, result } = await fetchUserById(targetUserId);
          if (error) {
            toasts?.addToast('Error', t('EditUser.fetchError'), error, 'danger');
            return;
          }
          userData = result;
        }

        if (userData) {
          setFirstName(userData.name.first);
          setMiddleName(userData.name.middle || '');
          setLastName(userData.name.last);
          setPhone(userData.phone || '');
          setEmail(userData.email || '');
          setCountry(userData.address.country || '');
          setCity(userData.address.city || '');
          setStreet(userData.address.street || '');
          setHouseNumber(userData.address.houseNumber.toString());
          setZipCode(userData.address.zip || '');
          setIsBusiness(userData.isBusiness);
          setImageSrc(userData.image.src || '');
          setImageAlt(userData.image.alt || 'Profile image');
          setIsAdmin(userData.isAdmin); // Set isAdmin state
        }
      } catch (err) {
        const errMessage = (err as Error).message;
        toasts?.addToast('Error', t('EditUser.fetchError'), errMessage, 'danger');
      }
    };

    loadUserData();
  }, [userId, auth, toasts, navigate, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);

    const updatedUserData: Partial<IUserDetails> = {
      name: {
        first: firstName,
        middle: middleName || '',
        last: lastName,
      },
      phone: phone || '',
      email: email,
      image: {
        src: imageSrc,
        alt: imageAlt,
      },
      address: {
        country: country || '',
        city: city || '',
        street: street || '',
        houseNumber: houseNumber ? Number(houseNumber) : 0,
        zip: zipCode || '',
      },
      isBusiness,
      // Exclude fields like password, isAdmin, createdAt, etc.
    };

    try {
      const { error } = await updateUser(userId!, updatedUserData);
      if (error) {
        toasts?.addToast('Error', t('EditUser.updateError'), error, 'danger');
      } else {
        toasts?.addToast('Success', t('EditUser.updateSuccessTitle'), t('EditUser.updateSuccessMessage'), 'success');
        navigate(`/profile/${userId}`);
      }
    } catch (err) {
      const errMessage = (err as Error).message;
      toasts?.addToast('Error', t('EditUser.updateError'), errMessage, 'danger');
    } finally {
      setIsBusy(false);
    }
  };

  // Determine if the user can upgrade to business
  const canUpgradeToBusiness = !isBusiness && !isAdmin;

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-gray-900 dark:text-gray-50 max-w-4xl w-full">
        <h3 className="text-3xl font-bold mb-6 text-center">{t('EditUser.editUserTitle')}</h3>

        <DirectionProvider>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FormField
                controlId="formGridFirstName"
                type="text"
                label={t('EditUser.firstNameLabel')}
                placeholder={t('EditUser.firstNamePlaceholder')}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <FormField
                controlId="formGridMiddleName"
                type="text"
                label={t('EditUser.middleNameLabel')}
                placeholder={t('EditUser.middleNamePlaceholder')}
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
              <FormField
                controlId="formGridLastName"
                type="text"
                label={t('EditUser.lastNameLabel')}
                placeholder={t('EditUser.lastNamePlaceholder')}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                controlId="formGridPhone"
                type="text"
                label={t('EditUser.phoneLabel')}
                placeholder={t('EditUser.phonePlaceholder')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <FormField
                controlId="formGridEmail"
                type="email"
                label={t('EditUser.emailLabel')}
                placeholder={t('EditUser.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            {/* Address Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                controlId="formGridCountry"
                type="text"
                label={t('EditUser.countryLabel')}
                placeholder={t('EditUser.countryPlaceholder')}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
              <FormField
                controlId="formGridCity"
                type="text"
                label={t('EditUser.cityLabel')}
                placeholder={t('EditUser.cityPlaceholder')}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FormField
                controlId="formGridStreet"
                type="text"
                label={t('EditUser.streetLabel')}
                placeholder={t('EditUser.streetPlaceholder')}
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
              />
              <FormField
                controlId="formGridHouseNumber"
                type="number"
                label={t('EditUser.houseNumberLabel')}
                placeholder={t('EditUser.houseNumberPlaceholder')}
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
                required
              />
              <FormField
                controlId="formGridZipCode"
                type="text"
                label={t('EditUser.zipCodeLabel')}
                placeholder={t('EditUser.zipCodePlaceholder')}
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>

            {/* Image Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                controlId="formGridImageSrc"
                type="url"
                label={t('EditUser.imageSrcLabel')}
                placeholder={t('EditUser.imageSrcPlaceholder')}
                value={imageSrc}
                onChange={(e) => setImageSrc(e.target.value)}
              />
              <FormField
                controlId="formGridImageAlt"
                type="text"
                label={t('EditUser.imageAltLabel')}
                placeholder={t('EditUser.imageAltPlaceholder')}
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
              />
            </div>


            {/* Upgrade to Business Checkbox */}
            {canUpgradeToBusiness && (
            <>
                <hr className="my-6 border-gray-300 dark:border-gray-700" />
                <div className="text-center">
                <label className="block text-lg font-medium mb-3">{t('EditUser.upgradeToBusinessLabel')}</label>
                <div className="flex justify-center">
                  <label htmlFor="upgradeBusinessCheckBox" className="inline-flex items-center">
                    <input
                      id="upgradeBusinessCheckBox"
                      name="upgradeBusinessCheckBox"
                      type="checkbox"
                      className="form-checkbox"
                      checked={isBusiness}
                      onChange={(e) => setIsBusiness(e.target.checked)}
                    />
                    <span className="ml-2">{t('EditUser.yesLabel')}</span>
                  </label>
                </div>
              </div>
            </>
            )}

            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className={`bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isBusy ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isBusy}
              >
                {isBusy ? (
                  <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 100 8V4z"></path>
                  </svg>
                ) : (
                  t('EditUser.submitButton')
                )}
              </button>
            </div>
          </form>
        </DirectionProvider>
      </div>
    </div>
  );
}
