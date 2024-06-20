// Handle authentication redirects in a way that complies with the browser's Cross-Origin Redirect Sign-In policies.

import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthRedirectHandler = () => {
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        history.push("/"); // Redirect authenticated users to homepage
      } else {
        history.push("/login"); // Redirect unauthenticated users to login
      }
    });

    return () => unsubscribe();
  }, [history]);

  return null; // Or render a loading indicator while checking authentication state
};

export default AuthRedirectHandler;
