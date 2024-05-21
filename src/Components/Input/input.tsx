import React, { useState } from 'react';
import {
  EMAIL_STANDARD,
  ERROR_EMAIL_CHECK,
  ERROR_EMAIL_EMPTY,
  ERROR_PASSWORD_EMPTY,
  ERROR_PASSWORD_VALIDATION,
} from '@/constants/user';

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  type: 'text' | 'email' | 'password';
}

const Input = ({ label, placeholder, name, type }: InputProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    validate(e.target.value);
  };

  const handleBlur = () => {
    validate(value);
  };

  const validate = (value: string) => {
    let error = null;
    if (type === 'email') {
      if (!value) {
        error = ERROR_EMAIL_EMPTY;
      } else if (EMAIL_STANDARD.test(value)) {
        error = ERROR_EMAIL_CHECK;
      }
    } else if (type === 'password') {
      if (!value) {
        error = ERROR_PASSWORD_EMPTY;
      } else if (value.length < 8) {
        error = ERROR_PASSWORD_VALIDATION;
      }
    } else {
      if (!value) {
        error = '';
      }
    }
    setError(error);
  };

  return (
    <div className="'mb-4' w-full">
      <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      <input
        className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <div className="mt-1 text-sm text-red-500">{error}</div>}
    </div>
  );
};

export default Input;