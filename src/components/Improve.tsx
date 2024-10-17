import { useState } from "react";

const Improve = () => {
  const [user, setExample] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExample((user) => ({ ...user, [name]: value }));
  };

  // * так же можно рассмотреть useReducer

  return (
    <form>
      <label>
        firstname
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        lastname
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        age
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

// так же можно добавить таб индексы, рассмотреть ариа атрибуты...
export { Improve };
