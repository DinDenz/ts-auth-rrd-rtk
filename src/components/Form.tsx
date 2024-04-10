import React, { FC, useState } from "react";

interface FormProps {
  handleClick: (email: string, pass: string) => void;
  title: string;
}

const Form: FC<FormProps> = ({ handleClick, title }) => {
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
