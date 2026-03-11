import React, { useEffect } from "react";

const Timer = ({ dispatch, secondRemaining }) => {
  const min = Math.floor(secondRemaining / 60); // this will give the min
  const secs = secondRemaining % 60; // this will give you the seconds
  useEffect(() => {
    const id = setInterval(() => {
      //   console.log("timer");
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}: {secs < 10 && "0"}
      {secs}
    </div>
  );
};

export default Timer;
