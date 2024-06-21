import React, { forwardRef } from "react";
import { USER_INPUT_VALIDATION } from "@/constants/user";

const { email, password } = USER_INPUT_VALIDATION;

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  type: "email" | "password" | "text";
  isError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

const LoginInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      name,
      type,
      isError,
      errorMessage,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        <label className="block text-base font-normal" htmlFor={name}>
          {label}
        </label>
        <input
          className={`mt-2 block h-14 w-full border px-3 py-2 ${isError ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 disabled:text-gnGray500`}
          placeholder={placeholder}
          type={type}
          name={name}
          ref={ref}
          {...props}
          disabled={disabled}
        />
        {isError && (
          <div className="mt-1 text-sm text-red-500">{errorMessage}</div>
        )}
      </div>
    );
  },
);

LoginInput.displayName = "LoginInput";

export default LoginInput;
