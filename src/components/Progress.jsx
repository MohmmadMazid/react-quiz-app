import React from "react";

const Progress = ({
  index,
  totalQuestionLength,
  maximumPoints,
  points,
  answer,
}) => {
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={totalQuestionLength}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{totalQuestionLength}
      </p>
      <p>
        <em>{points}</em> /{maximumPoints}
      </p>
    </header>
  );
};

export default Progress;
