export default function PrivacyPolicy() {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-5xl w-full">
        <h1 className="text-5xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-12">
          <section>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              At <strong>Israquarium</strong>, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit and interact with our website. By using our website, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
              Information We Collect
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  1. Personal Information
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  When you register for an account on Israquarium, we may collect the following personal information:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Password (encrypted)</li>
                  <li>Preferences for notifications (feeding and cleaning reminders)</li>
                  <li>Details about your aquarium, including fish species, feeding schedules, and cleaning schedules</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  2. Virtual Aquarium Data
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Users can create and maintain a virtual aquarium on our platform, including details like fish species, feeding schedules, and cleaning times. This data is stored in your account for tracking purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  3. Non-Personal Information
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  We collect non-personal information such as browser type, language preference, referring site, and the date and time of each visitor request. This information helps us understand how visitors use our website and improve our services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
              How We Use Your Information
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              The information we collect is used for the following purposes:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 ml-4 space-y-2">
              <li>Account creation and management, including your virtual aquarium and fish cards</li>
              <li>Sending email notifications about feeding and cleaning schedules (if opted-in)</li>
              <li>Responding to inquiries or providing support</li>
              <li>Improving the website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
              Data Use and Sharing
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We do not use your personal information for any purposes other than those necessary for providing the services offered by Israquarium. Your data will not be shared with or accessible to any third parties unless required by law.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
              All information is used solely for the purpose of helping you maintain your virtual aquarium and providing timely notifications. We do not sell, rent, or otherwise share your personal data with any outside parties for marketing or other purposes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
              Email Notifications
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              If you opt in, we will send you email notifications about feeding schedules and cleaning times for your virtual aquarium. You can modify your notification preferences or unsubscribe at any time through your account settings.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
              Data Security
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We implement security measures to protect your data from unauthorized access, alteration, or disclosure. While we strive to protect your personal information, no method of transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
              Contact Us
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              If you have any questions or concerns about this Privacy Policy, or if you are the owner of any content used on our website and wish to discuss its use, please contact us at:
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
              <strong>Email:</strong> [your-email@example.com] <br />
              <strong>Phone:</strong> [your-phone-number]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
