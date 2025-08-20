import { useState } from "react";

const Questions = () => {
  const [example, setExample] = useState([1, 2, 3, 4]);

  const handleClick = () => {
    const newArr = [...example].reverse();
    newArr.length >= 2 && newArr[1] > 0 && (newArr[1] = 0);
    setExample(newArr);
  };

  return (
    <div>
      <p>{example}</p>
      <button onClick={handleClick}>reverse and change 2nd</button>
    </div>
  );
};

export { Questions };
