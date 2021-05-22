import React from "react";

interface ErrorPromptProps {
  text: string;
}

const ErrorPrompt = ({ text }: ErrorPromptProps) => {
  return (
    <div
      className={`rounded bg-red-100 text-red-700 w-52 md:w-1/5 p-4 text-center text-sm`}
    >
      {text}
    </div>
  );
};

export default ErrorPrompt;
