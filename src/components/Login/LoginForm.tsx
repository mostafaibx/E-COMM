import React from "react";
import Button from "../../UI/Button";

const LoginForm = () => {
  const loginHandler = (e: React.SyntheticEvent) => {
    e.defaultPrevented = true;
    console.log("login");
  };
  return (
    <form className="flex flex-col px-6 ">
      <label htmlFor="email"></label>
      <input
        type="text"
        placeholder="email"
        id="email"
        className="mb-4 p-2 text-xl rounded-lg ring-2 shadow-md"
      />
      <label htmlFor="password"></label>
      <input
        type="password"
        placeholder="password"
        id="password"
        className="mb-4 p-2 text-xl rounded-lg ring-2 shadow-md"
      />
      <div className="flex">
        <Button color="primary" onClick={loginHandler}>
          Login
        </Button>
        <Button color="secondary" onClick={() => console.log("close")}>
          Close
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
