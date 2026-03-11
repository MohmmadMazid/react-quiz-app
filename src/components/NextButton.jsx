import React from "react";

const NextButton = ({ answer, dispatch }) => {
  if (answer == null) return;
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        next
      </button>
    </div>
  );
};

export default NextButton;
