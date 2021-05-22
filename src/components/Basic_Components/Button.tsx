import React from "react";

interface ButtonProps {
  text: string;
  rounded?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  text,
  rounded = true,
  disabled = false,
  onClick,
}: ButtonProps) => {
  let roundedProps = "rounded-md";
  if (!rounded) {
    roundedProps = "";
  }
  return (
    <button
      className={`${
        !disabled && "hover:bg-blue-400"
      } focus:outline-none bg-blue-500 text-white border-blue-500 ${roundedProps} p-2 active:bg-blue-700 active:border-blue-700  disabled:opacity-50`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const SecondaryButton = ({
  text,
  rounded = true,
  disabled = false,
  onClick,
}: ButtonProps) => {
  let roundedProps = "rounded-md";
  if (!rounded) {
    roundedProps = "";
  }
  return (
    <button
      className={`${
        !disabled && "hover:bg-gray-400"
      } focus:outline-none bg-gray-300 text-white border-gray-300 ${roundedProps} p-2 active:bg-gray-500 active:border-gray-500  disabled:opacity-50`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const AcceptButton = ({
  text,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${
        !disabled && "hover:bg-green-400"
      } focus:outline-none bg-green-500 text-white border-green-500 rounded-md p-2 active:bg-green-700 active:border-green-700  disabled:opacity-50`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const RejectButton = ({
  text,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${
        !disabled && "hover:bg-red-400"
      } focus:outline-none bg-red-500 text-white border-red-500 rounded-md p-2 active:bg-red-700 active:border-red-700  disabled:opacity-50`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
