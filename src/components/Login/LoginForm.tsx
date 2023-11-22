import React from "react";
import Button from "../../UI/Button";
import { loginWithEmail } from "../../util/Auth/loginWithEmail";
import { useState } from "react";
import { AuthError } from "../../types";

const LoginForm = () => {
  const [validationError, setValidationError] = useState<AuthError>({
    usernameError: "",
    emailError: "",
    passwordError: "",
  });
  const loginHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const authError = await loginWithEmail(loginData);
    setValidationError(authError);
  };
  return (
    <form className="flex flex-col px-6  " onSubmit={loginHandler}>
      <div className="flex flex-col my-10 min-h-40 h-40 justify-around">
        <input
          type="text"
          placeholder="email"
          id="email"
          className=" p-2 text-xl rounded-lg ring-1 shadow-md"
        />
        {validationError.emailError && (
          <p className="text-md text-red-500 font-bold font-sans ">
            {validationError.emailError}
          </p>
        )}
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-2 text-xl rounded-lg ring-1 shadow-md"
        />
        {validationError.passwordError && (
          <p className="text-md p-0 text-red-500 font-bold font-sans">
            {validationError.passwordError}
          </p>
        )}
      </div>
      <div className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          login
        </button>

        <Button color="secondary" onClick={() => console.log("close")}>
          Close
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
