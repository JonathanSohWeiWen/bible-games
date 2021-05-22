import React from "react";

interface H1Props {
  text: string;
  textAlignment?: string;
  uppercase?: boolean;
  color?: string;
}

const H1 = ({
  text,
  uppercase = false,
  textAlignment = "center",
  color = "black",
}: H1Props) => {
  if (uppercase) {
    text = text.toUpperCase();
  }
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
