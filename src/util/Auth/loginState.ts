import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { userDetails } from "../../types";

export const useLoginState = () => {
  const [loggedInState, setLoggedIn] = useState<{
    isLoggedIn: boolean;
    isLoading: boolean;
    deleteUser: () => Promise<void>;
    userDetails: userDetails | null;
  }>({
    isLoading: true,
    isLoggedIn: false,
    userDetails: null,
    deleteUser: async () => {},
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn({
          isLoading: false,
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
          isLoading: false,
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
