import { AuthError } from "../types";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
export const validateCredentials = (
  email: string,
  password: string,
  username?: string,
  confirmPassword?: string
) => {
  const validationErrors: AuthError = {
    usernameError: "",
    emailError: "",
    passwordError: "",
  };

  if (username) {
    if (username.trim().length < 3) {
      validationErrors.usernameError = "Username must be at least 3 characters";
    }
  }

  if (email.trim().length === 0) {
    validationErrors.emailError = "Email cannot be empty";
  } else if (!emailRegex.test(email)) {
    validationErrors.emailError = "Email is not valid";
  }

  if (password.trim().length === 0) {
    validationErrors.passwordError = "Password cannot be empty";
  } else if (password.length < 6) {
    validationErrors.passwordError = "Password must be at least 6 characters";
  } else if (!passwordRegex.test(password)) {
    validationErrors.passwordError =
      "Password must contain at least one uppercase, lowercase, number, and special character";
  }

  if (confirmPassword && password !== confirmPassword) {
    validationErrors.passwordError = "Passwords do not match";
  }

  return validationErrors;
};
