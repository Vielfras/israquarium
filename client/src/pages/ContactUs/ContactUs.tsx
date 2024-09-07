import './ContactUs.scss';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-6xl font-bold">Contact Us</h1>
    </div>
  );
}
