import React from "react";

interface TextInputProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
}

const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <input
      className="block shadow-sm rounded-lg border-gray-300 text-left min-w-max w-1/2 my-5 text-xl font-medium"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
