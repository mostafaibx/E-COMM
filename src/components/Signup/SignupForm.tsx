import React from "react";
import Button from "../../UI/Button";

const SignupForm = () => {
  function closeModalHandler() {
    console.log("close");
  }
  const signupHandler = (e: React.SyntheticEvent) => {
    e.defaultPrevented = true;
    console.log("Signup");
  };
  return (
    <form className="flex flex-col px-6 pb-6 ">
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        placeholder="username..."
        id="username"
        className="mb-4 p-2 text-xl rounded-lg ring-2 shadow-md"
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="email..."
        id="email"
        className="mb-4 p-2 text-xl rounded-lg ring-2 shadow-md"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password..."
        id="password"
        className="mb-4 p-2 text-xl rounded-lg ring-2 shadow-md"
      />
      <label htmlFor="password2">Confirm Password</label>
      <input
        type="password2"
        placeholder="password..."
        id="password2"
        className="mb-4 p-2 text-xl rounded-lg ring-2 shadow-md"
      />
      <div className="flex">
        <Button color="primary" onClick={signupHandler}>
          Login
        </Button>
        <Button color="secondary" onClick={closeModalHandler}>
          Close
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
