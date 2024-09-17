// ContactUs.tsx

import React, { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import FormField from '../../components/Form/FormField/FormField'; // Adjust the import path as necessary
import { DirectionProvider } from '../../context/ReadingDirectionContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactUs() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  // Handle input changes from FormField components
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form data on submission
  const validateForm = (): boolean => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      return false;
    }

    // Basic email format check
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitSuccess(false);
      setSubmitMessage(t('ContactUs.errorMessage'));
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitMessage('');

    try {
      //TODO - Move this into service.tsx file
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setSubmitMessage(t('ContactUs.successMessage'));
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setSubmitSuccess(false);
        setSubmitMessage(errorData.message || t('ContactUs.errorMessage'));
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setSubmitSuccess(false);
      setSubmitMessage(t('ContactUs.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          {t('ContactUs.title')}
        </h1>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-4 p-4 text-green-800 bg-green-200 rounded">
            {submitMessage}
          </div>
        )}

        {/* Error Message */}
        {submitSuccess === false && (
          <div className="mb-4 p-4 text-red-800 bg-red-200 rounded">
            {submitMessage}
          </div>
        )}

        <DirectionProvider>
          <form onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <FormField type="text" controlId="name" 
              label={t('ContactUs.form.name')} placeholder={t('ContactUs.form.namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              required={true}
              validationMessage={t('ContactUs.errors.nameRequired')}
            />

            {/* Email Field */}
            <FormField type="email" controlId="email"
              label={t('ContactUs.form.email')} placeholder={t('ContactUs.form.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              required={true}
              regex={/\S+@\S+\.\S+/}
              validationMessage={t('ContactUs.errors.emailInvalid')}
            />

            {/* Subject Field */}
            <FormField type="text" controlId="subject"
              label={t('ContactUs.form.subject')} placeholder={t('ContactUs.form.subjectPlaceholder')}
              value={formData.subject}
              onChange={handleChange}
              required={true}
              validationMessage={t('ContactUs.errors.subjectRequired')}
            />

            {/* Message Field */}
            <FormField type="textarea" controlId="message"
              label={t('ContactUs.form.message')} placeholder={t('ContactUs.form.messagePlaceholder')}
              value={formData.message}
              onChange={handleChange}
              required={true}
              validationMessage={t('ContactUs.errors.messageRequired')}
              isLtrRtlResponsive={false} 
            />

            {/* Submit Button */}
            <button type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              {isSubmitting ? t('ContactUs.form.submitting') : t('ContactUs.form.submit')}
            </button>
          </form>
        </DirectionProvider>

      </div>
    </div>
  );
}
