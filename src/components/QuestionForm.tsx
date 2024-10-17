import { useState } from "react";

const QuestionForm = () => {
  const [example, setExample] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExample((example) => ({ ...example, [name]: value }));
  };

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={example.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={example.lastName}
        onChange={handleChange}
      />
    </div>
  );
};

export { QuestionForm };
