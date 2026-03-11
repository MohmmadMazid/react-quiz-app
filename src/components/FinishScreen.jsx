import React from "react";

const FinishScreen = ({ points, maximumPoints, dispatch, highScore }) => {
  const percentage = (points / maximumPoints) * 100;
  let emoji;
  if (percentage == 100) emoji = "🏆";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🤔";
  if (percentage < 50) emoji = "😂";
  return (
    <>
      <p className="result">
        {emoji} Your Score {points} out of {maximumPoints} (
        {percentage.toFixed(2)}%)
      </p>
      <p className="highscore">highscore:{highScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
};

export default FinishScreen;
