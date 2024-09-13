import React from "react";

interface IModalProps {
  title: string;
  message: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText: string;
  cancelText: string;
}

export default function Modal({ title, message, onConfirm, onCancel, confirmText, cancelText,}: IModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative bg-white dark:bg-cyan-950 p-6 rounded-xl shadow-lg max-w-md w-full transition-transform transform scale-95 sm:scale-100">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-cyan-100 mb-4 text-center">
          {title}
        </h2>
        {/* Changed <p> to <div> */}
        <div className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          {message}
        </div>
        <div className="flex justify-center space-x-4 mt-12">
          <button
            onClick={onCancel}
            className="py-2 px-4 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 transition-all"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
