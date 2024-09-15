import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate, useParams } from 'react-router-dom';
import FormField from '../../components/Form/FormField/FormField';
import { useTranslation } from 'react-i18next';
import { fetchUserDetails, updateUser } from '../../services/UserServices';
import { IUserDetails } from '../../interfaces/IUser';
import { DirectionProvider } from '../../context/ReadingDirectionContext';

export default function EditUser() {
  const { t } = useTranslation();
  const { userId } = useParams<{ userId: string }>();
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
  const [isBusy, setIsBusy] = useState<boolean>(false);

  const auth = useContext(AuthContext);
  const toasts = useContext(ToastsContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserData = async () => {
      if (userId) {
        const { error, result } = await fetchUserDetails();
        if (error) {
          toasts?.addToast('Error', t('EditUser.fetchError'), error, 'danger');
        } else if (result) {
          setFirstName(result.name.first);
          setMiddleName(result.name.middle || '');
          setLastName(result.name.last);
          setPhone(result.phone || '');
          setEmail(result.email || '');
          setCountry(result.address.country || '');
          setCity(result.address.city || '');
          setStreet(result.address.street || '');
          setHouseNumber(result.address.houseNumber.toString());
          setZipCode(result.address.zip || '');
          setIsBusiness(result.isBusiness);
        }
      }
    };

    loadUserData();
  }, [userId, toasts, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);

    const updatedUserData: IUserDetails = {
      _id: userId || '',
      name: {
        first: firstName,
        middle: middleName || '',
        last: lastName,
      },
      phone: phone || '',
      email: email,
      password: '', // Assume password change handled elsewhere if needed
      address: {
        country: country || '',
        city: city || '',
        street: street || '',
        houseNumber: houseNumber ? Number(houseNumber) : 0,
        zip: zipCode || '',
      },
      isAdmin: false, // Set according to user rights
      isBusiness,
      createdAt: '', // Assume backend handles this
    };

    const { error } = await updateUser(userId!, updatedUserData);
    if (error) {
      toasts?.addToast('Error', t('EditUser.updateError'), error, 'danger');
    } else {
      toasts?.addToast('Success', t('EditUser.updateSuccessTitle'), t('EditUser.updateSuccessMessage'), 'success');
      navigate(`/profile/${userId}`);
    }

    setIsBusy(false);
  };

  return (
    <div className="EditUser Page flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-gray-900 dark:text-gray-50">
        <h3 className="text-3xl font-bold mb-6 text-center">{t('EditUser.editUserTitle')}</h3>

        <DirectionProvider>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FormField
                controlId="formGridFirstName"
                type="text"
                label={t('EditUser.firstNameLabel')}
                placeholder={t('EditUser.firstNamePlaceholder')}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
              />
              <FormField
                controlId="formGridEmail"
                type="email"
                label={t('EditUser.emailLabel')}
                placeholder={t('EditUser.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            {/* Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                controlId="formGridCountry"
                type="text"
                label={t('EditUser.countryLabel')}
                placeholder={t('EditUser.countryPlaceholder')}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <FormField
                controlId="formGridCity"
                type="text"
                label={t('EditUser.cityLabel')}
                placeholder={t('EditUser.cityPlaceholder')}
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
              />
              <FormField
                controlId="formGridHouseNumber"
                type="text"
                label={t('EditUser.houseNumberLabel')}
                placeholder={t('EditUser.houseNumberPlaceholder')}
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
              <FormField
                controlId="formGridZipCode"
                type="text"
                label={t('EditUser.zipCodeLabel')}
                placeholder={t('EditUser.zipCodePlaceholder')}
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            {/* Business */}
            <div className="text-center">
              <label className="block text-lg font-medium mb-3">{t('EditUser.businessSignupLabel')}</label>
              <div className="flex justify-center">
                <label htmlFor="isBusinessCheckBox" className="inline-flex items-center">
                  <input
                    id="isBusinessCheckBox"
                    name="isBusinessCheckBox"
                    type="checkbox"
                    className="form-checkbox"
                    checked={isBusiness}
                    onChange={(e) => setIsBusiness(e.target.checked)}
                  />
                  <span className="ml-2">{t('EditUser.yesLabel')}</span>
                </label>
              </div>
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            <div className="text-center">
              <button
                type="submit"
                className={`bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isBusy ? 'opacity-50' : ''
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
