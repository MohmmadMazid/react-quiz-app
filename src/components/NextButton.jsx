import React from "react";

const NextButton = ({
  answer,
  dispatch,
  totalQuestionLength,
  index,
  status,
}) => {
  if (answer == null) return;
  if (index < totalQuestionLength - 1)
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
  if (index == totalQuestionLength - 1 && status == "active")
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          finish
        </button>
      </div>
    );
};

export default NextButton;
