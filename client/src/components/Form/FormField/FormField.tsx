// FormField.tsx

import { useState } from "react";
import { DirectionProvider } from "../../../context/ReadingDirectionContext";

interface IFormField {
  controlId: string;
  label: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regex?: RegExp;
  validationMessage?: string;
  isValid?: boolean;
  isLtrRtlResponsive?: boolean;
  required?: boolean; 
}

// TODO - Rename to ValidatingFormField
export default function FormField({ 
  isLtrRtlResponsive = true, 
  required = false, 
  ...formData
}: IFormField) {
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    formData.onChange(e);

    if (!touched) {
      setTouched(true);
    }

    if (required && value.trim() === "") {
      setIsValid(false);
    } else if (formData.regex) {
      setIsValid(formData.regex.test(value));
    } else {
      setIsValid(true);
    }
  };

  const formContent = (
    <>
      <label htmlFor={formData.controlId}
        className="block text-sm font-medium text-gray-900 dark:text-gray-50">
        {formData.label}
        {required && <span className="text-red-500 ml-1">*</span>} {/* Indicate required fields */}
      </label>
      <input  name={formData.controlId} id={formData.controlId} type={formData.type}
        placeholder={formData.placeholder} value={formData.value}
        onChange={handleValidation}
        required={required} 
        onBlur={() => setTouched(true)} 
        className={`mt-1 block w-full px-3 py-2 border text-gray-900 ${
          !isValid && touched ? "border-red-500 text-red-900" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-gray-100`}
      />
      {!isValid && touched && (
        <p className="mt-2 text-sm text-red-600">
          {formData.validationMessage || (required ? "This field is required." : "Invalid input.")}
        </p>
      )}
    </>
  );

  return (
    <div className="w-full mb-4" id={formData.controlId}>
      {isLtrRtlResponsive ? (
        <DirectionProvider>{formContent}</DirectionProvider>
      ) : (
        formContent
      )}
    </div>
  );
}
