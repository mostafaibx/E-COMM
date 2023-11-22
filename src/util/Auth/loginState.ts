import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { userDetails } from "../../types";

export const useLoginState = () => {
  const [loggedInState, setLoggedIn] = useState<{
    isLoggedIn: boolean;
    userDetails: userDetails | null;
  }>({
    isLoggedIn: false,
    userDetails: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn({
          isLoggedIn: true,
          userDetails: {
            uid: user.uid,
            email: user.email || "",
            displayName: user.displayName || "",
            photoURL: user.photoURL || "",
          },
        });
      } else {
        setLoggedIn({
          isLoggedIn: false,
          userDetails: null,
        });
      }
    });
    return () => unsubscribe();
  }, []);
  return {
    loggedInState,
  };
};
