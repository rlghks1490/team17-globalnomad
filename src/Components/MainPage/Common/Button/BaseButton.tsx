import React from "react";

interface BaseButtonProps {
  size: "xl" | "lg" | "md" | "sm";
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset";
  text?: string;
  border?: "rounded-md" | "rounded-lg" | "rounded-full";
  disabled?: boolean;
  onClick?: () => void;
  form?: string;
}

const BaseButton = ({
  size,
  variant = "primary",
  type = "button",
  text = "Button",
  border = "rounded-md",
  ...props
}: BaseButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans transition-opacity focus:outline-none focus:transition-all focus:ease-in-out focus:duration-200";

  const sizeStyles = {
    xl: "w-[12.7rem] py-4",
    lg: "w-full py-3.5",
    md: "w-[14.4rem] py-4",
    sm: "w-[10.8rem] py-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gnLightBlack text-white hover:opacity-80 disabled:bg-gnGray400",
    secondary: "bg-gnGray400 text-white hover:opacity-80 disabled:bg-gnGray600",
    outline:
      "bg-transparent border border-black text-black hover:bg-gnGray200 hover:border-gnGray400 disabled:border-gnGray600",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${border}`;

  return (
    <button className={classes} type={type} {...props}>
      <span>{text}</span>
    </button>
  );
};

export default BaseButton;
