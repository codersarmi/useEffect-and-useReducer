import { useEffect, useState, useReducer } from "react";
import "./App.css";

function App() {
  /* Code for useEffect */
  const [key, setKey] = useState("");

  useEffect(() => {
    console.log(key);
  }, [key]);
  /* ###################################################################### */

  /* Code for useReducer */

  const firstReducer = (state, action) => {
    switch (action.type) {
      case "minus":
        return { ...state, count: state.count - 1 };
      case "plus":
        return { ...state, count: state.count + 1 };
      case "updateKey":
        return { ...state, key: action.payload };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(firstReducer, { count: 0, key: "" });

  const ACTION = {
    PLUS: "plus",
    MINUS: "minus",
    UPDATE_KEY: "updateKey",
  };

  /* ######################################################################### */
  return (
    <section className="App">
      <div className="useEffect">
        <h1>Learn useEffect</h1>
        <input type="text" onChange={(e) => setKey(e.target.value)} />
        <h1>Your Word is - {key}</h1>
      </div>

      <div className="useReducer">
        <h1>Learn useReducer</h1>
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: ACTION.UPDATE_KEY, payload: e.target.value })
          }
        />
        <h1>Your Number is - {state.key}</h1>
        <button onClick={() => dispatch({ type: ACTION.MINUS })}>-</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: ACTION.PLUS })}>+</button>
      </div>
    </section>
  );
}

export default App;
