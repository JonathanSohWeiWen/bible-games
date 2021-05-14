import React from "react";

interface CardProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

const Card = ({
  width = "11/12",
  height = "max",
  backgroundColor = "bg-gray-100",
  children,
}: CardProps) => {
  return (
    <div
      className={`${backgroundColor} w-${width} h-${height} shadow-md rounded p-4 text-justify mx-auto`}
    >
      {children}
    </div>
  );
};

export default Card;
