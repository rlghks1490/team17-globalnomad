import React, { useState } from "react";
import {
  EMAIL_STANDARD,
  ERROR_EMAIL_CHECK,
  ERROR_EMAIL_EMPTY,
  ERROR_PASSWORD_EMPTY,
  ERROR_PASSWORD_VALIDATION,
} from "@/constants/user";

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  type: "text" | "email" | "password";
  onValidate: (name: string, isValid: boolean) => void;
}

const LoginInput = ({
  label,
  placeholder,
  name,
  type,
  onValidate,
}: InputProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (touched) {
      validate(e.target.value);
    }
  };
  const handleBlur = () => {
    setTouched(true);
    validate(value);
  };

  const validate = (value: string) => {
    let error = null;
    let isValid = true;
    if (type === "email") {
      if (!value) {
        error = ERROR_EMAIL_EMPTY;
        isValid = false;
      } else if (EMAIL_STANDARD.test(value)) {
        error = ERROR_EMAIL_CHECK;
        isValid = false;
      }
    } else if (type === "password") {
      if (!value) {
        error = ERROR_PASSWORD_EMPTY;
        isValid = false;
      } else if (value.length < 8) {
        error = ERROR_PASSWORD_VALIDATION;
        isValid = false;
      }
    } else {
      if (!value) {
        error = "";
        isValid = false;
      }
    }
    setError(error);
    onValidate(name, isValid);
  };

  return (
    <div className="w-full">
      <label className="block text-base font-normal" htmlFor={name}>
        {label}
      </label>
      <input
        className={` mt-2 block h-14 w-full border px-3 py-2 ${error && touched ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500`}
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && touched && (
        <div className="mt-1 text-sm text-red-500">{error}</div>
      )}
    </div>
  );
};

export default LoginInput;
