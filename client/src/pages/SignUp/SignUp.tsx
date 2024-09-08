import './SignUp.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate } from 'react-router-dom';
import FormField from '../../components/Form/FormField/FormField';
import { useTranslation } from 'react-i18next';

export default function SignUp() {
  const { t } = useTranslation(); // i18next hook for translations
  const [firstName, setFirstName] = useState<string>();
  const [middleName, setMiddleName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordVerification, setPasswordVerification] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [city, setCity] = useState<string>();
  const [street, setStreet] = useState<string>();
  const [houseNumber, setHouseNumber] = useState<string>();
  const [zipCode, setZipCode] = useState<string>();
  const [isBusiness, setIsBusiness] = useState<boolean>(false);
  const [isBusy, setIsBusy] = useState<boolean>(false);

  const auth = useContext(AuthContext);
  const toasts = useContext(ToastsContext);
  const navigate = useNavigate();

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value);
  };

  const handleMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMiddleName(value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastName(value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handlePasswordVerificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPasswordVerification(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);

    if (!firstName || !lastName || !email || !password || password !== passwordVerification) {
      toasts?.addToast('SignUpPage.⚠️', t('SignUpPage.signUpErrorTitle'), t('SignUpPage.signUpErrorMessage'), 'danger');
      setIsBusy(false);
      return;
    }

    const userData = {
      name: {
        first: firstName,
        middle: middleName || "",
        last: lastName,
      },
      phone: phone || "",
      email: email,
      password: password,
      address: {
        country: country || "",
        city: city || "",
        street: street || "",
        houseNumber: houseNumber ? Number(houseNumber) : 0,
        zip: zipCode ? Number(zipCode) : 0,
      },
      isBusiness,
    };

    const { error } = await auth.signUp(userData);
    if (error) {
      toasts?.addToast('SignUpPage.⚠️', t('SignUpPage.signUpErrorTitle'), error, 'danger');
    } else {
      toasts?.addToast('SignUpPage.👍🏼', t('SignUpPage.signUpSuccessTitle'), t('SignUpPage.signUpSuccessMessage'), 'success');
      navigate('/signin');
    }

    setIsBusy(false);
  };

  return (
    <div className="SignUp Page flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-gray-900 dark:text-gray-50">
        <h3 className="text-3xl font-bold mb-6 text-center">{t('SignUpPage.signUpPageTitle')}</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FormField
              controlId="formGridFirstName"
              label={t('SignUpPage.firstNameLabel')}
              type="text"
              placeholder={t('SignUpPage.firstNamePlaceholder')}
              value={firstName || ''}
              onChange={handleFirstNameChange}
            />
            <FormField
              controlId="formGridMiddleName"
              label={t('SignUpPage.middleNameLabel')}
              type="text"
              placeholder={t('SignUpPage.middleNamePlaceholder')}
              value={middleName || ''}
              onChange={handleMiddleNameChange}
            />
            <FormField
              controlId="formGridLastName"
              label={t('SignUpPage.lastNameLabel')}
              type="text"
              placeholder={t('SignUpPage.lastNamePlaceholder')}
              value={lastName || ''}
              onChange={handleLastNameChange}
            />
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              controlId="formGridPhone"
              label={t('SignUpPage.phoneLabel')}
              type="text"
              placeholder={t('SignUpPage.phonePlaceholder')}
              value={phone || ''}
              onChange={handlePhoneChange}
            />
            <FormField
              controlId="formGridEmail"
              label={t('SignUpPage.emailLabel')}
              type="email"
              placeholder={t('SignUpPage.emailPlaceholder')}
              value={email || ''}
              onChange={handleEmailChange}
            />
          </div>

          {/* Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              controlId="formGridPassword"
              label={t('SignUpPage.passwordLabel')}
              type="password"
              placeholder={t('SignUpPage.passwordPlaceholder')}
              value={password || ''}
              onChange={handlePasswordChange}
            />
            <FormField
              controlId="formGridPasswordVerification"
              label={t('SignUpPage.passwordVerificationLabel')}
              type="password"
              placeholder={t('SignUpPage.passwordVerificationPlaceholder')}
              value={passwordVerification || ''}
              onChange={handlePasswordVerificationChange}
            />
          </div>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          {/* Address */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FormField
              controlId="formGridCountry"
              label={t('SignUpPage.countryLabel')}
              type="text"
              placeholder={t('SignUpPage.countryPlaceholder')}
              value={country || ''}
              onChange={(e) => setCountry(e.target.value)}
            />
            <FormField
              controlId="formGridCity"
              label={t('SignUpPage.cityLabel')}
              type="text"
              placeholder={t('SignUpPage.cityPlaceholder')}
              value={city || ''}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FormField
              controlId="formGridStreet"
              label={t('SignUpPage.streetLabel')}
              type="text"
              placeholder={t('SignUpPage.streetPlaceholder')}
              value={street || ''}
              onChange={(e) => setStreet(e.target.value)}
            />
            <FormField
              controlId="formGridHouseNumber"
              label={t('SignUpPage.houseNumberLabel')}
              type="text"
              placeholder={t('SignUpPage.houseNumberPlaceholder')}
              value={houseNumber || ''}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
            <FormField
              controlId="formGridZipCode"
              label={t('SignUpPage.zipCodeLabel')}
              type="text"
              placeholder={t('SignUpPage.zipCodePlaceholder')}
              value={zipCode || ''}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          {/* Business */}
          <div className="text-center">
            <label className="block text-lg font-medium mb-3">{t('SignUpPage.businessSignupLabel')}</label>
            <div className="flex justify-center">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={isBusiness}
                  onChange={(e) => setIsBusiness(e.target.checked)}
                />
                <span className="ml-2">{t('SignUpPage.yesLabel')}</span>
              </label>
            </div>
          </div>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          <div className="text-center">
            <button
              type="submit"
              className={`bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isBusy ? 'opacity-50' : ''}`}
              disabled={isBusy}
            >
              {isBusy ? <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 100 8V4z"></path>
              </svg> : t('SignUpPage.submitButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
