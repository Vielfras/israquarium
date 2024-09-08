import './SignUp.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate } from 'react-router-dom';
import FormField from '../../components/Form/FormField/FormField';

export default function SignUp() {
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

  const phoneRegex = /0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/;
  const nameRegex = /^[A-Za-z]{2,}$/;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d.*\d.*\d)(?=.*[_*&^%$#@!-])[A-Za-z\d_*&^%$#@!-]{8,}$/;

  const [phoneIsValid, setPhoneIsValid] = useState<boolean>(true);
  const [firstNameIsValid, setFirstNameIsValid] = useState<boolean>(true);
  const [middleNameIsValid, setMiddleNameIsValid] = useState<boolean>(true);
  const [lastNameIsValid, setLastNameIsValid] = useState<boolean>(true);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [passwordVerificationIsValid, setPasswordVerificationIsValid] = useState<boolean>(true);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value);
    setFirstNameIsValid(nameRegex.test(value));
  };

  const handleMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMiddleName(value);
    setMiddleNameIsValid(value === '' || nameRegex.test(value));
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameIsValid(nameRegex.test(value));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneIsValid(phoneRegex.test(value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailIsValid(emailRegex.test(e.target.value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordIsValid(passwordRegex.test(value));
  };

  const handlePasswordVerificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPasswordVerification(value);
    setPasswordVerificationIsValid(value === password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);

    if (!auth) {
      setIsBusy(false);
      return;
    }

    if (!firstName || !lastName || !email || !password || !passwordVerification || password !== passwordVerification) {
      toasts?.addToast('⚠️', 'Error Signing-Up', 'Please fill out all required fields.', 'danger');
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
      image: {
        url: 'https://lorempokemon.fakerapi.it/pokemon',
        alt: 'You wrote that this is NOT required 😉',
      },
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
      toasts?.addToast('⚠️', 'Error Signing-Up', error, 'danger');
    } else {
      toasts?.addToast('👍🏼', 'Successfully Signed-Up', 'Please sign in with your credentials.', 'success');
      navigate('/signin');
    }

    setIsBusy(false);
  };


  return (
    <div className="SignUp Page flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-gray-900 dark:text-gray-50">
        <h3 className="text-3xl font-bold mb-6 text-center">Sign-Up Page</h3>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FormField
              controlId="formGridFirstName"
              label="First Name"
              type="text"
              placeholder="First"
              value={firstName || ''}
              onChange={handleFirstNameChange}
              regex={nameRegex}
              validationMessage="First name must be at least 2 letters."
              isValid={firstNameIsValid}
            />
            <FormField
              controlId="formGridMiddleName"
              label="Middle Name (Optional)"
              type="text"
              placeholder="Middle"
              value={middleName || ''}
              onChange={handleMiddleNameChange}
              regex={nameRegex}
              validationMessage="Middle name must be at least 2 letters."
              isValid={middleNameIsValid}
            />
            <FormField
              controlId="formGridLastName"
              label="Last Name"
              type="text"
              placeholder="Last"
              value={lastName || ''}
              onChange={handleLastNameChange}
              regex={nameRegex}
              validationMessage="Last name must be at least 2 letters."
              isValid={lastNameIsValid}
            />
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              controlId="formGridPhone"
              label="Phone"
              type="text"
              placeholder="Phone number"
              value={phone || ''}
              onChange={handlePhoneChange}
              regex={phoneRegex}
              validationMessage="Please enter a valid phone number."
              isValid={phoneIsValid}
            />
            <FormField
              controlId="formGridEmail"
              label="Email"
              type="email"
              placeholder="Email Address"
              value={email || ''}
              onChange={handleEmailChange}
              regex={emailRegex}
              validationMessage="Please enter a valid email address."
              isValid={emailIsValid}
            />
          </div>

          {/* Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              controlId="formGridPassword"
              label="Password"
              type="password"
              placeholder="Password"
              value={password || ''}
              onChange={handlePasswordChange}
              regex={passwordRegex}
              validationMessage="Password must be at least 8 characters long, include 1 capital letter, 1 lowercase letter, at least 1 number, and 1 special character."
              isValid={passwordIsValid}
            />
            <div className="col-span-1">
              <FormField
                controlId="formGridPasswordVerification"
                label="Password Verification"
                type="password"
                placeholder="Verify Password"
                value={passwordVerification || ''}
                onChange={handlePasswordVerificationChange}
                validationMessage="Passwords must match."
                isValid={passwordVerificationIsValid}
              />
            </div>
          </div>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          {/* Address */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FormField
              controlId="formGridCountry"
              label="Country"
              type="text"
              placeholder="Country"
              value={country || ''}
              onChange={(e) => setCountry(e.target.value)}
            />
            <FormField
              controlId="formGridCity"
              label="City"
              type="text"
              placeholder="City"
              value={city || ''}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FormField
              controlId="formGridStreet"
              label="Street"
              type="text"
              placeholder="Street"
              value={street || ''}
              onChange={(e) => setStreet(e.target.value)}
            />
            <FormField
              controlId="formGridHouseNumber"
              label="House Number"
              type="text"
              placeholder="House Number"
              value={houseNumber || ''}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
            <FormField
              controlId="formGridZipCode"
              label="Zip Code"
              type="text"
              placeholder="Zip Code"
              value={zipCode || ''}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          {/* Business Signup */}
          <div className="text-center">
            <label className="block text-lg font-medium mb-3">Sign Up as a Business?</label>
            <div className="flex justify-center">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={isBusiness}
                  onChange={(e) => setIsBusiness(e.target.checked)}
                />
                <span className="ml-2">Yes</span>
              </label>
            </div>
          </div>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className={`bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isBusy ? 'opacity-50' : ''
                }`}
              disabled={isBusy}
            >
              {isBusy ? (
                <svg
                  className="animate-spin h-5 w-5 mx-auto text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 100 8V4z"
                  ></path>
                </svg>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
