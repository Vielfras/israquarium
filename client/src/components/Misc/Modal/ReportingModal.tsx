// ReportingModal.tsx

import { useTranslation } from 'react-i18next';
import Modal from './Modal';
import { useState } from 'react';

interface IReportingModalProps {
  onConfirm: (reason: string, message: string) => void;
  onCancel: () => void;
  show: boolean;
}

export default function ReportingModal({ onConfirm, onCancel, show }: IReportingModalProps) {
  const { t } = useTranslation();
  const [reportReason, setReportReason] = useState<string>('');
  const [reportMessage, setReportMessage] = useState<string>('');

  const handleConfirm = () => {
    onConfirm(reportReason, reportMessage);
    setReportReason('');
    setReportMessage('');
  };

  const handleCancel = () => {
    setReportReason('');
    setReportMessage('');
    onCancel();
  };

  return (
    show && (
      <Modal title={t('ReportModal.reportIssue')}
        confirmText={t('ReportModal.submitReport')} cancelText={t('ReportModal.cancelReport')}
        onConfirm={handleConfirm} onCancel={handleCancel}
        message={
          <div>
            <div className="mb-4">
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('ReportModal.reportReason')}
              </label>
              <select id="reason" value={reportReason}
                className="mt-1 block w-full p-2 border border-gray-300 text-gray-700 dark:text-gray-500 rounded-md shadow-sm"
                onChange={(e) => setReportReason(e.target.value)}
              >
                <option value="">{t('ReportModal.selectReason')}</option>
                <option value="photo">{t('ReportModal.reportPhoto')}</option>
                <option value="spelling">{t('ReportModal.reportSpelling')}</option>
                <option value="incorrect">{t('ReportModal.reportIncorrect')}</option>
                <option value="license">{t('ReportModal.reportLicense')}</option>
                <option value="other">{t('ReportModal.reportOther')}</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('ReportModal.reportMessage')}
              </label>
              <textarea id="message" value={reportMessage} placeholder={t('ReportModal.enterDetails')}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                onChange={(e) => setReportMessage(e.target.value)}
              />
            </div>
          </div>
        }
      />
    )
  );
}
