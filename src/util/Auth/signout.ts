import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const signout = async () => {
  try {
    console.log("signout");
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
