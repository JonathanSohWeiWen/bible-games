import React from "react";
import H1 from "../components/Basic_Components/H1";
import Timer from "../components/Timer";

const Home = () => {
  return (
    <>
      <H1 text="Home" />
      <Timer initialHours={1} initialMinutes={10} initialSeconds={0} />
    </>
  );
};

export default Home;
