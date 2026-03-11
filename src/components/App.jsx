import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
const initialState = {
  questions: [],
  //loading ,error,ready,active ,finieshed
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondRemaining: 10,
};
const Time_per_question = 30;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived": {
      return { ...state, questions: action.payload, status: "ready" };
    }
    case "dataFailed": {
      return { ...state, status: "error" };
    }
    case "active": {
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * Time_per_question,
      };
    }
    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion": {
      return { ...state, index: state.index + 1, answer: null };
    }
    case "finish": {
      return {
        ...state,
        status: "finish",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    }
    case "restart": {
      // return { initialState, questions: state.questions, status: "ready" };
      // another way
      return {
        ...state,
        status: "ready",
        points: 0,
        highScore: 0,
        index: 0,
        answer: null,
      };
    }
    case "tick": {
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finish" : state.status,
      };
    }
    default: {
      throw new Error("some thing went worong");
    }
  }
}

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [
    { questions, status, index, answer, points, highScore, secondRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const totalQuestionLength = questions.length;
  // console.log(questions);
  const maximumPoints = questions.reduce((prev, curr) => {
    return curr.points + prev;
  }, 0);
  // console.log("maximum points are ", maximumPoints);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("http://localhost:9000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed", payload: err });
      }
    };
    fetchQuestions();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {/* <p>Question</p> */}
        {/* <p>1/15</p> */}
        {/* {state.status == "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "ready" && ( */}
        {status == "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen length={totalQuestionLength} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              totalQuestionLength={totalQuestionLength}
              maximumPoints={maximumPoints}
              points={points}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondRemaining={secondRemaining} />
              <NextButton
                answer={answer}
                dispatch={dispatch}
                totalQuestionLength={totalQuestionLength}
                index={index}
                status={status}
              />
            </Footer>
          </>
        )}
        {status == "finish" && (
          <FinishScreen
            points={points}
            maximumPoints={maximumPoints}
            dispatch={dispatch}
            highScore={highScore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
