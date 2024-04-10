import React, { useState } from "react";

const Form = ({handleClick, title}) => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="write email adress"
        />
        <br />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="write password"
        />
        <button type="button" onClick={() => handleClick(email, pass)}>
          {title}
        </button>
      </form>
    </div>
  );
};

export { Form };
