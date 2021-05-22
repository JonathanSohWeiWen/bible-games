import React from "react";

interface H3Props {
  text: string;
  width?: string;
  textAlign?: string;
  marginLeft?: string;
  color?: string;
}

const H3 = ({
  text,
  width = "max",
  textAlign = "left",
  marginLeft = "0",
  color = "black",
}: H3Props) => {
  return (
    <h3
      className={`text-center md:text-${textAlign}
      text-2xl py-1 pl-${marginLeft} md:w-${width}`}
      style={{ color: color }}
    >
      {text}
    </h3>
  );
};

export default H3;
