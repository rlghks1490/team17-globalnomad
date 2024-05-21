import React from "react";

type InputTypeAttribute = Extract<
  HTMLInputTypeAttribute,
  "text" | "email" | "number" | "password" | "tel" | "url"
>;

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: InputTypeAttribute;
  label?: string;
};

const Input = ({ label, placeholder, id, className, ...rest }: InputProps) => {
  return (
    <div>
      <input
        id={id}
        placeholder={placeholder || " "}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        {...rest}
      />
      {label ? (
        <label
          className="absolute left-3 -top-2.5 bg-white px-1 text-gray-500 text-sm transition-transform duration-300 transform -translate-y-2"
          htmlFor={id}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
