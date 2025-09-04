import { useReducer } from "react";

// Определяем действия (actions)
const ACTIONS = {
  INCREMENT_FIRST: "increment_first",
  INCREMENT_SECOND: "increment_second",
  RESET_FIRST: "reset_first",
  RESET_SECOND: "reset_second",
  RESET_ALL: "reset_all",
};

// Редуктор для управления состоянием
function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT_FIRST:
      return { ...state, firstCounter: state.firstCounter + 1 };
    case ACTIONS.INCREMENT_SECOND:
      return { ...state, secondCounter: state.secondCounter + 1 };
    case ACTIONS.RESET_FIRST:
      return { ...state, firstCounter: 0 };
    case ACTIONS.RESET_SECOND:
      return { ...state, secondCounter: 0 };
    case ACTIONS.RESET_ALL:
      return { firstCounter: 0, secondCounter: 0 };
    default:
      return state;
  }
}

export default function App() {
  // Инициализируем useReducer с начальным состоянием
  const [state, dispatch] = useReducer(counterReducer, {
    firstCounter: 0,
    secondCounter: 0,
  });

  const handleFirstButtonClick = () => {
    dispatch({ type: ACTIONS.INCREMENT_FIRST });
  };

  const handleSecondButtonClick = () => {
    dispatch({ type: ACTIONS.INCREMENT_SECOND });
  };

  const resetFirst = () => {
    dispatch({ type: ACTIONS.RESET_FIRST });
  };

  const resetSecond = () => {
    dispatch({ type: ACTIONS.RESET_SECOND });
  };

  const resetAll = () => {
    dispatch({ type: ACTIONS.RESET_ALL });
  };

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>First Counter: {state.firstCounter}</h3>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <button onClick={handleFirstButtonClick}>+1 to first</button>
          <button onClick={resetFirst}>reset first counter</button>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Second counter: {state.secondCounter}</h3>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <button onClick={handleSecondButtonClick}>+1 to second</button>
          <button onClick={resetSecond}>reset second counter</button>
        </div>
      </div>

      <button onClick={resetAll}>reset all</button>
    </div>
  );
}
