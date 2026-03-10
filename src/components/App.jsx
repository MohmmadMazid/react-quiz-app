import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
const initialState = {
  questions: [],
  //loading ,error,ready,active ,finieshed
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived": {
      return { ...state, questions: action.payload, status: "ready" };
    }
    case "dataFailed": {
      return { ...state, status: "error" };
    }
    case "active": {
      return { ...state, status: "active" };
    }
    default: {
      throw new Error("some thing went worong");
    }
  }
}

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const totalQuestionLength = questions.length;
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
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}

export default App;
