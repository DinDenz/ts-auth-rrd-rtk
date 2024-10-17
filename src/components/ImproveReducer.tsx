import { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  age: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_FIRSTNAME":
      return { ...state, firstName: action.payload };
    case "SET_LASTNAME":
      return { ...state, lastName: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

const ImproveReducer = () => {
  const [user, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

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
export { ImproveReducer };
