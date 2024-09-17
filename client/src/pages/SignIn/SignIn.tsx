// SignIn.tsx

import { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import FormField from '../../components/Form/FormField/FormField';

export default function SignIn() {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [signInSuccess, setSignInSuccess] = useState<boolean>(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);

    if (!auth) {
      setIsBusy(false);
      return;
    }

    const signInResponse = await auth.signIn(email, password);

    if (signInResponse?.error) {
      alert(`Error Signing-In: ${signInResponse.error}`);
    } else {
      setSignInSuccess(true);
    }

    setIsBusy(false);
  };

  useEffect(() => {
    if (signInSuccess && auth?.userDetails) {
      navigate('/user-profile');
    }
  }, [signInSuccess, auth?.userDetails, navigate]);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <h3 className="text-center text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">{t('SignInPage.title')}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField type="email" controlId="formBasicEmail"
            label="" placeholder={t('SignInPage.enterEmail')}
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <FormField type="password" controlId="formBasicPassword"
            label="" placeholder={t('SignInPage.enterPassword')}
            value={password} onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={isBusy}
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50">
            {isBusy ? (
              <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 100 8V4z"></path>
              </svg>
            ) : (
              t('SignInPage.submit')
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
