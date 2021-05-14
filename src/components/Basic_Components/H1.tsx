import React from "react";

interface H1Props {
  text: string;
  textAlignment?: string;
  color?: string;
}

const H1 = ({ text, textAlignment = "center", color = "black" }: H1Props) => {
  return (
    <h1
      className={`container mx-auto text-${textAlignment} text-5xl p-4 w-max`}
      style={{ color: color }}
    >
      {text}
    </h1>
  );
};

export default H1;
