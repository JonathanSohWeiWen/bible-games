import React from "react";

interface H2Props {
  text: string;
  marginLeft?: string;
  color?: string;
}

const H2 = ({ text, marginLeft = "0", color = "black" }: H2Props) => {
  return (
    <h2
      className={`text-center md:text-left  text-4xl py-3 pl-${marginLeft}`}
      style={{ color: color }}
    >
      {text}
    </h2>
  );
};

export default H2;
