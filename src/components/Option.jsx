import React from "react";

const Option = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  console.log(question);
  return (
    <div className="options">
      {question.options.map((option, i) => {
        return (
          <button
            className={`btn btn-option ${i === answer ? "answer" : ""} ${hasAnswered ? (i === question.correctOption ? "correct" : "wrong") : " "}`}
            key={i}
            disabled={answer == null ? false : true}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Option;
