import React from "react";

const StartScreen = ({ length, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome To React Quiz</h2>
      <h3>{length} question to test your react experties</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Let's Start
      </button>
    </div>
  );
};

export default StartScreen;
