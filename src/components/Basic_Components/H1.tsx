import React from "react";

interface H1Props {
  text: string;
  color?: string;
}

const H1 = ({ text, color }: H1Props) => {
  if (!color) {
    color = "black";
  }
  return (
    <h1
      className="container mx-auto text-center text-5xl p-4"
      style={{ color: color }}
    >
      {text}
    </h1>
  );
};

export default H1;
