import { useTranslation } from 'react-i18next';
import { DirectionProvider } from "../../context/ReadingDirectionContext";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center py-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-5xl w-full">
        <h1 className="text-5xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-8">
          {t('PrivacyPolicy.title')}
        </h1>

        <DirectionProvider>
          <div className="space-y-12">
            <section>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('PrivacyPolicy.introduction')}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                {t('PrivacyPolicy.infoTitle')}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {t('PrivacyPolicy.personalInfoTitle')}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {t('PrivacyPolicy.personalInfoDescription')}
                  </p>
                  <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                    <li>{t('PrivacyPolicy.personalInfoItem1')}</li>
                    <li>{t('PrivacyPolicy.personalInfoItem2')}</li>
                    <li>{t('PrivacyPolicy.personalInfoItem3')}</li>
                    <li>{t('PrivacyPolicy.personalInfoItem4')}</li>
                    <li>{t('PrivacyPolicy.personalInfoItem5')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {t('PrivacyPolicy.virtualAquariumTitle')}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {t('PrivacyPolicy.virtualAquariumDescription')}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {t('PrivacyPolicy.nonPersonalInfoTitle')}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {t('PrivacyPolicy.nonPersonalInfoDescription')}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                {t('PrivacyPolicy.usageTitle')}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                {t('PrivacyPolicy.usageDescription')}
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>{t('PrivacyPolicy.usageItem1')}</li>
                <li>{t('PrivacyPolicy.usageItem2')}</li>
                <li>{t('PrivacyPolicy.usageItem3')}</li>
                <li>{t('PrivacyPolicy.usageItem4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                {t('PrivacyPolicy.dataSharingTitle')}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('PrivacyPolicy.dataSharingDescription1')}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                {t('PrivacyPolicy.dataSharingDescription2')}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                {t('PrivacyPolicy.notificationsTitle')}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('PrivacyPolicy.notificationsDescription')}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                {t('PrivacyPolicy.dataSecurityTitle')}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('PrivacyPolicy.dataSecurityDescription')}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                {t('PrivacyPolicy.contactUsTitle')}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('PrivacyPolicy.contactUsDescription')}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                <strong>{t('PrivacyPolicy.emailLabel')}:</strong> [your-email@example.com] <br />
                <strong>{t('PrivacyPolicy.phoneLabel')}:</strong> [your-phone-number]
              </p>
            </section>
          </div>
        </DirectionProvider>
      </div>
    </div>
  );
}
