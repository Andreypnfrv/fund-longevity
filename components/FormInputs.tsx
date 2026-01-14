'use client';

import React, { useState, useEffect } from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  error?: string;
  emailInvalidMessage?: string;
  fieldRequiredMessage?: string;
}

export function FormInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  helperText,
  error,
  emailInvalidMessage = 'Please enter a valid email address',
  fieldRequiredMessage = 'This field is required',
}: FormInputProps): React.ReactElement {
  const [touched, setTouched] = useState(false);
  const [localError, setLocalError] = useState<string>('');

  useEffect(() => {
    if (touched && type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setLocalError(emailInvalidMessage);
      } else {
        setLocalError('');
      }
    } else if (touched && required && !value) {
      setLocalError(fieldRequiredMessage);
    } else {
      setLocalError('');
    }
  }, [value, touched, type, required, emailInvalidMessage, fieldRequiredMessage]);

  const displayError = error || localError;
  const hasError = !!displayError;

  return (
    <div>
      <label htmlFor={id} className="block text-base font-medium mb-1.5 text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 border rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
          hasError
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
        }`}
      />
      {displayError && (
        <span className="text-sm text-red-600 mt-1 block">{displayError}</span>
      )}
      {helperText && !displayError && (
        <span className="text-sm text-gray-500 mt-1 block">{helperText}</span>
      )}
    </div>
  );
}

interface RadioOption {
  value: string;
  label: string;
}

interface FormRadioGroupProps {
  name: string;
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function FormRadioGroup({
  name,
  label,
  options,
  value,
  onChange,
  required = false,
}: FormRadioGroupProps): React.ReactElement {
  return (
    <div>
      <label className="block text-base font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="mr-3"
            />
            <label htmlFor={`${name}-${option.value}`} className="text-base">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
