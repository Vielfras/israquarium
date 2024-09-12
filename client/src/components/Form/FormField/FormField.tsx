import { DirectionProvider } from "../../../context/ReadingDirectionContext";
import React, { useState } from "react";

interface IFormField {
  controlId: string;
  // TODO - name -> this will be used instead of an controlId between label and input
  label: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regex?: RegExp;
  validationMessage?: string;
  isValid?: boolean;
}

// TODO - Rename to ValidatingFormField
export default function FormField(formData: IFormField) {
  const [isValid, setIsValid] = useState(true);

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData.onChange(e);
    if (formData.regex) {
      setIsValid(formData.regex.test(e.target.value));
    }
  };

  return (
    <div className="w-full mb-4" id={formData.controlId}>
      <DirectionProvider>
        <label htmlFor={formData.controlId} className="block text-sm font-medium text-gray-900 dark:text-gray-50">
          {formData.label}
        </label>
        <input name={formData.controlId} id={formData.controlId} 
          type={formData.type}
          placeholder={formData.placeholder}
          value={formData.value}
          onChange={handleValidation}
          className={`mt-1 block w-full px-3 py-2 border text-gray-900
            ${isValid ? "border-gray-300" : "border-red-500 text-red-900"} 
            rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {!isValid && (
          <p className="mt-2 text-sm text-red-600">{formData.validationMessage}</p>
        )}
      </DirectionProvider>
    </div>
  );
}

