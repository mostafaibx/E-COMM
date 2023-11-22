import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { AuthError, SignupData } from "../../types";
import { validateCredentials } from "../validateCredentials";

export const signupWithEmail = async (
  signupData: SignupData
): Promise<AuthError> => {
  const { username, email, password, confirmPassword } = signupData;
  let validationErrors: AuthError = {
    usernameError: "",
    emailError: "",
    passwordError: "",
  };

  validationErrors = validateCredentials(
    email,
    password,
    username,
    confirmPassword
  );

  if (
    validationErrors.usernameError ||
    validationErrors.emailError ||
    validationErrors.passwordError
  ) {
    return validationErrors;
  }

  try {
    await setPersistence(auth, browserLocalPersistence);
    await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
    }
  } catch (error) {
    const errorCode = error.code;
    switch (errorCode) {
      case "auth/invalid-email":
        validationErrors.emailError = "Email is not valid";
        return validationErrors;
      case "auth/missing-email":
        validationErrors.emailError = "Email cannot be empty";
        return validationErrors;
      case "auth/email-already-in-use":
        validationErrors.emailError = "Email already in use";
        return validationErrors;
    }
  }
  return validationErrors;
};
