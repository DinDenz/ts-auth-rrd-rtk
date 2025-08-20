import { useState } from "react";

const Question4 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
        }}
      ></button>
      <p>{count}</p>
    </div>
  );
};

export { Question4 };
// при клике увеличивается на 3 сразу. если бы изменение было бы не через колбэк то увеличивался бы на 1
