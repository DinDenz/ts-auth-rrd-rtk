import { useState } from "react";

export default function App() {
  const [firstCounter, setFirstCounter] = useState(0);
  const handleButtonClick = () => {
    setFirstCounter(firstCounter + 1);
    setFirstCounter(firstCounter + 1);
  };
  const resetClicks = () => {
    setFirstCounter(0);
  };

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>First Counter: {firstCounter}</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleButtonClick}>click</button>
        <button onClick={resetClicks}>reset</button>
      </div>
      <br />
    </div>
  );
}
