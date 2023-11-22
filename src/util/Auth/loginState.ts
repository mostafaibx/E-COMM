import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { userDetails } from "../../types";

export const useLoginState = () => {
  const [loggedInState, setLoggedIn] = useState<{
    isLoggedIn: boolean;
    deleteUser: () => Promise<void>;
    userDetails: userDetails | null;
  }>({
    isLoggedIn: false,
    userDetails: null,
    deleteUser: async () => {},
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn({
          isLoggedIn: true,
          deleteUser: user.delete,
          userDetails: {
            uid: user.uid,
            email: user.email || "",
            displayName: user.displayName || "",
            photoURL: user.photoURL || "",
            phoneNumber: user.phoneNumber || "",
            emailVerified: user.emailVerified || false,
          },
        });
      } else {
        setLoggedIn({
          isLoggedIn: false,
          deleteUser: async () => {},
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
