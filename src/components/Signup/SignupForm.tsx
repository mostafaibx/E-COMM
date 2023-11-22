import { useState } from "react";
import Button from "../../UI/Button";
import { signupWithEmail } from "../../util/Auth/signupWithEmail";
import "./signup-form.css";

type AuthError = {
  usernameError: string;
  emailError: string;
  passwordError: string;
};

const SignupForm = () => {
  function closeModalHandler() {
    console.log("close");
  }

  const [validationError, setValidationError] = useState<AuthError>({
    usernameError: "",
    emailError: "",
    passwordError: "",
  });
  const signupHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signupData = {
      username: e.currentTarget.username.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
      confirmPassword: e.currentTarget.confirmPassword.value,
    };
    const authError = await signupWithEmail(signupData);
    setValidationError(authError);
  };
  return (
    <form
      className="px-6 md:px-20 py-6 w-full h-full "
      onSubmit={signupHandler}
    >
      <div className=" md:grid-cols-2 md:gap-6 md:grid">
        <p className="label col-span-2">Personal Information:</p>
        <div className="flex flex-col">
          <label
            className={
              validationError.usernameError !== "" ? "invalid-label" : "label"
            }
            htmlFor="username"
          >
            Username: *
          </label>
          <input
            type="text"
            placeholder="your name..."
            id="username"
            className={
              validationError.usernameError !== ""
                ? "invalid-input"
                : "sign-input"
            }
          />
          {validationError.usernameError && (
            <p className="text-md text-red-700 font-bold font-serif p-0">
              {validationError.usernameError}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className={
              validationError.usernameError !== "" ? "invalid-label" : "label"
            }
          >
            Email: *
          </label>
          <input
            type="text"
            placeholder="example@mail.com"
            id="email"
            className={
              validationError.emailError ? "invalid-input" : "sign-input"
            }
          />
          {validationError.emailError && (
            <p className="text-md text-red-700 font-bold font-serif ">
              {validationError.emailError}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className={
              validationError.usernameError !== "" ? "invalid-label" : "label"
            }
          >
            Password: *
          </label>
          <input
            type="password"
            placeholder="password..."
            id="password"
            className={
              validationError.passwordError ? "invalid-input" : "sign-input"
            }
          />
          {validationError.passwordError && (
            <p className="text-md p-0 text-red-700 font-bold font-serif">
              {validationError.passwordError}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="label">
            Confirm Password: *
          </label>
          <input
            type="password"
            placeholder="password..."
            id="confirmPassword"
            className="sign-input"
          />
        </div>

        <p className="label col-span-2">Adress:</p>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="label">
            Street + house number:
          </label>
          <input
            type="password"
            placeholder="Street 4"
            id="street"
            className="sign-input"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="label">
            City:
          </label>
          <input
            type="password"
            placeholder="City..."
            id="city"
            className="sign-input"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="label">
            Postal Code:
          </label>
          <input
            type="password"
            placeholder="49040"
            id="PLZ"
            className="sign-input"
          />
        </div>
      </div>

      <div className="flex py-10 px-20">
        <button type="submit">Signup</button>
        <Button color="primary">Signup</Button>
        <Button color="secondary" onClick={closeModalHandler}>
          Close
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
