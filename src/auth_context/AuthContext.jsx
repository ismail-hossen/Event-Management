import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase_config";
import PropTypes from "prop-types";
import { GoogleAuthProvider } from "firebase/auth";

export const ThemeContext = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google auth provider
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => signInWithPopup(auth, provider);
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  return (
    <ThemeContext.Provider
      value={{
        createUser,
        login,
        logout,
        user,
        loading,
        setLoading,
        signInWithGoogle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default AuthContext;

AuthContext.propTypes = {
  children: PropTypes.node,
};
