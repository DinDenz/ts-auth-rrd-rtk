import { Login } from "components/Login";
import { Link } from "react-router-dom";
import { Questions } from "components/Questions";
import { Questions2 } from "components/Questions2";
import { Question3 } from "components/Question3";
import { QuestionForm } from "components/QuestionForm";
import { Improve } from "components/Improve";
import { ImproveReducer } from "components/ImproveReducer";
import { ItemsBlock } from "components/CodingTask/ItemsBlock";

const LoginPage = () => {
  return (
    <>
      <div>
        <h1>Login Page</h1>
        <Login />
        <p>
          Or
          <br />
          <Link to="/register">Register</Link>
        </p>
      </div>
      <Questions />
      <Questions2 />
      <Question3 />
      <QuestionForm />
      <Improve />
      <br />
      <ImproveReducer />
      <br />
      <ItemsBlock />
    </>
  );
};

export default LoginPage;
