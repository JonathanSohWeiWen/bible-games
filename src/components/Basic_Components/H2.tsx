import React from "react";

interface H2Props {
  text: string;
  color?: string;
}

const H2 = ({ text, color }: H2Props) => {
  if (!color) {
    color = "black";
  }
  return (
    <h2 className="text-left text-4xl p-3" style={{ color: color }}>
      {text}
    </h2>
  );
};

export default H2;
