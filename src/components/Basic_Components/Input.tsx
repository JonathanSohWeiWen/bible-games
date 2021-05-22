import React from "react";

interface TextInputProps {
  type: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
}

const Input = ({
  type,
  placeholder = "",
  name,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <input
      className=" block shadow-sm rounded-lg border-gray-300 text-left w-full my-5 text-sm md:text-xl font-medium mx-auto md:mx-0"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
