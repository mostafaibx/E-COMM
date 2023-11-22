import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthError, LoginData } from "../../types";
import { auth } from "../../firebase";
import { validateCredentials } from "../validateCredentials";

export const loginWithEmail = async (loginCred: LoginData) => {
  let validationErrors: AuthError = {
    usernameError: "",
    emailError: "",
    passwordError: "",
  };
  validationErrors = validateCredentials(loginCred.email, loginCred.password);

  if (
    validationErrors.usernameError ||
    validationErrors.emailError ||
    validationErrors.passwordError
  ) {
    return validationErrors;
  }

  try {
    await signInWithEmailAndPassword(auth, loginCred.email, loginCred.password);
  } catch (error) {
    console.log(error);
  }
  return validationErrors;
};
