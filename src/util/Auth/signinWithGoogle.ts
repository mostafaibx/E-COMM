import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getRedirectResult,
  setPersistence,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../firebase";

export const signinWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    await setPersistence(auth, browserLocalPersistence);
    signInWithRedirect(auth, provider);
    const result = await getRedirectResult(auth);
    let credential;
    let user;
    if (result) {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      credential = GoogleAuthProvider.credentialFromResult(result);
      user = result.user;
    }
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }
};
